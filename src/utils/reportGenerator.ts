import { MatchResult, MatchEvent } from './matchEngine';

export class ReportGenerator {
  private narrativeTemplates = {
    matchStart: [
      'O apito inicial soa e a bola está rolando',
      'Começa mais uma batalha épica no gramado',
      'A tensão está no ar neste confronto emocionante',
      'Os jogadores entram em campo com sede de vitória'
    ],
    
    goal: [
      'GOOOOOOL! Que momento mágico!',
      'A bola balança as redes! Pura emoção!',
      'Espetacular! O estádio explode em festa!',
      'Que finalização primorosa! Sem chances para o goleiro!'
    ],
    
    halfTime: [
      'O árbitro apita o fim do primeiro tempo',
      'Intervalo! Tempo para as equipes se reorganizarem',
      'Primeira etapa encerrada, muita emoção ainda por vir',
      'Pausa estratégica no confronto'
    ],
    
    finalWhistle: [
      'Fim de jogo! Que espetáculo presenciamos!',
      'O árbitro encerra este duelo memorável',
      'Termina aqui mais um capítulo da história do futebol',
      'Apito final! Emoção do primeiro ao último minuto'
    ],
    
    domination: [
      'está dominando completamente o jogo',
      'controla o ritmo da partida',
      'impõe seu estilo de jogo',
      'dita o andamento do confronto'
    ],
    
    pressure: [
      'pressiona em busca do gol',
      'vai com tudo para o ataque',
      'aumenta a intensidade',
      'parte para cima do adversário'
    ]
  };

  private tacticalComments = [
    'A formação tática está funcionando perfeitamente',
    'Mudança de estratégia no meio do campo',
    'Os jogadores se movimentam com inteligência',
    'Bela jogada ensaiada nos treinos',
    'A marcação está bem postada',
    'Contra-ataque fulminante',
    'Posse de bola bem trabalhada',
    'Pressão alta está surtindo efeito'
  ];

  private emotionalComments = [
    'A torcida está em êxtase!',
    'Momento de pura emoção no estádio',
    'Os fãs vibram nas arquibancadas',
    'Atmosfera mágica toma conta do jogo',
    'Arrepio garantido para quem assiste',
    'Pura paixão pelo futebol',
    'O coração dos torcedores acelera',
    'Espetáculo de tirar o fôlego'
  ];

  public generateReport(result: MatchResult): string {
    const report: string[] = [];
    
    // Match intro
    report.push(`🏆 **RELATÓRIO DA PARTIDA** 🏆`);
    report.push(`\n**${result.homeTeam.name} ${result.homeTeam.flag} ${result.homeScore} x ${result.awayScore} ${result.awayTeam.flag} ${result.awayTeam.name}**\n`);
    
    // Match start
    report.push(this.getRandomTemplate('matchStart'));
    report.push(this.getRandomComment('tactical'));
    
    // First half narrative
    const firstHalfEvents = result.events.filter(e => e.minute <= 45);
    const secondHalfEvents = result.events.filter(e => e.minute > 45);
    
    if (firstHalfEvents.length > 0) {
      report.push('\n**PRIMEIRO TEMPO**');
      firstHalfEvents.forEach(event => {
        report.push(`\n⏱️ ${event.minute}' - ${event.description}`);
        if (event.type === 'goal') {
          report.push(this.getRandomTemplate('goal'));
          report.push(this.getRandomComment('emotional'));
        }
      });
    }
    
    // Half time
    report.push(`\n${this.getRandomTemplate('halfTime')}`);
    report.push(this.generateHalfTimeAnalysis(result));
    
    // Second half
    if (secondHalfEvents.length > 0) {
      report.push('\n**SEGUNDO TEMPO**');
      secondHalfEvents.forEach(event => {
        report.push(`\n⏱️ ${event.minute}' - ${event.description}`);
        if (event.type === 'goal') {
          report.push(this.getRandomTemplate('goal'));
          report.push(this.getRandomComment('emotional'));
        }
      });
    }
    
    // Final whistle and analysis
    report.push(`\n${this.getRandomTemplate('finalWhistle')}`);
    report.push(this.generateFinalAnalysis(result));
    
    return report.join('\n');
  }

  private generateHalfTimeAnalysis(result: MatchResult): string {
    const analysis: string[] = [];
    
    if (result.homeScore > result.awayScore) {
      analysis.push(`${result.homeTeam.name} ${this.getRandomTemplate('domination')} neste primeiro tempo.`);
    } else if (result.awayScore > result.homeScore) {
      analysis.push(`${result.awayTeam.name} ${this.getRandomTemplate('domination')} neste primeiro tempo.`);
    } else {
      analysis.push('Primeiro tempo equilibrado, com chances para ambos os lados.');
    }
    
    analysis.push(this.getRandomComment('tactical'));
    
    return analysis.join(' ');
  }

  private generateFinalAnalysis(result: MatchResult): string {
    const analysis: string[] = [];
    
    if (result.homeScore > result.awayScore) {
      analysis.push(`🎉 **${result.homeTeam.name} conquista uma vitória merecida!**`);
      analysis.push(`Exibição sólida da equipe comandada com maestria.`);
    } else if (result.awayScore > result.homeScore) {
      analysis.push(`🎉 **${result.awayTeam.name} triunfa em grande estilo!**`);
      analysis.push(`Atuação brilhante longe de casa.`);
    } else {
      analysis.push('⚖️ **Empate justo entre duas grandes equipes!**');
      analysis.push('Duelo equilibrado do início ao fim.');
    }
    
    // Match statistics
    analysis.push(`\n**ESTATÍSTICAS DA PARTIDA:**`);
    analysis.push(`• Total de gols: ${result.homeScore + result.awayScore}`);
    analysis.push(`• Cartões mostrados: ${result.events.filter(e => e.type.includes('card')).length}`);
    analysis.push(`• Tempo de jogo: ${result.duration} minutos`);
    
    analysis.push(`\n${this.getRandomComment('emotional')}`);
    
    return analysis.join('\n');
  }

  private getRandomTemplate(category: keyof typeof this.narrativeTemplates): string {
    const templates = this.narrativeTemplates[category];
    return templates[Math.floor(Math.random() * templates.length)];
  }

  private getRandomComment(type: 'tactical' | 'emotional'): string {
    const comments = type === 'tactical' ? this.tacticalComments : this.emotionalComments;
    return comments[Math.floor(Math.random() * comments.length)];
  }
}