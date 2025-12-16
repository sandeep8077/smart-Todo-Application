import { useSelector } from "react-redux";
function TaskSubmitButton() {
    const {loading} = useSelector((state)=>state.task)
  return (
    <button
      type="submit"
      className="bg-indigo-600 text-white px-6 py-2 rounded-lg
                 hover:bg-indigo-700 active:scale-95 transition-all"
        disabled={loading}
    >
      {loading ?"Adding...":"Add Task"}
    </button>
  );
}

export default TaskSubmitButton;
