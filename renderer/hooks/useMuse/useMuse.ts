import { useEffect } from 'react';
import useMuseStore, { MuseMap, MuseState } from '../../store/Muse';
import { Muse } from './types';

export default function useMuse(muse: Muse) {
  let populate: VoidFunction;
  let data: MuseMap | null = null;

  if (muse === Muse.artists) {
    [data, populate] = useMuseStore(artistSelector);
  }
  if (muse === Muse.album) {
    [data, populate] = useMuseStore(albumSelector);
  }
  useEffect(() => {
    populate();
  }, []);

  return data;
}

const albumSelector = (state: MuseState): [MuseMap, VoidFunction] => [
  state.MuseByAlbum,
  state.groupByAlbum,
];

const artistSelector = (state: MuseState): [MuseMap, VoidFunction] => [
  state.MuseByArtist,
  state.groupByArtist,
];
