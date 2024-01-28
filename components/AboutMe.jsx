"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

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
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-301vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          markers: true,
        },
      }
    );

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
        end: "3000 top",
        scrub: 0.5,
        pin: true,
        markers: true,
      },
    });

    return () => {
      {
      }
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
          <div className="scroll-section items-center w-[100vw]">
            <div className="about_textuals mr-[8vw]">
              <h1 className="text-9xl mb-[3rem]">
                About <br />
                Me
              </h1>
              <span className="text-6xl">Who am I 🤔?</span>
            </div>
            <div className="about_meme">
              <img
                src="https://hetref.github.io/portfolio-assets/images/profile.png"
                alt="meme"
                loading="lazy"
                className="w-[400px] rounded-full border-[10px] border-[#000000] bg-[#000000]"
              />
            </div>
          </div>
          <div className="scroll-section items-center w-[300vw] relative">
            <div className="about_content">
              <div className="about_headings w-full">
                <h1 className="text-8xl w-full">
                  I am a creative developer with crazy & more focused mindset 😁
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
                  I am a skilled Full stack Web Developer 🧑‍💻 with experience in
                  JavaScript, Animations, and better at frameworks like React,
                  Node.js, and Three.js. I am a good team player 🤟 and
                  collaborate closely with clients to create efficient,
                  scalable, and user-friendly solutions that solve real-world
                  problems 🔗. Let us join together to bring the ideas to life
                  🤝!
                </motion.div>
                <div
                  className="about_link_card bg-[#000000cc]"
                  ref={whatIKnowRef}
                >
                  <img
                    src="https://hetref.github.io/portfolio-assets/images/whatiknow-min.png"
                    alt="What I Know"
                    className="w-full p-8 object-cover"
                    loading="lazy"
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
                    onClick={() => scrollToSection("#whatiknow")}
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
                    loading="lazy"
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
                    loading="lazy"
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
