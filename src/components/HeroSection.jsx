import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    // ** Hero sections
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-3 py-3 text-center text-3xl tracking-wide sm:text-6xl">
        VirtualH build tools for 
        <span className="md:ml-2 ml-3">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              ` coders `,
              2500, // wait 1s before replacing "Mice" with "Hamsters"
              "engineers",
              2500,
              "innovators",
              2500,
              "creators",
              2500,
            ]}
            wrapper="span"
            speed={20}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            className="inline-block bg-gradient-to-r from-orange-500 via-purple-500 to-red-800 bg-clip-text font-medium text-transparent"
            repeat={Infinity}
          />
        </span>
        <span className=""> </span>
      </h1>
      <p className="my-8 max-w-4xl text-center text-lg text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="mb-5 flex flex-col space-y-6 space-x-0 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-8">
        <a
          href="#"
          className="rounded-md bg-gradient-to-r  from-orange-500 via-pink-700 to-orange-800 px-4 py-3"
        >
          Start for free
        </a>
        <a href="#" className="rounded-md border border-white px-4 py-3">
          Documentation
        </a>
      </div>
      {/* //* Videos */}
      <div className="my-6 flex flex-col items-center justify-center space-y-5.5 space-x-0 md:flex-row md:space-y-0 md:space-x-10">
        <video
          muted
          autoPlay
          loop
          className="rounded-md border border-orange-500 shadow-xs shadow-orange-500 md:w-1/2"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          muted
          autoPlay
          loop
          className="rounded-md border border-orange-500 shadow-xs shadow-orange-500 md:w-1/2"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
