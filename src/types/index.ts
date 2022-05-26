export type Track = {
  id: string;
  artist: string;
  name: string;
  cover: string;
  duration: number;
  src: string;
  genre: string;
};

export type List = {
  id: number;
  category: string;
  tracks: Track[];
  cover: string;
  description: string;
};
