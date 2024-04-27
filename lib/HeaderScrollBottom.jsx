"use client";

import { motion } from "framer-motion";
import useIsMobileStore from "@/stores/isMobileStore";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { gsap } from "gsap";

const HeaderScrollBottom = () => {
  gsap.registerPlugin(ScrollToPlugin);
  // const [isMobile] = useIsMobileStore((state) => [state.isMobile]);
  console.log("LOADED");

  if (typeof window !== "undefined") {
    let isMobile = window.matchMedia("(max-width: 600px)").matches;
    console.log("ISMOBILE", isMobile);
  }

  return (
    <motion.button
      onClick={() =>
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: isMobile ? "#aboutmemob" : "#aboutme" },
        })
      }
      initial={false}
      animate={{
        // y: isMobile ? [0, 20, 0] : [0, 30, 0],
        y: [0, 20, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="flex items-center gap-4"
    >
      <div className="w-[26px] h-[55px] lg:w-[35px] lg:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
          initial={false}
          animate={{
            // y: isMobile ? [0, 20, 0] : [0, 30, 0],
            y: [0, 20, 0],
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
    </motion.button>
  );
};

export default HeaderScrollBottom;
