import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

// Define the interface for post data
interface PostItemProps {
  _id: string;
  title: string;
  content: string;
  user_id: string; // Link to the user who authored the post
  thumbnail: string;
  created_at: string;
}

const PostItem: React.FC<PostItemProps> = ({
  _id,
  title,
  content,
  user_id,
  thumbnail,
  created_at,
}) => {
  const shortDescription =
    content.length > 145 ? content.substr(0, 145) + "..." : content;

  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="post__content">
        <Link to={`/posts/${_id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post__footer">
          {/* Pass user_id and createdAt to PostAuthor */}
          <PostAuthor user_id={user_id} created_at={created_at} />
        </div>
      </div>
    </article>
  );
};

export default PostItem;
