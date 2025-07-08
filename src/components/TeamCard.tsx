import React from 'react';
import { Team } from '../data/teams';

interface TeamCardProps {
  team: Team;
  selected?: boolean;
  onClick: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ team, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer rounded-xl p-6 transition-all duration-300 hover:scale-105
        ${selected 
          ? 'ring-4 ring-green-500 bg-gradient-to-br from-green-50 to-green-100 shadow-2xl' 
          : 'bg-white hover:shadow-xl shadow-lg'
        }
      `}
    >
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{team.flag}</div>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-gray-800">{team.name}</h3>
          <p className="text-gray-600 text-sm">{team.continent}</p>
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold text-gray-700">{team.rating}</span>
            </div>
            <div className="flex space-x-1">
              <div 
                className="w-4 h-4 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: team.colors.primary }}
              />
              <div 
                className="w-4 h-4 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: team.colors.secondary }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {selected && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
          ✓
        </div>
      )}
    </div>
  );
};