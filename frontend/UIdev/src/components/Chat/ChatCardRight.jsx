import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

function ChatCardRight() {
  return (
    <div className="m-5 ">
      <div className="grid grid-cols-[1fr_10fr] bg-[#FFFF] gap-4 m-5">
        <div className="w-6 h-6 sm:w-50 sm:h-50 bg-[#F0FFFF] rounded-full">
        <IconContext.Provider
        value={{
          size: 'text-xl sm:text-6xl md:text-8xl', // Adjust these sizes as needed
          color: '#908686',
        }}
      >
        <IoPersonCircleSharp />
      </IconContext.Provider>
        </div>
        <p className="flex items-center bg-[#E0FFFF] rounded-bl-[25%] rounded-tr-[25%] p-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
          blanditiis mollitia ut tenetur omnis, voluptas, tempore at nisi est ex
          libero neque eaque amet totam iusto temporibus! Cupiditate, fuga
          temporibus! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Laboriosam, blanditiis mollitia ut tenetur omnis, voluptas, tempore at
          nisi est ex libero neque eaque amet totam iusto temporibus!
          Cupiditate, fuga temporibus!
        </p>
      </div>
    </div>
  );
}

export default ChatCardRight;
