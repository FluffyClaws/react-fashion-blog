import React from "react";
import "./Posts.scss";
import { posts } from "../../utils/postData";

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
  <div className="shadow">
    <div
      className="feat-post-main-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="feat-post-info">
      <div className="feat-main-wrapper">
        <div className="post-cat">
          <a href="#">{category}</a>
        </div>
        <div className="feat-main-head">
          <a href="#">{headline}</a>
        </div>
        <div className="feat-main-addinfo-wrapper">
          <div className="post-addinfo">
            <a href="#">{date}</a>
            <a href="#">
              <span className="by-post">By </span>
              {author}
            </a>
            <a href="#" className="">
              4 comments
            </a>
          </div>
        </div>
        <div className="feat-post-main-cont">{content}</div>
      </div>
    </div>
  </div>
);

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
  </div>
);

export default Posts;
