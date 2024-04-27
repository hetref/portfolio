// "use client";

import Typewriter from "typewriter-effect";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
// import { motion } from "framer-motion";
import ComputersCanvas from "./Computers";
import HeaderScrollBottom from "@/lib/HeaderScrollBottom";

const Hero = () => {
  return (
    <header className="header_wrapper flex justify-center w-full items-center relative">
      <div className="header_main_wrapper max-w-7xl w-full h-[100svh]">
        <div className="header_model h-[100dvh]">
          <ComputersCanvas />
        </div>
        <div className="header_textuals_wrapper pb-[20%] lg:pb-0 h-full absolute w-[100vw] top-0 left-0 flex items-center justify-center">
          <div className="header_textual h-full max-w-7xl flex flex-col justify-center pr-[4%] lg:pr-[10%] pl-[4%] lg:pl-[5%] ">
            <div
              // initial={false}
              // animate={{ y: [0, 15, 0] }}
              // transition={{
              //   duration: 1.5,
              //   repeat: Infinity,
              //   repeatType: "loop",
              // }}
              className="header_text flex flex-col justify-center"
            >
              <h2 className="header-h">Hii ! 👋</h2>
              <h2 className="header-main-h">
                I am <span>Aryan Shinde</span>
              </h2>
              <div className="flex justify-start items-start gap-4 header-h">
                THE
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(" DEVELOPER")
                      .pauseFor(1000)
                      .deleteChars(9)
                      .typeString(" FREELANCER")
                      .pauseFor(1000)
                      .deleteChars(10)
                      .typeString(" DESIGNER")
                      .pauseFor(1000)
                      .start();
                  }}
                  options={{
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div
              // initial={{
              //   x: "200px",
              // }}
              // initial={false}
              // whileInView={{
              //   x: 0,
              //   transition: {
              //     duration: 2,
              //     type: "spring",
              //     stiffness: 100,
              //   },
              // }}
              className="header_social flex mt-[10%] lg:mt-[6%]"
            >
              <a
                className="header_icon"
                href="https://leetcode.com/shindearyan179/"
                target="_blank"
              >
                <SiLeetcode />
              </a>
              <a
                className="header_icon"
                href="https://www.instagram.com/coder_aryu/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="header_icon"
                href="https://www.linkedin.com/in/shindearyan/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="header_icon"
                href="https://www.threads.net/@coder_aryu"
                target="_blank"
              >
                <BsThreads />
              </a>
              <a
                className="header_icon"
                href="https://twitter.com/aryudev"
                target="_blank"
              >
                <BsTwitterX />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <HeaderScrollBottom />
      </div>
    </header>
  );
};

export default Hero;
