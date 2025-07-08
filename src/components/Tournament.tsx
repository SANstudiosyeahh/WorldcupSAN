import React, { useState } from 'react';
import { Trophy, Play, RotateCcw } from 'lucide-react';
import { Team, getRandomTeams } from '../data/teams';
import { MatchEngine, MatchResult } from '../utils/matchEngine';
import { MatchCard } from './MatchCard';

interface TournamentProps {
  onBack: () => void;
}

export const Tournament: React.FC<TournamentProps> = ({ onBack }) => {
  const [tournament, setTournament] = useState<Team[]>([]);
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [currentRound, setCurrentRound] = useState<string>('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [winner, setWinner] = useState<Team | null>(null);

  const matchEngine = new MatchEngine();

  const startTournament = () => {
    const tournamentTeams = getRandomTeams(8);
    setTournament(tournamentTeams);
    setMatches([]);
    setCurrentRound('Oitavas de Final');
    setWinner(null);
  };

  const simulateRound = (teams: Team[], roundName: string) => {
    setIsSimulating(true);
    setCurrentRound(roundName);
    
    setTimeout(() => {
      const roundMatches: MatchResult[] = [];
      const winners: Team[] = [];
      
      for (let i = 0; i < teams.length; i += 2) {
        const match = matchEngine.simulateMatch(teams[i], teams[i + 1]);
        roundMatches.push(match);
        
        // Determine winner
        if (match.homeScore > match.awayScore) {
          winners.push(match.homeTeam);
        } else if (match.awayScore > match.homeScore) {
          winners.push(match.awayTeam);
        } else {
          // In case of tie, random winner (penalty shootout)
          winners.push(Math.random() > 0.5 ? match.homeTeam : match.awayTeam);
        }
      }
      
      setMatches(prev => [...prev, ...roundMatches]);
      setIsSimulating(false);
      
      // Check if tournament is over
      if (winners.length === 1) {
        setWinner(winners[0]);
      } else {
        // Continue to next round
        const nextRound = getNextRoundName(roundName);
        if (nextRound) {
          setTimeout(() => simulateRound(winners, nextRound), 1000);
        }
      }
    }, 2000);
  };

  const getNextRoundName = (currentRound: string): string | null => {
    switch (currentRound) {
      case 'Oitavas de Final':
        return 'Quartas de Final';
      case 'Quartas de Final':
        return 'Semifinais';
      case 'Semifinais':
        return 'Final';
      default:
        return null;
    }
  };

  const resetTournament = () => {
    setTournament([]);
    setMatches([]);
    setCurrentRound('');
    setWinner(null);
  };

  const getRoundMatches = (round: string) => {
    const roundIndex = ['Oitavas de Final', 'Quartas de Final', 'Semifinais', 'Final'].indexOf(round);
    const startIndex = [0, 4, 6, 7][roundIndex];
    const endIndex = [4, 6, 7, 8][roundIndex];
    return matches.slice(startIndex, endIndex);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Trophy className="text-yellow-500" size={32} />
            <h2 className="text-2xl font-bold text-gray-800">Copa do Mundo Simulada</h2>
          </div>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Voltar
          </button>
        </div>

        {/* Tournament Setup */}
        {tournament.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Pronto para uma Copa do Mundo emocionante?
            </h3>
            <p className="text-gray-600 mb-8">
              8 seleções serão sorteadas para disputar o torneio eliminatório
            </p>
            <button
              onClick={startTournament}
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center space-x-3 mx-auto"
            >
              <Play size={24} />
              <span>Iniciar Torneio</span>
            </button>
          </div>
        )}

        {/* Tournament Bracket */}
        {tournament.length > 0 && (
          <div className="space-y-8">
            {/* Current Round Status */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {currentRound}
              </h3>
              {isSimulating && (
                <div className="flex items-center justify-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-600"></div>
                  <span className="text-gray-600">Simulando jogos...</span>
                </div>
              )}
            </div>

            {/* Tournament Participants */}
            {matches.length === 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Participantes</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {tournament.map(team => (
                    <div key={team.id} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">{team.flag}</div>
                      <div className="font-medium text-gray-800">{team.name}</div>
                      <div className="text-sm text-gray-600">Rating: {team.rating}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <button
                    onClick={() => simulateRound(tournament, 'Oitavas de Final')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Simular Oitavas de Final
                  </button>
                </div>
              </div>
            )}

            {/* Match Results by Round */}
            {['Oitavas de Final', 'Quartas de Final', 'Semifinais', 'Final'].map(round => {
              const roundMatches = getRoundMatches(round);
              if (roundMatches.length === 0) return null;

              return (
                <div key={round}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{round}</h4>
                  <div className="space-y-4">
                    {roundMatches.map((match, index) => (
                      <MatchCard
                        key={index}
                        match={match}
                        onClick={() => {}}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Winner */}
            {winner && (
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  CAMPEÃO DO MUNDO!
                </h3>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="text-5xl">{winner.flag}</div>
                  <div className="text-3xl font-bold text-gray-800">{winner.name}</div>
                </div>
                <p className="text-gray-600 mb-6">
                  Uma campanha histórica que ficará marcada para sempre!
                </p>
                <button
                  onClick={resetTournament}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center space-x-2 mx-auto"
                >
                  <RotateCcw size={20} />
                  <span>Novo Torneio</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};