import React from 'react';

import { useNavigate } from 'react-router-dom';

import logo from '../data/logo.svg';
import logoName from '../data/logo-name.svg';
import heroImg from '../data/heroImg.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const navigatePanel = () => {
    // 👇️ navigate to panel
    navigate('/overview');
  };

  return (
    <div className="hero">
      <nav className="flex flex-col lg:flex-row z-2 gap-2 fixed mt-4 pl-4 sm:pl-6 md:pl-14 lg:pl-20">
        <img className="lg:w-24 xl:w-32" src={logo} alt="logo" />
        <img className="md:text-sm" src={logoName} alt="memelytix" />
        {/* <ul className="flex gap-4">
          <li>Explore</li>
          <li>Stats</li>
          <li>Trending</li>
        </ul> */}
      </nav>
      <div className="flex h-[100%] bg-[#ebebf6]">
        <div
          id="hero-left"
          className="self-center w-[100%] lg:w-[50%] xl:w-[35%] px-4 xl:py-[20vh] sm:px-6 md:px-14 lg:px-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-6xl leading-[2rem] lg:leading-[3.4rem]">
            Get meme trends live. Powered by AI.
          </h1>
          <h2 className="text-lg md:text-2xl mt-4">
            Stay up to date with the latest meme trends.
          </h2>
          <button
            className="bg-lime-300 px-8 py-2 rounded-md border-2 border-lime-500 text-sm md:text-xl font-bold mt-8"
            onClick={navigatePanel}
            type="button"
          >
            Get started
          </button>
        </div>
        <div
          id="hero-right"
          className="w-[100%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${heroImg}")` }}
        />
      </div>
    </div>
  );
};

export default Hero;
