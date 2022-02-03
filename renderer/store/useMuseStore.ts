import create from "zustand";
import channel from "../../shared/lib/ipc-channels";
import { MuseMeta } from "../../shared/types/moth";
import { AudioPlayer } from "../lib/audioPayer";
import { MuseMapper, MuseState, PlayState } from "../lib/types";

export default create<MuseState>((set, get) => ({
  Muse: [],

  MuseByArtist: new Map(),

  MuseByAlbum: new Map(),

  activeMuse: undefined,

  player: undefined,

  playState: PlayState.paused,

  populateMuse: async () => {
    const Muse = await (global.ipcRenderer as Electron.IpcRenderer).invoke(channel.muse.READY);
    set({ Muse });
  },

  groupByArtist: () => {
    const MuseByArtist: MuseMapper = new Map();
    const allMuse = get().Muse;

    allMuse.map((muse) => {
      let initial = muse.artist[0].toUpperCase();
      const isNonLetter = initial.toLowerCase() === initial.toUpperCase();
      // replace non-character initials with a pound sign
      if (isNonLetter) {
        initial = "#";
      }
      // initialize non-existing keys to an empty array
      if (!MuseByArtist.has(initial)) {
        MuseByArtist.set(initial, new Map());
      }

      const existingData = MuseByArtist.get(initial);
      const content = (existingData.get(muse.artist) || []).concat(muse);
      existingData.set(muse.artist, content);

      MuseByArtist.set(initial, existingData);
    });

    set({ MuseByArtist });
  },

  groupByAlbum: () => {
    const MuseByAlbum: MuseMapper = new Map();
    const allMuse = get().Muse;

    allMuse.map((muse) => {
      let initial = muse.album[0].toUpperCase();
      const isNonLetter = initial.toLowerCase() === initial.toUpperCase();

      if (isNonLetter) {
        initial = "#";
      }

      if (!MuseByAlbum.has(initial)) {
        MuseByAlbum.set(initial, new Map());
      }

      const existingData = MuseByAlbum.get(initial);
      const content = (existingData.get(muse.album) || []).concat(muse);
      existingData.set(muse.album, content);

      MuseByAlbum.set(initial, existingData);
    });

    set({ MuseByAlbum });
  },

  setActiveMuse: (muse: MuseMeta) => {
    set({ activeMuse: muse });
  },

  initializePlayer: () => set({ player: new AudioPlayer() }),

  setPlayState: (playState: PlayState) => set({ playState }),
}));
