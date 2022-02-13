/* eslint-disable implicit-arrow-linebreak */
import { useTransition, animated } from '@react-spring/web';
import { FaSearch } from 'react-icons/fa';
import useDialog from '../../hooks/useDialog';
import { DialogType } from '../../lib/types';

export default function Dialog() {
  const [{ open }, set] = useDialog(DialogType.search);
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
              style={{ opacity: styles.opacity, pointerEvents: styles.pointerEvents }}
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-900 bg-opacity-20"
            >
              <animated.div className="fixed w-[32rem] h-24 top-14 ">
                <div className="flex items-center bg-white rounded-md">
                  <FaSearch className="absolute translate-x-2" onClick={() => set(!open)} />
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="w-full h-10 rounded-md pl-7 "
                  />
                </div>
              </animated.div>
            </animated.div>
          ),
      )}
    </>
  );
}
