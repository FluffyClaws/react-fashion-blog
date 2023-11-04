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
