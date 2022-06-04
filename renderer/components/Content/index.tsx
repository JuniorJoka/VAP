import { useState } from 'react';
import { BsChevronDown, BsFolderPlus, BsShuffle } from 'react-icons/bs';
import AlbumsView from '../AlbumsView';
import ArtistsView from '../ArtistsView';
import TrackList from '../TrackList';

enum MuseView {
  MuseTracksView,
  MuseArtistsView,
  MUseAlbumsView,
}

export default function Content() {
  const [view, setView] = useState<MuseView>(MuseView.MuseTracksView);
  // const isTracksView = view === MuseView.MuseTracksView;
  // const isArtistsView = view === MuseView.MuseArtistsView;
  // const isAlbumsView = view === MuseView.MUseAlbumsView;

  let [isTracksView, isArtistsView, isAlbumsView] = [false, false, false];

  let shift = '';

  if (view === MuseView.MuseTracksView) {
    isTracksView = true;
    shift = '-translate-x-1';
  }
  if (view === MuseView.MuseArtistsView) {
    isArtistsView = true;
    shift = 'translate-x-[7.3rem]';
  }
  if (view === MuseView.MUseAlbumsView) {
    isAlbumsView = true;
    shift = 'translate-x-14';
  }

  return (
    <div className="flex-grow p-4 overflow-y-scroll scrollbar-hide flex flex-col">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10 h-10">
            <p className="text-3xl font-bold">Muse</p>
            <div className=" space-x-3 relative  h-full">
              <button type="button" onClick={() => setView(MuseView.MuseTracksView)}>
                Songs
              </button>
              <button type="button" onClick={() => setView(MuseView.MUseAlbumsView)}>
                Albums
              </button>
              <button type="button" onClick={() => setView(MuseView.MuseArtistsView)}>
                Artists
              </button>
              <div
                className={`w-6 h-1 bg-rose-500 absolute rounded-full bottom-0 ${shift} transition-all duration-500 ease-in-out`}
              />
            </div>
          </div>
          <div>
            <button className="flex items-center space-x-2  p-2 text-xs rounded shadow-sm border-[1px]">
              <BsFolderPlus />
              <p>Add folder</p>
            </button>
          </div>
        </div>

        <div className="h-20 flex justify-between items-center">
          <button className="flex items-center space-x-3 p-2 rounded bg-rose-500 hover:bg-rose-400 shadow-md ">
            <BsShuffle />
            <p>Shuffle and play</p>
          </button>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-3 p-2 rounded hover:shadow-border ">
              <p>
                Sort by: <span className="text-rose-500">A-Z</span>
              </p>
              <BsChevronDown />
            </button>
            <button className="flex items-center space-x-3 p-2 rounded hover:shadow-border ">
              <p>
                Genre: <span className="text-rose-500">All Genres</span>
              </p>
              <BsChevronDown />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll scrollbar-hide">
        {isTracksView && <TrackList />}
        {isArtistsView && <ArtistsView />}
        {isAlbumsView && <AlbumsView />}
      </div>
    </div>
  );
}
