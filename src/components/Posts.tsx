import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import { PLACEHOLDER_POSTS } from "../data";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts data from an API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(
            ({ _id, thumbnail, title, content, user_id, created_at }) => (
              <PostItem
                key={_id}
                _id={_id}
                thumbnail={thumbnail}
                title={title}
                content={content}
                user_id={user_id}
                created_at={created_at}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No posts found</h2>
      )}
    </section>
  );
};

export default Posts;
