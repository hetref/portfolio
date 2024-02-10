"use client";

import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion, stagger } from "framer-motion";
import ComputersCanvas from "./Computers";
import useIsMobileStore from "@/stores/isMobileStore";

const MobHero = () => {
  const [isMobile] = useIsMobileStore((state) => [state.isMobile]);

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
    <header className="header_wrapper flex justify-center w-full items-center relative h-full overflow-hidden">
      <div className="header_main_wrapper max-w-7xl w-full h-[100vdh]">
        <div className="header_model h-[100dvh]">
          <ComputersCanvas />
        </div>
        <div className="header_textuals_wrapper pb-[20%] lg:pb-0 h-full absolute w-[100vw] top-0 left-0 flex items-center justify-center">
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
            <div>
              <span className="text-[18px] absolute bottom-8 left-0 text-center w-full">
                Mobile Version Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobHero;