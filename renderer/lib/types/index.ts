import { MuseMeta } from '../../../shared/types/moth';
import AudioPlayer from '../audioPayer';

/*
    ========================================================================
                              Muse State Types
    ========================================================================
 */

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

export interface MuseState {
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

/*
    ========================================================================
                            Dialog State Types
    ========================================================================
 */

export enum DialogType {
  search,
}

export interface Dialog {
  open: boolean;
}

export type DialogMap = Map<DialogType, Dialog>;

export type GetFunc = (type: DialogType) => Dialog;

export type SetFunc = (type: DialogType, value: boolean) => void;
export interface DialogState {
  storeStates: DialogMap;
  currentlyOpen: string;
  get: GetFunc;
  set: SetFunc;
}
