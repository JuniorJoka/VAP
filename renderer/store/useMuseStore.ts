import create from "zustand";
import channel from "../../shared/lib/ipc-channels";
import { MuseMeta } from "../../shared/types/moth";
import { AudioPlayer } from "../lib/audioPayer";
import { MuseMapper, MuseState, PlayState } from "../lib/types";
import { groupBy } from "./utils";

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
    const MuseByArtist: MuseMapper = groupBy(get().Muse, "artist");
    set({ MuseByArtist });
  },

  groupByAlbum: () => {
    const MuseByAlbum: MuseMapper = groupBy(get().Muse, "album");
    set({ MuseByAlbum });
  },

  setActiveMuse: (muse: MuseMeta) => set({ activeMuse: muse }),

  initializePlayer: () => set({ player: new AudioPlayer() }),

  setPlayState: (playState: PlayState) => set({ playState }),
}));
