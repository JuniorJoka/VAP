import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';
import { PlayerActions } from '../../lib/types';
import useMuseControls from '../../hooks/useMuseControls';

export default function Controls() {
  const [active, player, emit] = useMuseControls();
  const { x } = useSpring({ x: 10 });
  const bind = useDrag(({ offset: [mx] }) => {
    x.set(mx);
  });

  if (active) {
    player.getMedia().addEventListener('timeupdate', () => {
      x.set(player.getCurrentTime());
    });
  }

  if (active) {
    return (
      <div className="absolute bottom-0 w-screen h-20  backdrop-blur-3xl flex flex-row items-center">
        <div className="flex flex-row hover:bg-pink-500/10 ">
          <div className="h-20 w-20 bg-slate-300" />
          <div className="h-16 w-64">
            <p className="w-64 text-ellipsis overflow-hidden whitespace-nowrap">{active.title}</p>
            <p>{active.artist}</p>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col  items-center h-20">
            <div className="flex space-x-6 items-center mt-1">
              <div className="h-6 w-6 bg-slate-500" />
              <div className="h-6 w-6 bg-slate-500" onClick={() => emit(PlayerActions.previous)} />
              <div
                className="h-12 w-12 bg-slate-500 rounded-full"
                onClick={async () => {
                  await emit(PlayerActions.playPause);
                }}
              />
              <div className="h-6 w-6 bg-slate-500" onClick={() => emit(PlayerActions.next)} />
              <div className="h-6 w-6 bg-slate-500" />
            </div>
            <svg className="w-[700px] 16px mt-1" viewBox="0 -8 700 16 ">
              <line
                x1="10"
                y1="0"
                x2="680"
                y2="0"
                className="stroke-[5] stroke-slate-300"
                strokeLinecap="round"
              />
              <line
                x1="10"
                y1="0"
                x2={x.animation.to}
                y2="0"
                className="stroke-[5] stroke-slate-500"
                strokeLinecap="round"
              />
              <animated.g {...bind()} style={{ x, touchAction: 'none' }}>
                <circle cx="10" cy="0" r="8" className="fill-slate-300" />
                <circle cx="10" cy="0" r="5" className="fill-slate-500" />
              </animated.g>
            </svg>
          </div>
        </div>
        <div className="w-64" />
      </div>
    );
  }
  return null;
}
