import { useState } from 'react';

const ForumCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-cyan-50 rounded-tr-[100px] rounded-bl-[100px] p-8 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-8">{description}</p>

      <div className="flex justify-center md:justify-end">
        <button
          className={`
            bg-black text-white font-semibold py-3 px-6 rounded-full 
            transform transition-all duration-300
            ${isHovered ? 'scale-105' : ''}
          `}
        >
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default ForumCard;
