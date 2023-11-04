export type CategorizedItem = {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
};

export type Recipe = CategorizedItem & {
  content: string;
};

export type Post = CategorizedItem & {
  imageUrl: string;
  featured?: boolean;
  content?: string;
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
