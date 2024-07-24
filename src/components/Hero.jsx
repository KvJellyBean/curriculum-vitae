import React from "react";
import profilepic from "../assets/me.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiPostgresql,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CV from "../../CV.pdf";

const Hero = () => {
  return (
    <section className="mt-24 lg:pt-[4.5rem] max-w-[1300px] mx-auto relative px-4 sm:px-10 min-h-[84dvh] flex flex-col place-content-center">
      <div className="grid gap-8 md:grid-cols-2 place-items-center md:max-lg:mr-8">
        <div className="relative flex order-1">
          <motion.img
            src={profilepic}
            alt="Kevin Natanael profile pricture"
            width={280}
            height={500}
            className="w-[280px] md:w-[450px] h-auto object-cover brightness-[.9] z-[5] relative md:top-[-1rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.svg
            className="w-full absolute -z-[5]"
            fill="transparent"
            viewBox="0 0 500 500"
            xmlns={"http://www.w3.org/2000/svg"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <motion.circle
              cx="250"
              cy="250"
              r="200"
              stroke="#ff0151"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              className="bg-[#ff0151]"
              animate={{
                strokeDasharray: ["0 100", "80 20", "40 60", "100 0"],
                strokeDashoffset: [0, -50, -100, -150],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.circle
              cx="250"
              cy="250"
              r="150"
              stroke="#e184a1"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "15 50 0 0" }}
              animate={{
                strokeDasharray: ["0 100", "80 20", "40 60", "100 0"],
                strokeDashoffset: [0, -50, -100, -150],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center order-2 text-center md:text-left md:items-start lg:order-2"
        >
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "FrontEnd Developer",
              1000,
              "BackEnd Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="mb-4 text-xl italic font-bold text-[#d29ead] md:text-3xl xl:text-5xl"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 text-5xl tracking-tight text-gray-200 md:text-7xl"
          >
            HEY, I AM <br />
            <span className="font-bold text-[#ff0151]">KEVIN NATANAEL</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I'm an undergraduate student passionate about building great
            websites and apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0 max-[325px]:gap-2"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              className="z-10 flex w-fit"
            >
              <a
                href={CV}
                download={"Curriculum Vitae - Kevin Natanael.pdf"}
                target="_blank"
                className="z-10 p-4 font-bold border-2 text-[#ff0151] border-[#ff0151] cursor-pointer md:w-auto rounded-xl hover:bg-[#ff0151] hover:text-white"
              >
                Download CV
              </a>
            </motion.button>

            <div className="z-20 flex flex-row gap-3 text-4xl text-[#ff0151] sm:gap-6 md:text-6xl">
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link
                  to="https://github.com/KvJellyBean"
                  target="_blank"
                  className="hover:text-white"
                  aria-label="Github link to Kevin's github"
                >
                  <AiOutlineGithub />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <Link
                  to="https://www.linkedin.com/in/kevin-natanael-44929b26b/"
                  target="_blank"
                  className="hover:text-sky-500"
                  aria-label="Linkedin link to Kevin's linkedin"
                >
                  <AiOutlineLinkedin />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <Link
                  to="https://www.instagram.com/natanvinx"
                  target="_blank"
                  className="hover:text-[#833ab4]"
                  aria-label="Instagram link to Kevin's instagram"
                >
                  <AiOutlineInstagram />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex flex-col items-center justify-center w-full px-0 py-24 sm:px-12 md:flex-row text-7xl md:px-0"
      >
        <p className="text-center text-gray-200">My Tech Stack</p>
        <div className="flex flex-wrap items-center justify-center">
          <DiHtml5 className="mx-2 text-orange-600 w-[2.5rem] lg:w-auto" />
          <DiCss3 className="mx-2 text-blue-600 w-[2.5rem] lg:w-auto" />
          <DiJavascript1 className="mx-2 text-yellow-500 w-[2.5rem] lg:w-auto" />
          <DiReact className="mx-2 text-sky-400 w-[2.5rem] lg:w-auto" />
          <DiNodejsSmall className="mx-2 text-green-500 w-[2.5rem] lg:w-auto" />
          <DiPostgresql className="mx-2 text-blue-500 w-[2.5rem] lg:w-auto" />
          <SiExpress className="mx-2 text-white w-[2.5rem] lg:w-auto" />
        </div>
      </motion.div>

      <div className="absolute inset-0 block h-fit sm:h-auto -z-50">
        <ShinyEffect />
      </div>
    </section>
  );
};

export default Hero;
