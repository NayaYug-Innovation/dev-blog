import React from "react";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
      <Link to={`/blog/${blog._id}`}>
        <img
          src={blog.photo || "https://picsum.photos/800"}
          alt={blog.title}
          className="blog_image w-full h-auto object-cover rounded-md"
        />
        <div className="blog_category inline-block mt-4 bg-blue-300 text-white text-sm px-3 py-1 rounded-full">
          {blog.category || "Technology"}
        </div>
        <h2 className="blog_title mt-4 text-lg font-semibold text-gray-800">
          {blog.title}
        </h2>
        <p className="blog_author pl-2 text-gray-600 mt-4 font-medium">
          {blog.author?.name || "Unknown Author"}
          <span className="blog_date pl-8 font-thin">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Card;