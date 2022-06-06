import { MuseMeta } from '../../shared/types/moth';
import AudioPlayer from '../lib/audioPlayer';
import DIALOGS from '../lib/constants/dialogs';
import { MuseMap, PlayState } from './Muse';
import { DialogType } from './Dialog';

export const groupBy = (items: MuseMeta[], key: string): MuseMap => {
  const MuseBy: MuseMap = new Map();

  items.map((muse) => {
    let initial = muse[key][0].toUpperCase();
    const isNonLetter = initial.toLowerCase() === initial.toUpperCase();
    // replace non-character initials with a pound sign
    if (isNonLetter) {
      initial = '#';
    }
    // initialize non-existing keys to an empty array
    if (!MuseBy.has(initial)) {
      MuseBy.set(initial, new Map());
    }

    const existingData = MuseBy.get(initial) as Map<string, MuseMeta[]>;
    const content = (existingData.get(muse[key]) || []).concat(muse);
    existingData.set(muse[key], content);

    MuseBy.set(initial, existingData);
    return null;
  });

  return MuseBy;
};

export const Actions = {
  get: {
    next: (size: number, currIndex: number): number => (currIndex + 1) % size,
    previous: (size: number, currIndex: number): number => {
      if (currIndex - 1 < 0) return 0;
      return currIndex - 1;
    },
  },

  playPause: async (player: AudioPlayer, set: (playState: PlayState) => void) => {
    if (player.isPaused()) {
      await player.play();
      set(PlayState.playing);
    } else {
      player.pause();
      set(PlayState.paused);
    }
  },
};

const defaultDialog = {
  open: false,
};

export const storeInit = () => {
  const result = new Map();
  // TODO: Investigate reason constant DIALOGS emits error
  [0, 1].map((storeName) => result.set(storeName, defaultDialog));
  return result;
};
