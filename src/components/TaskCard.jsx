import { IoMdClose } from "react-icons/io";

const TaskCard = () => {
  return (
    <>
      <ul className="w-full p-3 bg-gray-600 rounded-lg shadow-xl shadow-slate-800">
        <li className='flex gap-5 items-center justify-between'>
          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 accent-[#ffb300] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-[#ffb300] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="default-checkbox" className="ml-3 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore.</label>
          <button className='text-3xl'><IoMdClose /></button>
        </li>
      </ul>  
    </>
  )
}

export default TaskCard