import { AiOutlineFileAdd } from "react-icons/ai";

function AddTask({handleClick, newTaskRef}) {
  return (
    <form id = "input-form" className="addTask flex grow justify-even items-center py-2 px-7 h-16 rounded-[3rem] dark:bg-gray-600 shadow-slate-800 shadow-xl">
      <input htmlFor = "input-form" type="text" className="w-full outline-none bg-transparent " placeholder="Add a task" ref={newTaskRef}/>
      <button onClick = {handleClick}><AiOutlineFileAdd className="w-10 text-2xl ml-3 p-translate-x-4 cursor-pointer hover:text-blue-500" /></button>
    </form>
  )
}

export default AddTask