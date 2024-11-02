import { useState, useRef } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  return (
    <div className="wrapper min-h-screen px-8 sm:px-8 md:px-10 py-2 dark:bg-[#070707e3] flex flex-col justify-between items-center gap-6 md:gap-8 text-gray-900 dark:text-[#ffb300] dark:selection:text-white antialiased">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                toDoList={toDoList}
                newTaskRef={newTaskRef}
                handleClick={handleClick}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            }
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
