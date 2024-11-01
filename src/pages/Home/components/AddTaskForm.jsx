import { AiOutlineFileAdd } from "react-icons/ai";
import { motion } from "framer-motion";

function AddTaskForm({ handleClick, newTaskRef }) {
  return (
    <form 
      id="input-form" 
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
    >
      <motion.div 
        className="flex items-center gap-2 py-2 px-6 sm:px-6 md:px-7 h-14 sm:h-16 md:h-18 
                   rounded-full dark:bg-[#434e3c73] shadow-lg shadow-slate-800/30
                   hover:shadow-xl hover:shadow-slate-800/40 transition-all
                   focus-within:ring-2 focus-within:ring-[#ffb300]/50"
        // initial={{ scale: 0.98 }}
        // animate={{ scale: 1 }}
        // whileHover={{ scale: 1.01 }}
        // whileTap={{ scale: 0.99 }}
      >
        <input 
          type="text" 
          className="w-full text-sm sm:text-base outline-none bg-transparent 
                     placeholder:text-gray-400 placeholder:transition-all
                     focus:placeholder:opacity-70"
          placeholder="Add a new task..."
          ref={newTaskRef}
        />
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-shrink-0"
        >
          <AiOutlineFileAdd className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffb300] 
                                     hover:text-[#ffc133] transition-colors" />
        </motion.button>
      </motion.div>
    </form>
  );
}

export default AddTaskForm;