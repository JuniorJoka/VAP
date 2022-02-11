import { useEffect } from 'react';
import { MuseMeta } from '../../shared/types/moth';
import AudioPlayer from '../lib/audioPayer';
import { MuseState, PlayerActions, PlayState } from '../lib/types';
import useMuseStore from '../store/useMuseStore';

const selector = (
  state: MuseState,
): [MuseMeta, AudioPlayer, (action: PlayerActions
  ) => Promise<void>, PlayState] => [
  state.activeMuse,
  state.player,
  state.emit,
  state.playState,
];

const useMuseControls = (): [MuseMeta, AudioPlayer, (action: PlayerActions) => Promise<void>] => {
  const [active, player, emit, playState] = useMuseStore(selector);

  useEffect(() => {
    if (active) {
      player.setSrc(active.source);
    }

    if (playState === PlayState.playing) {
      emit(PlayerActions.playPause);
    }
  }, [active]);

  return [active, player, emit];
};

export default useMuseControls;
