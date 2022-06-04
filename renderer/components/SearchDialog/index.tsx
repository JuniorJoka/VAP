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
            <animated.div style={{ opacity: styles.opacity, pointerEvents: styles.pointerEvents }}>
              <animated.div
                className="fixed top-0 left-0 right-0 bottom-0 opacity-20 bg-slate-600"
                onClick={() => set(!open)}
              />
              <animated.div className="fixed  h-12 w-6/12  top-10 left-1/2 translate-x-[-50%] bottom-0">
                <div className="flex items-center  rounded-md">
                  <FaSearch className="absolute translate-x-2" />
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
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
