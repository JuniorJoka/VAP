import { useMuseControls } from "../../hooks/useMuseControls";
import { PlayerActions } from "../../lib/types";
import { DummyControls } from "./Dummy";

export const Controls = () => {
  const [active, player, emit] = useMuseControls();

  return (
    <>
      {!active ? (
        <DummyControls />
      ) : (
        <div className="absolute bottom-0 w-screen h-20 bg-white flex flex-row">
          <div className="flex flex-row ">
            <div className="h-16 w-16 bg-red-300" />
            <div className="h-16 w-48">
              <p className="w-48 text-ellipsis overflow-hidden whitespace-nowrap">{active.title}</p>
              <p>{active.artist}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-blue-400 flex flex-col ">
              <div className="flex space-x-6 items-center">
                <div className="h-6 w-6 bg-pink-500" />
                <div className="h-6 w-6 bg-pink-500" onClick={() => emit(PlayerActions.previous)} />
                <div
                  className="h-12 w-12 bg-pink-500 rounded-full"
                  onClick={async () => {
                    await emit(PlayerActions.playPause);
                  }}
                />
                <div className="h-6 w-6 bg-pink-500" onClick={() => emit(PlayerActions.next)} />
                <div className="h-6 w-6 bg-pink-500" />
              </div>
              <div className="h-6 w-10 bg-white" />
            </div>
          </div>
          <div className="bg-white w-48" />
        </div>
      )}
    </>
  );
};
