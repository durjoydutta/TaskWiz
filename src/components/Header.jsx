import Logo from "../../src/assets/todo.svg";
import Account from "../assets/account.svg"
import { Link } from "react-router-dom";
import {auth} from "../pages/Login"

function Header() {
  return (
    <div className="header flex items-center justify-between w-full max-w-3xl">
      <div className="flex flex-col items-center gap-2 mt-3 w-full">
        <Link to="/">
          <div className="flex items-center justify-center gap-2 relative">
            <img src={Logo} alt="Logo" className="w-8 sm:w-10 transition-all" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black">
              TaskWiz
            </h1>
            <sup className="absolute top-0 -right-4 text-xs sm:text-sm">™</sup>
          </div>
        </Link>
        <span className="flex items-center justify-center gap-1 text-xs sm:text-sm transform translate-x-12">
          <span className="dark:text-slate-400">by</span>
          <span className="dark:selection:text-yellow-500">@ddc</span>
        </span>
      </div>
      <Link to="/login">
        <div className="profile rounded-full w-10 h-10 flex items-center justify-center ">
          {
            (auth.currentUser != null) ? (<img src={auth.currentUser.photoURL}/>) : (<img src={Account} alt="Logo" className="w-8 sm:w-10 transition-all" />) 
          }
        </div>
      </Link>
    </div>
  );
}

export default Header;
