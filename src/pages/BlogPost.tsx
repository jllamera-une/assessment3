import React, { useState } from "react";
import PostItem from "../components/PostItem";
import { PLACEHOLDER_POSTS } from "../data";

const BlogPost = () => {
  const [posts, setPosts] = useState(PLACEHOLDER_POSTS);
  return (
    <section className="blog-posts">
      {posts.length > 0 ? (
        <div className="container blog-posts__container">
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

export default BlogPost;
