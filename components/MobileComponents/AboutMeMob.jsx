import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";

const AboutMeMob = () => {
  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: id },
    });
  };

  return (
    <section
      className="scroll-section-outer py-[6rem] overflow-x-hidden"
      id="aboutmemob"
    >
      <div className="flex items-center justify-center flex-col">
        <div className="mb-[2rem] text-center">
          <h1 className="text-5xl mb-[2rem] mx-[1rem]">
            About <br />
            Me
          </h1>
          <span className="text-2xl">Am I Who 🤔?</span>
        </div>
        <div className="about_meme">
          <Image
            src="https://hetref.github.io/portfolio-assets/images/rounded-profile.png"
            alt="Profile"
            className="rounded-full border-[10px] border-[#000000] bg-[#000000]"
            width={240}
            height={240}
          />
        </div>
        <div className="about_content mt-[2rem]">
          <div className="about_headings">
            <p className="text-lg mx-[1rem] font-semibold text-center">
              Innovative Developer with a Focused Mindset and some grammatical
              errors 😁
            </p>
          </div>
          <div className="about_cards">
            <div className="about_card text-center leading-relaxed my-[2rem]">
              Third-year Diploma student in Computer Engineering at Vidyalankar
              Polytechnic, specializing in web development with technologies
              like NextJS and GraphQL, among others. Known for strong
              collaboration and leadership skills. Passionate about football and
              solving Rubik&rsquo;s cubes. Let&rsquo;s collaborate and bring
              ideas to life! Contact me at{" "}
              <a href="mailto:contact@aryanshinde.in" className="underline">
                contact@aryanshinde.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMob;
