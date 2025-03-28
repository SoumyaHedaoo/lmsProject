import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 md:pt-36 px-7 md:px-0 space-y-7 text-center lex flex-col items-center justify-center w-full pt-20 md:pt-36 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      {/* Heading with Tailwind classes (no custom config) */}
      <h1 className="text-[28px] md:text-[48px] leading-[34px] md:leading-[56px] font-bold text-gray-800 max-w-3xl mx-auto">
        <span className="text-blue-600">Unlock Knowledge, Elevate Your Skills! 🚀</span>
        <br />
        Join a trusted learning platform where education meets excellence.
      </h1>

      {/* Desktop Paragraph */}
      <p className="hidden md:block text-gray-500 max-w-2xl mx-auto">
        Empowering learners and educators with a seamless, modern platform for knowledge sharing. Explore expert-led courses, grow your skills, and stay ahead in your journey of learning.
      </p>

      {/* Mobile Paragraph */}
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        Learn, grow, and excel with expert-led courses—anytime, anywhere!
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;