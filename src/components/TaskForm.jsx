import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTask, addTask } from "../features/tasks/taskSlice";
import TaskSubmitButton from "./TaskSubmitButton";
import TaskList from "./TaskList";

function TaskForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    // dispatch(
    //   addTask({
    //     id: Date.now().toString(),
    //     title: task,
    //     completed: false,
    //     createdAt: Date.now(),
    //   })
    // );
    dispatch(
        addAsyncTask(task)
    )

    setTask("");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        ➕ Add New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-4 flex gap-3"
      >
        <input
          id="taskInput"
          type="text"
          placeholder="Write your task..."
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <TaskSubmitButton />
      </form>

      <TaskList />
    </div>
  );
}

export default TaskForm;
