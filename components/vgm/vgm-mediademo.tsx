import { VgmDemo } from "@/lib/VgmDemos";
import React from "react";

function MediaDemo({ index, title, description, url }: VgmDemo) {
  return (
    <section className="vgm-demo">
      {/* Title & Description */}
      <div className="vgm-demo-text">
        <h1 className="text-xl font-bold">{title}</h1>
        <div>{description}</div>
      </div>

      {/* Media Player */}
      <iframe className="vgm-demo-media" src={url}></iframe>
    </section>
  );
}

export default MediaDemo;
