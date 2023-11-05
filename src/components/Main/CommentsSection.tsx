import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CommentForm from "./CommentForm";
import { Comment, CommentsSectionProps } from "../../types/types";
import "./CommentsSection.scss";

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  const [commentList, setCommentList] = useState<Comment[]>([]);

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  const addComment = (newComment: Comment) => {
    setCommentList((prevComments) => [...prevComments, newComment]);
  };

  return (
    <Box className="comments-container">
      <Typography variant="h6" gutterBottom>
        <span>Comments</span>
      </Typography>
      {commentList.map((comment, index) => (
        <Box key={index} className="comment-item">
          <Typography variant="subtitle1" className="comment-name">
            {comment.name}
          </Typography>
          <Typography variant="body2" className="comment-content">
            {comment.content}
          </Typography>
        </Box>
      ))}
      <CommentForm onAddComment={addComment} />
    </Box>
  );
};

export default CommentsSection;
