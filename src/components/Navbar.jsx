import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-24 py-5 bg-[#0f0529]/80 backdrop-blur-md text-white">

      <div className="flex items-center gap-2 text-xl font-semibold">
        🤖 <span>Break_And_Enter</span>
      </div>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#home" className="hover:text-white">Home</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>

      <div className="flex gap-3">
        <Link
          to="/signin"
          className="mt-8 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:scale-105 transition "
        >
          Sign in
        </Link>

        <Link
          to="/signup"
          className="mt-8 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
