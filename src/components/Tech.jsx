"use client";

import React from "react";
import { technologies } from "@/constants";

import Tilt from "react-parallax-tilt";

import { styles } from "@/lib/utils/styles";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import Image from "next/image";
import { SectionWrapper } from "../hoc";
import { motion, LazyMotion, domAnimation } from "framer-motion";

const SkillCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[5px] rounded-[10px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[10px] py-3 px-8 min-h-[200px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt="web-development"
          className="w-10 h-10 object-contain"
        />

        <h3 className="text-white text-[16px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  console.log("skills", technologies);
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </div>
      <div className="mt-20 ml-4 flex flex-wrap gap-5">
        {technologies.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              title={skill.name}
              icon={skill.icon}
              {...technologies}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
