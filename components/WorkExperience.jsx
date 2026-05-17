"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { experience } from "@/constants";
import { useResponsiveJSX } from "@/hooks/useResponsiveJSX";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const lineRef = useRef(null);
  const counterRef = useRef(null);
  const breakpoint = useResponsiveJSX([425]);
  const isMobile = breakpoint === 0;
  const itemWidth = isMobile ? 380 : 480; // Width of each experience item

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(
        ".timeline_card",
        cardsRef.current
      );
      let lastIndex = -1;

      const updateMeasurements = () => {
        const marginLeft = sectionRef.current
          ? parseFloat(getComputedStyle(sectionRef.current).marginLeft) || 0
          : 0;
        const firstCard = cardsRef.current?.firstElementChild;
        const lastCard = cardsRef.current?.lastElementChild;
        const firstCardWidth = firstCard?.offsetWidth || itemWidth;
        const lastCardWidth = lastCard?.offsetWidth || itemWidth;
        const firstCardOffset = firstCard?.offsetLeft || 0;
        const lastCardOffset = lastCard?.offsetLeft || 0;
        const viewportWidth =
          triggerRef.current?.offsetWidth || window.innerWidth;

        const startX = Math.max(
          0,
          firstCardOffset + firstCardWidth / 2 + marginLeft - viewportWidth / 2
        );
        const endX = Math.max(
          0,
          lastCardOffset + lastCardWidth + marginLeft - viewportWidth / 2
        );

        if (lineRef.current) {
          const lineWidth = Math.max(lastCardOffset + lastCardWidth, 0);
          lineRef.current.style.width = `${lineWidth}px`;
        }

        return { startX, endX };
      };

      const updateCounter = () => {
        if (!counterRef.current || cards.length === 0) return;
        const viewportCenter = window.innerWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const center = rect.left + rect.width / 2;
          const distance = Math.abs(center - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex !== lastIndex) {
          lastIndex = closestIndex;
          const current = String(closestIndex + 1).padStart(2, "0");
          const total = String(cards.length).padStart(2, "0");
          counterRef.current.textContent = `${current} / ${total}`;
          gsap.fromTo(
            counterRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.25, ease: "power1.out" }
          );
        }
      };

      const initialMeasurements = updateMeasurements();
      gsap.set(sectionRef.current, { x: -initialMeasurements.startX });

      const horizontalTween = gsap.fromTo(
        sectionRef.current,
        { x: () => -updateMeasurements().startX },
        {
          x: () => -updateMeasurements().endX,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${updateMeasurements().endX - updateMeasurements().startX}`,
            scrub: 0.9,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: updateCounter,
            onRefresh: () => {
              const { startX } = updateMeasurements();
              gsap.set(sectionRef.current, { x: -startX });
              updateCounter();
            },
          },
        }
      );

      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top top",
        endTrigger: triggerRef.current,
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
        markers: false,
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.98, transformOrigin: "center center" },
          {
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          }
        );
      });

      if (counterRef.current && cards.length > 0) {
        const total = String(cards.length).padStart(2, "0");
        counterRef.current.textContent = `01 / ${total}`;
        lastIndex = 0;
      }
      updateCounter();
      ScrollTrigger.refresh();
    }, triggerRef);

    return () => ctx.revert();
  }, [itemWidth]);

  return (
    <section className="scroll-section-outer" id="workexperience">
      <div ref={triggerRef}>
        <div className="scroll-section-inner flex items-center justify-center h-full">
          <div className="scroll-section px-[8vw] w-full flex flex-col">
            <div
              ref={headerRef}
              className="mb-[4rem] z-10"
              style={{ paddingTop: "5rem" }}
            >
              <div className="flex items-end gap-4 flex-wrap">
                <h1 className="header-h mb-[1.2rem]">Work Experience</h1>
                <span
                  ref={counterRef}
                  className="text-sm md:text-lg tracking-widest mb-[1.2rem]"
                />
              </div>
              <span className="text-lg md:text-4xl">
                What have i done so far? 🤔?
              </span>
            </div>

            <div ref={sectionRef} className="experience_timeline ml-[50vw] md:ml-[40vw]">
              <div
                className={cn(
                  "timeline_line h-2 bg-[#000000] rounded-full",
                )}
                ref={lineRef}
              ></div>
              <motion.div
                ref={cardsRef}
                className="timeline_cards flex mt-[2rem]"
              >
                {experience.map((item, index) => (
                  <motion.div
                    className="timeline_card min-w-[90vw] h-fit max-w-[90vw] sm:min-w-[420px] sm:max-w-[480px] md:min-w-[500px] md:max-w-[600px] bg-[#000] mr-[1rem] md:mr-[2rem] lg:mr-[4rem] mt-2 rounded-lg relative text-[#fff]"
                    key={index}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.06,
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
                    {/* <div
                      className="absolute top-[-1.8rem] left-[50%] text-[#000]"
                      style={{ transform: "translateX(-50%)" }}
                    >
                      {item.date}
                    </div> */}
                    <div className="p-[1rem] experience_card">
                      <div className="bg-[#f5f5f5] text-[#000] text-[12px] rounded-full py-2 mb-4 flex justify-center items-center absolute bottom-[-35px] right-[15px] px-4 border">
                        {item.category}
                      </div>
                      <h2 className="text-xl md:text-2xl tracking-wider">{item.title}</h2>
                      <h4 className="mb-2 mt-2 tracking-wider text-sm md:text-base">
                        {item.subtitle}
                      </h4>
                      <span className="text-sm md:text-base tracking-wide mb-4 block">
                        {item.date}
                      </span>
                      <span className="tracking-wide text-[14px] md:text-base">{item.description}</span>
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
