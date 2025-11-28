"use client"
import React from "react";
import Image from "next/image";


function About() {
  return (
    <section className="about">
      <div className="about-subsection">
        <Image
          src="/assets/images/pindekan and megaphone.jpg"
          alt=""
          height={300} // 314
          width={200}
        ></Image>
        <div className="about-bio">
          <p>
            <b>Zachary Hejny</b> (*1988) is a California-born composer and performer of
            experimental music residing in Indonesia. His work explores
            polytemporality, incidental tuning systems, ecological sound
            structures, and philosophies of noise. Current projects include
            electro-acoustic instrument building using recycled materials, an
            environmental sound map, a metronome app practice aid for Balinese <i>kendang tunggal</i>,
            and various music for visual media. He received a DMA in composition
            from UC Santa Cruz (2021) and currently works as a visiting performing arts researcher
            at IKIP Saraswati in Bali and Assistant Director of Insitu Recordings.
          </p>
          <br />
          <p>
            Email:{" "}
            <a className="hyperlink" href="mailto:zachary.hejny@gmail.com">
              zachary.hejny@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
