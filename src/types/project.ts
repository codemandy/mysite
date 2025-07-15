export interface Project {
  id: string;
  name: string;
  price?: number;
  image: string;
  soldOut?: boolean;
  category: string;
  season?: string;
}

export interface Collection {
  id: string;
  name: string;
  path: string;
} 