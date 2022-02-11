import { MuseMeta } from '../../../shared/types/moth';
import { MuseState } from '../../lib/types';
import useMuseStore from '../../store/useMuseStore';

const selector = (
  state: MuseState,
  // eslint-disable-next-line function-paren-newline
): [(track: MuseMeta, index: number) => void, (activePlaylist: MuseMeta[]) => void] => [
  state.setActiveMuse,
  state.setActivePlayList,
];

export default function Track({
  track,
  index,
  playlist,
}: {
  track: MuseMeta;
  index: number;
  playlist: MuseMeta[];
}) {
  const [activateTrack, activatePlaylist] = useMuseStore(selector);

  const activate = () => {
    activateTrack(track, index);
    activatePlaylist(playlist);
  };

  return (
    <button
      type="button"
      className="hover:bg-gray-100 rounded-lg p-3 pr-6 pl-6 grid grid-cols-2 cursor-pointer align hover:shadow-md"
      onClick={activate}
    >
      <div className="flex items-center space-x-3  w-96 bg-green-600">
        <div className="w-16 h-16 bg-slate-300 flex justify-center items-center">
          <div className="flex justify-center items-center bg-slate-400 w-12 h-12 rounded-full" />
        </div>
        <div>
          <p className="w-80 font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            {track.title}
          </p>
          <p className="text-sm">{track.artist}</p>
        </div>
      </div>
      <div className="ml-0 flex justify-between items-center">
        <p>{track.album}</p>
        <p>{track.duration}</p>
      </div>
    </button>
  );
}
