import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { CommentFormProps } from "../../types/types";
import "./CommentForm.scss";

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddComment({ name, content: newComment });
    setNewComment("");
    setName("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      className="comment-form"
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        onChange={(e) => setNewComment(e.target.value)}
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
          mt: 3,
          mb: 2,
          width: "100%",
        }}
      >
        Post Comment
      </Button>
    </Box>
  );
};

export default CommentForm;
