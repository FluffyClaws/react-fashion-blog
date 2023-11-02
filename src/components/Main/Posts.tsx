import React from "react";
import { Box, Typography, Link, Paper } from "@mui/material";
import { Post as PostType } from "../../types/postTypes";
import { posts } from "../../utils/postData";
import "./Posts.scss";

const FeaturedPost: React.FC<PostType> = ({
  imageUrl,
  category,
  title,
  author,
  date,
  content,
  featured,
}) => (
  <Paper elevation={3} className={`shadow ${featured ? "feat-post" : ""}`}>
    <Box
      className="feat-post-main-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></Box>
    <Box className="feat-post-info">
      <Box className="feat-main-wrapper">
        <Typography className="post-cat">{category}</Typography>
        <Typography className="feat-main-head" component={Link} href="#">
          {title}
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
        {content && (
          <Typography className="feat-post-main-cont">{content}</Typography>
        )}
      </Box>
    </Box>
  </Paper>
);

const Post: React.FC<PostType> = ({
  imageUrl,
  category,
  title,
  author,
  date,
  featured,
}) => (
  <Paper elevation={3} className={`shadow ${featured ? "feat-post" : "post"}`}>
    <Box
      className="post-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></Box>
    <Box className="post-info">
      <Typography className="post-cat">{category}</Typography>
      <Typography className="post-head" component={Link} href="#">
        {title}
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
    {posts.map((post: PostType) => {
      const { id, imageUrl, category, title, author, date, content, featured } =
        post;
      return featured ? (
        <FeaturedPost
          key={id}
          id={id}
          imageUrl={imageUrl}
          category={category}
          title={title}
          author={author}
          date={date}
          content={content}
          featured={featured}
        />
      ) : (
        <Post
          key={id}
          id={id}
          imageUrl={imageUrl}
          category={category}
          title={title}
          author={author}
          date={date}
          featured={featured}
        />
      );
    })}
  </Box>
);

export default Posts;
