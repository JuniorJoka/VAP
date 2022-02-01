import { FaSearch } from "react-icons/fa";

export const SideBar = () => {
  return (
    <div className="border-r-[.5px] border-b-gray- px-4 space-y-4 text-xs">
      <button className="flex items-center space-x-3">
        <div className="w-7 h-7 bg-slate-500 rounded-md grid place-items-center">
          <FaSearch />
        </div>
        <p className="hidden md:inline">Search</p>
      </button>
      <button className="flex items-center space-x-3">
        <div className="w-7 h-7 bg-slate-500 rounded-md" />

        <p className="hidden md:inline">My Muse</p>
      </button>
      <button className="flex items-center space-x-3">
        <div className="w-7 h-7 bg-slate-500 rounded-md" />
        <p className="hidden md:inline">Now Playing</p>
      </button>
    </div>
  );
};
