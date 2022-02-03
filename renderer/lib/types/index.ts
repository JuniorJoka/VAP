import { MuseMeta } from "../../../shared/types/moth";

export interface MuseState {
  Muse: MuseMeta[];
  activeMuse: MuseMeta;
  MuseByAlbum: MuseMapper;
  MuseByArtist: MuseMapper;
  populateMuse: VoidFunction;
  groupByAlbum: VoidFunction;
  groupByArtist: VoidFunction;
  setActiveMuse: (muse: MuseMeta) => void;
}

export type MuseMapper = Map<string, Map<string, MuseMeta[]>>;
