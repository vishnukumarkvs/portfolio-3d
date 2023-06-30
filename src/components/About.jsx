"use client";

import React from "react";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "@/lib/utils/styles";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import Image from "next/image";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  console.log(services);
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Experienced Software Engineer proficient in cloud technology and
        software development. Skilled in React, Spring Boot, Spring Cloud,
        Node.js, AWS SDK, Azure, Java, Python, Linux, and Kubernetes.
        Experienced in automation with Terraform, AWS CDK, Ansible, Azure
        DevOps, Jenkins, and ArgoCD. Strong in administration, planning,
        collaboration, innovation, and writing. Holds certifications such as AWS
        Certified Solutions Architect – Associate, Microsoft Certified: Azure
        Solutions Architect Expert, and Microsoft Certified: DevOps Engineer
        Expert. Passionate about technology trends and sharing knowledge through
        writing with 25k+ views on Medium articles. Fluent in English, Hindi,
        and Telugu. Committed to delivering high-quality results.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              {...services}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
