import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import logo from "../data/logo.svg";
import logoName from "../data/logo-name.svg";
import heroImg from "../data/heroImg.jpg"

const Hero = () => {
    const navigate = useNavigate();

    const navigatePanel = () => {
        // 👇️ navigate to panel
        navigate('/ecommerce');

      };


  return (
    <div className="hero">
      <nav className="flex z-2 fixed mt-16 m-24 w-[50%]">
        <img src={logo} alt="logo" />
        <img src={logoName} alt="memelytix" />
        <ul className="flex gap-4">
          <li>Explore</li>
          <li>Stats</li>
          <li>Trending</li>
        </ul>
      </nav>
      <div id="hero" className="flex h-[100%]">
        <div id="hero-left" className="self-center m-24 w-[40%]">
        <h1 className="text-7xl font-display w-[80%] leading-[3.4rem]">Get meme trends live. Powered by AI.</h1>
        <h2 className="text-xl mt-4">Stay up to date with the latest meme trends.</h2>
        <button 
        className="bg-lime-300 p-2 rounded border-2 border-lime-500 text-xl font-bold mt-8"
        onClick={navigatePanel}
        >Get started</button>
        </div>
        <div id="hero-right" className="w-[60%] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${heroImg}")`}}>
        </div>
      </div>
    </div>
  );
};

export default Hero;
