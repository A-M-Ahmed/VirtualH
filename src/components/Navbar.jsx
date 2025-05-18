import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { useState } from "react";

const Navbar = () => {
  const [menuOpenMobile, setMenuOpenMobile] = useState(false);

  const handleMenuStatus = () => {
    setMenuOpenMobile(!menuOpenMobile);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-md">
      <nav className="relative mx-auto max-w-7xl px-4 text-sm">
        <div className="flex items-center justify-between">
          {/* //** for the logo */}
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo-page" className="mr-5 h-10 w-10" />
            <h2 className="text-xl tracking-tight">VirtualR</h2>
          </div>
          {/* //**nav links */}
          <ul className="hidden space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* Authentication */}
          <div className="hidden items-center space-x-12 lg:flex">
            <button className="cursor-pointer rounded-md border border-white px-3 py-2 capitalize">
              sign in
            </button>
            <button className="cursor-pointer rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2">
              Create an account
            </button>
          </div>
          {/* for the responsvie of menu */}
          <div className="flex flex-col lg:hidden">
            <button className="cursor-pointer" onClick={handleMenuStatus}>
              {menuOpenMobile ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpenMobile && (
          <div className="w-full lg:hidden fixed right-0 z-20 bg-neutral-900 flex flex-col items-center py-10">
            <ul className="flex w-full flex-col items-center  space-y-5 py-2">
              {navItems.map((item, index) => (
                <li
                  className="group w-full rounded-sm py-2 text-center hover:bg-gray-100/10"
                  key={index}
                >
                  <a
                    className="group-hover:text-gray-300 w-full"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
             <div className="lg:hidden items-center space-x-12 flex my-4">
            <button className="cursor-pointer rounded-md border border-white px-3 py-2 capitalize">
              sign in
            </button>
            <button className="cursor-pointer rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2">
              Create an account
            </button>
          </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
