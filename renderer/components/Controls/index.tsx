import { useMuseControls } from "../../hooks/useMuseControls";
import { DummyControls } from "./Dummy";

export const Controls = () => {
  const [active, player, playPause] = useMuseControls();

  return (
    <>
      {!active ? (
        <DummyControls />
      ) : (
        <div className="absolute bottom-0 w-screen h-20 bg-white flex flex-row">
          <div className="flex flex-row ">
            <div className="h-16 w-16 bg-red-300" />
            <div className="h-16">
              <p>{active.title}</p>
              <p>{active.artist}</p>
            </div>
          </div>
          <div className="flex-1 bg-blue-400 flex justify-center">
            <div className="flex flex-row space-x-6">
              <div className="h-6 w-6 bg-pink-500" />
              <div className="h-6 w-6 bg-pink-500" onClick={playPause} />
              <div className="h-6 w-6 bg-pink-500" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
