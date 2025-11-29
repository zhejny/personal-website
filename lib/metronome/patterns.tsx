export type InstrumentPart = {
  onsets: number[];
  durations: number[];
  melody?: number[];
};

export type Pattern = {
  length: number;
  defaultTempo: number;
  instrumentParts: {
    [instrument: string]: InstrumentPart;
  };
};

export type Patterns = {
  [piece: string]: {
    [pattern: string]: Pattern;
  };
};

export const patterns: Patterns = {
  BARONG: {
    baris: {
      length: 32,
      defaultTempo: 135,
      instrumentParts: {
        gong: {
          onsets: [0, 16],
          durations: [8, 8],
          melody: [0, 1],
        },
        klentong: {
          onsets: [8, 24],
          durations: [4, 4],
        },
        klenang: {
          onsets: [4, 12, 20, 28],
          durations: [1, 1, 1, 1],
        },
        kempli: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28],
          durations: [1, 1, 1, 1, 1, 1, 1, 1],
        },
        gentorag: {
          onsets: [0, 16],
          durations: [4, 4],
        },
        kecek: {
          onsets: Array.from({ length: 32 }, (_, i) => i),
          durations: new Array(32).fill(0.5),
          melody: Array.from({ length: 8 }, () => [0, 1, 2, 1]).flat(),
        },
        jublag: {
          onsets: [0, 8, 16, 24],
          durations: [2, 2, 2, 2],
          melody: [5, 4, 1, 2],
        },
        jegogan: {
          onsets: [0, 16],
          durations: [4, 4],
          melody: [5, 1],
        },
      },
    },
    condong: {
      length: 64,
      defaultTempo: 135,
      instrumentParts: {
        gong: {
          onsets: [0, 32],
          durations: [32, 32],
          melody: [0, 1],
        },
        klentong: {
          onsets: [16, 48],
          durations: [32, 32],
        },
        klenang: {
          onsets: [4, 12, 20, 28, 36, 44, 52, 60],
          durations: [1, 1, 1, 1, 1, 1, 1, 1],
        },
        kempli: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60],
          durations: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
        gentorag: {
          onsets: [0, 32],
          durations: [32, 32],
        },
        kecek: {
          onsets: Array.from({ length: 64 }, (_, i) => i),
          durations: new Array(64).fill(0.5),
          melody: Array.from({ length: 16 }, () => [0, 1, 2, 1]).flat(),
        },
        jublag: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60],
          melody: [5, 5, 0, 1, 2, 5, 4, 2, 1, 2, 1, 0, 5, 4, 2, 4],
          durations: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
        jegogan: {
          onsets: [0, 16, 32, 48],
          melody: [5, 2, 1, 5],
          durations: [4, 4, 4, 4],
        },
      },
    },
    "goak macok": {
      length: 32,
      defaultTempo: 135,
      instrumentParts: {
        gong: {
          onsets: [0, 16],
          durations: [8, 8],
          melody: [0, 1],
        },
        klentong: {
          onsets: [8, 24],
          durations: [4, 4],
        },
        klenang: {
          onsets: [4, 12, 20, 28],
          durations: [1, 1, 1, 1],
        },
        kempli: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28],
          durations: [1, 1, 1, 1, 1, 1, 1, 1],
        },
        gentorag: {
          onsets: [0, 16],
          durations: [4, 4],
        },
        kecek: {
          onsets: Array.from({ length: 32 }, (_, i) => i),
          durations: new Array(32).fill(0.5),
          melody: Array.from({ length: 8 }, () => [0, 1, 2, 1]).flat(),
        },
        jublag: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28],
          durations: [1, 1, 1, 1, 1, 1, 1, 1],
          melody: [0, 5, 1, 5, 4, 5, 1, 5],
        },
        jegogan: {
          onsets: [0, 16],
          durations: [4, 4],
          melody: [0, 4],
        },
      },
    },
    omang: {
      length: 32,
      defaultTempo: 135,
      instrumentParts: {
        gong: {
          onsets: [0, 16],
          durations: [8, 8],
          melody: [0, 1],
        },
        klentong: {
          onsets: [8, 24],
          durations: [4, 4],
        },
        klenang: {
          onsets: [4, 12, 20, 28],
          durations: [1, 1, 1, 1],
        },
        kempli: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28],
          durations: [1, 1, 1, 1, 1, 1, 1, 1],
        },
        gentorag: {
          onsets: [0, 16],
          durations: [4, 4],
        },
        kecek: {
          onsets: Array.from({ length: 64 }, (_, i) => i),
          durations: new Array(64).fill(0.5),
          melody: Array.from({ length: 16 }, () => [0, 1, 2, 1]).flat(),
        },
        jublag: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28],
          durations: [1, 1, 1, 1, 1, 1, 1, 1],
          melody: [1, 2, 4, 2, 1, 2, 4, 2],
        },
        jegogan: {
          onsets: [0, 16, 24],
          durations: [4, 2, 2],
          melody: [1, 1, 4],
        },
      },
    },
  },
  "JAUK KERAS": {
    bapang: {
      length: 32,
      defaultTempo: 135,
      instrumentParts: {
        gong: {
          onsets: [0],
          durations: [8],
        },
        klentong: {
          onsets: [16],
          durations: [8],
        },
        klenang: {
          onsets: [4, 12, 20, 28],
          durations: [1, 1, 1, 1],
        },
        kempli: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28],
          durations: [1, 1, 1, 1, 1, 1, 1, 1],
        },
        gentorag: {
          onsets: [0],
          durations: [8],
        },
        kecek: {
          onsets: Array.from({ length: 64 }, (_, i) => i),
          durations: new Array(64).fill(0.5),
          melody: Array.from({ length: 16 }, () => [0, 1, 2, 1]).flat(),
        },
        jublag: {
          onsets: [0, 4, 8, 12, 16, 20, 24, 28],
          durations: [1, 1, 1, 1, 1, 1, 1, 1],
          melody: [1, 4, 5, 0, 1, 4, 5, 0],
        },
        jegogan: {
          onsets: [0, 16, 24],
          durations: [4, 2, 2],
          melody: [1, 1, 5],
        },
      },
    },
    pengadeng: {
      length: 128,
      defaultTempo: 117,
      instrumentParts: {
        gong: {
          onsets: [0],
          durations: [32],
        },
        klentong: {
          onsets: [64],
          durations: [32],
        },
        klenang: {
          onsets: [8, 24, 40, 56, 72, 88, 104, 120],
          durations: [2, 2, 2, 2, 2, 2, 2, 2],
        },
        kempli: {
          onsets: [0, 16, 32, 48, 64, 80, 96, 112],
          durations: [4, 4, 4, 4, 4, 4, 4, 4],
        },
        gentorag: {
          onsets: [0],
          durations: [32],
        },
        kecek: {
          onsets: Array.from({ length: 128 }, (_, i) => i),
          durations: new Array(128).fill(0.5),
          melody: Array.from({ length: 32 }, () => [0, 1, 2, 1]).flat(),
        },
        jublag: {
          onsets: [
            0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120,
          ],
          durations: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
          melody: [1, 5, 4, 0, 5, 4, 2, 4, 1, 2, 4, 0, 5, 1, 0, 2],
        },
        jegogan: {
          onsets: [0, 32, 64, 96],
          durations: [8, 8, 8, 8],
          melody: [1, 5, 1, 5],
        },
      },
    },
  },
  "KEBYAR DUDUK": {
    pengipuk: {
      length: 192,
      defaultTempo: 117,
      instrumentParts: {
        gong: {
          onsets: [0, 176],
          durations: [48, 4],
          melody: [0, 1],
        },
        klentong: {
          onsets: [128],
          durations: [48],
        },
        kempur: {
          onsets: [64, 160, 180, 188],
          durations: [16, 5, 2, 1],
        },
        kempli: {
          onsets: Array.from({ length: 48 }, (_, i) => i * 4),
          durations: Array(48).fill(1),
        },
        gentorag: {
          onsets: [0],
          durations: [48],
        },
        kecek: {
          onsets: Array.from({ length: 192 }, (_, i) => i),
          durations: new Array(192).fill(0.5),
          melody: Array.from({ length: 48 }, () => [0, 1, 2, 1]).flat(),
        },
        jublag: {
          onsets: Array.from({ length: 24 }, (_, i) => i * 8),
          durations: Array(24).fill(2),
          melody: [
            5, 0, 5, 2, 5, 0, 5, 2, 4, 4, 0, 4, 5, 0, 5, 2, 5, 0, 5, 2, 1, 1, 5,
            2,
          ],
        },
        jegogan: {
          onsets: [
            0, 16, 32, 48, 64, 80, 96, 112, 120, 128, 144, 152, 160, 176, 184,
          ],
          durations: [4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 2, 2, 4, 2, 2],
          melody: [5, 5, 5, 5, 4, 0, 5, 5, 2, 5, 5, 2, 1, 5, 2],
        },
      },
    },
  },
};
