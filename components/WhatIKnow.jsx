import { motion, useInView, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

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
    name: "SCSS",
    percentage: 94,
  },
];

const coreskills = [
  {
    name: "NEXT JS",
    percentage: 80,
  },
  {
    name: "REACT JS",
    percentage: 89,
  },
  {
    name: "TAILWIND CSS",
    percentage: 96,
  },
  {
    name: "NODE JS",
    percentage: 76,
  },
  {
    name: "WORDPRESS",
    percentage: 86,
  },
  {
    name: "JAVA",
    percentage: 75,
  },
  {
    name: "XML",
    percentage: 80,
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
    percentage: 74,
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
];

const WhatIKnow = () => {
  const baseref = useRef(null);
  const isInView = useInView(baseref);

  return (
    <div className="whatiknow_wrapper" id="whatiknow">
      <div className="whatiknow_heading">
        <h1 className="header-h">What I Know</h1>
        <p>Here are some of the technologies I know well</p>
      </div>
      <div className="whatiknow_content_wrapper max-w-7xl w-full">
        <div className="whatiknow_content">
          <div className="whatiknow_box_wrapper">
            <h1>BASE</h1>
            <div className="whatiknow_box_skills" ref={baseref}>
              {baseskills.map((item, index) => (
                <div className="whatiknow_box_skill" key={index}>
                  <span>{item.name}</span>
                  <div className="whatiknow_box_skill_progress">
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${item.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1.5 }}
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
                  <span>{item.name}</span>
                  <div className="whatiknow_box_skill_progress">
                    {/* <div
                      className="whatiknow_box_skill_progress_elem"
                      style={{ width: `${item.percentage}%` }}
                    /> */}
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${item.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1.5 }}
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
                  <span>{item.name}</span>
                  <div className="whatiknow_box_skill_progress">
                    {/* <div
                      className="whatiknow_box_skill_progress_elem"
                      style={{ width: `${item.percentage}%` }}
                    /> */}
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${item.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1.5 }}
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
                  <span>{item.name}</span>
                  <div className="whatiknow_box_skill_progress">
                    {/* <div
                      className="whatiknow_box_skill_progress_elem"
                      style={{ width: `${item.percentage}%` }}
                    /> */}
                    <motion.div
                      className="whatiknow_box_skill_progress_elem"
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${item.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1.5 }}
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

export default WhatIKnow;
