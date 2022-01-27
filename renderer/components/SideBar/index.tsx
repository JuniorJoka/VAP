export const SideBar = () => {
  return (
    <div className="border-r-[.5px] border-b-gray- px-4 space-y-4">
      <button className="flex items-center space-x-3">
        <div className="w-5 h-5 bg-slate-500" />
        <p>Search</p>
      </button>
      <button className="flex items-center space-x-3">
        <div className="w-5 h-5 bg-slate-500" />
        <p>My Muse</p>
      </button>
      <button className="flex items-center space-x-3">
        <div className="w-5 h-5 bg-slate-500" />
        <p>Now Playing</p>
      </button>
    </div>
  );
};
