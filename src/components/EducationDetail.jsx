import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import ShinyEffect from "./ShinyEffect";

const EducationDetail = () => {
  const params = useParams().id;
  const { educations } = useOutletContext();
  const education = educations.find((education) => education.id == params);

  return (
    <div className="mt-24 mb-14 relative px-8 min-h-[78dvh] flex flex-col justify-center items-center text-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-200 ">
        {education.institution} Experience
      </h2>
      <hr className="w-[280px] h-[.2rem] bg-white mt-8 mb-12" />

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center w-full p-8 sm:gap-8 lg:flex-row max-w-[1300px]">
          <div className="flex items-center justify-center w-full sm:pl-4 sm:w-auto">
            <iframe
              width="280"
              height="200"
              src={education.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-[250px] h-[200px] sm:w-[560px] sm:h-[315px]"
            ></iframe>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start">
            <h3 className="flex text-2xl font-semibold text-center text-gray-100 lg:text-left">
              {education.institution} ({education.period})
            </h3>
            <p className="mt-4 text-center text-gray-400 lg:text-left">
              {education.description}
            </p>
            <p className="mt-4 text-center text-gray-400 lg:text-left">
              Achievement:{" "}
              {education.achievements.length != 0
                ? education.achievements.join(", ")
                : "-"}
            </p>
            <p className="mt-4 text-center text-gray-400 lg:text-left">
              Skill Learned:{" "}
              {education.skills.length != 0 ? education.skills.join(", ") : "-"}
            </p>
            <a
              href={education.link}
              target="_blank"
              className="mt-4 italic text-center text-gray-400 underline lg:text-left"
            >
              {education.institution} Information
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 mt-8 text-xl text-center text-[#ff0151] border-2 border-[#ff0151] rounded-xl hover:bg-[#ff0151] hover:text-white">
        <Link to={-1}>Go Back</Link>
      </div>

      <div className="absolute inset-0 block h-fit sm:h-auto -z-50">
        <ShinyEffect />
      </div>
    </div>
  );
};

export default EducationDetail;
