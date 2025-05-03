import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

function Contacts() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    // Add your form submission logic here
  };

  return (
    <div className="my-10 flex flex-col sm:flex-row">
      <div className="bg-white shadow-md sm:w-[50%] rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            className="h-10 w-full border rounded pl-3"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="h-10 w-full border rounded pl-3"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            className="h-10 w-full border rounded pl-3"
            name="subject"
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            className="w-full h-32 border rounded pl-3 pt-2"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            className="w-full h-10 cursor-pointer rounded-full bg-black text-white"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="w-full flex flex-col px-10 sm:w-[50%]  mt-20 mb-10 md:ml-10 sm:mx-10">
        <h1 className="text-[clamp(1rem,5vw,3rem)]">Get In Touch</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="inline-flex items-center space-x-2 my-2">
                <h3 className="text-[clamp(1.3rem,2vw,2rem)]">Lorem Ipsum</h3>
              </span>
              <span className="inline-flex items-center space-x-2 my-2">
                <FaPhoneAlt />
                <p className="m-0">+251 912 34 56 78</p>
              </span>
              <span className="inline-flex items-center space-x-2 my-2">
                <FaEnvelope />
                <p className="m-0">birdsfalkdl@afoid.c0m</p>
              </span>
              <span className="inline-flex items-center space-x-2 my-2">
                <IoLocation />
                <p className="m-0">8465 Beahan Roads,</p>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="inline-flex items-center space-x-2 my-2">
                <h3 className="text-[clamp(1.3rem,2vw,2rem)]">Lorem Ipsum</h3>
              </span>
              <span className="inline-flex items-center space-x-2 my-2">
                <FaPhoneAlt />
                <p className="m-0">+251 912 34 56 78</p>
              </span>
              <span className="inline-flex items-center space-x-2 my-2">
                <FaEnvelope />
                <p className="m-0">birdsfalkdl@afoid.c0m</p>
              </span>
              <span className="inline-flex items-center space-x-2 my-2">
                <IoLocation />
                <p className="m-0">8465 Beahan Roads,</p>
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
