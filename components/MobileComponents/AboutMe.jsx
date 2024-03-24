import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const AboutMeMob = () => {
  return (
    <section
      className="scroll-section-outer py-[6rem] overflow-x-hidden"
      id="aboutme"
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
              I am a creative developer with crazy & more focused mindset
            </h1>
          </div>
          <div className="about_cards">
            <div className="about_card text-justify leading-relaxed my-[2rem]">
              I am a skilled Full stack Web Developer 🧑‍💻 with experience in
              JavaScript, Animations, and better at frameworks like React,
              Node.js, and Three.js. I am a good team player 🤟 and collaborate
              closely with clients to create efficient, scalable, and
              user-friendly solutions that solve real-world problems 🔗. Let us
              join together to bring the ideas to life 🤝!
            </div>
            <motion.div
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
              <div className="about_link_card_title">
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
              <div className="about_link_card_title">
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
              <div className="about_link_card_title">
                <h1>Projects</h1>
                <FaArrowRight />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMob;
