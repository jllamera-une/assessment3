import React, { useState, useEffect } from "react";
import { PLACEHOLDER_POSTS } from "../data";
import image from "../images/blog96.jpg";
import { Link } from "react-router-dom";

interface Posts {
  _id: string;
  title: string;
  content: string;
}

const Dashboard = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        // Set the posts from the "data" property in the API response
        if (data && Array.isArray(data.data)) {
          setPosts(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="dashboard">
      {posts && posts.length > 0 ? (
        <div className="container dashboard__container">
          {posts.map((post: Posts) => {
            return (
              <article key={post._id} className="dashboard__post">
                <div className="dashboard__post-info">
                  {/* <div className="dashboard__post-thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div> */}
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${post._id}`} className="btn sm">
                    View
                  </Link>
                  <Link
                    to={`/posts/${post._id}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/posts/${post._id}/delete`}
                    className="btn sm danger"
                  >
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You have no post yet.</h2>
      )}
    </section>
  );
};

export default Dashboard;
