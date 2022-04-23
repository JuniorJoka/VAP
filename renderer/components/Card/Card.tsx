import CardProps from './Card.types';

const selection = 'absolute border-2 border-gray-400';
const activeSelection = ' border-[2px] border-rose-400 bg-rose-400';

const Card = ({ primaryText, secondaryText, selectionMode, selected }: CardProps) => {
  selectionMode = selectionMode ?? false;
  selected = selected ?? false;
  selected = selected && selectionMode; // selected can't be true while selection mode is inactive

  return (
    <div
      className={`w-44 hover:bg-gray-100 hover:border-[2px] hover:border-gray-300 rounded h-60 flex flex-col items-center pt-2 ${
        selected && 'border-rose-300 hover:border-rose-300 border-[2px]'
      } `}
    >
      <div className="w-40 h-40 rounded bg-gray-100 border-[2px] border-gray-300 relative">
        {selectionMode && (
          <div
            className={`w-4 h-4 rounded right-1 top-1 bg-white opacity-50 ${
              selectionMode && selection
            } ${selected && activeSelection}`}
          />
        )}
      </div>
      <div className="w-40">
        <p className="font-semibold line-clamp-2">{primaryText}</p>
        <p className="text-xs text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis w-40">
          {secondaryText}
        </p>
      </div>
    </div>
  );
};

export default Card;
