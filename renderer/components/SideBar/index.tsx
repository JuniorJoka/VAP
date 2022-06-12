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
import SideItem from '../SideItem';

const barItems = [
  { name: 'Home', icon: BsHouse, link: '/' },
  { name: 'Music library', icon: BsMusicNote, link: '/muse' },
  { name: 'Video library', icon: BsCameraVideo, link: '/video' },
  { name: 'Image library', icon: BsImage, link: '/image' },
  { name: 'Playlist', icon: BsStack, link: '/playlist' },
];

export default function SideBar() {
  const [, set] = useDialog(DialogType.search);
  return (
    <div className="border-r-[.5px]  h-full w-14 lg:w-44 xl:w-56 bg-gray-100 flex flex-col items-center justify-between pt-4 pb-32">
      <div>
        <button
          type="button"
          className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded lg:w-40 lg:justify-start p-3 xl:w-52"
          onClick={() => set(true)}
        >
          <div className="flex space-x-4 items-center">
            <BsSearch />
            <p className="hidden lg:block">Search</p>
          </div>
        </button>
        {barItems.map(({ name, icon, link }) => (
          <SideItem name={name} href={link} icon={icon} />
        ))}
      </div>
      <SideItem name="Settings" href="/settings" icon={BsGear} />
    </div>
  );
}
