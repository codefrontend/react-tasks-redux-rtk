import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../features/slices/taskSlice";
import { useParams, useNavigate } from "react-router-dom";

const TaskEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.taskItems);
  const task_current = tasks.filter((task) => task.id === params.id);
  const dispatch = useDispatch();
  const [task, setTask] = useState(task_current[0].title);
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
      dispatch(
        editTask({
          title: task,
          id: params.id,
        })
      );
      navigate("/");
      // setTask("");
    }
  };

  useEffect(() => {
    inputTask.current.focus();
  }, [task]);

  return (
    <div className="">
      <h2 className="text-center text-white/50 text-4xl font-bold pb-8">
        EDIT TASK
      </h2>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="content-input content-center pb-5 border-b border-white/5">
          <div className="relative">
            <input
              type="text"
              name="task"
              value={task}
              placeholder="Edit Item"
              ref={inputTask}
              onChange={handleChange}
              className="bg-[#272851] placeholder:text-slate-400/50 form-input text-slate-400 py-2 px-4 pr-24 rounded-full w-full border-0 outline-none ring-slate-400/25 focus:ring-1  transition"
            />
            <button
              type="submit"
              className="absolute z-10 right-0 top-0 h-full m-0 rounded-full bg-cyan-600 block w-20 text-slate-300 hover:bg-cyan-500 transition duration-300"
            >
              Update
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

export default TaskEdit;
