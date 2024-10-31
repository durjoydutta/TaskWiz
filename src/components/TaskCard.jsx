import { IoMdClose } from "react-icons/io";
import { Reorder, motion, useDragControls } from "framer-motion";

const TaskCard = ({ task, id, completed, deleteTask, toggleComplete }) => {
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={{ id, task, completed }}
      id={id}
      className="w-full cursor-move list-none"
      dragListener={false}
      dragControls={dragControls}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileDrag={{ 
        scale: 1.02,
        boxShadow: "0 5px 15px rgba(0,0,0,0.25)",
        cursor: "grabbing"
      }}
      dragElastic={0.1}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragSnapToOrigin={false}
      layoutId={id}
    >
      <motion.div
        onPointerDown={(e) => dragControls.start(e)}
        layout
        className="w-full py-3 px-4 sm:px-6 md:px-7 rounded-lg 
                   shadow-xl shadow-slate-600/20 transition-all
                   hover:shadow-slate-600/50 border-2 border-[#ffb3005f]"
      >
        <div className='flex gap-3 sm:gap-4 md:gap-5 items-center justify-between select-none'>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleComplete(id)}
            className="w-4 h-4 accent-[#ffb300] border-gray-300 rounded 
                     focus:ring-2 focus:ring-[#ffb300] dark:ring-offset-gray-800 
                     dark:bg-gray-700 dark:border-gray-600"
          />
          <label 
            className={`ml-2 sm:ml-3 text-sm md:text-base font-medium flex-grow
                       ${completed ? 'line-through opacity-60' : ''}`}
          >
            {task}
          </label>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='delete text-2xl sm:text-3xl flex-shrink-0 text-[#ffb300]
                      hover:text-[#ffc133] transition-colors'
            onClick={() => deleteTask(id)}
          >
            <IoMdClose />
          </motion.button>
        </div>
      </motion.div>
    </Reorder.Item>
  );
}

export default TaskCard;