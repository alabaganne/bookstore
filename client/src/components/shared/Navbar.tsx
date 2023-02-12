import { Link } from 'react-router-dom';
import {
  FiChevronDown,
  FiGlobe,
  FiHeart,
  FiLogIn,
  FiMap,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiUserPlus,
} from 'react-icons/fi';

function Navbar() {
  let isLoggedIn = false;

  return (
    <nav className="bg-gray-800 text-sm text-white">
      <div className="container mx-auto pt-6 pb-8">
        <div className="flex items-center justify-between">
          <div>
            Free delivery over <strong>300 DT</strong>. Order gifts by the end
            of <strong>21 December</strong>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center">
              <FiGlobe className="h-5 w-5" />
              <span className="ml-2 mr-1">EN</span>
              <FiChevronDown className="h-3 w-3" />
            </button>
            <div className="flex items-center gap-2">
              <FiPhone className="h-5 w-5" />
              <span>+216 50 101 959</span>
            </div>
            <Link to="/" className="flex items-center gap-2">
              <FiMapPin className="h-5 w-5" />
              <span>See Our Store Locations</span>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex items-end justify-between gap-10">
          <Link to="/">
            <div className="text-4xl font-bold">
              BOOKS <br />
              STORE
            </div>
            <div>Read More, Learn More</div>
          </Link>
          <div className="flex flex-1 items-center justify-between gap-10">
            <form className="flex max-w-2xl flex-1 items-center rounded-md bg-white py-3 px-4">
              <input
                type="text"
                placeholder="Search for Books, Authors, Genres..."
                className="min-w-fit flex-1 outline-none focus:placeholder-transparent"
              />
              <button>
                <FiSearch className="h-6 w-6 text-gray-800" />
              </button>
            </form>
            <div className="flex items-center gap-8">
              {}
              {isLoggedIn && (
                <>
                  <Link to="/account" className="flex items-center gap-2">
                    <div className="flex-center h-9 w-9 rounded-full border-2 border-gray-200 bg-white p-1 text-black">
                      <FiUser className="h-5 w-5" />
                    </div>
                    <span>My Account</span>
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="flex-center h-9 w-9 rounded-full border-2 border-gray-200 bg-white p-1 text-black">
                      <FiShoppingCart className="h-5 w-5" />
                    </div>
                    <span>Cart - 0 Items</span>
                  </div>
                  <Link to="/wishlist" className="flex items-center gap-2">
                    <div className="flex-center h-9 w-9 rounded-full border-2 border-gray-200 bg-white p-1 text-black">
                      <FiHeart className="h-5 w-5" />
                    </div>
                    <span>Wishlist</span>
                  </Link>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <Link to="/login" className="flex items-center gap-2">
                    <div className="flex-center h-9 w-9 rounded-full border-2 border-gray-200 bg-white p-1 text-black">
                      <FiLogIn />
                    </div>
                    <span>Log In</span>
                  </Link>
                  <Link to="/register" className="flex items-center gap-2">
                    <div className="flex-center h-9 w-9 rounded-full border-2 border-gray-200 bg-white p-1 text-black">
                      <FiUserPlus />
                    </div>
                    <span>Register</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
