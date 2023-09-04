import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaArrowDown,
} from "react-icons/fa";
import avatar from "../assets/avatar2.png";
export const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitetr.com",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://twitetr.com",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://twitetr.com",
      icon: <FaLinkedinIn />,
    },
  ];

window.addEventListener("scroll" , function(){
  const downArrow = document.querySelector(".down-arrow");
  if(this.scrollY >= 90) downArrow.classList.add("hide-down-arrow")
  else downArrow.classList.remove("hide-down-arrow")
});

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-red-600 uppercase font-bold">HARMAN</h2>
      <h3 className="py-3 text-2xl">MERN stack Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span> adipisicing
        elit. Modi repellat nisi vero excepturi rerum. Voluptatibus beatae
        accusantium.
      </p>

      {/* social icons */}

      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-red-600"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* avatar and resume */}

      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-red-600 rounded-xl pt-5"
        />
        <a
          href="/Resume.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-red-600 to-teal-500 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>
      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce"/>
      </div>
    </section>
  );
};
