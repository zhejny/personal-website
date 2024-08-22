import React from "react";
import { VgmDemos } from "@/public/lib/data";

type VgmDemoProps = (typeof VgmDemos)[number];

function MediaDemo({ index, title, description, url }: VgmDemoProps) {
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
