import { MuseMeta } from "../../../shared/types/moth";

interface keyMap<T> {
  [key: string]: T;
}
export interface MuseState {
  Muse: MuseMeta[];
  MuseByAlbum: keyMap<MuseMeta>;
  MuseByArtist: keyMap<MuseMeta>;
  populateMuse: VoidFunction;
}
