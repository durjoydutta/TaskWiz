import { useState ,useRef} from 'react'
import AddTaskForm from './components/AddTaskForm'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import Footer from './components/Footer'

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const newTaskRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const newTask = newTaskRef.current.value;
    if (newTask === "") {
      alert("The task entry is empty!");
      return;
    }
    addTask(newTask);
  }

  const addTask = (newTask) => {
    const newList = [...toDoList, {
      id: crypto.randomUUID(),
      task: newTask,
      completed: false
    }];
    setToDoList(newList);
    console.log(newList);
    newTaskRef.current.value = "";
  }

  const deleteTask = (id) => {
    const newList = toDoList.filter((item) => item.id !== id);
    setToDoList(newList);
    console.log(newList)
  }

  return (
    <>
    <div className="wrapper min-w-screen min-h-screen px-10 py-2 bg-zinc-800 flex flex-col justify-between items-center gap-10 text-gray-900 dark:text-[#ffb300] dark:selection:text-white antialiased overflow-y-scroll">
      
      <div className="topbar w-full flex flex-col flex-nowrap justify-evenly mt-4 gap-10">
        <Header/>
        <AddTaskForm handleClick = {handleClick} newTaskRef = {newTaskRef}/>
        <div className="divider w-full h-1 bg-gray-600"></div>
      </div>

      <div className="main w-full flex flex-col grow gap-5">
        {toDoList.map(({task, id})=> {
          return <TaskCard task = {task} id = {id} key = {id} deleteTask = {deleteTask}/>
        })}
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default App