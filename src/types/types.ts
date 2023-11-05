export type CategorizedItem = {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  preview?: string;
  content?: string;
};

export type Recipe = CategorizedItem & {};

export type Post = CategorizedItem & {
  imageUrl: string;
  featured?: boolean;
  banner?: boolean;
};
export type LeftBarProps = {
  showAuthor?: boolean;
  showCategories?: boolean;
  onCategoryChange?: (category: string) => void;
  showSocialLinks?: boolean;
};
export type PageNavigationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export type PostListProps = {
  posts: Post[];
};
