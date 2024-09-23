// Setup API integration

import React, { useState } from "react";

import Thumbnail1 from "../images/blog1.jpg";
import Thumbnail2 from "../images/blog2.jpg";
import Thumbnail3 from "../images/blog3.jpg";
import Thumbnail4 from "../images/blog4.jpg";
import PostItem from "./PostItem";
import { title } from "process";
import { PLACEHOLDER_POSTS } from "../data";

const Posts = () => {
  const [posts, setPosts] = useState(PLACEHOLDER_POSTS);
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(({ id, thumbnail, title, body, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              title={title}
              body={body}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts found</h2>
      )}
    </section>
  );
};

export default Posts;
