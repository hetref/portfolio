"use client";

import {
  Header,
  AboutMe,
  ScrollIndicatior,
  WorkExperience,
  MyProjects,
  ContactMe,
  IKnow,
  Footer,
} from "@/components/index.js";
import {
  MobHeader,
  AboutMeMob,
  ExperienceMob,
  MyProjectsMob,
} from "@/components/mob";
import "@/assets/scss/common.scss";
import LenisScroll from "@/lib/LenisScroll.js";
import { ScrollBasedText } from "@/components/private/ScrollBasedText";
import { useResponsiveJSX } from "@/hooks/useResponsiveJSX";
import MaskedWhatIKnow from "@/components/MaskedWhatIKnow";

export default function Home() {
  const breakpoint = useResponsiveJSX([425]);
  const isMobile = breakpoint === 0;

  return (
    <>
      <LenisScroll />
      <ScrollIndicatior />
      <div className="overflow-x-hidden">
        {isMobile ? (
          <>
            <MobHeader />
            <AboutMeMob />
            <IKnow />
            <ScrollBasedText />
            <ExperienceMob />
            <MyProjectsMob />
            <ContactMe />
            <Footer />
          </>
        ) : (
          <>
            <Header />
            <MaskedWhatIKnow />
            <AboutMe />
            <IKnow />
            <ScrollBasedText />
            <WorkExperience />
            <MyProjects />
            <ContactMe />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
