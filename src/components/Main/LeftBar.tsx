import React from "react";
import "./LeftBar.scss";

const LeftBar: React.FC = () => {
  return (
    <div className="left-bar">
      <div className="author">
        <div className="left-bar-blocks">About the Author</div>
        <div className="shadow">
          <div className="author-pic"></div>
          <div className="author-info">
            <div className="author-name">Kate Willems</div>
            <div className="author-occup">Food & cooking bloger</div>
            <div className="author-bio">
              Hi, I'm Sonia. Cooking is the way I express my creative side to
              the world. Welcome to my Kitchen Corner on…
            </div>
          </div>
          <div className="more-author">
            <a href="#">CONTINUE READING</a>
          </div>
        </div>
      </div>
      <div className="feat-left">
        <div className="left-bar-blocks">Featured posts</div>
        <div className="shadow">
          <div className="feat-left-post pic1"></div>
          <div className="feat-left-post-info">
            <div className="post-cat">
              <a href="">Clothes</a>
            </div>
            <div className="feat-head">
              <a href="">
                One of Saturn’s largest rings may be newer than anyone
              </a>
            </div>
            <div className="addinfo-wrapper">
              <div className="post-addinfo">
                <a href="">June 6, 2019</a>
                <a href="">
                  <span className="by-post">By </span>Rickie Baroch
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow">
          <div className="feat-left-post pic2"></div>
          <div className="feat-left-post-info">
            <div className="post-cat">
              <a href="">Clothes</a>
            </div>
            <div className="feat-head">
              <a href="">
                One of Saturn’s largest rings may be newer than anyone
              </a>
            </div>
            <div className="addinfo-wrapper">
              <div className="post-addinfo">
                <a href="">June 6, 2019</a>
                <a href="">
                  <span className="by-post">By </span>Rickie Baroch
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow">
          <div className="feat-left-post pic3"></div>
          <div className="feat-left-post-info">
            <div className="post-cat">
              <a href="">Clothes</a>
            </div>
            <div className="feat-head">
              <a href="">
                One of Saturn’s largest rings may be newer than anyone
              </a>
            </div>
            <div className="addinfo-wrapper">
              <div className="post-addinfo">
                <a href="">June 6, 2019</a>
                <a href="">
                  <span className="by-post">By </span>Rickie Baroch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="left-bar-blocks">Categories</div>

        <a href="">
          Fashion <span>(23)</span>
        </a>
        <a href="">
          Style & clothes <span>(7)</span>
        </a>
        <a href="">
          Minimalism <span>(16)</span>
        </a>
        <a href="">
          Black & White <span>5</span>
        </a>
        <a href="">
          Modern clothes <span>(12)</span>
        </a>
      </div>
      <div className="social-links">
        <div className="left-bar-blocks">Social media</div>

        <a href="">
          <div className="social fb">
            <div className="social-info">
              32k<span>likes</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="social pinterest">
            <div className="social-info">
              814<span>followers</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="social vine">
            <div className="social-info">
              165<span>followers</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="social ball">
            <div className="social-info">
              6k<span>followers</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="social twitter">
            <div className="social-info">
              130k<span>followers</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="social be">
            <div className="social-info">
              37k<span>followers</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="social instagram">
            <div className="social-info">
              854k<span>followers</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="social youtube">
            <div className="social-info">
              52k<span>subscribers</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="social gplus">
            <div className="social-info">
              642<span>followers</span>
            </div>
          </div>
        </a>
      </div>{" "}
      <div>
        <div className="left-bar-blocks">Tags</div>
        <div className="tags-wrapper top-tags-wrapper">
          <div className="tags">
            <a href="">Business</a>
          </div>
          <div className="tags">
            <a href="">Freelance</a>
          </div>
          <div className="tags">
            <a href="">Money</a>
          </div>
        </div>
        <div className="tags-wrapper">
          <div className="tags">
            <a href="">Experience</a>
          </div>
          <div className="tags">
            <a href="">Lifestyle</a>
          </div>
          <div className="tags">
            <a href="">SEO</a>
          </div>
        </div>
        <div className="tags-wrapper">
          <div className="tags">
            <a href="">Wordpress</a>
          </div>
          <div className="tags">
            <a href="">Marketing</a>
          </div>
          <div className="tags">
            <a href="">UX</a>
          </div>
        </div>
        <div className="tags-wrapper">
          <div className="tags">
            <a href="">Modern</a>
          </div>
          <div className="tags">
            <a href="">Success</a>
          </div>
          <div className="tags">
            <a href="">Nature</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
