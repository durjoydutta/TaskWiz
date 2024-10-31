import Logo from "../assets/todo.svg";

function Header() {
  return (
    <div className="flex flex-col items-center gap-2 mt-3 w-full">
      <div className="flex items-center justify-center gap-2 relative">
        <img 
          src={Logo} 
          alt="Logo" 
          className="w-8 sm:w-10 transition-all" 
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black">TaskWiz</h1>
        <sup className="absolute top-0 -right-4 text-xs sm:text-sm">™</sup>
      </div>
      <span className="flex items-center justify-center gap-1 text-xs sm:text-sm transform -translate-x-1">
        <span className="dark:text-slate-400">by</span>
        <span className="dark:selection:text-yellow-500">@ddc</span>
      </span>
    </div>
  );
}

export default Header;