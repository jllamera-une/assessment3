import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";

interface Post {
  _id: string;
  title: string;
  content: string;
  user_id: string;
  thumbnail: string;
  created_at: string;
}

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/posts/${id}`);
        const data = await response.json();

        console.log("Fetched post data:", data); // Log the fetched data

        if (data) {
          setPost(data); // Assuming the API returns a single post object
        } else {
          console.error("No post found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        {post ? (
          <>
            <h1>{post.title}</h1>
            <PostAuthor user_id={post.user_id} created_at={post.created_at} />
            <img src={post.thumbnail} alt={post.title} />
            <p>{post.content}</p>
          </>
        ) : (
          <h2>Loading post...</h2> // Show a loading message while the post is being fetched
        )}
      </div>
    </section>
  );
};

export default PostDetail;
