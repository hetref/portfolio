"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

export default function MaskedWhatIKnow() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const contentDiv = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial mask size
    gsap.set(stickyMask.current, {
      maskSize: "80%",
      webkitMaskSize: "80%"
    });

    // Set initial content opacity
    gsap.set(contentDiv.current, {
      opacity: 0
    });

    // Create the scroll-triggered animation for mask
    gsap.to(stickyMask.current, {
      maskSize: "5200%",
      webkitMaskSize: "5200%",
      ease: "power2.in",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: stickyMask.current,
        pinSpacing: false,
        markers: true, // Set to true for debugging
      }
    });

    // Create the scroll-triggered animation for content opacity
    gsap.to(contentDiv.current, {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "60% top", // Start at 60% of container height
        end: "80% top", // End at 80% of container height
        scrub: true,
        markers: false, // Set to true for debugging
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="masked-what-i-know">
      <main className="maskmain">
        <div ref={container} className="maskcontainer">
          <div ref={stickyMask} className="stickyMask relative">
            {/* <video autoPlay muted loop>
              <source src="/assets/nature.mp4" type="video/mp4" />
            </video> */}
            <Image src="/assets/about-bg-2.png" alt="About Background" fill draggable={false} />
            <div ref={contentDiv} className="z-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center w-[80%] gap-[20px]">
                <p className="w-[50%]">Third-year Diploma student in Computer Engineering at Vidyalankar Polytechnic, specializing in web development with technologies like NextJS and GraphQL, among others. Known for strong collaboration and leadership skills. Passionate about football and solving Rubik&quot;s cubes. Let&quot;s collaborate and bring ideas to life! Contact me at contact@aryanshinde.in</p>
                <div className="grid grid-cols-2 gap-[16px] w-[50%]">
                    <div className="border padding-2">
                        <h4>Skills</h4>
                        <Link href="#contact-us">Check Out</Link>
                    </div>
                    <div className="border padding-2">
                        <h4>Experience</h4>
                        <Link href="#contact-us">Check Out</Link>
                    </div>
                    <div className="border padding-2">
                        <h4>Projects</h4>
                        <Link href="#contact-us">Check Out</Link>
                    </div>
                    <div className="border padding-2">
                        <h4>Contact</h4>
                        <Link href="#contact-us">Check Out</Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
