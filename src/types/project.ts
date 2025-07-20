export interface Project {
  id: string;
  name: string;
  price?: number;
  image: string;
  soldOut?: boolean;
  category: string;
  season?: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  description?: string;
  details?: string[];
}

export interface Collection {
  id: string;
  name: string;
  path: string;
} 