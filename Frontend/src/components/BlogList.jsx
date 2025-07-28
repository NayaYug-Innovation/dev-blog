import React, { useState, useEffect } from "react";
import Card from "./Card";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Fetching from:", import.meta.env.VITE_API_URL); // Debug
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
        console.log("Response status:", response.status); // Debug
        if (!response.ok) throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        const data = await response.json();
        console.log("Fetched data:", data); // Debug
        setBlogs(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };
    fetchBlogs();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!blogs.length) return <div>No blogs available</div>;

  return (
    <div className="cards grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 mx-12 px-8">
      {blogs.map((blog) => (
        <Card key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;