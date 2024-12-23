"use client";

import { experience } from "@/constants";
import React from "react";

// const experience = [
//   {
//     title: "Journey Started",
//     subtitle: "Web Development",
//     description:
//       "I started my Web Development journey with HTML, CSS & JavaScript. Then I learned multiple libraries and framework i.e. ReactJS, JQuery, etc. including NodeJS.",
//     date: "Feb 2020",
//     category: "Story Started",
//   },
//   {
//     title: "Taught Students",
//     subtitle: "Online & Offline",
//     description:
//       "I teach Web Development, and App Development to over 100+ students online and more than 60+ students offline.",
//     date: "Sep 2021 - Present",
//     category: "Passion",
//   },
//   {
//     title: "Selfcare Apparels Intern",
//     subtitle: "Wordpress Developer (Internship)",
//     description:
//       "I was led to update the official website of the company on the daily basis. I used to co-ordinate between my manager and a senior website developer to update the website.",
//     date: "Nov 2021 - Mar 2022",
//     category: "Internship",
//   },
//   {
//     title: "IEEE Bombay Section",
//     subtitle: "IEEE BS SAC (Volunteer)",
//     description:
//       "I was a Operations member at IEEE BS SAC where me and my team handled all the operational work of IEEE BS. Also I was a website chair and food chair at a event named 'IBSYWLC' hosted by IEEE Bs SAC.",
//     date: "2023 - 2024",
//     category: "Volunteering",
//   },
//   {
//     title: "Winner at HACKATHON",
//     subtitle: "TECHNOTHON 2023",
//     description:
//       "Me and my team won a 24-hour hackathon i.e. 'TECHNOTHON 2023' which was conducted by VES Polytechnic in Mumbai.",
//     date: "Apr 2023",
//     category: "Achievement",
//   },
//   {
//     title: "IEEE Bombay Section",
//     subtitle: "Full Stack Developer (Internship)",
//     description:
//       "I was led to make modules for a website which were to be used on the live website. I completed the modules assigned to me and earned LOR from IEEE BS.",
//     date: "Sep 2023 - Oct 2023",
//     category: "Internship",
//   },
//   {
//     title: "Won a Competition",
//     subtitle: "TECHSPARDHA 2023 (VP)",
//     description:
//       "Our team won the project showcase competition, where we won the price for 2 projects, and got a trophy as well as a certificate.",
//     date: "Oct 2023",
//     category: "Achievement",
//   },
//   {
//     title: "Unscrap Media",
//     subtitle: "Website Developer (Internship)",
//     description:
//       "I am led to create & update websites for real clients. I work with Wordpress, Shopify or custom code as per the client's requirements.",
//     date: "Jun 2023 - Apr 2024",
//     category: "Internship",
//   },
//   {
//     title: "Winner at HACKATHON",
//     subtitle: "TECHNOTHON 2024",
//     description:
//       "Me and my team won a 24-hour hackathon i.e. 'TECHNOTHON 2024' which was conducted by VES Polytechnic in Mumbai.",
//     date: "Feb 2024",
//     category: "Achievement",
//   },
//   {
//     title: "Winner at HACKATHON",
//     subtitle: "RECURSION 5.0",
//     description:
//       "Me and my team won a 24-hour hackathon i.e. 'RECURSION 5.0' which was conducted by Rajiv Gandhi Institute of Technology in Andheri, Mumbai.",
//     date: "Mar 2024",
//     category: "Achievement",
//   },
//   {
//     title: "IEEE Bombay Section",
//     subtitle: "Website & Content Team (Volunteer)",
//     description:
//       "I am a part of the website and content team at IEEE BS where I am led to update & fix the website for IEEE Bombay Section.",
//     date: "Mar 2024 - Present",
//     category: "Volunteer",
//   },
// ];

const ExperienceMob = () => {
  return (
    <>
      <div className="px-[4%] py-[6rem] w-full text-center">
        <div>
          <h1 className="text-3xl">Work Experience</h1>
          <span className="text-lg">What have i done so far? 🤔?</span>
        </div>
        <div className="text-left">
          {experience.map((exp, index) => (
            <div key={index} className="relative text-left">
              <div className="mt-8 bg-[#000] text-white px-4 py-6 rounded">
                <div>
                  <h1 className="text-xl font-bold">{exp.title}</h1>
                  <p className="mt-1 text-sm">{exp.subtitle}</p>
                </div>
                <p className="mt-1 text-sm">{exp.date}</p>
                <p className="mt-2 text-sm">{exp.description}</p>
              </div>
              {/* Add a link to center to each card and removed it from the last one */}
              <div className="experiencecardmob" />
              {/* <div className="absolute h-8 bottom-0 bg-white w-2 " /> */}
            </div>
          ))}
        </div>
        <div className="w-full mt-8 bg-black text-white py-2 rounded">
          <span>More is Coming Soon</span>
        </div>
      </div>
    </>
  );
};

export default ExperienceMob;
