import React from "react";
import { Link } from "react-router-dom";
const RecommendedPosts = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    <section className="bg-white ml-10">
      <Link to={``} onClick={scrollToTop} className="flex justify-center">
        <div className="my-3 cursor-pointer rounded-md shadow-sm transition duration-300 transform hover:scale-105">
          <div className="bg-[#E0FFFF] p-4">
            <h1 className="text-lg font-semibold text-gray-800 mb-1">
              Discussion about Anxiety
            </h1>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              iste numquam amet praesentium quibusdam
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default RecommendedPosts;
