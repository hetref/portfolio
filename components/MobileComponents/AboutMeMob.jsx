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
          <span className="text-2xl">Who am I 🤔?</span>
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
            <h1 className="text-2xl mx-[1rem] text-center">
              Innovative Developer with a Focused Mindset and some grammatical
              errors 😁
            </h1>
          </div>
          <div className="about_cards">
            <div className="about_card text-justify leading-relaxed my-[2rem]">
              🏫 Thrd-year Diploma student in Compter Engneering at Vidyalankar
              Polytechnic with expertise in web development (NextJS, GraphQL,
              and many more langes) 🪲. Known for colloboration and leadership
              😎. Passionate about foutball ⚽ and solving Rukib&rsquo;s cubes
              🧩. Let us join together to bring the ideas to life. Mel me at{" "}
              <a href="mailto:contact@aryanshinde.in" className="underline">
                contact@aryanshinde.in
              </a>
            </div>
            {/* <motion.div
              className="about_link_card bg-[#000000cc]"
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src="https://hetref.github.io/portfolio-assets/images/whatiknow-min.png"
                alt="What I Know"
                className="p-8 object-cover"
                width={1000}
                height={1000}
              />
              <div
                className="about_link_card_title"
                onClick={() => scrollToSection("#iknow")}
              >
                <h1>What I Know</h1>
                <FaArrowRight />
              </div>
            </motion.div>
            <motion.div
              className="about_link_card bg-[#000000cc]"
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src="https://hetref.github.io/portfolio-assets/images/experience-min.png"
                alt="Work Experience"
                className="p-8 object-cover"
                width={1000}
                height={1000}
              />
              <div
                className="about_link_card_title"
                onClick={() => scrollToSection("#workexperience")}
              >
                <h1>Work Experience</h1>
                <FaArrowRight />
              </div>
            </motion.div>
            <motion.div
              className="about_link_card bg-[#000000cc]"
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src="https://hetref.github.io/portfolio-assets/images/projects-min.png"
                alt="Technologies Preview"
                className="w-full p-8 object-cover"
                width={1000}
                height={1000}
              />
              <div
                className="about_link_card_title"
                onClick={() => scrollToSection("#myprojects_wrapper")}
              >
                <h1>Projects</h1>
                <FaArrowRight />
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMob;
