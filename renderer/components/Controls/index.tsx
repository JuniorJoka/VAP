import { useMuseControls } from "../../hooks/useMuseControls";
import { PlayerActions } from "../../lib/types";
import { DummyControls } from "./Dummy";

export const Controls = () => {
  const [active, player, emit] = useMuseControls();

  return (
    <>
      {active && (
        <div className="absolute bottom-0 w-screen h-20  backdrop-blur-3xl flex flex-row items-center">
          <div className="flex flex-row hover:bg-pink-500/10 ">
            <div className="h-20 w-20 bg-red-300" />
            <div className="h-16 w-64">
              <p className="w-64 text-ellipsis overflow-hidden whitespace-nowrap">{active.title}</p>
              <p>{active.artist}</p>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col  items-center h-20">
              <div className="flex space-x-6 items-center mt-1">
                <div className="h-6 w-6 bg-pink-500" />
                <div
                  className="h-6 w-6 bg-gradient-to-r from-pink-500 to-purple-400"
                  onClick={() => emit(PlayerActions.previous)}
                />
                <div
                  className="h-12 w-12 bg-purple-500 rounded-full"
                  onClick={async () => {
                    await emit(PlayerActions.playPause);
                  }}
                />
                <div
                  className="h-6 w-6 bg-gradient-to-r from-purple-500 to-pink-500"
                  onClick={() => emit(PlayerActions.next)}
                />
                <div className="h-6 w-6 bg-pink-500" />
              </div>
              <div className="h-2 w-11/12 mt-3 bg-white bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full" />
            </div>
          </div>
          <div className="w-64" />
        </div>
      )}
    </>
  );
};
