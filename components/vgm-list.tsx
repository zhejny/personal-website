import React from "react";
import { VgmDemos } from "@/public/lib/data";
import MediaDemo from "./vgm-mediademo";

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
