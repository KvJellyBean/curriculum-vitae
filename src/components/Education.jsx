import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ShinyEffect from "./ShinyEffect";
import { Link, useOutletContext } from "react-router-dom";

const Education = () => {
  const { educations } = useOutletContext();
  return (
    <div className="mt-24 mb-14 relative px-8 min-h-[84dvh] flex flex-col justify-center items-center text-gray-100">
      <h2 className="mb-12 text-3xl font-bold text-center text-gray-200">
        Education
      </h2>
      <motion.div
        className="flex flex-col items-center justify-center gap-8 "
        initial="hidden"
        animate="visible"
      >
        {educations.map((education, index) => (
          <Reveal key={index} width="90%">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="max-w-[900px]"
            >
              <Link
                to={`/education/${education.id}`}
                className="flex flex-col p-8 items-center w-full justify-center border border-white rounded-lg shadow-md sm:gap-8 sm:flex-row bg-[#82002A40] hover:scale-95 hover:bg-[#d5507a50] hover:rounded-md transition duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center w-full sm:pl-4 sm:w-auto">
                  <img
                    src={education.image}
                    alt={`${education.institution} Logo`}
                    width={300}
                    height={400}
                    className="object-contain w-[300px] h-[200px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-center sm:items-start">
                  <h2 className="text-2xl font-semibold text-center text-gray-100 sm:text-left">
                    {education.institution}
                  </h2>
                  <p className="text-center text-gray-300 sm:text-left">
                    {education.period}
                  </p>
                  <p className="mt-4 text-center text-gray-400 sm:text-left">
                    {education.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>

      <div className="absolute inset-0 block h-fit -z-50">
        <ShinyEffect />
      </div>
    </div>
  );
};

export default Education;
