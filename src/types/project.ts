export interface Project {
  id: string;
  name: string;
  image: string;
  images?: string[];
  imageTitles?: string[];
  category: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  description?: string;
  details?: string[];
} 