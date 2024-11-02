import AddTaskForm from "./components/AddTaskForm";
import TaskCard from "./components/TaskCard";
import { Reorder } from "framer-motion";
import {useAuthState} from 'react-firebase-hooks/auth';
import { useState, useEffect, useRef } from "react";
import {auth, firestoreDB} from '../../../firebase.config'
import { addDoc, collection, getDocs, deleteDoc, updateDoc, doc, query, where } from "firebase/firestore";


const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [user] = useAuthState(auth);
  const newTaskRef = useRef(null); // task ref of new data generated through form by user
  const dbTaskRef = collection(firestoreDB, "Tasks"); // task ref of data generated fetched from db


  const handleClick = (e) => {
    e.preventDefault();
    const newTask = newTaskRef.current.value;
    if (newTask === "") {
      alert("The task entry is empty!");
      return;
    }
    newTaskRef.current.value = "";
    addTaskToDB(newTask);
  };

  const addTaskToDB = async (newTask) => {
    await addDoc(dbTaskRef, {
      ...(user && {
        userId: user?.uid,
        username: user?.displayName,
        anonymous: user?.isAnonymous,
        userPhoto: user?.photoURL,
        email: user?.email,
        phone: user?.phoneNumber,
        providerId: user?.providerId,
      }),
      task: newTask,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  const getTasksFromDB = async () => {
    if (user) { // Check if user is authenticated
      const q = query(dbTaskRef, where("userId", "==", user.uid));
      const data = await getDocs(q); // Execute the query
      setToDoList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
  };
  

  getTasksFromDB();


  const deleteTask = async (id) => {
    try {
      const targetDocRef = doc(dbTaskRef, id);
      await deleteDoc(targetDocRef);
      console.log('Task deleted successfully!');
  
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const targetDocRef = doc(dbTaskRef, id);
      await updateDoc(targetDocRef, {
        completed: !toDoList.find((task) => task.id === id).completed,
        updatedAt: new Date(),
      });
      console.log('Task updated successfully!');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };


  //previously used when no db was connected
  // const addTask = (newTask) => { 
  //   const newList = [
  //     ...toDoList,
  //     {
  //       id: crypto.randomUUID(),
  //       task: newTask,
  //       completed: false,
  //     },
  //   ];
  //   setToDoList(newList);
  //   newTaskRef.current.value = "";
  // };

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
