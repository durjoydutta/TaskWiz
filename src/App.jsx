// import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import { IoMdClose } from "react-icons/io";


const App = () => {
  // const [toDoList, setToDoList] = useState([]);
  // const newTaskRef = useRef(null);

  return (
    <>
    <div className="wrapper relative w-screen h-screen p-5 bg-zinc-800 flex flex-col items-center gap-10 text-gray-900 dark:text-[#ffb300] dark:selection:text-white antialiased overflow-y-scroll">
      <div className="topbar w-full flex flex-col flex-nowrap justify-evenly mt-4 gap-10">
        <Header/>
        <AddTask/>
      </div>
      <div className="divider w-full h-1 bg-gray-600"></div>
      <div className="main px-7 py-4 bg-gray-600 rounded-lg">
        <ul>
          <li className='flex gap-5 items-center justify-between'>
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 accent-[#ffb300] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-[#ffb300] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-checkbox" className="ml-3 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore.</label>
            <button className='text-3xl'><IoMdClose /></button>
          </li>
        </ul>
      </div>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <div className="footer static bttom-0 op-3 flex flex-col items-center gap-2">
        <span>Made with ❤️ by @ddc</span>
        <span>©2024 TaskWiz™</span>
      </div>
    </div>
    </>
  )
}

export default App