import { MuseMeta } from "../../../shared/types/moth";
import { MuseState } from "../../lib/types";
import useMuseStore from "../../store/useMuseStore";

const selector = (
  state: MuseState
): [(track: MuseMeta, index: number) => void, (activePlaylist: MuseMeta[]) => void] => [
  state.setActiveMuse,
  state.setActivePlayList,
];

export const Track = ({ track, index, playlist }: { track: MuseMeta; index: number; playlist: MuseMeta[] }) => {
  const [activateTrack, activatePlaylist] = useMuseStore(selector);

  const activate = () => {
    activateTrack(track, index);
    activatePlaylist(playlist);
  };

  return (
    <div
      className="hover:bg-gray-100 rounded-lg p-3 pr-6 pl-6 grid grid-cols-2 cursor-pointer align hover:shadow-md"
      onClick={activate}
    >
      <div className="flex items-center space-x-3  w-64">
        <div className="w-10 h-10 bg-slate-500" />
        <div>
          <p className="font-bold">{track.title}</p>
          <p className="text-sm">{track.artist}</p>
        </div>
      </div>
      <div className="ml-0 flex justify-between items-center">
        <p>{track.album}</p>
        <p>{track.duration}</p>
      </div>
    </div>
  );
};
