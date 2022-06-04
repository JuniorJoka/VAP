import { BsArrowRepeat, BsPlayFill, BsShuffle } from 'react-icons/bs';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';

const Controls = () => {
  return (
    <div className="h-28 bg-white w-full absolute bottom-0 shadow-border">
      <div className="flex">
        <div className="w-20 h-8  flex item-center justify-center">--:--:--</div>
        <div className="flex-grow flex items-center">
          <input type="range" name="" id="" className="w-full" />
        </div>
        <div className="w-20 h-8 flex items-center justify-center">--:--:--</div>
      </div>
      <div className="flex">
        <div className="flex-grow"></div>
        <div className="w-72 flex items-center justify-evenly">
          <button className="p-2 hover:bg-gray-100 rounded">
            <BsShuffle />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <FaStepBackward />
          </button>
          <button className="p-2 bg-yellow-400 rounded-full">
            <div className="bg-white rounded-full flex items-center justify-center">
              <BsPlayFill className="w-12 h-12" />
            </div>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <FaStepForward />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <BsArrowRepeat />
          </button>
        </div>
        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default Controls;
