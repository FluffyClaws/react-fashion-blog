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
};
export type LeftBarProps = {
  showAuthor?: boolean;
  showFeatured?: boolean;
  showCategories?: boolean;
  onCategoryChange?: (category: string) => void;
  showSocialLinks?: boolean;
  showTags?: boolean;
};
export type PageNavigationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export type PostListProps = {
  posts: Post[];
};
