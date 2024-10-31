// import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import Footer from './components/Footer'

const App = () => {
  // const [toDoList, setToDoList] = useState([]);
  // const newTaskRef = useRef(null);

  return (
    <>
    <div className="wrapper min-w-screen min-h-screen px-10 py-2 bg-zinc-800 flex flex-col justify-between items-center gap-10 text-gray-900 dark:text-[#ffb300] dark:selection:text-white antialiased overflow-y-scroll">
      
      <div className="topbar w-full flex flex-col flex-nowrap justify-evenly mt-4 gap-10">
        <Header/>
        <AddTask/>
        <div className="divider w-full h-1 bg-gray-600"></div>
      </div>

      <div className="main w-full flex flex-col grow gap-5">
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default App