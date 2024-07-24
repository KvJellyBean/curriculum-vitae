import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import Reveal from "./Reveal";
import ShinyEffect from "./ShinyEffect";
import { Link, useOutletContext } from "react-router-dom";

const Portfolio = () => {
  const { projects } = useOutletContext();
  return (
    <div
      className="max-w-[1000px] mt-24 mb-14 mx-auto relative px-8 min-h-[84dvh] flex flex-col justify-center items-center text-gray-100 gap-8"
      id="portfolio"
    >
      <h2 className="text-3xl font-bold text-gray-200">Portfolio</h2>
      <p className="mb-8 -mt-4 text-center">
        Here are some of my projects. You can find more on my{" "}
        <a
          href="https://github.com/KvJellyBean"
          target="_blank"
          className="font-bold"
        >
          GitHub
        </a>
        .
      </p>

      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            key={index}
            className={`flex flex-col md:flex-row border-2 md:border-0 shadow-xl sm:gap-4 rounded-md ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full overflow-hidden md:w-1/2">
              <Link
                to={
                  project.links.site ? project.links.site : project.links.github
                }
                target="_blank"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full overflow-hidden transition duration-300 rounded-b-none shadow-lg md:rounded-lg hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center w-full px-4 py-6 ob-8 md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                {project.title}
              </h3>
              <p className="mb-8 text-gray-300">{project.description}</p>
              <div className="flex gap-4 max-[350px]:flex-col max-[350px]:items-start">
                {project.links.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    className="px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-[#82002A] hover:bg-[#d5507a] flex justify-center items-center"
                  >
                    <BiLinkExternal /> &nbsp; View Site
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-[#82002A] hover:bg-[#d5507a] flex justify-center items-center"
                  >
                    <AiOutlineGithub /> &nbsp; Github
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}

      <div className="absolute inset-0 block h-fit -z-50">
        <ShinyEffect />
      </div>
    </div>
  );
};

export default Portfolio;
