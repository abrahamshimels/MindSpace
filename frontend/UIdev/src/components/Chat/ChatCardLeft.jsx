import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

function ChatCardLeft() {
  return (
    <div className="sm:m-5 flex justify-end">
      <div className="grid grid-cols-[10fr_1fr] bg-[#FFFF] gap-4 sm:m-5">
        <p className="flex items-center bg-[#E0FFFF] rounded-br-[25%] rounded-tl-[25%] p-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
          blanditiis mollitia ut tenetur omnis, voluptas, tempore at nisi est ex
          libero neque eaque amet totam iusto temporibus! Cupiditate, fuga
          temporibus! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Laboriosam, blanditiis mollitia ut tenetur omnis, voluptas, tempore at
          nisi est ex libero neque eaque amet totam iusto temporibus!
          Cupiditate, fuga temporibus!
        </p>
        <div className="w-6 h-6 sm:w-50 sm:h-50 bg-[#F0FFFF] rounded-full">
          <IconContext.Provider
            value={{
              size: "text-xl sm:text-6xl md:text-8xl",
              color: "#908686",
            }}
          >
            <IoPersonCircleSharp />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default ChatCardLeft;
