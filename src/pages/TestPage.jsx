import { firestoreDB } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react'; 

const TestPage = () => {
  const [tasks, setTasks] = useState([]);
  const taskRefs = collection(firestoreDB, "Tasks");

  // const addTask = (newTask) => {
  //   const newList = [
  //     ...tasks,
  //     {
  //       id: crypto.randomUUID(),
  //       task: newTask,
  //       completed: false,
  //     },
  //   ];
  //   setTasks(newList);
  //   newTaskRef.current.value = "";
  // };

  const getTasks = async () => {
    const data = await getDocs(taskRefs);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, details: doc.details })));
    console.log(tasks);
  }

  getTasks();

  return  (
    <>
      {tasks.map((task) => (
        <div key={task.id}>{task.task.details}</div>
      ))}

      <div className="test">test</div>
    </>
  )
};

export default TestPage;
