export const Track = () => {
  return (
    <div className="hover:bg-gray-100 rounded-lg p-3 pr-6 pl-6 grid grid-cols-2 cursor-pointer align hover:shadow-md">
      <div className="flex items-center space-x-3  w-64">
        <div className="w-10 h-10 bg-slate-500" />
        <div>
          <p className="font-bold">Am I wrong</p>
          <p className="text-sm">Nico and Vince</p>
        </div>
      </div>
      <div className="ml-0 flex justify-between items-center">
        <p>Wonders of Ellison</p>
        <p>4:45</p>
      </div>
    </div>
  );
};
