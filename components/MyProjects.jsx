import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

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

const MyProjects = () => {
  const goToLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="myprojects_wrapper">
      <div className="myprojects_heading">
        <h1 className="header-h">My Projects</h1>
        <p>What have I done so far?</p>
      </div>

      <div className="myprojects_body max-w-7xl w-full">
        <div className="myprojects_cards px-[4%]">
          <AnimatePresence>
            {projects.map((item, index) => (
              // I want to add fade in animation whileInView but it's not working
              <motion.div
                className="myprojects_card"
                key={index}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  // delay: 0.4 * (index % 2),
                  ease: "easeInOut",
                  type: "tween",
                }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="myprojects_card_img">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.image}
                    loading="lazy"
                    alt="project"
                  />
                </div>
                <div className="myprojects_card_body">
                  <div className="myprojects_card_header">
                    <div className="myprojects_card_title">
                      <h1>{item.name}</h1>
                      <FaExternalLinkAlt
                        className="myprojects_card_icon"
                        onClick={() => goToLink(item.url)}
                      />
                    </div>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <div className="my_projects_card_tags">
                      {item.tags.map((tag, index) => (
                        <div className="my_projects_card_tag" key={index}>
                          {tag}
                        </div>
                      ))}
                    </div>
                    {item.inspiration != undefined && (
                      <span className="text-[16px]">
                        Inspired by {item.inspiration}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
