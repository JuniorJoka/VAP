import { MuseState } from '../../lib/types';
import useMuseStore from '../../store/useMuseStore';
import Track from '../Track/Track';

const selector = (state: MuseState) => state.Muse;

export default function TrackList() {
  const tracks = useMuseStore(selector);
  return (
    <div className="space-y-2">
      {tracks.map((track, index) => (
        <Track
          key={track.title + track.duration}
          track={track}
          even={index % 2 === 0}
          // playlist={tracks}
        />
      ))}
    </div>
  );
}
