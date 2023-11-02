import React from "react";
import { Box } from "@mui/material";
import PostItem from "../PostItem/PostItem";
import "./PostList.scss";
import { Post } from "../../types/types";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <Box className="posts-wrapper">
    {posts.map((post) => (
      <PostItem key={post.id} {...post} isFeatured={post.featured || false} />
    ))}
  </Box>
);

export default PostList;
