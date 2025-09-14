"use client";

import {
  Header,
  ScrollIndicatior,
  WorkExperience,
  MyProjects,
  ContactMe,
  IKnow,
  Footer,
} from "@/components/index.js";
import "@/assets/scss/common.scss";
import LenisScroll from "@/lib/LenisScroll.js";
import { ScrollBasedText } from "@/components/private/ScrollBasedText";
import MaskedWhatIKnow from "@/components/MaskedWhatIKnow";

export default function Home() {
  return (
    <>
      <LenisScroll />
      <ScrollIndicatior />
      <div className="overflow-x-hidden">
          <Header />
          <MaskedWhatIKnow />
          <IKnow />
          <ScrollBasedText />
          <WorkExperience />
          <MyProjects />
          <ContactMe />
          <Footer />
      </div>
    </>
  );
}
