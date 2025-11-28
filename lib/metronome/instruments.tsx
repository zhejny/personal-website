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
      "/assets/audio/metronome/gong_wadon.wav",
      "/assets/audio/metronome/gong_lanang.wav",
    ],
    defaultAmp: 1,
    pan: -0.2,
    highpass: 40,
    lowpass: 12000,
  },
  klentong: {
    imgSrc: "/assets/images/metronome/klentong.png",
    samplePaths: ["/assets/audio/metronome/klentong.wav"],
    defaultAmp: 1,
    pan: -0.1,
    highpass: 100,
    lowpass: 12000,
  },
  kempur: {
    imgSrc: "/assets/images/metronome/kempur.png",
    samplePaths: ["/assets/audio/metronome/kempur.wav"],
    defaultAmp: 1,
    pan: -0.15,
    highpass: 60,
    lowpass: 11000,
  },
  klenang: {
    imgSrc: "/assets/images/metronome/klenang.png",
    samplePaths: ["/assets/audio/metronome/klenang.wav"],
    defaultAmp: 1,
    pan: +0.15,
    highpass: 300,
    lowpass: 10000,
  },
  kempli: {
    imgSrc: "/assets/images/metronome/kempli.png",
    samplePaths: ["/assets/audio/metronome/kempli.wav"],
    defaultAmp: 1,
    pan: +0.1,
    highpass: 200,
    lowpass: 10000,
  },
  gentorag: {
    imgSrc: "/assets/images/metronome/gentorag.png",
    samplePaths: ["/assets/audio/metronome/gentorag.wav"],
    defaultAmp: 1,
    pan: +0.25,
    highpass: 200,
    lowpass: 12000,
  },
  kecek: {
    imgSrc: "/assets/images/metronome/kecek.png",
    samplePaths: [
      "/assets/audio/metronome/kecek_right.wav",
      "/assets/audio/metronome/kecek_left.wav",
      "/assets/audio/metronome/kecek_right_loud.wav",
    ],
    defaultAmp: 1,
    pan: +0.4,
    highpass: 800,
    lowpass: 9000,
  },
  jublag: {
    imgSrc: "/assets/images/metronome/jublag.png",
    samplePaths: [
      "/assets/audio/metronome/jublag_01.wav",
      "/assets/audio/metronome/jublag_02.wav",
      "/assets/audio/metronome/jublag_03.wav",
      "/assets/audio/metronome/jublag_04.wav",
      "/assets/audio/metronome/jublag_05.wav",
      "/assets/audio/metronome/jublag_06.wav",
      "/assets/audio/metronome/jublag_07.wav",
    ],
    defaultAmp: 0.5,
    pan: -0.3,
    highpass: 100,
    lowpass: 6000,
  },
  jegogan: {
    imgSrc: "/assets/images/metronome/jegogan.png",
    samplePaths: [
      "/assets/audio/metronome/jegogan_01.wav",
      "/assets/audio/metronome/jegogan_02.wav",
      "/assets/audio/metronome/jegogan_03.wav",
      "/assets/audio/metronome/jegogan_04.wav",
      "/assets/audio/metronome/jegogan_05.wav",
      "/assets/audio/metronome/jegogan_06.wav",
      "/assets/audio/metronome/jegogan_07.wav",
    ],
    defaultAmp: 0.5,
    pan: -0.35,
    highpass: 60,
    lowpass: 5000,
  },
};