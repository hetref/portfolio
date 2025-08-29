"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function MaskedWhatIKnow() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial mask size
    gsap.set(stickyMask.current, {
      maskSize: "80%",
      webkitMaskSize: "80%"
    });

    // Create the scroll-triggered animation
    gsap.to(stickyMask.current, {
      maskSize: "3000%",
      webkitMaskSize: "3000%",
      ease: "none",
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="masked-what-i-know">
      <main className="maskmain">
        <div ref={container} className="maskcontainer">
          <div ref={stickyMask} className="stickyMask">
            {/* <video autoPlay muted loop>
              <source src="/assets/nature.mp4" type="video/mp4" />
            </video> */}
            <Image src="/assets/about-bg-2.png" alt="About Background" fill />
          </div>
        </div>
      </main>
    </div>
  );
}
