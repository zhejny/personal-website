import { ReactNode } from 'react';

export type HeaderLink = {
  name: string | ReactNode;
  path: string;
}

export const HeaderLinks: HeaderLink[] = [
  {
    name: <text>&#x2698;</text>,
    path: "/",
  },
  {
    name: "about",
    path: "about",
  },
  // {
  //   name: "VGM",
  //   path: "vgm",
  // },
  {
    name: "map",
    path: "sound-map",
  },
  {
    name: "metronome",
    path: "metronome"
  }
];