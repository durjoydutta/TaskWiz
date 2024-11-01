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
      <div className="topbar w-full max-w-3xl mx-auto flex flex-col flex-nowrap justify-evenly mt-4 gap-6 md:gap-8">
        <AddTaskForm handleClick={handleClick} newTaskRef={newTaskRef} />
      </div>
      <div className="divider w-full max-w-3xl h-1 bg-gray-600 rounded-full"></div>
      <div className="main relative w-full max-w-3xl mx-auto flex flex-col grow flex-nowrap gap-4">
        <div className="watermark-container flex justify-center items-center h-full w-full">
          <h1
            className="absolute z-[1] top-1/2 left-1/2-translate-x-1/2 -translate-y-1/2 
                        text-center text-[7rem] sm:text-[10rem] md:text-[12rem] font-bold
                        leading-none tracking-wider sm:leading-[10rem] sm:tracking-widest 
                        text-[#9c989815] dark:text-[#1f1b1b65] m-2"
          >
            THE TODO APP
          </h1>
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
