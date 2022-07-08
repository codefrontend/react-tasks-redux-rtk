import { useSelector } from "react-redux";
import CompletedList from "./CompletedList";
import EmptyList from "./EmptyList";

const Completed = () => {
  const tasks = useSelector((state) => state.tasks.taskItems);
  const tasksCompleted = tasks.filter((task) => task.completed === true);

  return (
    <div>
      <h2 className="title-c">COMPLETED</h2>
      <div>
        {tasksCompleted.length === 0 ? (
          <EmptyList text="0 tasks completed" />
        ) : (
          tasksCompleted.map((task) => {
            return <CompletedList key={task.id} {...task} />;
          })
        )}
      </div>
    </div>
  );
};

export default Completed;
