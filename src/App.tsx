import React, { useState } from 'react';
import { Trophy, Zap, Home } from 'lucide-react';
import { TeamSelector } from './components/TeamSelector';
import { MatchSimulator } from './components/MatchSimulator';
import { Tournament } from './components/Tournament';
import { Team } from './data/teams';

type AppMode = 'menu' | 'teamSelector' | 'matchSimulator' | 'tournament';

function App() {
  const [mode, setMode] = useState<AppMode>('menu');
  const [selectedTeams, setSelectedTeams] = useState<{ home: Team; away: Team } | null>(null);

  const handleMatchSelected = (homeTeam: Team, awayTeam: Team) => {
    setSelectedTeams({ home: homeTeam, away: awayTeam });
    setMode('matchSimulator');
  };

  const handleBackToMenu = () => {
    setMode('menu');
    setSelectedTeams(null);
  };

  const handleBackToTeamSelector = () => {
    setMode('teamSelector');
    setSelectedTeams(null);
  };

  if (mode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">⚽</div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Simulador de Futebol Mundial
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Experimente confrontos épicos entre seleções mundiais com relatórios únicos gerados por IA
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Match */}
            <div className="bg-white rounded-xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Confronto Rápido</h3>
                <p className="text-gray-600">
                  Escolha duas seleções e simule uma partida com relatório completo
                </p>
              </div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Escolha entre 8 seleções mundiais</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Simulação realista de jogos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Relatórios únicos por IA</span>
                </li>
              </ul>
              <button
                onClick={() => setMode('teamSelector')}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Iniciar Confronto
              </button>
            </div>

            {/* Tournament */}
            <div className="bg-white rounded-xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Torneio Eliminatório</h3>
                <p className="text-gray-600">
                  Copa do Mundo com 8 seleções em sistema eliminatório
                </p>
              </div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>8 seleções sorteadas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Oitavas, quartas, semi e final</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Campeão mundial definido</span>
                </li>
              </ul>
              <button
                onClick={() => setMode('tournament')}
                className="w-full bg-yellow-600 text-white py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Iniciar Torneio
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-green-100 text-lg">
              Desenvolvido com ❤️ para os amantes do futebol
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'teamSelector') {
    return <TeamSelector onMatchSelected={handleMatchSelected} />;
  }

  if (mode === 'matchSimulator' && selectedTeams) {
    return (
      <MatchSimulator
        homeTeam={selectedTeams.home}
        awayTeam={selectedTeams.away}
        onBack={handleBackToTeamSelector}
      />
    );
  }

  if (mode === 'tournament') {
    return <Tournament onBack={handleBackToMenu} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <Home className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-gray-600">Algo deu errado. Vamos voltar ao início.</p>
        <button
          onClick={handleBackToMenu}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Voltar ao Menu
        </button>
      </div>
    </div>
  );
}

export default App;