import React from 'react';

const LandingPage = ({user}) => {
  return (
    <div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImage: "url('bg.svg')" }}>
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a className="flex items-center text-blue-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            Welcome {user.username}
          </a>
        </div>
      </div>

      <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="text-6xl animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Explore your Creativity</h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Unleash your potential and join our vibrant community. Experience the best of what we offer and discover a world of possibilities. Don't miss out on exclusive offers and tailored solutions just for you. Start exploring now and be part of the excitement!</p>
        </div>

        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; JW-Tracker 2023</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
