import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Dashboard from "./pages/Dashboard";
import BlogPost from "./pages/BlogPost";
import Logout from "./pages/Logout";
import Authors from "./pages/Authors";
import DeletePost from "./pages/DeletePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePost /> },
      { path: "posts/users/:id", element: <BlogPost /> },
      { path: "myposts", element: <Dashboard /> },
      { path: "posts/:id/delete", element: <DeletePost /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
