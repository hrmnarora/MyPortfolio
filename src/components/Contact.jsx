import React from "react";
import { Section } from "./common/Section";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import contact from "../assets/mobile.png";

export const Contact = () => {
  const SOCIAL = [
    {
        id: 1,
        link: "https://instagram.com/hrmnarora?igshid=MzRlODBiNWFlZA==",
        icon: <FaInstagram />,
      },
      {
        id: 2,
        link: "https://github.com/hrmnarora",
        icon: <FaGithub />,
      },
      {
        id: 3,
        link: "https://www.linkedin.com/in/harman-arora-09834b239",
        icon: <FaLinkedin />,
      },
  ];

  return (
    <Section
      title="Contact Me😎"
      subtitle="These are the ways you can get in touch with me. Hope to hear from you soon."
    >
      <div className="flex flex-col items-center justify-centergap-8 text-center">
        <div>
          <img src={contact} alt="Contact Info" className="w-32 h-32" />
        </div>
        <div>
          <p className="max-wd-lg md:mx-wd-lg font-extralight mt-6">
            I will try to Reach You back as as soon as possible Drop Your <br />Details below.
          </p>
        </div>
        <div className=" flex w-full items-center justify-evenly text-3xl mt-6">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-red-600"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* bottom from */}
        <div className="p-8 text-left w-full">
          <form action="https://getform.io/f/9bbc507e-d96e-444a-8fd4-42759089c956" method="POST">
            <div className="gap-4 w-full">
              <div className="flex flex-col my-2">
                <label className="capatalize text-sm py-2 font-extralight">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="capatalize text-sm py-2 font-extralight">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="capatalize text-sm py-2 font-extralight">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="capatalize text-sm py-2 font-extralight">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center">
                <button className="my-8 bg-gradient-to-r from-red-600 to-teal-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">Send Form</button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};