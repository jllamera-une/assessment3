import React, { useState, useEffect } from "react";
import PostItem from "../components/PostItem";

interface Post {
  _id: string;
  title: string;
  content: string;
  user_id: string;
  thumbnail: string;
  created_at: string; // Changed to match the API field name
}

const BlogPost = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Define posts state as an array of Post

  useEffect(() => {
    // Fetch posts data from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/posts");
        const data = await response.json();
        setPosts(data); // Assuming the API returns a list of posts with the correct shape
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="blog-posts">
      {posts.length > 0 ? (
        <div className="container blog-posts__container">
          {posts.map(
            ({ _id, thumbnail, title, content, user_id, created_at }) => (
              <PostItem
                key={_id}
                _id={_id}
                thumbnail={thumbnail}
                title={title}
                content={content}
                user_id={user_id}
                created_at={created_at} // Pass created_at as a prop
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

export default BlogPost;
