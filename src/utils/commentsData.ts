import { Comment } from "../types/types";

export const commentsData: { [key: string]: Comment[] } = {
  // Comments for posts
  "post-1": [
    { name: "Alice", content: "Loved this article!" },
    { name: "Charlie", content: "Very informative, thanks!" },
  ],
  "post-2": [{ name: "Eve", content: "This was an interesting read!" }],
  "post-3": [
    { name: "Frank", content: "Helpful post, well done!" },
    { name: "Grace", content: "Thanks for the tips!" },
  ],

  "post-26": [{ name: "Zed", content: "Fascinating insights!" }],

  // Comments for recipes
  "recipe-1": [{ name: "Judy", content: "Delicious and easy to make!" }],
  "recipe-2": [
    { name: "Sam", content: "Tasty and healthy, perfect combo!" },
    { name: "Oliver", content: "My kids loved it, thank you!" },
  ],
  "recipe-25": [
    { name: "Bob", content: "This recipe is great!" },
    { name: "Laura", content: "Will be making this again soon!" },
    { name: "Mallory", content: "Can I use brown sugar instead of white?" },
    { name: "Neil", content: "The cake turned out perfect, thanks!" },
    {
      name: "Olivia",
      content: "I added some nuts and it was a great addition!",
    },
  ],
};

// Fill in the remaining posts
for (let i = 4; i <= 26; i++) {
  commentsData[`post-${i}`] = [];
  for (let j = 1; j <= Math.floor(Math.random() * 5) + 1; j++) {
    commentsData[`post-${i}`].push({
      name: `User${i}${j}`,
      content: `Really great post! This is comment number ${j}.`,
    });
  }
}

// Fill in the remaining recipes
for (let i = 3; i < 25; i++) {
  commentsData[`recipe-${i}`] = [];
  for (let j = 1; j <= Math.floor(Math.random() * 5) + 1; j++) {
    commentsData[`recipe-${i}`].push({
      name: `Chef${i}${j}`,
      content: `This recipe is a keeper! Comment ${j} here.`,
    });
  }
}
