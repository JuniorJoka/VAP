/* eslint-disable implicit-arrow-linebreak */
import { useTransition, animated } from '@react-spring/web';
import { FaChevronLeft } from 'react-icons/fa';
import useDialog from '../../hooks/useDialog';
import { DialogType } from '../../lib/types';
import Controls from '../Controls/Controls';

export default function Dialog() {
  const [{ open }, set] = useDialog(DialogType.detail);
  const transition = useTransition(open, {
    from: { transform: 'translate3d(0,-10px,0)', opacity: 0 },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,10px,0)', pointerEvents: 'none' },
    delay: 1,
  });

  return (
    <>
      {transition(
        (styles, item) =>
          item && (
            <animated.div
              style={{ opacity: styles.opacity, pointerEvents: (styles as any).pointerEvents }}
            >
              <animated.div className="fixed top-0 left-0 right-0 bottom-0 opacity-80 backdrop-blur-3xl bg-slate-700" />

              <animated.div className="fixed top-0 left-0 right-0 bottom-0 bg-yellow-100">
                <Controls />
              </animated.div>
              <button
                type="button"
                className="fixed top-0 left-0 bg-green-100 w-10 h-8 flex items-center justify-center"
                onClick={() => set(!open)}
              >
                <FaChevronLeft />
              </button>
            </animated.div>
          ),
      )}
    </>
  );
}
