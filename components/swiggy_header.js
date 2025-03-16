import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function SwiggyHeader() {
  let counter = useSelector((state) => state.cart.count); // Directly use Redux state

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
          alt="Swiggy Logo"
          className="h-10"
        />
      </div>

      {/* Search Bar */}
      <div className="flex flex-grow max-w-lg items-center bg-gray-100 px-3 py-2 rounded-md">
        <input
          type="text"
          placeholder="Search for food or restaurants"
          className="w-full bg-transparent outline-none text-gray-700"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-700 font-semibold hover:text-orange-500">
          Offers
        </a>
        <a href="#" className="text-gray-700 font-semibold hover:text-orange-500">
          Help
        </a>
        <Link to="/cart" className="text-gray-700 font-semibold hover:text-orange-500">
          Cart ({counter})
        </Link>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600">
          Login
        </button>
      </nav>
    </header>
  );
}

