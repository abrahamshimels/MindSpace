import React from "react";

function MessageForm() {
  return (
    <div className="flex w-[93%] sticky left-10 bottom-0 justify-end">
      <div className="bg-white py-4 w-full ">
        <textarea
          className="border m-4 w-[93%] focus:outline-none h-15 "
          placeholder="Write message...."
          name=""
          id=""
        ></textarea>
      </div>
    </div>
  );
}

export default MessageForm;
