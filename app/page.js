"use client";

import {
  Navbar,
  Header,
  ScrollInfo,
  ScrollIndicatior,
  AboutMe,
} from "@/components";
import "@/assets/scss/common.scss";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import HorizontalFramer from "@/components/HorizontalFramer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    const raf = async (time) => {
      lenis.raf(time);
      await requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <ScrollIndicatior />
      <Header />
      <ScrollInfo />
      <AboutMe />
      <HorizontalFramer />
      {/* <Header /> */}
    </>
  );
}
