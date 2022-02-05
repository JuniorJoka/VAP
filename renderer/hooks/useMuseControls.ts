import { useEffect } from "react";
import { MuseMeta } from "../../shared/types/moth";
import { AudioPlayer } from "../lib/audioPayer";
import { MuseState } from "../lib/types";
import useMuseStore from "../store/useMuseStore";

const selector = (state: MuseState): [MuseMeta, AudioPlayer] => [state.activeMuse, state.player];

export const useMuseControls = (): [MuseMeta, AudioPlayer, () => Promise<void>] => {
  const [active, player] = useMuseStore(selector);

  useEffect(() => {
    if (active) {
      player.setSrc(active.source);
    }
  }, [active]);

  const playPause = async () => {
    if (player.isPaused()) {
      await player.play();
    } else {
      player.pause();
    }
  };

  return [active, player, playPause];
};
