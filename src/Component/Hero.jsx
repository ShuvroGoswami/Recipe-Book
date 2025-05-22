

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-orange-50 via-white to-yellow-100 min-h-[90vh]">
      
      {/* Left: Image */}
      <Fade direction="left" triggerOnce>
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png"
            alt="Recipe Book"
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </Fade>

      {/* Right: Text & Buttons */}
      <Fade direction="right" triggerOnce>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Share & Discover Recipes With{' '}
            <span className="text-orange-500">
              <Typewriter
                words={['Love', 'Spices', 'Tradition', 'Creativity']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto md:mx-0">
            Browse delicious recipes from around the world or share your own culinary creations. 
            Let’s make cooking joyful and inspiring — one recipe at a time.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md transition">
              Browse Recipes
            </button> */}
            <Link to='/addrecipes'>
            <button className="border border-orange-500 text-orange-600 hover:bg-orange-100 px-6 py-2 rounded-full shadow-md transition">
              Add Your Recipe
            </button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
