export interface Player {
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  rating: number;
  age: number;
}

export interface Team {
  id: string;
  name: string;
  flag: string;
  continent: string;
  rating: number;
  players: Player[];
  colors: {
    primary: string;
    secondary: string;
  };
}

export const teams: Team[] = [
  {
    id: 'bra',
    name: 'Brasil',
    flag: '🇧🇷',
    continent: 'América do Sul',
    rating: 92,
    colors: { primary: '#FFD700', secondary: '#228B22' },
    players: [
      { name: 'Carlos Mendoza', position: 'GK', rating: 85, age: 28 },
      { name: 'Ricardo Silva', position: 'DEF', rating: 88, age: 25 },
      { name: 'Miguel Santos', position: 'DEF', rating: 87, age: 29 },
      { name: 'André Costa', position: 'DEF', rating: 86, age: 27 },
      { name: 'Felipe Rodrigues', position: 'DEF', rating: 84, age: 24 },
      { name: 'João Ferreira', position: 'MID', rating: 90, age: 26 },
      { name: 'Bruno Oliveira', position: 'MID', rating: 89, age: 25 },
      { name: 'Gabriel Lima', position: 'MID', rating: 87, age: 28 },
      { name: 'Leonardo Alves', position: 'FWD', rating: 94, age: 24 },
      { name: 'Matheus Pereira', position: 'FWD', rating: 92, age: 27 },
      { name: 'Diego Barbosa', position: 'FWD', rating: 88, age: 23 }
    ]
  },
  {
    id: 'arg',
    name: 'Argentina',
    flag: '🇦🇷',
    continent: 'América do Sul',
    rating: 91,
    colors: { primary: '#74ACDF', secondary: '#FFFFFF' },
    players: [
      { name: 'Emilio Martinez', position: 'GK', rating: 86, age: 29 },
      { name: 'Sebastian Molina', position: 'DEF', rating: 87, age: 26 },
      { name: 'Cristian Romero', position: 'DEF', rating: 88, age: 25 },
      { name: 'Nicolas Tagliafico', position: 'DEF', rating: 85, age: 30 },
      { name: 'Marcos Acuña', position: 'DEF', rating: 84, age: 31 },
      { name: 'Enzo Fernandez', position: 'MID', rating: 89, age: 23 },
      { name: 'Rodrigo De Paul', position: 'MID', rating: 87, age: 29 },
      { name: 'Alexis Mac Allister', position: 'MID', rating: 86, age: 25 },
      { name: 'Julian Alvarez', position: 'FWD', rating: 93, age: 24 },
      { name: 'Lionel Messi', position: 'FWD', rating: 95, age: 36 },
      { name: 'Paulo Dybala', position: 'FWD', rating: 87, age: 30 }
    ]
  },
  {
    id: 'fra',
    name: 'França',
    flag: '🇫🇷',
    continent: 'Europa',
    rating: 90,
    colors: { primary: '#0055A4', secondary: '#FFFFFF' },
    players: [
      { name: 'Hugo Lloris', position: 'GK', rating: 85, age: 36 },
      { name: 'Raphael Varane', position: 'DEF', rating: 89, age: 30 },
      { name: 'William Saliba', position: 'DEF', rating: 86, age: 23 },
      { name: 'Theo Hernandez', position: 'DEF', rating: 87, age: 26 },
      { name: 'Benjamin Pavard', position: 'DEF', rating: 85, age: 27 },
      { name: 'Aurelien Tchouameni', position: 'MID', rating: 87, age: 24 },
      { name: 'Antoine Griezmann', position: 'MID', rating: 88, age: 33 },
      { name: 'Adrien Rabiot', position: 'MID', rating: 84, age: 29 },
      { name: 'Kylian Mbappe', position: 'FWD', rating: 96, age: 25 },
      { name: 'Olivier Giroud', position: 'FWD', rating: 85, age: 37 },
      { name: 'Marcus Thuram', position: 'FWD', rating: 83, age: 26 }
    ]
  },
  {
    id: 'esp',
    name: 'Espanha',
    flag: '🇪🇸',
    continent: 'Europa',
    rating: 88,
    colors: { primary: '#C60B1E', secondary: '#FFC400' },
    players: [
      { name: 'Unai Simon', position: 'GK', rating: 84, age: 26 },
      { name: 'Pau Torres', position: 'DEF', rating: 86, age: 27 },
      { name: 'Aymeric Laporte', position: 'DEF', rating: 87, age: 29 },
      { name: 'Dani Carvajal', position: 'DEF', rating: 85, age: 32 },
      { name: 'Jordi Alba', position: 'DEF', rating: 84, age: 34 },
      { name: 'Rodri Hernandez', position: 'MID', rating: 90, age: 27 },
      { name: 'Pedri Gonzalez', position: 'MID', rating: 88, age: 21 },
      { name: 'Gavi Lopez', position: 'MID', rating: 85, age: 19 },
      { name: 'Alvaro Morata', position: 'FWD', rating: 84, age: 31 },
      { name: 'Ferran Torres', position: 'FWD', rating: 83, age: 24 },
      { name: 'Mikel Oyarzabal', position: 'FWD', rating: 82, age: 27 }
    ]
  },
  {
    id: 'ger',
    name: 'Alemanha',
    flag: '🇩🇪',
    continent: 'Europa',
    rating: 87,
    colors: { primary: '#000000', secondary: '#FFCC00' },
    players: [
      { name: 'Manuel Neuer', position: 'GK', rating: 86, age: 37 },
      { name: 'Antonio Rudiger', position: 'DEF', rating: 87, age: 30 },
      { name: 'Niklas Sule', position: 'DEF', rating: 85, age: 28 },
      { name: 'David Raum', position: 'DEF', rating: 83, age: 26 },
      { name: 'Joshua Kimmich', position: 'DEF', rating: 89, age: 29 },
      { name: 'Ilkay Gundogan', position: 'MID', rating: 87, age: 33 },
      { name: 'Florian Wirtz', position: 'MID', rating: 86, age: 21 },
      { name: 'Jamal Musiala', position: 'MID', rating: 87, age: 21 },
      { name: 'Kai Havertz', position: 'FWD', rating: 85, age: 24 },
      { name: 'Serge Gnabry', position: 'FWD', rating: 84, age: 29 },
      { name: 'Timo Werner', position: 'FWD', rating: 82, age: 28 }
    ]
  },
  {
    id: 'eng',
    name: 'Inglaterra',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    continent: 'Europa',
    rating: 86,
    colors: { primary: '#FFFFFF', secondary: '#CE1124' },
    players: [
      { name: 'Jordan Pickford', position: 'GK', rating: 83, age: 29 },
      { name: 'Harry Maguire', position: 'DEF', rating: 82, age: 30 },
      { name: 'John Stones', position: 'DEF', rating: 85, age: 29 },
      { name: 'Luke Shaw', position: 'DEF', rating: 84, age: 28 },
      { name: 'Trent Alexander-Arnold', position: 'DEF', rating: 87, age: 25 },
      { name: 'Declan Rice', position: 'MID', rating: 86, age: 25 },
      { name: 'Jude Bellingham', position: 'MID', rating: 88, age: 20 },
      { name: 'Phil Foden', position: 'MID', rating: 87, age: 24 },
      { name: 'Harry Kane', position: 'FWD', rating: 91, age: 30 },
      { name: 'Bukayo Saka', position: 'FWD', rating: 86, age: 22 },
      { name: 'Marcus Rashford', position: 'FWD', rating: 84, age: 27 }
    ]
  },
  {
    id: 'por',
    name: 'Portugal',
    flag: '🇵🇹',
    continent: 'Europa',
    rating: 85,
    colors: { primary: '#FF0000', secondary: '#006600' },
    players: [
      { name: 'Diogo Costa', position: 'GK', rating: 82, age: 24 },
      { name: 'Ruben Dias', position: 'DEF', rating: 88, age: 26 },
      { name: 'Pepe Silva', position: 'DEF', rating: 83, age: 40 },
      { name: 'Nuno Mendes', position: 'DEF', rating: 82, age: 22 },
      { name: 'Joao Cancelo', position: 'DEF', rating: 85, age: 29 },
      { name: 'Bruno Fernandes', position: 'MID', rating: 87, age: 29 },
      { name: 'Bernardo Silva', position: 'MID', rating: 88, age: 29 },
      { name: 'Vitinha Machado', position: 'MID', rating: 83, age: 24 },
      { name: 'Cristiano Ronaldo', position: 'FWD', rating: 89, age: 39 },
      { name: 'Rafael Leao', position: 'FWD', rating: 85, age: 24 },
      { name: 'Goncalo Ramos', position: 'FWD', rating: 82, age: 22 }
    ]
  },
  {
    id: 'ned',
    name: 'Holanda',
    flag: '🇳🇱',
    continent: 'Europa',
    rating: 84,
    colors: { primary: '#FF6600', secondary: '#FFFFFF' },
    players: [
      { name: 'Bart Verbruggen', position: 'GK', rating: 81, age: 21 },
      { name: 'Virgil van Dijk', position: 'DEF', rating: 89, age: 32 },
      { name: 'Nathan Ake', position: 'DEF', rating: 84, age: 29 },
      { name: 'Denzel Dumfries', position: 'DEF', rating: 82, age: 27 },
      { name: 'Daley Blind', position: 'DEF', rating: 83, age: 34 },
      { name: 'Frenkie de Jong', position: 'MID', rating: 87, age: 26 },
      { name: 'Tijjani Reijnders', position: 'MID', rating: 82, age: 25 },
      { name: 'Xavi Simons', position: 'MID', rating: 83, age: 21 },
      { name: 'Memphis Depay', position: 'FWD', rating: 84, age: 30 },
      { name: 'Cody Gakpo', position: 'FWD', rating: 83, age: 25 },
      { name: 'Wout Weghorst', position: 'FWD', rating: 80, age: 31 }
    ]
  }
];

export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

export const getRandomTeams = (count: number): Team[] => {
  const shuffled = [...teams].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};