"use client";

import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { motion, stagger } from "framer-motion";
import ComputersCanvas from "../Computers";
import useIsMobileStore from "@/stores/isMobileStore";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

const MobHero = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const [isMobile] = useIsMobileStore((state) => [state.isMobile]);

  return (
    <header className="header_wrapper flex justify-center w-full items-center relative">
      {/* <header className="header_wrapper flex justify-center w-full items-center relative"> */}
      <div className="header_main_wrapper max-w-7xl w-full h-[100lvh]">
        <div className="header_model h-[100lvh]">
          <ComputersCanvas />
        </div>
        <div className="header_textuals_wrapper  lg:pb-0 h-full absolute w-[100vw] top-0 left-0 flex items-center justify-center">
          <div className="header_textual h-full max-w-7xl flex flex-col justify-center pr-[4%] lg:pr-[10%] pl-[4%] lg:pl-[5%] ">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
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
            </motion.div>
            <motion.div
              initial={{
                x: "200px",
              }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 2,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              className="header_social flex mt-[10%] lg:mt-[6%]"
            >
              <div
                className="header_icon"
                onClick={() =>
                  window.open("https://www.instagram.com/coder_aryu/", "_blank")
                }
              >
                <FaInstagram />
              </div>
              <div
                className="header_icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shindearyan/",
                    "_blank"
                  )
                }
              >
                <FaLinkedinIn />
              </div>
              <div
                className="header_icon"
                onClick={() =>
                  window.open("https://www.threads.net/@coder_aryu", "_blank")
                }
              >
                <BsThreads />
              </div>
              <div
                className="header_icon"
                onClick={() =>
                  window.open("https://twitter.com/aryudev", "_blank")
                }
              >
                <BsTwitterX />
              </div>
            </motion.div>
            {/* <div>
              <span className="text-[18px] absolute bottom-8 left-0 text-center w-full">
                Mobile Version Coming Soon
              </span>
            </div> */}
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <button
          onClick={() =>
            gsap.to(window, {
              duration: 1.2,
              scrollTo: { y: "#aboutmemob" },
            })
          }
          className="flex items-center gap-4"
        >
          <div className="w-[26px] h-[55px] lg:w-[35px] lg:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: isMobile ? [0, 20, 0] : [0, 30, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#f4f8fb] mb-1"
            />
          </div>
          Click Me
        </button>
      </div>
    </header>
  );
};

export default MobHero;
