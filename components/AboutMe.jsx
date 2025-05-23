"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const circleRef = useRef(null);

  const aboutTextRef = useRef(null);
  const isAboutTextInView = useInView(aboutTextRef);

  const whatIKnowRef = useRef(null);
  const isWhatIKnowInView = useInView(whatIKnowRef);

  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef);

  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: id },
    });
  };

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".scroll-section");

    const pin = gsap.to(sectionRef.current, {
      translateX: "-270vw",
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 1,
        pin: true,
        end: () => "+=3000",
      },
    });

    const circlePin = gsap.to(circleRef.current, {
      background: "#eeeeee",
      scale: "200",
      top: "4rem",
      left: "4rem",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top top",
        end: "4000 top",
        scrub: 0.5,
        pin: true,
      },
    });

    return () => {
      pin.kill();
      circlePin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer" id="aboutme">
      <div ref={triggerRef}>
        <div
          className="circle bg-[#acacac] h-[20px] w-[20px] rounded-full absolute"
          ref={circleRef}
        ></div>
        <div ref={sectionRef} className="scroll-section-inner w-[400vw]">
          <div className="scroll-section justify-center items-center w-[100vw]">
            <div className="about_textuals mr-[8vw]">
              <h1 className="text-8xl mb-[2rem]">
                About <br />
                Me
              </h1>
              <span className="text-4xl">Who am I 🤔?</span>
            </div>
            <div className="about_meme">
              <Image
                src="/profile-white.png"
                alt="Profile"
                className="rounded-full border-[10px] border-[#000000] bg-[#000000]"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="scroll-section justify-center items-center w-[250vw]">
            <div className="about_content relative">
              <div className="about_headings w-full">
                <h1 className="text-8xl w-full">
                  Innovative Developer with a Focused and Creative Mindset 🤯
                </h1>
              </div>
              <div className="about_cards flex justify-center items-start mt-[6vh]">
                <motion.div
                  ref={aboutTextRef}
                  initial={{ opacity: 0 }}
                  animate={isAboutTextInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 2 }}
                  className="about_card text-justify leading-relaxed"
                >
                  Third-year Diploma student in Computer Engineering at
                  Vidyalankar Polytechnic, specializing in web development with
                  technologies like NextJS and GraphQL, among others. Known for
                  strong collaboration and leadership skills. Passionate about
                  football and solving Rubik&rsquo;s cubes. Let&rsquo;s
                  collaborate and bring ideas to life! Contact me at{" "}
                  <a href="mailto:contact@aryanshinde.in" className="underline">
                    contact@aryanshinde.in
                  </a>
                </motion.div>
                <div
                  className="about_link_card bg-[#000000cc]"
                  ref={whatIKnowRef}
                >
                  <img
                    src="https://hetref.github.io/portfolio-assets/images/whatiknow-min.png"
                    alt="What I Know"
                    className="w-full p-8 object-cover"
                  />
                  <motion.div
                    initial={{ bottom: "20%", opacity: 0 }}
                    animate={
                      isWhatIKnowInView
                        ? { bottom: "0%", opacity: 1 }
                        : { bottom: "20%", opacity: 0 }
                    }
                    transition={{ duration: 1.5 }}
                    className="about_link_card_title"
                    onClick={() => scrollToSection("#whatIKnowSection")}
                  >
                    <h1>What I Know</h1>
                    <FaArrowRight />
                  </motion.div>
                </div>
                <motion.div
                  className="about_link_card bg-[#000000cc]"
                  ref={experienceRef}
                >
                  <img
                    src="https://hetref.github.io/portfolio-assets/images/experience-min.png"
                    alt="Work Experience"
                    className="w-full p-8 object-cover"
                  />
                  <motion.div
                    initial={{ bottom: "20%", opacity: 0 }}
                    animate={
                      isExperienceInView
                        ? { bottom: "0%", opacity: 1 }
                        : { bottom: "20%", opacity: 0 }
                    }
                    transition={{ duration: 1.5 }}
                    className="about_link_card_title"
                    onClick={() => scrollToSection("#workexperience")}
                  >
                    <h1>Work Experience</h1>
                    <FaArrowRight />
                  </motion.div>
                </motion.div>
                <div
                  className="about_link_card bg-[#000000cc]"
                  ref={projectsRef}
                >
                  <img
                    src="https://hetref.github.io/portfolio-assets/images/projects-min.png"
                    alt="Technologies Preview"
                    className="w-full p-8 object-cover"
                  />
                  <motion.div
                    initial={{ bottom: "20%", opacity: 0 }}
                    animate={
                      isProjectsInView
                        ? { bottom: "0%", opacity: 1 }
                        : { bottom: "20%", opacity: 0 }
                    }
                    transition={{ duration: 1.5 }}
                    className="about_link_card_title"
                    onClick={() => scrollToSection("#myprojects_wrapper")}
                  >
                    <h1>Projects</h1>
                    <FaArrowRight />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
