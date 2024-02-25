import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute w-full">
      <div className="flex justify-between w-full px-24 py-8">
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <div className="flex gap-10 items-center">
          <aside className="text-white space-x-6 text-lg font-semibold">
            <Link to="">Home</Link>
            <Link to="">About</Link>
            <Link to="">FAQs</Link>
            <Link to="">Testimonials</Link>
          </aside>
          <Link
            to=""
            className="py-3 px-5 text-white bg-navbar-color rounded-3xl"
          >
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
