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
