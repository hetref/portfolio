import { motion } from "framer-motion";

const baseskills = [
  {
    name: "HTML",
    percentage: 98,
  },
  {
    name: "CSS",
    percentage: 94,
  },
  {
    name: "JS",
    percentage: 96,
  },
  {
    name: "JQUERY",
    percentage: 90,
  },
  {
    name: "XML",
    percentage: 80,
  },
  {
    name: "JAVA",
    percentage: 75,
  },
];

const coreskills = [
  {
    name: "NEXT JS",
    percentage: 90,
  },
  {
    name: "REACT JS",
    percentage: 96,
  },
  {
    name: "NODE JS",
    percentage: 76,
  },
  {
    name: "TAILWIND CSS",
    percentage: 96,
  },
  {
    name: "SCSS",
    percentage: 94,
  },
  {
    name: "GraphQL",
    percentage: 90,
  },
  {
    name: "WORDPRESS",
    percentage: 86,
  },
  {
    name: "CMS",
    percentage: 80,
  },
  {
    name: "Solidity",
    percentage: 70,
  },
];

const databaseskills = [
  {
    name: "FIREBASE",
    percentage: 96,
  },
  {
    name: "SQL",
    percentage: 86,
  },
  {
    name: "MONGODB",
    percentage: 80,
  },
  {
    name: "NEON (Prisma)",
    percentage: 70,
  },
];

const toolskills = [
  {
    name: "CANVA",
    percentage: 98,
  },
  {
    name: "FIGMA",
    percentage: 88,
  },
  {
    name: "GIT",
    percentage: 84,
  },
  {
    name: "GoHighLevel",
    percentage: 40,
  },
  {
    name: "Remix",
    percentage: 70,
  },
];

const IKnow = () => {
  return (
    <div className="whatiknow_wrapper" id="iknow">
      <div className="whatiknow_heading" id="whatIknowMobile">
        <h1 className="header-h">What I Know?</h1>
        <p className="text-lg mx-2 md:text-4xl">
          Here&apos;s the list of langs I know and I&apos;m good at!
        </p>
      </div>
      <div className="whatiknow_content_wrapper max-w-7xl w-full px-[4%]">
        <div className="whatiknow_content">
          <div className="whatiknow_box_wrapper">
            <h1>BASE</h1>
            <div className="whatiknow_box_skills">
              {baseskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>
                    {item.percentage}% - {item.name}
                  </span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      transition={{ duration: 1.5 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      exit={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="whatiknow_box_wrapper">
            <h1>CORE</h1>
            <div className="whatiknow_box_skills">
              {coreskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>
                    {item.percentage}% - {item.name}
                  </span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      transition={{ duration: 1.5 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      exit={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="whatiknow_box_wrapper">
            <h1>DATABASES</h1>
            <div className="whatiknow_box_skills">
              {databaseskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>
                    {item.percentage}% - {item.name}
                  </span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      transition={{ duration: 1.5 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      exit={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="whatiknow_box_wrapper">
            <h1>TOOLS</h1>
            <div className="whatiknow_box_skills">
              {toolskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>
                    {item.percentage}% - {item.name}
                  </span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      transition={{ duration: 1.5 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      exit={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IKnow;
