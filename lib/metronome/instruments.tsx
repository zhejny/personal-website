export type Instrument = {
  imgSrc: string;
  samplePaths: string[];
  defaultAmp: number;
  pan?: number;
  highpass?: number;
  lowpass?: number;
};

export type InstrumentCollection = Record<string, Instrument>;

export const instruments: InstrumentCollection = {
  gong: {
    imgSrc: "/assets/images/metronome/gong.png",
    samplePaths: [
      "/assets/audio/metronome/gong_wadon.mp3",
      "/assets/audio/metronome/gong_lanang.mp3",
    ],
    defaultAmp: 1,
    pan: 0,
    highpass: 40,
    lowpass: 12000,
  },
  klentong: {
    imgSrc: "/assets/images/metronome/klentong.png",
    samplePaths: ["/assets/audio/metronome/klentong.mp3"],
    defaultAmp: 1,
    pan: -0.1,
    highpass: 100,
    lowpass: 12000,
  },
  kempur: {
    imgSrc: "/assets/images/metronome/kempur.png",
    samplePaths: ["/assets/audio/metronome/kempur.mp3"],
    defaultAmp: 1,
    pan: 0.1,
    highpass: 60,
    lowpass: 11000,
  },
  klenang: {
    imgSrc: "/assets/images/metronome/klenang.png",
    samplePaths: ["/assets/audio/metronome/klenang.mp3"],
    defaultAmp: 0.7,
    pan: +0.25,
    highpass: 300,
    lowpass: 10000,
  },
  kempli: {
    imgSrc: "/assets/images/metronome/kempli.png",
    samplePaths: ["/assets/audio/metronome/kempli.mp3"],
    defaultAmp: 1,
    pan: 0,
    highpass: 200,
    lowpass: 10000,
  },
  gentorag: {
    imgSrc: "/assets/images/metronome/gentorag.png",
    samplePaths: ["/assets/audio/metronome/gentorag.mp3"],
    defaultAmp: 0.65,
    pan: -0.25,
    highpass: 200,
    lowpass: 12000,
  },
  kecek: {
    imgSrc: "/assets/images/metronome/kecek.png",
    samplePaths: [
      "/assets/audio/metronome/kecek_right.mp3",
      "/assets/audio/metronome/kecek_left.mp3",
      "/assets/audio/metronome/kecek_right_loud.mp3",
    ],
    defaultAmp: 0.7,
    pan: 0,
    highpass: 800,
    lowpass: 9000,
  },
  jublag: {
    imgSrc: "/assets/images/metronome/jublag.png",
    samplePaths: [
      "/assets/audio/metronome/jublag_01.mp3",
      "/assets/audio/metronome/jublag_02.mp3",
      "/assets/audio/metronome/jublag_03.mp3",
      "/assets/audio/metronome/jublag_04.mp3",
      "/assets/audio/metronome/jublag_05.mp3",
      "/assets/audio/metronome/jublag_06.mp3",
      "/assets/audio/metronome/jublag_07.mp3",
    ],
    defaultAmp: 0.5,
    pan: -0.1,
    highpass: 100,
    lowpass: 6000,
  },
  jegogan: {
    imgSrc: "/assets/images/metronome/jegogan.png",
    samplePaths: [
      "/assets/audio/metronome/jegogan_01.mp3",
      "/assets/audio/metronome/jegogan_02.mp3",
      "/assets/audio/metronome/jegogan_03.mp3",
      "/assets/audio/metronome/jegogan_04.mp3",
      "/assets/audio/metronome/jegogan_05.mp3",
      "/assets/audio/metronome/jegogan_06.mp3",
      "/assets/audio/metronome/jegogan_07.mp3",
    ],
    defaultAmp: 0.5,
    pan: 0.1,
    highpass: 60,
    lowpass: 5000,
  },
};