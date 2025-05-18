import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
function SideBar({
  setOnDashBoard,
  setOnMood,
  setDownload,
  setOnExercise,
  setMoodHistory,
}) {
  const [defaultButton, setDefaultButton] = useState(true);
  return (
    <div>
      <div className="sm:w-[45%]">
        <div className="flex flex-row w-[80%] mt-5 mx-auto">
          <img src="" alt="" className="w-25 h-25 rounded-full border mr-5" />
          <div className="mt-5">
            <p>name</p>
            <p>role</p>
          </div>
        </div>
        <div className="w-[80%] mx-auto">
          <p className="shadow-md rounded pl-6 py-5 my-3">my forums</p>

          <p className="shadow-md rounded  pl-6 py-5 my-3">Book appointments</p>

          <p className="shadow-md  rounded pl-6 py-5 my-3">My Wellness tracking</p>
     

        {defaultButton && (
          <div className=" shadow-md  rounded py-5 my-3 relative flex flex-wrap justify-around">
            <div className="w-[70%]">
           
              <button
                onClick={() => {
                  setOnDashBoard(true);
                  setOnMood(false);
                  setDownload(false);
                  setOnExercise(false);
                  setMoodHistory(false);
                }}
                className="shadow-md cursor-pointer  rounded py-5 my-3 px-7"
              >
                Dashboard
              </button>

              <button
                onClick={() => {
                  setOnDashBoard(false);
                  setOnMood(true);
                  setDownload(false);
                  setOnExercise(false);
                  setMoodHistory(false);
                }}
                className="shadow-md cursor-pointer  rounded py-5 my-3 px-7"
              >
                Add Mood
              </button>
            
              <button
                onClick={() => {
                  setOnDashBoard(false);
                  setOnMood(false);
                  setDownload(false);
                  setOnExercise(false);
                  setMoodHistory(true);
                }}
                className="shadow-md cursor-pointer rounded py-5  px-9 my-3"
              >
                Mood <br />
                History
              </button>
              <button
                onClick={() => {
                  setOnDashBoard(false);
                  setOnMood(false);
                  setDownload(false);
                  setOnExercise(true);
                  setMoodHistory(false);
                }}
                className="shadow-md cursor-pointer rounded py-5  px-9 my-3"
              >
                Take <br /> Exercise
              </button>
    
            {defaultButton && (
              <FaAngleRight
                className="absolute right-5 shadow-md mx-auto h-8 w-8 top-1/2 cursor-pointer"
                onClick={() => setDefaultButton(false)}
              />
            )}
            </div>
          </div>
          
        )}

         {!defaultButton && (
          <div className="shadow-md  rounded py-5 my-3 relative flex flex-wrap">
            <div className="w-[70%]  mx-auto flex flex-row">
             
              <button
                onClick={() => {
                  setOnDashBoard(false);
                  setOnMood(false);
                  setDownload(true);
                  setOnExercise(false);
                  setMoodHistory(false);
                }}
                className="shadow-md cursor-pointer rounded py-5 ml-10  px-9 my-3"
              >
                download
              </button>
               {!defaultButton && (
                <FaAngleLeft
                  className="absolute left-0 shadow-md mx-auto h-8 w-8 top-1/2 cursor-pointer"
                  onClick={() => setDefaultButton(true)}
                />
              )}
            </div>
          </div>
        )}
        </div>

       
      </div>
  
    </div>
  );
}

export default SideBar;
