export type GameStats = {
  playtime: string;
  difficulty: string;
  updates: string;
};

export type Game = {
  id: number;
  title: string;
  genre: string;
  rating: number;
  players: string;
  year: number;
  tag: string;
  tagColor: string;
  accentColor: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image: string;
  gradient: string;
  stats: GameStats;
  androidBuild: any;
};
