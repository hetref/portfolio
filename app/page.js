"use client";

import {
  Header,
  AboutMe,
  ScrollIndicatior,
  OverlayAnim,
  WhatIKnow,
  WorkExperience,
} from "@/components";
import "@/assets/scss/common.scss";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import useLoaderStore from "@/stores/loader";
import Loading from "@/components/Loading";
import MyProjects from "@/components/MyProjects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  const [loadingState] = useLoaderStore((state) => [state.loadingState]);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {});

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <ScrollIndicatior />
      {/* {loadingState && <Loading />} */}
      <Header />
      <AboutMe />
      <WhatIKnow />
      <WorkExperience />
      <MyProjects />
      <ContactMe />
      {/* <OverlayAnim /> */}
    </>
  );
}
