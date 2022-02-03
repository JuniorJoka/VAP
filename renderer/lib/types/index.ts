import { MuseMeta } from "../../../shared/types/moth";
import { AudioPlayer } from "../audioPayer";

export enum PlayState {
  playing,
  paused,
}
export interface MuseState {
  Muse: MuseMeta[];
  activeMuse: MuseMeta;
  MuseByAlbum: MuseMapper;
  MuseByArtist: MuseMapper;
  player: AudioPlayer;
  playState: PlayState;
  populateMuse: VoidFunction;
  groupByAlbum: VoidFunction;
  groupByArtist: VoidFunction;
  setActiveMuse: (muse: MuseMeta) => void;
  initializePlayer: VoidFunction;
  setPlayState: (playState: PlayState) => void;
}

export type MuseMapper = Map<string, Map<string, MuseMeta[]>>;
