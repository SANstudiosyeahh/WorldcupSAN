import { Team } from '../data/teams';

export interface MatchResult {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  events: MatchEvent[];
  duration: number;
}

export interface MatchEvent {
  minute: number;
  type: 'goal' | 'yellow_card' | 'red_card' | 'substitution' | 'penalty' | 'own_goal';
  player: string;
  team: 'home' | 'away';
  description: string;
}

export class MatchEngine {
  private getTeamStrength(team: Team): number {
    return team.rating + Math.random() * 10 - 5; // Add some randomness
  }

  private generateEvents(homeTeam: Team, awayTeam: Team, homeScore: number, awayScore: number): MatchEvent[] {
    const events: MatchEvent[] = [];
    const totalGoals = homeScore + awayScore;
    
    // Generate goal events
    for (let i = 0; i < homeScore; i++) {
      const minute = Math.floor(Math.random() * 90) + 1;
      const player = homeTeam.players.filter(p => p.position === 'FWD' || p.position === 'MID')[Math.floor(Math.random() * 6)];
      events.push({
        minute,
        type: 'goal',
        player: player.name,
        team: 'home',
        description: `${player.name} marca um belo gol para ${homeTeam.name}!`
      });
    }

    for (let i = 0; i < awayScore; i++) {
      const minute = Math.floor(Math.random() * 90) + 1;
      const player = awayTeam.players.filter(p => p.position === 'FWD' || p.position === 'MID')[Math.floor(Math.random() * 6)];
      events.push({
        minute,
        type: 'goal',
        player: player.name,
        team: 'away',
        description: `${player.name} marca um belo gol para ${awayTeam.name}!`
      });
    }

    // Generate other events (cards, substitutions)
    const cardEvents = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < cardEvents; i++) {
      const minute = Math.floor(Math.random() * 90) + 1;
      const isHome = Math.random() > 0.5;
      const team = isHome ? homeTeam : awayTeam;
      const player = team.players[Math.floor(Math.random() * team.players.length)];
      
      events.push({
        minute,
        type: 'yellow_card',
        player: player.name,
        team: isHome ? 'home' : 'away',
        description: `${player.name} recebe cartão amarelo`
      });
    }

    return events.sort((a, b) => a.minute - b.minute);
  }

  public simulateMatch(homeTeam: Team, awayTeam: Team): MatchResult {
    const homeStrength = this.getTeamStrength(homeTeam);
    const awayStrength = this.getTeamStrength(awayTeam);
    
    // Calculate goal probabilities based on team strength
    const homeProbability = homeStrength / (homeStrength + awayStrength);
    const expectedGoals = 2.5; // Average goals per match
    
    // Generate scores using Poisson-like distribution
    const homeScore = this.generateScore(homeProbability * expectedGoals);
    const awayScore = this.generateScore((1 - homeProbability) * expectedGoals);
    
    const events = this.generateEvents(homeTeam, awayTeam, homeScore, awayScore);
    
    return {
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
      events,
      duration: 90
    };
  }

  private generateScore(expected: number): number {
    // Simple Poisson approximation
    let score = 0;
    let probability = Math.exp(-expected);
    let cumulativeProbability = probability;
    const random = Math.random();
    
    while (random > cumulativeProbability && score < 8) {
      score++;
      probability *= expected / score;
      cumulativeProbability += probability;
    }
    
    return score;
  }
}