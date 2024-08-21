import React from "react";
import { FeaturedAudioData } from "@/public/lib/data";

type FeaturedAudioProps = typeof FeaturedAudioData;

function FeaturedAudio(data: FeaturedAudioProps) {
  return (
    <section className="about-featuredaudio">
      <h1>
        <u>Latest Composition:</u>
      </h1>
      <div>{data.data}</div>
      <audio className="about-featuredaudio-player" src={data.source} controls controlsList="nodownload"></audio>
    </section>
  );
}

export default FeaturedAudio;
