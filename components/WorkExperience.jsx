"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

const experience = [
  {
    title: "Journey Started",
    subtitle: "Web Development",
    description:
      "I started my Web Development journey with HTML, CSS & JavaScript. Then I learned multiple libraries and framework i.e. ReactJS, JQuery, etc. including NodeJS.",
    date: "Feb 2020",
    category: "Story Started",
  },
  {
    title: "Taught Students",
    subtitle: "Online & Offline",
    description:
      "I teach Web Development, and App Development to over 100+ students online and more than 60+ students offline.",
    date: "Sep 2021 - Present",
    category: "Passion",
  },
  {
    title: "Selfcare Apparels Intern",
    subtitle: "Wordpress Developer (Internship)",
    description:
      "I was led to update the official website of the company on the daily basis. I used to co-ordinate between my manager and a senior website developer to update the website.",
    date: "Nov 2021 - Mar 2022",
    category: "Internship",
  },
  {
    title: "IEEE Bombay Section",
    subtitle: "IEEE BS SAC (Volunteer)",
    description:
      "I was a Operations member at IEEE BS SAC where me and my team handled all the operational work of IEEE BS. Also I was a website chair and food chair at a event named 'IBSYWLC' hosted by IEEE Bs SAC.",
    date: "2023 - 2024",
    category: "Volunteering",
  },
  {
    title: "Winner at HACKATHON",
    subtitle: "TECHNOTHON 2023",
    description:
      "Me and my team won a 24-hour hackathon i.e. 'TECHNOTHON 2023' which was conducted by VES Polytechnic in Mumbai.",
    date: "Apr 2023",
    category: "Achievement",
  },
  {
    title: "IEEE Bombay Section",
    subtitle: "Full Stack Developer (Internship)",
    description:
      "I was led to make modules for a website which were to be used on the live website. I completed the modules assigned to me and earned LOR from IEEE BS.",
    date: "Sep 2023 - Oct 2023",
    category: "Internship",
  },
  {
    title: "Won a Competition",
    subtitle: "TECHSPARDHA 2023 (VP)",
    description:
      "Our team won the project showcase competition, where we won the price for 2 projects, and got a trophy as well as a certificate.",
    date: "Oct 2023",
    category: "Achievement",
  },
  {
    title: "Unscrap Media",
    subtitle: "Website Developer (Internship)",
    description:
      "I am led to create & update websites for real clients. I work with Wordpress, Shopify or custom code as per the client's requirements.",
    date: "Jun 2023 - Apr 2024",
    category: "Internship",
  },
  {
    title: "Winner at HACKATHON",
    subtitle: "TECHNOTHON 2024",
    description:
      "Me and my team won a 24-hour hackathon i.e. 'TECHNOTHON 2024' which was conducted by VES Polytechnic in Mumbai.",
    date: "Feb 2024",
    category: "Achievement",
  },
  {
    title: "Winner at HACKATHON",
    subtitle: "RECURSION 5.0",
    description:
      "Me and my team won a 24-hour hackathon i.e. 'RECURSION 5.0' which was conducted by Rajiv Gandhi Institute of Technology in Andheri, Mumbai.",
    date: "Mar 2024",
    category: "Achievement",
  },
  {
    title: "IEEE Bombay Section",
    subtitle: "Website & Content Team (Volunteer)",
    description:
      "I am a part of the website and content team at IEEE BS where I am led to update & fix the website for IEEE Bombay Section.",
    date: "Mar 2024 - Present",
    category: "Volunteer",
  },
];

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-5000px",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "5000 top",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      }
    );

    return () => {
      {
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer" id="workexperience">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner w-[5300px]">
          <div className="scroll-section px-[8vw] w-full flex flex-col">
            <div className="mb-[4rem]">
              <h1 className="text-7xl mb-[1.2rem]">Work Experience</h1>
              <span className="text-4xl">What have i done so far? 🤔?</span>
            </div>

            <div className="experience_timeline">
              <div className="timeline_line h-2 w-[6200px] bg-[#000000] rounded-full"></div>
              <motion.div className="timeline_cards flex items-start mt-[2rem]">
                {experience.map((item, index) => (
                  <motion.div
                    className="timeline_card min-w-[500px] max-w-[600px] bg-[#000] mr-[4rem] mt-2 rounded-lg relative text-[#fff]"
                    key={index}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: "easeInOut",
                      type: "tween",
                    }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div
                      className="absolute w-2 h-4 bg-[#000] left-[50%] top-[-2.8rem] rounded-full"
                      style={{ transform: "translateX(-50%)" }}
                    ></div>
                    <div
                      className="absolute top-[-1.8rem] left-[50%] text-[#000]"
                      style={{ transform: "translateX(-50%)" }}
                    >
                      {item.date}
                    </div>
                    <div className="p-[3%] experience_card">
                      <div className="bg-[rgba(255,255,255,0.6)] text-[#000] rounded py-2 animate-pulse mb-4 flex justify-center items-center">
                        {item.category}
                      </div>
                      <h2 className="text-2xl tracking-wider">{item.title}</h2>
                      <h4 className="mb-4 mt-2 tracking-wider">
                        {item.subtitle}
                      </h4>
                      <span className="tracking-wide">{item.description}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
