import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Links() {
  return (
    <section className="about-links">
      {/* <h1>
        <u>More Information: </u>
      </h1> */}
      <a
        className="about-link"
        href="assets/Zachary Hejny CV (2024).pdf"
        target="_blank"
      >
        CV
      </a>
      <a
        className="about-link pt-[0.225rem]"
        href="https://github.com/zhejny"
        target="_blank"
      >
        <FaGithub />
      </a>
      {/* <a
        className="about-link pt-[0.225rem]"
        href="https://www.instagram.com/z_d_v_h/"
        target="_blank"
      >
        <FaInstagram />
      </a> */}
    </section>
  );
}

export default Links;
