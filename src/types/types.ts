export type Recipe = {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  content: string;
};

export type Post = {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  author: string;
  date: string;
  featured?: boolean;
  content?: string;
};
export type LeftBarProps = {
  showAuthor?: boolean;
  showFeatured?: boolean;
  showCategories?: boolean;
  showSocialLinks?: boolean;
  showTags?: boolean;
};
export type PageNavigationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
