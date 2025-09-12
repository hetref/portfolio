"use client";

import Typewriter from "typewriter-effect";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsThreads, BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import ErrorBoundary from "./ErrorBoundary";
import SimpleComputersFallback from "./SimpleComputersFallback";
import { MorphingText } from "@/components/magicui/morphing-text";
// import ComputersFallback from "./ComputersFallback";
// import ComputersCanvas from "./SimpleComputers"
// import ComputersCanvas from "./Computers";
const ComputersCanvas = dynamic(() => import("./Computers"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  ),
});

// Fallback component for when Three.js fails to load
const ComputersFallback = () => <SimpleComputersFallback />;

const Header = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const handleScrollToAbout = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: "#aboutme" },
    });
  };

  
//   <Typewriter
//   onInit={(typewriter) => {
//     typewriter
//       .typeString(" DEVELOPER")
//       .pauseFor(1000)
//       .deleteChars(9)
//       .typeString(" FREELANCER")
//       .pauseFor(1000)
//       .deleteChars(10)
//       .typeString(" DESIGNER")
//       .pauseFor(1000)
//       .start();
//   }}
//   options={{
//     loop: true,
//   }}
// />

  return (
    <header className="header_wrapper flex justify-center w-full items-center relative h-[100svh]">
      <div className="header_main_wrapper max-w-7xl w-full h-[100lvh]">
        <div className="header_model h-[100lvh]">
          {/* <ErrorBoundary fallback={<ComputersFallback />}> */}
            <ComputersCanvas />
          {/* </ErrorBoundary> */}
        </div>
        <div className="header_textuals_wrapper h-full absolute w-[100vw] top-0 left-0 flex items-center justify-center">
          <div className="header_textual h-full max-w-7xl flex flex-col justify-center pr-[4%] lg:pr-[10%] pl-[4%] lg:pl-[5%]">
            <div className="header_text flex flex-col justify-center">
              <h2 className="header-h">Hii ! 👋</h2>
              <h2 className="header-main-h">
                I am <span>Aryan Shinde</span>
              </h2>
              <div className="flex justify-start items-start gap-4 header-h">
                THE
              <MorphingText texts={["AUTOMATER", "DEVELOPER", "FREELANCER", "DESIGNER"]} />
              </div>
            </div>
            <div className="flex flex-col gap-2 my-3">
              <a
                href="https://drive.google.com/file/d/11p6AlR91CVTtnyj08fobBzGFo8FiGM4_/view?usp=sharing"
                className="text-lg px-8 py-3 border-2 border-white rounded-full w-fit"
                target="_blank"
              >
                Download RESUME
              </a>
            </div>
            <div className="header_social flex mt-[10%] lg:mt-[6%]">
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
                href="https://www.youtube.com/@aryancodelab/"
                target="_blank"
              >
                <FaYoutube />
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
        <motion.button
          onClick={handleScrollToAbout}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex items-center gap-4"
        >
          <div className="w-[26px] h-[55px] lg:w-[35px] lg:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#f4f8fb] mb-1"
            />
          </div>
          Click Me
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
