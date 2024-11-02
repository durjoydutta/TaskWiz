import AddTaskForm from "./components/AddTaskForm";
import TaskCard from "./components/TaskCard";
import { Reorder } from "framer-motion";
import {useAuthState} from 'react-firebase-hooks/auth';
import { useState, useEffect, useRef } from "react";
import {auth, firestoreDB} from '../../../firebase.config'
import {useNavigate} from 'react-router-dom'
// import { collection, getDocs } from "firebase/firestore";
// import { useCollectionData } from 'react-firebase-hooks/firestore';


const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const newTaskRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const newTask = newTaskRef.current.value;
    if (newTask === "") {
      alert("The task entry is empty!");
      return;
    }
    addTask(newTask);
  };

  const addTask = (newTask) => {
    const newList = [
      ...toDoList,
      {
        id: crypto.randomUUID(),
        task: newTask,
        completed: false,
      },
    ];
    setToDoList(newList);
    newTaskRef.current.value = "";
  };


  const deleteTask = (id) => {
    const newList = toDoList.filter((item) => item.id !== id);
    setToDoList(newList);
  };

  const toggleComplete = (id) => {
    setToDoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };


  // const [tasks, setTasks] = useState([]);
  // const taskRefs = collection(firestoreDB, "Tasks");

  // const getTasksFromDB = async () => {
  //   const data = await getDocs(taskRefs);
  //   setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
  // }

  // getTasksFromDB();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="topbar w-full max-w-3xl mx-auto flex flex-col justify-evenly mt-4 gap-6 md:gap-8">
        <AddTaskForm handleClick={handleClick} newTaskRef={newTaskRef} />
      </div>
      <div className="main relative w-full max-w-3xl m-auto flex flex-col grow flex-nowrap gap-4">
        <div
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center font-bold
                        text-[6rem] sm:text-[7rem] md:text-[8rem] overflow-hidden leading-tight
                        text-[#9c989815] dark:text-[#16161654] mb-2"
        >
          <div className="sm:flex items-center justify-center gap-8">
            <h1>Get</h1>
            <h1>Tasks</h1>
          </div>
          <div className="sm:flex items-center justify-center gap-8">
            <h1>Done</h1>
            <h1>Fast!</h1>
          </div>
        </div>
        <Reorder.Group
          axis="y"
          values={toDoList}
          onReorder={setToDoList}
          className="z-[2] flex flex-col order-last gap-4 list-none sm:grid sm:grid-cols-2
          sm:items-baseline"
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
    </>
  );
};

export default Home;
