import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({ postID, title, body, authorID, thumbnail }: any) => {
  const shortDescription =
    body.length > 145 ? body.substr(0, 145) + "..." : body;
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="post__content">
        <Link to={`/posts/${postID}`}>
          <h3>{title}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post__footer">
          <PostAuthor />
        </div>
      </div>
    </article>
  );
};

export default PostItem;
