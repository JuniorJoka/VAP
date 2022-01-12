import * as mmd from "music-metadata";

export interface MuseMeta {
  source: string;
  album: string;
  albumTrack: number | null;
  artist: string;
  artists: string[];
  cover: mmd.IPicture[] | undefined;
  duration: number | undefined;
  genre: string[];
  title: string;
  year: number | undefined;
}
