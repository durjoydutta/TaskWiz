import AddTaskForm from "./components/AddTaskForm";
import TaskCard from "./components/TaskCard";
import { Reorder } from "framer-motion";

const Home = ({
  toDoList,
  setToDoList,
  newTaskRef,
  handleClick,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <>
      <div className="topbar w-full max-w-3xl mx-auto flex flex-col justify-evenly mt-4 gap-6 md:gap-8">
        <AddTaskForm handleClick={handleClick} newTaskRef={newTaskRef} />
      </div>
      <div className="main relative w-full max-w-3xl mx-auto flex flex-col grow flex-nowrap gap-4">
        <div
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center font-semibold
                        text-[6rem] leading-tight sm:text-[8rem] 
                        text-[#9c989815] dark:text-[#1f1b1b65] m-2"
        >
          <h1>Your</h1>
          <h1>TODO</h1>
          <h1>App</h1>
        </div>
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
    </>
  );
};

export default Home;
