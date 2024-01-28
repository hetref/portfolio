"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion, stagger } from "framer-motion";
import ComputersCanvas from "./Computers";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

const Hero = () => {
  // const textRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  // useEffect(() => {
  //   const pin = gsap.fromTo(
  //     textRef.current,
  //     {
  //       fontSize: "20rem",
  //     },
  //     {
  //       fontSize: "4rem",
  //       ease: "none",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: textRef.current,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 0.6,
  //         pin: true,
  //         markers: true,
  //       },
  //     }
  //   );

  //   return () => {
  //     {
  //     }
  //     pin.kill();
  //   };
  // }, []);

  return (
    <header className="header_wrapper flex justify-center w-full items-center relative">
      <div className="header_main_wrapper max-w-7xl w-full h-[100vh]">
        <div className="header_model  h-[100vh]">
          <ComputersCanvas />
        </div>
        <div className="header_textuals_wrapper h-full absolute w-[100vw] top-0 left-0 flex items-center justify-center">
          <div className="header_textual h-full max-w-7xl flex flex-col justify-center pr-[10%] pl-[5%] ">
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
              <h2 className="header-h">
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
              className="header_social flex mt-[6%]"
            >
              <motion.div
                className="header_icon"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <FaInstagram />
              </motion.div>
              <div
                className="header_icon"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <FaFacebookF />
              </div>
              <div
                className="header_icon"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <BsTwitterX />
              </div>
              <div
                className="header_icon"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <FaLinkedinIn />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <button
          onClick={() =>
            gsap.to(window, {
              duration: 1.2,
              scrollTo: { y: "#aboutme" },
            })
          }
          className="flex items-center gap-4"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 30, 0],
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

export default Hero;
