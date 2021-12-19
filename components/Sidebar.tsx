import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import avatar from "../public/images/avatar.png";

const Sidebar = () => {
  return (
    <div>
      <Image src={avatar} alt="avatar" width="100" height="100" />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">John</span> Doe
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Software Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="#">
          <AiFillYoutube className="w-8 h-8" />
        </a>
        <a href="#">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Newyork, USA</span>
        </div>
        <p className="my-2">portfolio@email.com</p>
        <p className="my-2">123456789</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full outline-none bg-gradient-to-r from-green to-blue-400"
        onClick={() => window.open("mailto:portfolio@email.com")}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full outline-none bg-gradient-to-r from-green to-blue-400">
        Toogle Theme
      </button>
    </div>
  );
};

export default Sidebar;
