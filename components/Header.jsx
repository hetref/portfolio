"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import ComputersCanvas from "./Computers";

const Hero = () => {
  // const textRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="header_wrapper flex justify-center w-full items-center relative">
      <div className="header_main_wrapper max-w-7xl w-full h-[100vh]">
        <div className="header_textuals_wrapper h-full">
          <div className="header_textual h-full flex flex-col justify-center">
            <div className="header_text">
              <h2 className="header-h">Hii!</h2>
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
            </div>
            <div className="header_social flex mt-10">
              <div className="header_icon">
                <FaInstagram />
              </div>
              <div className="header_icon">
                <FaFacebookF />
              </div>
              <div className="header_icon">
                <BsTwitterX />
              </div>
              <div className="header_icon">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <div className="header_model w-[64vw] h-[70vh] absolute bottom-10 right-10">
          <ComputersCanvas />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <button onClick={() => scrollToSection("aboutme")}>
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
              className="w-3 h-3 rounded-full bg-[#000000] mb-1"
            />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Hero;
