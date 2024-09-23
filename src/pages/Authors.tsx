import React, { useState } from "react";
import { Link } from "react-router-dom";

import DisplayImg2 from "../images/avatar2.jpg";
import DisplayImg3 from "../images/avatar3.jpg";
import DisplayImg4 from "../images/avatar4.jpg";
import DisplayImg5 from "../images/avatar5.jpg";

const authorData = [
  {
    id: 1,
    image: DisplayImg2,
    name: "Maxie Andreison",
    posts: 5,
  },
  {
    id: 2,
    image: DisplayImg3,
    name: "Khianna",
    posts: 4,
  },
  {
    id: 3,
    image: DisplayImg4,
    name: "Tita Baby",
    posts: 6,
  },
  {
    id: 4,
    image: DisplayImg5,
    name: "Angel",
    posts: 2,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, image, name, posts }) => {
            return (
              <Link key={id} to={`posts/users/${id}`} className="author">
                <div className="author__image">
                  <img src={image} alt={`Image of ${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No authors found</h2>
      )}
    </section>
  );
};

export default Authors;
