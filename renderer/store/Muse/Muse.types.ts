import { MuseMeta } from '../../../shared/types/moth';
import AudioPlayer from '../../lib/audioPlayer';

export enum PlayState {
  playing,
  paused,
}

export enum PlayerActions {
  next,
  previous,
  playPause,
}

export type MuseMap = Map<string, Map<string, MuseMeta[]>>;

export default interface MuseState {
  Muse: MuseMeta[];
  activeMuse: MuseMeta | undefined;
  activeMuseIndex: number | undefined;
  activePlayList: MuseMeta[];
  MuseByAlbum: MuseMap;
  MuseByArtist: MuseMap;
  player: AudioPlayer | undefined;
  playState: PlayState;
  populateMuse: VoidFunction;
  groupByAlbum: VoidFunction;
  groupByArtist: VoidFunction;
  setActiveMuse: (muse: MuseMeta, index: number) => void;
  initializePlayer: VoidFunction;
  setPlayState: (playState: PlayState) => void;
  setActivePlayList: (activePlayList: MuseMeta[]) => void;
  emit: (action: PlayerActions) => Promise<void>;
}
