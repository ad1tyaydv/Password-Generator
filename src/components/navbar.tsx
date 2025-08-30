import { FaGithub } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 flex justify-between items-center fixed top-0 z-50">

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 border px-3 py-1.5 rounded-full hover:shadow-md transition text-sm font-medium">
          <FaGithub className="text-lg" />
          <span>Star Project</span>
        </button>

        <button className="text-xl hover:text-gray-600">
          <HiOutlineMenu />
        </button>

        <button className="text-2xl text-purple-500 hover:text-purple-600">
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
}
