import { ReactNode } from "react";

export interface VgmDemo {
  index: number;
  title: string;
  description: ReactNode; // JSX <p>...</p>
  url: string;
}

export const VgmDemos: VgmDemo[] = [
  {
    index: 0,
    title: "Polka Dot Matrix",
    description: (
      <p>
        A growing collection of short loops exploring the hardware limitations
        of sound chips from old video game systems. Composed using FamiTracker.
      </p>
    ),
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1842729327",
  },
  {
    index: 1,
    title: "Digital Ecosystems",
    description: (
      <p>
        A growing collection of soundscapes that evoke imaginary ecologies. All
        sounds were created in SuperCollider using custom synthesizers and original
        sample libraries. Listen with headphones or stereo monitors.
      </p>
    ),
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902522309&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  // {
  //   index: 2,
  //   title: "Re-score Reel (Coming Soon)",
  //   description: (
  //     <p>
  //       Short music excerpts set to various game footage. Composed using various
  //       orchestra and choir VSTs as well as original percussion ensemble
  //       samples.
  //     </p>
  //   ),
  //   url: ""
  //   // url: "https://www.youtube.com/embed/KNd2-X3-SLE?si=RihfsKQLupAsK3Wk"
  // },
];