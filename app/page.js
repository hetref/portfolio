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
import { Toaster } from "react-hot-toast";
import IKnow from "@/components/IKnow";
import Footer from "@/components/Footer";
import LenisScroll from "@/lib/LenisScroll.js";

export default function Home() {
  return (
    <>
      <Toaster />
      <LenisScroll />
      <div className="lg:hidden">
        <ScrollIndicatior />
        <div className="overflow-x-hidden">
          <MobHeader />
          <AboutMeMob />
          <IKnow />
          <ExperienceMob />
          <MyProjectsMob />
          <ContactMe />
          <Footer />
        </div>
      </div>
      <div className="hidden lg:block">
        <ScrollIndicatior />
        <Header />
        <AboutMe />
        <div id="whatIKnowSection">
          <IKnow />
        </div>
        <WorkExperience />
        <MyProjects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
