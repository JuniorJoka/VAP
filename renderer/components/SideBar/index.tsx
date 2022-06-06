import {
  BsCameraVideo,
  BsGear,
  BsHouse,
  BsImage,
  BsMusicNote,
  BsSearch,
  BsStack,
} from 'react-icons/bs';
import useDialog from '../../hooks/useDialog';
import { DialogType } from '../../store/Dialog';
import Link from 'next/link';

export default function SideBar() {
  const [, set] = useDialog(DialogType.search);
  return (
    <div className="border-r-[.5px]  h-full w-14 bg-gray-100 flex flex-col items-center justify-between pt-4 pb-32">
      <div>
        <button
          type="button"
          className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded"
          onClick={() => set(true)}
        >
          <BsSearch />
        </button>
        <Link href="/">
          <button
            type="button"
            className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded"
          >
            <BsHouse />
          </button>
        </Link>
        <Link href="/muse">
          <button
            type="button"
            className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded"
          >
            <BsMusicNote />
          </button>
        </Link>
        <Link href="/video">
          <button
            type="button"
            className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded"
          >
            <BsCameraVideo />
          </button>
        </Link>
        <Link href="/image">
          <button
            type="button"
            className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded"
          >
            <BsImage />
          </button>
        </Link>
        <Link href="/playlist">
          <button
            type="button"
            className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded"
          >
            <BsStack />
          </button>
        </Link>
      </div>
      <Link href="/settings">
        <button
          type="button"
          className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded "
        >
          <BsGear />
        </button>
      </Link>
    </div>
  );
}
