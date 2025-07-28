import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BlogList from "./BlogList.jsx";

const Homepage = () => {
  const [featuredBlog, setFeaturedBlog] = useState(null);

  useEffect(() => {
    const fetchFeaturedBlog = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
        if (!response.ok) throw new Error("Failed to fetch featured blog");
        const data = await response.json();
        setFeaturedBlog(data[0]);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchFeaturedBlog();
  }, []);

  return (
    <>
      <Header />
      <div className="content hidden lg:flex mt-20 flex-col items-center justify-between pt-4 mx-8">
        <div>
          <h1 className="font-bold text-2xl">Page Title</h1>
          <p className="mt-2">Home | Link one</p>
        </div>
        <div className="home_image w-full flex items-center relative">
          <img
            src={featuredBlog?.photo || "src/assets/Image.png"}
            alt={featuredBlog?.title || "post_card"}
            className="mt-4 w-full h-98 rounded-lg object-cover px-4"
          />
          <div className="absolute left-6 bottom-2 w-1/2">
            <p className="ml-6 px-3 mb-4 py-2 text-white w-fit bg-blue-500 rounded-md">
              {featuredBlog?.category || "Technology"}
            </p>
            <p className="pl-6 text-4xl text-white font-bold">
              {featuredBlog?.title || "The Impact of Technology on the Workplace"}
            </p>
            <p className="pl-6 text-white mt-4 mb-8 font-medium">
              {featuredBlog?.author?.name || "Tracey Wilson"}{" "}
              <span className="pl-8 font-thin">
                {featuredBlog
                  ? new Date(featuredBlog.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "August 20, 2025"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <BlogList />
      <div className="loadmore_div flex items-center justify-center">
        <button className="border-2 border-gray-200 rounded-md mt-8 px-4 p-2 text-gray-500">
          Load More
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;