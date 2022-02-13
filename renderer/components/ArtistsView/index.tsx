import { useEffect } from 'react';
import { MuseMap, MuseState } from '../../lib/types';
import useMuseStore from '../../store/useMuseStore';
import Section from '../Section';

const selector = (state: MuseState): [MuseMap, VoidFunction] => [
  state.MuseByArtist,
  state.groupByArtist,
];

export default function ArtistsView() {
  const [data, fn] = useMuseStore(selector);
  useEffect(() => {
    fn();
  }, []);

  return (
    <div>
      {Array.from(data.keys())
        .sort()
        .map((key) => (
          <Section head={key} key={key} data={data.get(key)} />
        ))}
    </div>
  );
}
