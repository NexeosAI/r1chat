export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  categories: string[];
  tags: string[];
  featured: boolean;
}

export interface AdSpace {
  size: string;
  position: 'header' | 'sidebar' | 'content' | 'footer';
}