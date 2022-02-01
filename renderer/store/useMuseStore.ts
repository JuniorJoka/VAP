import create from "zustand";
import channel from "../../shared/lib/ipc-channels";
import { MuseState } from "../lib/types";

export default create<MuseState>((set) => ({
  Muse: [],
  populateMuse: async () => {
    const Muse = await global.ipcRenderer.invoke(channel.muse.READY);
    set({ Muse: Muse });
  },
}));
