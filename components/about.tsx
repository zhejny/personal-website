import React from "react";
import FeaturedAudio from "./about-featuredaudio";
import { FeaturedAudioData } from "@/public/lib/data";
import Links from "./about-links";
import Image from "next/image";

function About() {
  return (
    <section className="about">
      <div className="about-subsection">
        <Image
          src="/assets/images/retina.jpg"
          alt=""
          width={250} // 200
          height={250} // 314
        ></Image>
        <div className="about-bio">
          <p>
            <b>Zachary Hejny</b> is a California-born composer and performer of
            experimental music residing in Indonesia. His work explores
            polytemporality, incidental tuning systems, ecological sound
            structures, and philosophies of noise. Current projects include
            electro-acoustic instrument building using recycled materials, an
            environmental{" "}
            <a
              className="hyperlink"
              href="https://www.zacharyhejny.com/sound-map"
            >
              sound map
            </a>
            , a metronome app practice aid for Balinese <i>kendang tunggal</i>,
            and various music for visual media. He received a DMA in composition
            from UC Santa Cruz (2021) and currently works as a guest researcher
            at IKIP Saraswati Tabanan.
          </p>
          <br />
          <p>
            Zachary participates in various contemporary music scenes on Bali,
            primarily as an avid student of <i>gender wayang</i>, gamelan
            composer, and performing sound artist. Previous involvement with
            Balinese music includes a Darmasiswa cultural immersion scholarship
            (2012), a master's degree from ISI Denpasar (2015), numerous
            festival commissions (including the Bali Arts Festival in 2017), and
            a Fulbright Student Research grant (2023). He also volunteers as
            Assistant Director and board member for Insitu Recordings, where he
            helps edit a digital magazine, maintain an archive of historical
            gamelan recordings, and document creative work by emerging Balinese
            composers.
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
      <div className="about-subsection">
        <div className="about-featuredaudio">
          <FeaturedAudio {...FeaturedAudioData} />
        </div>
        <div className="about-links">
          <Links />
        </div>
      </div>
    </section>
  );
}

export default About;
