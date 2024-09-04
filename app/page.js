"use client";

import {
  Header,
  AboutMe,
  ScrollIndicatior,
  WorkExperience,
  MyProjects,
  ContactMe,
} from "@/components/index.js";
import {
  MobHeader,
  AboutMeMob,
  ExperienceMob,
  MyProjectsMob,
} from "@/components/mob";
import "@/assets/scss/common.scss";
import IKnow from "@/components/IKnow";
import Footer from "@/components/Footer";
import LenisScroll from "@/lib/LenisScroll.js";
import { ScrollBasedText } from "@/components/private/ScrollBasedText";
import { useResponsiveJSX } from "@/hooks/useResponsiveJSX";

export default function Home() {
  const breakpoint = useResponsiveJSX([425]);

  return (
    <>
      <LenisScroll />
      {breakpoint === 0 && (
        <div className="lg:hidden">
          <ScrollIndicatior />
          <div className="overflow-x-hidden">
            <MobHeader />
            <AboutMeMob />
            <IKnow />
            <ScrollBasedText />
            <ExperienceMob />
            <MyProjectsMob />
            <ContactMe />
            <Footer />
          </div>
        </div>
      )}
      {breakpoint === 1 && (
        <div className="hidden lg:block">
          <ScrollIndicatior />
          <Header />
          <AboutMe />
          <div id="whatIKnowSection">
            <IKnow />
          </div>
          <ScrollBasedText />
          <WorkExperience />
          <MyProjects />
          <ContactMe />
          <Footer />
        </div>
      )}
    </>
  );
}
