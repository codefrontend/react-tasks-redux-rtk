import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../features/slices/taskSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [empty, setEmpty] = useState(false);
  const inputTask = useRef(null);

  const handleChange = (e) => {
    setTask(e.target.value);
    setEmpty(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (task.length === 0) {
      setEmpty(true);
    } else {
      const task_item = {
        id: uuidv4(),
        title: task.trim(),
        completed: false,
      };
      dispatch(addTask(task_item));
      setTask("");
    }
  };

  useEffect(() => {
    inputTask.current.focus();
  }, [task]);

  return (
    <div className="">
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="content-input content-center pb-5 border-b border-white/5">
          <div className="relative">
            <input
              type="text"
              name="task"
              value={task}
              placeholder="Add Item"
              ref={inputTask}
              onChange={handleChange}
              className="bg-[#272851] placeholder:text-slate-400/50 form-input text-slate-400 py-2 px-4 pr-24 rounded-full w-full border-0 outline-none ring-slate-400/25 focus:ring-1  transition"
            />
            <button
              type="submit"
              className="absolute z-10 right-0 top-0 h-full m-0 rounded-full bg-cyan-600 block w-20 text-slate-300 hover:bg-cyan-500 transition duration-300"
            >
              Crear
            </button>
          </div>
          {empty ? (
            <label className="block px-4 text-sm pt-2 text-amber-200">
              Please enter a task
            </label>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
