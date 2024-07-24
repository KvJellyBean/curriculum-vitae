import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { GrTask } from "react-icons/gr";

const Navbar = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const isActive = (path) => location.pathname === path;

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-screen bg-opacity-70 backdrop-blur-md">
      <div
        className="max-w-[1300px] mx-auto  flex justify-between text-white
        text-xl items-center px-12 h-20"
      >
        <Link to="/" className="z-50 text-2xl font-bold lg:text-3xl">
          Kevin N.
        </Link>

        <nav>
          <ul className="z-10 hidden gap-12 cursor-pointer md:flex">
            <li>
              <Link
                to="/"
                className={`py-2 border-b-2 ${
                  isActive("/")
                    ? "font-bold border-[#ff0151]"
                    : "border-transparent font-normal"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`py-2 border-b-2 ${
                  isActive("/skills")
                    ? "font-bold border-[#ff0151]"
                    : "border-transparent font-normal"
                }`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className={`py-2 border-b-2 ${
                  isActive("/education")
                    ? "font-bold border-[#ff0151]"
                    : "border-transparent font-normal"
                }`}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`py-2 border-b-2 ${
                  isActive("/portfolio")
                    ? "font-bold border-[#ff0151]"
                    : "border-transparent font-normal"
                }`}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>

        <div onClick={toggleNav} className="z-50 text-white md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.nav
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 z-40 w-full min-h-screen bg-[#160208]"
        >
          <ul className="py-6 pt-8 mt-20 space-y-8 text-xl font-semibold text-center border-t-2">
            <li>
              <Link
                to="/"
                onClick={closeNav}
                className="flex flex-row items-center justify-center gap-2 p-2 hover:bg-white hover:text-[#160208]"
              >
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={closeNav}
                className="flex flex-row items-center justify-center gap-2 p-2 hover:border-2 hover:bg-white hover:text-[#160208]"
              >
                <FaUserCheck />
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                onClick={closeNav}
                className="flex flex-row items-center justify-center gap-2 p-2 hover:border-2 hover:bg-white hover:text-[#160208]"
              >
                <BsFillClipboard2DataFill />
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={closeNav}
                className="flex flex-row items-center justify-center gap-2 p-2 hover:border-2 hover:bg-white hover:text-[#160208]"
              >
                <GrTask />
                Portfolio
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
