import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`posts/users/dsfdsf`} className="post__author">
      <div className="post__author-image">
        <img src={Image} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: Maxie Andreison</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
