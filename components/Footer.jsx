import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff] border-t-4 py-[6rem] px-4 flex items-center justify-center w-full text-[#151515]">
      <div className="max-w-7xl w-full">
        <div className="flex md:flex-row flex-col justify-around items-center gap-6 md:gap-4">
          <div className="text-center flex flex-col gap-1 md:gap-3">
            <h1 className="text-2xl md:text-4xl">Connect on Email</h1>
            <a href="mailto:contact@aryanshinde.in">contact@aryanshinde.in</a>
          </div>
          <div className="text-center flex flex-col gap-1 md:gap-3">
            <h1 className="text-2xl md:text-4xl">Connect on Whatsapp</h1>
            <a href="https://wa.me/+918097296453?text=Hii Aryan">
              +91 8097296453
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <motion.div
            className="h-2 w-full text-center bg-black my-[2rem] rounded-full"
            initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            whileInView={{ width: "100%" }}
            exit={{ width: 0 }}
          />
        </div>

        {/* Copyright Section */}
        <div className="w-full text-center text-[#151515]">
          <span>
            © All Rights Reserved <br />
            {year} Aryan Shinde&apos;s Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
