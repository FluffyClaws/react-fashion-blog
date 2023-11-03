import { Post } from "../types/types";

export const sortPostsByDate = (posts: Post[]): Post[] => {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const insertFeaturedPost = (
  posts: Post[],
  featuredPost: Post | undefined,
  index: number
): Post[] => {
  if (featuredPost) {
    const sortedPosts = sortPostsByDate(posts);
    sortedPosts.splice(index, 0, featuredPost);
    return sortedPosts;
  }
  return sortPostsByDate(posts);
};

export const createFilterCondition = (selectedCategory: string) => {
  return (post: Post) => {
    return (
      selectedCategory === "All" ||
      post.category.toUpperCase() === selectedCategory.toUpperCase()
    );
  };
};

export const handleCategoryChange = (
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  return (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };
};

export const getCategoryCounts = (
  posts: Post[]
): { name: string; count: number }[] => {
  const allCategories = ["All", "Tourism", "Sport", "Clothes", "Fashion"];
  return allCategories.map((category) => {
    return {
      name: category,
      count:
        category === "All"
          ? posts.length
          : posts.filter(
              (post) => post.category.toUpperCase() === category.toUpperCase()
            ).length,
    };
  });
};
