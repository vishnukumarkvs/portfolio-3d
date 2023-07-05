"use client";

import React from "react";
import { motion } from "framer-motion";

import { styles } from "@/lib/utils/styles";
import { github } from "@/assets";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import Image from "next/image";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  cardicon,
}) => {
  return (
    <motion.div
      // variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.05 }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={cardicon}
                alt="source code"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl sm:text-3xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-base sm:text-lg ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary sm:text-xl text-base max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
