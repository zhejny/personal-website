import React from "react";
import MediaDemo from "./vgm-mediademo";
import { VgmDemos } from "@/lib/VgmDemos";

function VgmList() {
  return (
    <section className="vgm-list">
      {VgmDemos.map((demo, index) => (
        <React.Fragment key={index}>
          <MediaDemo {...demo} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default VgmList;
