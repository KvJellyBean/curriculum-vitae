import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center px-4 py-2 text-center text-white border-t md:border-none">
      <p>
        &copy; 2024{" "}
        <a
          href="https://github.com/KvJellyBean"
          target="_blank"
          rel="noopener noreferrer"
        >
          KvJellyBean
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
