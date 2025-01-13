import React from 'react';

interface ScrollButtonProps {
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ onClick }) => {
  return (
    <div className="absolute bottom-2 sm:bottom-4 md:bottom-10 w-full flex justify-center z-30">
      <button onClick={onClick} className="animate-bounce min-h-[30px] md:min-h-[40px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollButton;
