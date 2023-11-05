import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Comment, CommentsSectionProps } from "../../types/types";
import "./CommentsSection.scss";

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [commentList, setCommentList] = useState<Comment[]>(comments);

  const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCommentToAdd: Comment = { name, content: newComment };
    setCommentList([...commentList, newCommentToAdd]);
    setNewComment("");
    setName("");
  };

  return (
    <Box className="comments-container">
      <Typography variant="h6">Comments</Typography>
      {commentList.map((comment, index) => (
        <Box key={index} className="comment-item">
          <Typography variant="subtitle2" className="comment-name">
            {comment.name}
          </Typography>
          <Typography variant="body2" className="comment-content">
            {comment.content}
          </Typography>
        </Box>
      ))}
      <form onSubmit={handleSubmit} className="comment-form">
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
          required
          className="comment-input"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "secondary.main",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "secondary.main",
            },
          }}
        />
        <TextField
          label="Comment"
          value={newComment}
          onChange={handleCommentChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
          className="comment-textarea"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "secondary.main",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "secondary.main",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="comment-submit-button"
          sx={{
            backgroundColor: "secondary.main",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          }}
        >
          Post Comment
        </Button>
      </form>
    </Box>
  );
};

export default CommentsSection;
