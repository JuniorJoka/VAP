import { useEffect } from "react";
import { MuseMeta } from "../../shared/types/moth";
import { AudioPlayer } from "../lib/audioPayer";
import { MuseState, PlayerActions } from "../lib/types";
import useMuseStore from "../store/useMuseStore";

const selector = (state: MuseState): [MuseMeta, AudioPlayer, (action: PlayerActions) => Promise<void>] => [
  state.activeMuse,
  state.player,
  state.emit,
];

export const useMuseControls = (): [MuseMeta, AudioPlayer, (action: PlayerActions) => Promise<void>] => {
  const [active, player, emit] = useMuseStore(selector);

  useEffect(() => {
    if (active) {
      player.setSrc(active.source);
    }
  }, [active]);

  return [active, player, emit];
};
