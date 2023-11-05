import { useState, useEffect } from "react";
import { posts as postData } from "../utils/postData";
import { recipes as recipeData } from "../utils/recipeData";
import { commentsData } from "../utils/commentsData";
import { CategorizedItem, Comment } from "../types/types";

export function useContent(type: string, id: string) {
  const [contentItem, setContentItem] = useState<CategorizedItem | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const data = type === "post" ? postData : recipeData;
    const item = data.find((item) => item.id.toString() === id);
    if (item) {
      setContentItem(item);
      setComments(commentsData[`${type}-${item.id}`] || []);
    }
  }, [type, id]);

  return { contentItem, comments };
}
