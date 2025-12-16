import { useSelector } from "react-redux";
import { taskSelector } from "../features/tasks/taskSlice";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector(taskSelector);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">
        📋 Task List
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center py-6">
          No tasks available. Add one above 👆
        </p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
