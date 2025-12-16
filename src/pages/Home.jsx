import TaskForm from "../components/TaskForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchTasks } from "../features/tasks/taskSlice";
import { useEffect } from "react";

function Home() {
    const {loading,error} = useSelector((state)=>state.task);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTasks())
    },[dispatch]);

  return (

    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          📝 Smart Todo App
        </h1>
        {loading && <p className="text-center text-gray-500 mt-4">Loading tasks...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        <TaskForm />
        
      </div>
    </div>
  );
}

export default Home;
