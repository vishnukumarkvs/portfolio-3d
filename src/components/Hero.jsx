"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/lib/utils/styles";
import { ComputersCanvas } from "./canvas";
import { externalLinks } from "@/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-[80%] h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Vishnu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Software Engineer <br className="sm:block hidden" />
            with expertise in Cloud Computing <br className="sm:block hidden" />
            and Full Stack Development
          </p>
          <div className="flex justify-start items-center w-full h-full gap-2 mt-5">
            {externalLinks.map((item, index) => {
              return (
                <div key={index} className="cursor-pointer z-10">
                  <div onClick={() => window.open(item.link, "_blank")}>
                    <Image
                      width={32}
                      height={32}
                      src={item.icon}
                      alt={item.link}
                      className="rounded-md p-1 bg-gray-200"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-cente items-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
