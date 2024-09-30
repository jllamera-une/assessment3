import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../images/avatar1.jpg";

// Define the props interface for PostAuthor
interface PostAuthorProps {
  user_id: string;
  created_at: string;
}

const PostAuthor: React.FC<PostAuthorProps> = ({ user_id, created_at }) => {
  const [authorName, setAuthorName] = useState<string>("");

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/users/${user_id}`
        );
        const data = await response.json();
        setAuthorName(data.name);
      } catch (error) {
        console.error("Error fetching author data:", error);
      }
    };

    if (user_id) {
      fetchAuthor();
    }
  }, [user_id]);

  return (
    <Link to={`posts/users/${user_id}`} className="post__author">
      <div className="post__author-image">
        <img src={Image} alt="Author" />
      </div>
      <div className="post__author-details">
        <h5>By: {authorName || "Loading..."}</h5>
        <small>{created_at}</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
