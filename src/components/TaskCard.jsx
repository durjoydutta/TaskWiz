import { IoMdClose } from "react-icons/io";

const TaskCard = ({task, id, deleteTask}) => {
  return (
    <>
      <ul className="w-full py-3 px-7 bg-gray-600 rounded-lg shadow-xl shadow-slate-800">
        <li className='flex gap-5 items-center justify-between'>
          <input type="checkbox" value="" className="w-4 h-4 accent-[#ffb300] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-[#ffb300] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label className="ml-3 text-sm font-medium">{task}</label>
          <button className='delete text-3xl' onClick = {() => deleteTask(id)}><IoMdClose /></button>
        </li>
      </ul>  
    </>
  )
}

export default TaskCard