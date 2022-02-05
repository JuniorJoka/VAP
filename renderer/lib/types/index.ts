import { MuseMeta } from "../../../shared/types/moth";
import { AudioPlayer } from "../audioPayer";

export enum PlayState {
  playing,
  paused,
}

export enum PlayerActions {
  next,
  previous,
  playPause,
}
export interface MuseState {
  Muse: MuseMeta[];
  activeMuse: MuseMeta;
  activeMuseIndex: number;
  activePlayList: MuseMeta[];
  MuseByAlbum: MuseMapper;
  MuseByArtist: MuseMapper;
  player: AudioPlayer;
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

export type MuseMapper = Map<string, Map<string, MuseMeta[]>>;
