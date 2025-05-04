import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/image/about.jpg";

function Hero() {
  return (
    <section className="h-screen w-full">
      <div className="absolute inset-0">
        <img
          src={Image}
          alt="Silhouette of people on a hilltop"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
      <h1 className="text-4xl flex justify-center md:text-5xl text-white font-bold leading-tight mb-6 p-2 cursor-pointer">
             About us
            </h1>

        <div className="flex flex-row justify-center items-center">
          <Link to="/">
            <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight mb-6 p-2 cursor-pointer">
              Home
            </h1>
          </Link>
          <Link to="/aboutus">
            <h1 className="text-4xl text-white  md:text-5xl font-bold leading-tight mb-6 p-2 cursor-pointer">
              About us
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;