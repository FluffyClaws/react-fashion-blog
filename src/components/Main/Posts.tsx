import React from "react";
import { Box, Typography, Link, Paper } from "@mui/material";
import { posts } from "../../utils/postData";
import "./Posts.scss";

interface PostProps {
  imageUrl: string;
  category: string;
  headline: string;
  author: string;
  date: string;
  featured?: boolean;
  content?: string;
}

const FeaturedPost: React.FC<PostProps> = ({
  imageUrl,
  category,
  headline,
  author,
  date,
  content,
}) => (
  <Paper elevation={3} className="shadow feat-post">
    <Box
      className="feat-post-main-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></Box>
    <Box className="feat-post-info">
      <Box className="feat-main-wrapper">
        <Typography className="post-cat">{category}</Typography>

        <Typography className="feat-main-head" component={Link} href="#">
          {headline}
        </Typography>
        <Box className="feat-main-addinfo-wrapper">
          <Typography>{date}</Typography>
          <Typography component={Link} href="#">
            {author}
          </Typography>
          <Typography component={Link} href="#">
            4 comments
          </Typography>
        </Box>
        <Typography className="feat-post-main-cont">{content}</Typography>
      </Box>
    </Box>
  </Paper>
);

const Post: React.FC<PostProps> = ({
  imageUrl,
  category,
  headline,
  author,
  date,
}) => (
  <Paper elevation={3} className="shadow post">
    <Box
      className="post-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></Box>
    <Box className="post-info">
      <Typography className="post-cat">{category}</Typography>
      <Typography className="post-head" component={Link} href="#">
        {headline}
      </Typography>
      <Box className="addinfo-wrapper">
        <Typography component={Link} href="#">
          {author}
        </Typography>
        <Typography>{date}</Typography>
      </Box>
    </Box>
  </Paper>
);

const Posts: React.FC = () => (
  <Box className="posts-wrapper posts">
    {posts.map((post) =>
      post.featured ? (
        <FeaturedPost
          key={post.id}
          imageUrl={post.imageUrl}
          category={post.category}
          headline={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ) : (
        <Post
          key={post.id}
          imageUrl={post.imageUrl}
          category={post.category}
          headline={post.title}
          author={post.author}
          date={post.date}
        />
      )
    )}
  </Box>
);

export default Posts;
