const MySidebar = () => {
  return (
    <div className="w-80 h-screen bg-white shadow-[1px_0px_30px_2px_rgba(239,239,244,1.00)] p-12">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-sky-500 rounded-xl"></div>
        <h1 className="text-black text-2xl font-semibold font-['Poppins']">
          LOGO
        </h1>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-3">
          <img src="/manage_dashbord.svg" alt="Dashboard" />
          <h2 className="text-zinc-800 text-base font-medium font-['Poppins']">
            Dashboard
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MySidebar;
