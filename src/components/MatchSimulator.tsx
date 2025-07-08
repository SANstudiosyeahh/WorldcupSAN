import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { Team } from '../data/teams';
import { MatchEngine, MatchResult } from '../utils/matchEngine';
import { ReportGenerator } from '../utils/reportGenerator';

interface MatchSimulatorProps {
  homeTeam: Team;
  awayTeam: Team;
  onBack: () => void;
}

export const MatchSimulator: React.FC<MatchSimulatorProps> = ({ homeTeam, awayTeam, onBack }) => {
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [report, setReport] = useState<string>('');

  const matchEngine = new MatchEngine();
  const reportGenerator = new ReportGenerator();

  const simulateMatch = () => {
    setIsSimulating(true);
    
    // Simulate delay for excitement
    setTimeout(() => {
      const result = matchEngine.simulateMatch(homeTeam, awayTeam);
      setMatchResult(result);
      setIsSimulating(false);
      
      // Generate report
      const generatedReport = reportGenerator.generateReport(result);
      setReport(generatedReport);
    }, 2000);
  };

  const showFullReport = () => {
    setShowReport(true);
  };

  const resetMatch = () => {
    setMatchResult(null);
    setShowReport(false);
    setReport('');
  };

  if (showReport) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Relatório da Partida</h2>
            <button
              onClick={() => setShowReport(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Voltar
            </button>
          </div>
          
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {report}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Simulador de Partida</h2>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Voltar
          </button>
        </div>

        {/* Match Setup */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-6xl mb-2">{homeTeam.flag}</div>
              <h3 className="text-xl font-bold text-gray-800">{homeTeam.name}</h3>
              <p className="text-gray-600">Rating: {homeTeam.rating}</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600">VS</div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-2">{awayTeam.flag}</div>
              <h3 className="text-xl font-bold text-gray-800">{awayTeam.name}</h3>
              <p className="text-gray-600">Rating: {awayTeam.rating}</p>
            </div>
          </div>
        </div>

        {/* Simulate Button */}
        {!matchResult && (
          <div className="text-center">
            <button
              onClick={simulateMatch}
              disabled={isSimulating}
              className={`
                px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300
                ${isSimulating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 hover:scale-105 transform'
                }
                text-white flex items-center space-x-3 mx-auto
              `}
            >
              <Play size={24} />
              <span>{isSimulating ? 'Simulando...' : 'Simular Partida'}</span>
            </button>
          </div>
        )}

        {/* Loading */}
        {isSimulating && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Processando o jogo...</p>
          </div>
        )}

        {/* Match Result */}
        {matchResult && (
          <div className="space-y-6">
            {/* Score Display */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">RESULTADO FINAL</h3>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">{matchResult.homeTeam.flag}</div>
                  <div className="text-6xl font-bold text-green-600">{matchResult.homeScore}</div>
                </div>
                
                <div className="text-4xl font-bold text-gray-400">-</div>
                
                <div className="text-center">
                  <div className="text-4xl mb-2">{matchResult.awayTeam.flag}</div>
                  <div className="text-6xl font-bold text-green-600">{matchResult.awayScore}</div>
                </div>
              </div>
            </div>

            {/* Match Events */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Eventos da Partida</h4>
              <div className="space-y-3">
                {matchResult.events.map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="text-sm font-medium text-gray-500 w-12">{event.minute}'</div>
                    <div className="flex-1 text-gray-700">{event.description}</div>
                    <div className="text-xl">
                      {event.type === 'goal' && '⚽'}
                      {event.type === 'yellow_card' && '🟨'}
                      {event.type === 'red_card' && '🟥'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 justify-center">
              <button
                onClick={showFullReport}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Ver Relatório Completo
              </button>
              <button
                onClick={resetMatch}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center space-x-2"
              >
                <RotateCcw size={20} />
                <span>Nova Simulação</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};