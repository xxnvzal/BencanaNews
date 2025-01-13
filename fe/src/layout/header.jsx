import { UserCog } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-[#8B4513] px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-green-800 rounded-full">
            <UserCog size={25} className="text-white" />
          </div>
          <span className="text-white font-semibold">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
