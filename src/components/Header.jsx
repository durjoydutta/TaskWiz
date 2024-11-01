import Logo from "../../src/assets/todo.svg";
import Account from "../assets/account.svg";
import { Link } from "react-router-dom";
import { auth } from "../pages/Login";

function Header() {
  return (
    <div className="header flex flex-col w-full max-w-3xl mx-auto gap-3 px-2">
      <div className="flex items-center justify-between w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center gap-2 mt-3 w-full">
          <Link to="/">
            <div className="flex items-center justify-center gap-2 relative">
              <img
                src={Logo}
                alt="Logo"
                className="w-8 sm:w-10 transition-all"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black">
                TaskWiz
              </h1>
              <sup className="absolute top-0 -right-4 text-xs sm:text-sm">
                ™
              </sup>
            </div>
          </Link>
          <span className="flex items-center justify-center gap-1 text-xs sm:text-sm transform translate-x-12">
            <span className="dark:text-slate-400">by</span>
            <span className="dark:selection:text-yellow-500">@ddc</span>
          </span>
        </div>
        <Link to="/login">
          <div className="profile w-15 h-15 mt-3 flex flex-col gap-1.5 items-center justify-center text-center">
            <img
              src={
                auth.currentUser?.photoURL
                  ? auth.currentUser?.photoURL
                  : Account
              }
              alt="Profile"
              className="rounded-full w-8 h-8 object-cover"
            />
            <p className="text-xs sm:text-sm max-w-12 truncate ... overflow-hidden">
              {auth.currentUser?.displayName
                ? auth.currentUser?.displayName
                : "Loginsdfsd sdfds"}
            </p>
          </div>
        </Link>
      </div>
      <div className="divider w-full h-1 bg-gray-600 rounded-full"></div>
    </div>
  );
}

export default Header;
