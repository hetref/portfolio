"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const OverlayAnim = () => {
  const overlayRef = useRef(null);
  const bodyRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const overlay = gsap.fromTo(
      overlayRef.current,
      {
        transform: "translateX(0, 0)",
        opacity: 1,
      },
      {
        // transform: "translate(100%, -100%)",
        opacity: 0,
        borderRadius: "",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "50% top",
          end: "70% top",
          scrub: 0.6,
          // pin: true,
          // markers: true,
        },
      }
    );

    const overlay2 = gsap.from(overlayRef.current, {
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top top",
        end: "100% top",
        scrub: 0.6,
        pin: true,
        // markers: true,
      },
    });

    const body = gsap.to(bodyRef.current, {
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: bodyRef.current,
        start: "top top",
        end: "160% top",
        scrub: 0.6,
        pin: true,
        // markers: true,
      },
    });

    return () => {
      {
      }
      overlay.kill();
      overlay2.kill();
      body.kill();
    };
  }, []);

  return (
    <div className="about_wrapper" id="demoid">
      <div className="body" ref={bodyRef}>
        <h1>Hello Again. I am BACK!</h1>
      </div>
      <div className="overlay" ref={overlayRef}>
        <h1>Hello There. This is the overlay div.</h1>
      </div>
    </div>
  );
};

export default OverlayAnim;
