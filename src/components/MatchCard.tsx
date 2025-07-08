import React from 'react';
import { MatchResult } from '../utils/matchEngine';

interface MatchCardProps {
  match: MatchResult;
  onClick: () => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, onClick }) => {
  const getResultColor = () => {
    if (match.homeScore > match.awayScore) return 'border-l-green-500';
    if (match.awayScore > match.homeScore) return 'border-l-red-500';
    return 'border-l-yellow-500';
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer
        border-l-4 ${getResultColor()} p-6
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl">{match.homeTeam.flag}</div>
            <div className="text-sm font-medium text-gray-700">{match.homeTeam.name}</div>
          </div>
          
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-gray-800">
              {match.homeScore} - {match.awayScore}
            </div>
            <div className="text-sm text-gray-500">90'</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl">{match.awayTeam.flag}</div>
            <div className="text-sm font-medium text-gray-700">{match.awayTeam.name}</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-gray-500">
            {match.events.filter(e => e.type === 'goal').length} gols
          </div>
          <div className="text-sm text-gray-500">
            {match.events.filter(e => e.type.includes('card')).length} cartões
          </div>
        </div>
      </div>
    </div>
  );
};