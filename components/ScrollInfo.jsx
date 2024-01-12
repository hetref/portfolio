"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import meme from "../assets/images/developer.webp";
import Image from "next/image";

const ScrollInfo = () => {
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
        translateX: "-202vw",
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
    return () => {
      {
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer" id="aboutme">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section w-[100vw]">
            <div className="about_textuals">
              <h1 className="text-8xl">
                About <br />
                Me
              </h1>
              <span className="text-3xl">Who am I?</span>
            </div>
            <div className="about_meme ">
              <Image src={meme} alt="meme" className="w-[360px] rounded" />
            </div>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollInfo;
