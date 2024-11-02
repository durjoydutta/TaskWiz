import { firestoreDB } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { useState } from 'react'; 

const TestPage = () => {
  const [tasks, setTasks] = useState([]);
  const taskRefs = collection(firestoreDB, "Tasks");

  const getTasks = async () => {
    const data = await getDocs(taskRefs);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    // console.log(tasks);
  }

  getTasks();

  return  (
    <>
      <div className="dbdata flex flex-col grow w-full max-w-3xl h-full mx-auto gap-3">
        {tasks.map((task) => (
          <div key={task.id} className="task bg-zinc-500 py-2 px-5 flex gap-3 justify-between rounded-lg">
            <span>{task.username}</span>
            <span className="truncate ... overflow-hidden">{task.task}</span>
            <span>{task.completed ? "✅" : "❌"}</span>
          </div>
        ))}
      </div>
    </>
  )

};

export default TestPage;
