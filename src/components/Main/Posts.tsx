import React from "react";
import PostList from "../PostList/PostList";
import { Post } from "../../types/types";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return <PostList posts={posts} />;
};

export default Posts;
