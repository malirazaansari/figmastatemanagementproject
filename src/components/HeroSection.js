import React from "react";
import backgroundImage from "../assests/image.png";

function HeroSection() {
  return (
    <section
      className="relative h-96 bg-cover bg-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Course Find</h1>
      </div>
    </section>
  );
}

export default HeroSection;
