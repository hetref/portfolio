"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Lottery DAPP",
    description:
      "A decentralized application (DAPP) designed for lottery enthusiasts. Experience seamless and secure lottery transactions powered by NextJS, Solidity, ShadCN, and ThirdWeb technologies.",
    tags: ["NextJS", "Solidity", "ShadCN", "ThirdWeb"],
    image:
      "https://hetref.github.io/portfolio-assets/project/lottery-dapp-min.png",
    url: "https://lottery-dapp-hetref.vercel.app/",
    inspiration: "Sonny Sangha",
  },
  {
    name: "Filedrop",
    description:
      "Filedrop simplifies file sharing with a user-friendly interface. Built using NextJS, ShadCN, Firebase, and Clerk, this project ensures efficient and reliable file transfer experiences.",
    tags: ["NextJS", "ShadCN", "Firebase", "Clerk"],
    image: "https://hetref.github.io/portfolio-assets/project/filedrop-min.png",
    url: "https://filedrop-mu.vercel.app/",
    inspiration: "Sonny Sangha",
  },
  {
    name: "Customize Shirts",
    description:
      "Express your style with Customize Shirts, a platform where you can design and personalize your own shirts. Created with NextJS, ThreeJS, and ShadCN, unleash your creativity in the world of customized fashion.",
    tags: ["NextJS", "ThreeJS", "ShadCN"],
    image:
      "https://hetref.github.io/portfolio-assets/project/customize-shirt-min.png",
    url: "https://customizeshirt.netlify.app/",
    inspiration: "JS Mastery",
  },
  {
    name: "TextUtils",
    description:
      "TextUtils provides essential text manipulation tools in a convenient ReactJS application. Seamlessly perform various text operations to enhance your content.",
    tags: ["ReactJS"],
    image:
      "https://hetref.github.io/portfolio-assets/project/textutils-min.png",
    url: "https://hetref.github.io/textutils/",
    inspiration: "CodeWithHarry",
  },
  {
    name: "YourTodo",
    description:
      "Manage your tasks efficiently with YourTodo. This project, crafted with HTML, CSS, JavaScript, MaterializeCSS, and Firebase, offers a user-friendly interface for organizing your daily activities.",
    tags: ["HTML", "CSS", "JavaScript", "MaterializeCSS", "Firebase"],
    image: "https://hetref.github.io/portfolio-assets/project/yourtodo-min.png",
    url: "https://hetref.github.io/yourtodo/",
  },
  {
    name: "AISYWLC",
    description:
      "AISYWLC, powered by WordPress, delivers a captivating online presence. Explore the world of this project with its immersive content and engaging features.",
    tags: ["Wordpress"],
    image: "https://hetref.github.io/portfolio-assets/project/aisywlc-min.png",
    url: "https://aisywlc.ieeebombay.org/",
  },
  {
    name: "IBSYWLC",
    description:
      "IBSYWLC presents a modern and visually appealing website built with ReactJS and TailwindCSS. Experience a seamless and aesthetically pleasing user interface.",
    tags: ["ReactJS", "TailwindCSS"],
    image: "https://hetref.github.io/portfolio-assets/project/ibsywlc-min.png",
    url: "https://ieeebombay.org/ibsywlc23/",
  },
  {
    name: "CrownVitrea",
    description:
      "CrownVitrea is a feature-rich WordPress website that exudes elegance. Explore the royal charm and captivating content embedded in this online presence.",
    tags: ["Wordpress"],
    image:
      "https://hetref.github.io/portfolio-assets/project/crownvitrea-min.png",
    url: "https://crownvitrea.com/",
  },
  {
    name: "IDream Realty",
    description:
      "IDream Realty, a WordPress-based project, offers a glimpse into the world of dream properties. Discover a user-friendly platform for real estate enthusiasts.",
    tags: ["Wordpress"],
    image:
      "https://hetref.github.io/portfolio-assets/project/idream-realty-min.png",
    url: "https://idreamrealty.ca/",
  },
  {
    name: "Lehagen",
    description:
      "Lehagen, a WordPress project, showcases a captivating online presence. Dive into the content and experience the unique charm of this website.",
    tags: ["Wordpress"],
    image: "https://hetref.github.io/portfolio-assets/project/lehagen-min.png",
    url: "https://lehagen.in/",
  },
  {
    name: "Devoutlooks",
    description:
      "Devoutlooks combines the power of ReactJS, Firebase, and Bootstrap to create a visually stunning and functionally rich platform. Explore the latest in fashion with this dynamic project.",
    tags: ["ReactJS", "Firebase", "Bootstrap"],
    image:
      "https://hetref.github.io/portfolio-assets/project/devoutlooks-min.png",
    url: "https://devoutlook.netlify.app/",
  },
  {
    name: "Tile Game",
    description:
      "Tile Game is an engaging project built with HTML, CSS, and JavaScript. Challenge yourself with this interactive tile-based game that promises hours of entertainment.",
    tags: ["HTML", "CSS", "JavaScript"],
    image:
      "https://hetref.github.io/portfolio-assets/project/tile-game-min.png",
    url: "https://hetref.github.io/tilesgame/",
  },
];

const MyProjectsMob = () => {
  const [projectsLoaded, setProjectsLoaded] = useState(4);

  const goToLink = (url) => {
    window.open(url, "_blank");
  };

  const loadMoreProjects = () => {
    setProjectsLoaded(projectsLoaded + 2);
  };

  const showLessProjects = () => {
    setProjectsLoaded(4);
  };

  return (
    <div className="py-[6rem] px-[4%] bg-[#f5f5f5]">
      <div className="mb-2 text-center">
        <h1 className="header-h">My Works</h1>
        <p className="md:text-4xl text-lg">
          How I applied skills in real-world?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-[2rem]">
        {projects.slice(0, projectsLoaded).map((project, index) => (
          <motion.div
            key={index}
            className="relative border-2 border-[#000] rounded-md"
            initial={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "tween",
            }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="project_image">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={250}
                className="object-cover border-b-2 border-[#000b] rounded-t-md"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl">{project.name}</h1>
              <p className="md:text-justify text-sm mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-[#000] text-white px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="absolute top-3 right-3 bg-[#fff] text-black p-2 rounded-full cursor-pointer border-2 border-[#000]"
                onClick={() => goToLink(project.url)}
              >
                <FaExternalLinkAlt />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projectsLoaded < projects.length && (
        <div className="text-center mt-[2rem] flex items-center justify-center">
          <button
            className="bg-[#000] flex justify-center gap-2 items-center text-white px-4 py-2 rounded-md"
            onClick={loadMoreProjects}
          >
            Load More <BsArrowDown />
          </button>
        </div>
      )}

      {projectsLoaded >= projects.length && (
        <div className="text-center mt-[2rem] flex items-center justify-center">
          <button
            className="bg-[#000] flex justify-center gap-2 items-center text-white px-4 py-2 rounded-md"
            onClick={showLessProjects}
          >
            Show Less <BsArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProjectsMob;
