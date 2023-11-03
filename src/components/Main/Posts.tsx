import React from "react";
import PostList from "../PostList/PostList";
import { PostListProps } from "../../types/types";

const Posts: React.FC<PostListProps> = ({ posts }) => {
  return <PostList posts={posts} />;
};

export default Posts;
