import Logo from "../assets/todo.svg"

function Header() {
  return (
    <div className="text-3xl flex flex-col flex-nowrap justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10"/>
        <h1 className="font-black">TaskWiz</h1>
      </div>
        <span className="text-sm ml-[8.5em] flex gap-1 dark:text-slate-400">by<span className="dark:selection:text-yellow-500">@ddc</span></span>
    </div>
  )
}

export default Header