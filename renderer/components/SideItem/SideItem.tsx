import Link from 'next/link';
import SideItemProps from './SideItem.types';

export default function SideItem({ name, icon, href }: SideItemProps) {
  const Icon = icon;
  return (
    <Link href={href}>
      <button
        type="button"
        className="w-10 h-10 hover:bg-gray-200 flex items-center justify-center rounded lg:w-40 lg:justify-start p-3 xl:w-52"
      >
        <div className="flex space-x-4 items-center">
          <Icon />
          <p className="hidden lg:block">{name}</p>
        </div>
      </button>
    </Link>
  );
}
