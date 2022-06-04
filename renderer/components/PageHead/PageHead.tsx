import { BsFolderPlus } from 'react-icons/bs';
import PageHeadProps from './PageHead.types';

const PageHead = ({ title }: PageHeadProps) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-10 h-10">
          <p className="text-3xl font-bold">{title}</p>
          <div className=" space-x-3 relative  h-full">
            <button type="button">Songs</button>
            <button type="button">Albums</button>
            <button type="button">Artists</button>
            <div
              className={`w-6 h-1 bg-rose-500 absolute rounded-full bottom-0  transition-all duration-500 ease-in-out`}
            />
          </div>
        </div>
        <div>
          <button className="flex items-center space-x-2  p-2 text-xs rounded shadow-sm border-[1px]">
            <BsFolderPlus />
            <p>Add folder</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PageHead;
