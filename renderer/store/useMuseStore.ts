import create from 'zustand';
import channel from '../../shared/lib/ipc-channels';
import { MuseMeta } from '../../shared/types/moth';
import AudioPlayer from '../lib/audioPayer';
import { MuseMapper, MuseState, PlayerActions, PlayState } from '../lib/types';
import { Actions, groupBy } from './utils';

export default create<MuseState>((set, get) => ({
  Muse: [],

  MuseByArtist: new Map(),

  MuseByAlbum: new Map(),

  activeMuse: undefined,
  activeMuseIndex: undefined,

  activePlayList: [],

  player: undefined,

  playState: PlayState.paused,

  populateMuse: async () => {
    const Muse = await global.ipcRenderer.invoke(channel.muse.READY);
    set({ Muse });
  },

  groupByArtist: () => {
    const MuseByArtist: MuseMapper = groupBy(get().Muse, 'artist');
    set({ MuseByArtist });
  },

  groupByAlbum: () => {
    const MuseByAlbum: MuseMapper = groupBy(get().Muse, 'album');
    set({ MuseByAlbum });
  },

  setActiveMuse: async (muse: MuseMeta, index: number) => {
    set({ activeMuse: muse, activeMuseIndex: index });
  },

  initializePlayer: () => set({ player: new AudioPlayer() }),

  setPlayState: (playState: PlayState) => set({ playState }),

  setActivePlayList: (activePlayList: MuseMeta[]) => set({ activePlayList }),

  emit: async (action: PlayerActions) => {
    const activePlaylist = get().activePlayList;
    const activeIndex = get().activeMuseIndex;
    if (!activePlaylist) return;

    switch (action) {
      case PlayerActions.next: {
        const nextActiveIndex = Actions.get.next(activePlaylist.length, activeIndex);
        get().setActiveMuse(activePlaylist[nextActiveIndex], nextActiveIndex);
        break;
      }

      case PlayerActions.previous: {
        const nextActiveIndex = Actions.get.previous(activePlaylist.length, activeIndex);
        get().setActiveMuse(activePlaylist[nextActiveIndex], nextActiveIndex);
        break;
      }

      case PlayerActions.playPause: {
        await Actions.playPause(get().player, get().setPlayState);
        break;
      }

      default:
    }
  },
}));
