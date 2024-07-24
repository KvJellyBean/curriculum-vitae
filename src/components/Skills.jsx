import React from "react";
import Reveal from "./Reveal";
import ShinyEffect from "./ShinyEffect";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

const Skills = () => {
  const { skills } = useOutletContext();

  return (
    <div
      className="mt-24 mb-14 relative px-8 min-h-[84dvh] flex flex-col justify-center items-center text-gray-100"
      id="skills"
    >
      <h2 className="mb-4 text-3xl font-bold text-center">Skills</h2>
      <p className="text-center mb-14">
        I have developed a variety of technical skills through my projects and
        studies.
      </p>

      <Reveal>
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <motion.div
                key={index}
                className="w-full px-4 py-8 pb-14 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <h3 className="mb-8 text-xl font-bold text-center text-gray-300 md:text-2xl">
                  {skill.category}
                </h3>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-7 ">
                  {skill.theSkills.map((tech, idx) => (
                    <div key={idx} className="flex flex-col items-center ">
                      <span className={`text-2xl min-[425px]:text-4xl`}>
                        {tech.icon}
                      </span>
                      <span className="md:text-[1rem]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <hr className="w-full h-4 text-white" />
            </React.Fragment>
          ))}
        </div>
      </Reveal>

      <div className="absolute inset-0 block h-fit -z-50">
        <ShinyEffect />
      </div>
    </div>
  );
};

export default Skills;
