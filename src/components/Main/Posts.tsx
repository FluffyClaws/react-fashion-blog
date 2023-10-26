import React from "react";
import "./Posts.scss"; // Assuming you have a corresponding SCSS file for styling
import { posts } from "../../utils/postData";

interface PostProps {
  imageUrl: string;
  category: string;
  headline: string;
  author: string;
  date: string;
}

const Post: React.FC<PostProps> = ({
  imageUrl,
  category,
  headline,
  author,
  date,
}) => (
  <div className="shadow">
    <div className="post">
      <div
        className="post-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="post-info">
        <div className="post-cat">{category}</div>
        <div className="post-head">
          <a href="#">{headline}</a>
        </div>
        <div className="addinfo-wrapper">
          <div className="post-addinfo">
            <a href="#">{author}</a>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Posts: React.FC = () => (
  <div className="posts">
    {posts.map((post) => (
      <Post
        key={post.id}
        imageUrl={post.imageUrl}
        category={post.category}
        headline={post.title}
        author={post.author}
        date={post.date}
      />
    ))}
  </div>
);

export default Posts;
