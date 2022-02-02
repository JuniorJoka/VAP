import { MuseMeta } from "../../../shared/types/moth";

export interface MuseState {
  Muse: MuseMeta[];
  MuseByAlbum: MuseMapper;
  MuseByArtist: MuseMapper;
  populateMuse: VoidFunction;
  groupByAlbum: VoidFunction;
  groupByArtist: VoidFunction;
}

export type MuseMapper = Map<string, Map<string, MuseMeta[]>>;
