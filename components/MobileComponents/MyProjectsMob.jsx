"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useCallback, useMemo } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/constants";

const MyProjectsMob = () => {
  const [projectsLoaded, setProjectsLoaded] = useState(4);

  const goToLink = useCallback((url) => {
    window.open(url, "_blank");
  }, []);

  const loadMoreProjects = useCallback(() => {
    setProjectsLoaded((prev) => prev + 2);
  }, []);

  const showLessProjects = useCallback(() => {
    setProjectsLoaded(4);
  }, []);

  const displayedProjects = useMemo(
    () => projects.slice(0, projectsLoaded),
    [projectsLoaded]
  );

  return (
    <div className="py-[6rem] px-[4%] bg-[#f5f5f5]">
      <div className="mb-2 text-center">
        <h1 className="header-h">My Works</h1>
        <p className="md:text-4xl text-lg">
          How I applied skills in real-world?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-[2rem]">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative border-2 border-[#000] rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "tween",
            }}
          >
            <div className="project_image">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={250}
                className="object-cover border-b-2 border-[#000b] rounded-t-md"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl">{project.name}</h1>
              <p className="md:text-justify text-sm mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-[#000] text-white px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="absolute top-3 right-3 bg-[#fff] text-black p-2 rounded-full cursor-pointer border-2 border-[#000]"
                onClick={() => goToLink(project.url)}
              >
                <FaExternalLinkAlt />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-4">
        {projectsLoaded < projects.length && (
          <button
            className="bg-[#000] flex justify-center gap-2 items-center text-white px-4 py-2 rounded-md"
            onClick={loadMoreProjects}
          >
            Load More <BsArrowDown />
          </button>
        )}
        {projectsLoaded > 4 && (
          <button
            className="bg-[#000] flex justify-center gap-2 items-center text-white px-4 py-2 rounded-md"
            onClick={showLessProjects}
          >
            Show Less <BsArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProjectsMob;
