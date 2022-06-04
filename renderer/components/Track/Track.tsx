import { useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import { TrackProps } from './Track.types';

const Track = ({ track, even }: TrackProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`h-12 w-full text-sm space-x-2  ${
        even && 'shadow-border-sm'
      } hover:bg-gray-100 hover:shadow-border rounded-lg flex items-center justify-between px-4`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex-grow flex space-x-6 md:space-x-2  xl:space-x-4">
        <div className={`space-x-3 flex items-center ${!hover && 'opacity-0'}`}>
          <div className="w-5 h-5 rounded shadow-border" />
          <button>
            <BsPlay className="w-7 h-7" />
          </button>
        </div>

        <div className="">
          <p className="hover:text-rose-400 cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap w-48 sm:w-52 md:w-80">
            {track.title}
          </p>
        </div>
        <div className="hidden lg:block ">
          <p className="hover:text-rose-400 cursor-pointer w-48 overflow-hidden whitespace-nowrap text-ellipsis">
            {track.album}
          </p>
        </div>
        <div className="hidden sm:block  ">
          <p className="hover:text-rose-400 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis w-36 lg:w-48">
            {track.artist}
          </p>
        </div>
        <div className="w-10 hidden md:block  ">
          <p className="hover:text-rose-400 cursor-pointer w-10 overflow-hidden whitespace-nowrap text-ellipsis flex justify-center">
            {track.year || '--'}
          </p>
        </div>
        <div className="w-48 hidden xl:block  ">
          <p className="hover:text-rose-400 cursor-pointer w-48 overflow-hidden whitespace-nowrap text-ellipsis">
            {track.genre}
          </p>
        </div>
      </div>
      <div className="flex items-center w-16 justify-center ">
        <p>--:--:--</p>
      </div>
    </div>
  );
};

export default Track;
