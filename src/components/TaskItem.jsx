import { useDispatch } from "react-redux";
import { removeTask, toggelTask } from "../features/tasks/taskSlice";
import { removeAsyncTask } from "../features/tasks/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const { title, id, completed } = task;

  return (
    <li className="flex items-center justify-between bg-gray-50 px-4 py-3
                   rounded-lg shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggelTask(id))}
          className="w-5 h-5 accent-indigo-600"
        />

        <span
          className={`text-gray-800 ${
            completed ? "line-through text-gray-400" : ""
          }`}
        >
          {title}
        </span>
      </div>

      <button
        onClick={() => dispatch(removeAsyncTask(id))}
        className="text-red-500 hover:text-red-700 transition"
      >
        ✕
      </button>
    </li>
  );
}

export default TaskItem;
