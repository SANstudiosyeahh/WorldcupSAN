import React, { useState } from 'react';
import { ArrowRight, Shuffle } from 'lucide-react';
import { teams, Team, getRandomTeams } from '../data/teams';
import { TeamCard } from './TeamCard';

interface TeamSelectorProps {
  onMatchSelected: (homeTeam: Team, awayTeam: Team) => void;
}

export const TeamSelector: React.FC<TeamSelectorProps> = ({ onMatchSelected }) => {
  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const handleTeamClick = (team: Team) => {
    if (selectedTeams.find(t => t.id === team.id)) {
      setSelectedTeams(selectedTeams.filter(t => t.id !== team.id));
    } else if (selectedTeams.length < 2) {
      setSelectedTeams([...selectedTeams, team]);
    }
  };

  const handleRandomMatch = () => {
    const randomTeams = getRandomTeams(2);
    setSelectedTeams(randomTeams);
    onMatchSelected(randomTeams[0], randomTeams[1]);
  };

  const handleStartMatch = () => {
    if (selectedTeams.length === 2) {
      onMatchSelected(selectedTeams[0], selectedTeams[1]);
    }
  };

  const filteredTeams = filter === 'all' 
    ? teams 
    : teams.filter(team => team.continent === filter);

  const continents = ['all', ...new Set(teams.map(team => team.continent))];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          ⚽ Simulador de Futebol Mundial
        </h1>
        <p className="text-gray-600 text-lg">
          Selecione duas seleções para simular um confronto épico
        </p>
      </div>

      {/* Selection Status */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Casa</div>
            {selectedTeams[0] ? (
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{selectedTeams[0].flag}</span>
                <span className="font-semibold">{selectedTeams[0].name}</span>
              </div>
            ) : (
              <div className="text-gray-400">Selecione um time</div>
            )}
          </div>
          
          <div className="text-2xl font-bold text-gray-600">VS</div>
          
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Visitante</div>
            {selectedTeams[1] ? (
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{selectedTeams[1].flag}</span>
                <span className="font-semibold">{selectedTeams[1].name}</span>
              </div>
            ) : (
              <div className="text-gray-400">Selecione um time</div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 justify-center mb-8">
        <button
          onClick={handleRandomMatch}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center space-x-2"
        >
          <Shuffle size={20} />
          <span>Confronto Aleatório</span>
        </button>
        
        <button
          onClick={handleStartMatch}
          disabled={selectedTeams.length !== 2}
          className={`
            px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors
            ${selectedTeams.length === 2
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          <ArrowRight size={20} />
          <span>Iniciar Partida</span>
        </button>
      </div>

      {/* Continent Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {continents.map(continent => (
          <button
            key={continent}
            onClick={() => setFilter(continent)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${filter === continent
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }
            `}
          >
            {continent === 'all' ? 'Todos' : continent}
          </button>
        ))}
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTeams.map(team => (
          <TeamCard
            key={team.id}
            team={team}
            selected={selectedTeams.find(t => t.id === team.id) !== undefined}
            onClick={() => handleTeamClick(team)}
          />
        ))}
      </div>
    </div>
  );
};