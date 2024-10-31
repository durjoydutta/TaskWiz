import { AiOutlineFileAdd } from "react-icons/ai";

function AddTask() {
  return (
    <form className="addTask flex justify-between items-center py-2 px-3 h-16 rounded-[3rem] dark:bg-gray-600 shadow-slate-800 shadow-xl">
        <input type="text" className="w-4/5 ml-4 outline-none bg-transparent " placeholder="Add a task"/>
        <button><AiOutlineFileAdd className="text-2xl mr-1 -translate-x-4 cursor-pointer hover:text-blue-500" /></button>
    </form>
  )
}

export default AddTask