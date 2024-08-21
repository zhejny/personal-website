export const HeaderLinks = [
  {
    name: <text>&#x2698;</text>,
    path: "/",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "VGM",
    path: "vgm",
  },
  {
    name: "Sound Map",
    path: "sound-map",
  },
];

export const FeaturedAudioData = {
  data: [
    <div key="title">
      <b>"Moonridge"</b>
    </div>,
    <p key="description01">
      Commissioned and performed by{" "}
      <a
        className="hyperlink"
        href="https://www.instagram.com/selonding_baliaga/"
        target="_blank"
      >
        Selonding Bali Aga
      </a>
    </p>,
    <p key="description02">Recorded at Pura Dalem Sibetan, 16 January 2024</p>,
  ],
  source: "../assets/audio/Moonridge Mix 01 Master 01 (compressed).mp3",
};

export const VgmDemos = [
  {
    index: 0,
    title: "Polka Dot Matrix",
    description: (
      <p>
        A growing collection of short loops exploring the hardware limitations
        of sound chips from old video game systems. Composed using{" "}
        <a className="hyperlink" href="https://famitracker.com" target="_blank">
          FamiTracker
        </a>
        .
      </p>
    ),
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1842729327",
  },
  {
    index: 1,
    title: "Digital Ecosystems",
    description: (
      <p>
        A growing collection of soundscapes evoking imaginary ecologies. All
        sounds created in SuperCollider using custom synthesizers and original
        sample libraries. Listen with headphones or stereo monitors.
      </p>
    ),
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1842729327",
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

export const SoundMapData = [
  {
    entry: "1",
    location: "Batungsel, Tabanan",
    coordinates: {
      lat: -8.349079136230905,
      lng: 115.0332706244966,
    },
    direction: "south",
    date: "19-Apr-24",
    time: "2300 WITA",
    occasion: "Wayang Peteng, Sanggar Seni Kembang Bali Tunjuk",
    description:
      "Deep into a wayang story: dalang vocalizing and cueing music, gender playing batel, light rain",
    filename: "01_240419_Batungsel.mp3",
  },
  {
    entry: "2",
    location: "Gunung Batukaru, Tabanan",
    coordinates: {
      lat: -8.343333130832791,
      lng: 115.09866322915545,
    },
    direction: "west",
    date: "4-May-24",
    time: "1300 WITA",
    occasion: "Belated birthday hike",
    description: "Resting on the way down: bugs, birds,  heavy dew",
    filename: "02_240504_Gunung Batukaru.mp3",
  },
  {
    entry: "3",
    location: "Bajra Sandhi Monument, Denpasar",
    coordinates: {
      lat: -8.671058363584784,
      lng: 115.23351910756199,
    },
    direction: "north",
    date: "8-May-24",
    time: "1730 WITA",
    occasion: "A free afternoon",
    description:
      "Families enjoying the park, joggers, sports, distant vehicles, parking attendant whistles, critters, wind, rustling leaves",
    filename: "03_240508_Bajra Sandhi.mp3",
  },
  {
    entry: "4",
    location: "Batuaji, Tabanan",
    coordinates: {
      lat: -8.513788983299072,
      lng: 115.10740352190125,
    },
    direction: "north",
    date: "11-Mar-24",
    time: "1330 WITA",
    occasion: "Nyepi (afternoon)",
    description: "Rainfall, birds, bugs, dogs, neighborhood kids",
    filename: "04_240311_Nyepi (afternoon).mp3",
  },
  {
    entry: "5",
    location: "Batuaji, Tabanan",
    coordinates: {
      lat: -8.5137889833,
      lng: 115.107403522,
    },
    direction: "north",
    date: "11-Mar-24",
    time: "2230 WITA",
    occasion: "Nyepi (night)",
    description: "Pitch black: bugs, frogs, dogs",
    filename: "05_240311_Nyepi (night).mp3",
  },
];
