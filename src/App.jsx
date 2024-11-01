import { useState, useRef } from 'react';
import { Reorder } from 'framer-motion';
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import Footer from './components/Footer';

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
    newTaskRef.current.value = "";
  }

  const deleteTask = (id) => {
    const newList = toDoList.filter((item) => item.id !== id);
    setToDoList(newList);
  }

  const toggleComplete = (id) => {
    setToDoList(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="wrapper min-h-screen px-4 sm:px-6 md:px-8 py-2 dark:bg-zinc-800 flex flex-col justify-between items-center gap-6 md:gap-8 text-gray-900 dark:text-[#ffb300] dark:selection:text-white antialiased">
      <div className="topbar w-full max-w-3xl mx-auto flex flex-col flex-nowrap justify-evenly mt-4 gap-6 md:gap-8">
        <Header/>
        <AddTaskForm handleClick={handleClick} newTaskRef={newTaskRef}/>        
      </div>
      <div className="divider w-full h-1 bg-gray-600 rounded-full"></div>
      <div className="main relative w-full max-w-3xl mx-auto flex flex-col grow gap-4">
      <h1 className="absolute z-[1] top-1/2 left-1/2-translate-x-1/2 -translate-y-1/2 
                    text-center text-[8rem] md:text-[10rem] font-semibold
                    leading-none tracking-wider dark:text-[#1f1d1d8a]">THE TODO APP</h1>

        <Reorder.Group 
          axis="y" 
          values={toDoList} 
          onReorder={setToDoList} 
          className="z-[2] flex flex-col gap-4"
        >
          {toDoList.map((item) => (
            <TaskCard 
              key={item.id}
              task={item.task}
              id={item.id}
              completed={item.completed}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </Reorder.Group>
      </div>

      <Footer/>
    </div>
  );
}

export default App;