import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Single_post = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog");
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchBlog();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="mt-20 pt-4 px-22 mx-8 flex flex-col items-start">
        <p className="px-3 mb-4 py-2 text-white w-fit bg-blue-500 rounded-md">
          {blog.category || "Technology"}
        </p>
        <div className="text-4xl text-black font-bold">
          {blog.title}
        </div>
        <p className="text-black mt-4 mb-8 font-medium">
          {blog.author?.name || "Unknown Author"}{" "}
          <span className="pl-4 font-thin">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
        <img
          src={blog.photo || "https://picsum.photos/800"}
          alt={blog.title}
          className="blog_image w-full h-100 object-cover rounded-md"
        />
        <div className="content pt-4 leading-relaxed">
          {blog.content}
          {blog.sections?.map((section, index) => (
            <React.Fragment key={index}>
              <br />
              <span className="text-xl font-bold pt-8 block">{section.title}</span>
              <br />
              {section.content}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Single_post;