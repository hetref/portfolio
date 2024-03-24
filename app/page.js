"use client";

import {
  Header,
  AboutMe,
  ScrollIndicatior,
  WhatIKnow,
  WorkExperience,
  MyProjects,
  ContactMe,
} from "@/components/index.js";
import { MobHeader, AboutMeMob } from "@/components/mob";
import "@/assets/scss/common.scss";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import useLoaderStore from "@/stores/loader";
// import MyProjects from "@/components/MyProjects";
// import ContactMe from "@/components/ContactMe";
import { Toaster } from "react-hot-toast";
import useIsMobileStore from "@/stores/isMobileStore";
// import MobHero from "@/components/MobHeader";
import PlausibleProvider from "next-plausible";
import IKnow from "@/components/IKnow";
// import AboutMeMob from "@/components/MobileComponents/AboutMe";

export default function Home() {
  const [loadingState] = useLoaderStore((state) => [state.loadingState]);
  const [setIsMobile] = useIsMobileStore((state) => [state.setIsMobile]);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {});

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [setIsMobile]);

  return (
    <>
      <PlausibleProvider domain="portfolio-hetref.vercel.app">
        <div className="lg:hidden">
          {/* TODO: Make the website Mobile Responsive */}
          <Toaster />
          <ScrollIndicatior />
          <div className="overflow-x-hidden">
            <MobHeader />
            <AboutMeMob />
            <IKnow />
          </div>
        </div>
        <div className="hidden lg:block">
          <Toaster />
          <ScrollIndicatior />
          <Header />
          <AboutMe />
          <div id="whatIKnowSection">
            <IKnow />
          </div>
          <WorkExperience />
          <MyProjects />
          <ContactMe />
        </div>
      </PlausibleProvider>
    </>
  );
}
