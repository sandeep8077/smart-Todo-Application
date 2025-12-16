import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { addTaskApi, deleteTaskApi, fetchTasksApi } from "../../services/taskApi";
import { showNotification } from "../notifications/notificationSlice";


// async thunk to fetch tasks from the API
export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks', async()=>{
        const tasks = await fetchTasksApi();
        return tasks.slice(0,10);
    }
)

// async thunk to add a new task to the API
export const addAsyncTask = createAsyncThunk(
    'tasks/addAsyncTask', async(task,{dispatch})=>{
        const newTask = await addTaskApi(task);
        dispatch(showNotification({
            message:"Task added successfully",
            type:"success"
        }));
        return newTask;
    }
)

// async thunk to remove a task from the API
export const removeAsyncTask = createAsyncThunk(
    'tasks/removeAsyncTask', async(taskid,{dispatch})=>{
        const deletedTask = await deleteTaskApi(taskid);
        dispatch(showNotification({
            message:"Task deleted successfully",
            type:"warning"
        }));
        return deletedTask;
    }
)


const initialState = {
    tasks:[
        // {
        //     id:nanoid(),
        //     title:"Learn Redux toolkit",
        //     completed:false,
        //     createdAt:Date.now()
        // },
        //  {
        //     id:nanoid(),
        //     title:"Learn React Router Dom",
        //     completed:false,
        //     createdAt:Date.now()
        // }
    ],
    loading:false,
    error:null
}

const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        // addTask:(state,action)=>{
        //     state.tasks.push(action.payload);
        // },
        // removeTask:(state,action)=>{
        //     state.tasks = state.tasks.filter((task)=>task.id !== action.payload);
        // },
        toggelTask:(state,action)=>{
            const task = state.tasks.find((task)=>task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTasks.pending,(state)=>{
            state.loading = true;
            state.error = null;
        }).
        addCase(fetchTasks.fulfilled,(state,action)=>{
            state.loading = false;
            state.tasks = action.payload;
        }).
        addCase(fetchTasks.rejected,(state,action)=>{
            state.loading = false;
            state.error  = action.payload;
        })

        // adding async task cases
        .addCase(addAsyncTask.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(addAsyncTask.fulfilled,(state,action)=>{
            state.loading = false;
            state.tasks.unshift({
                id:action.payload.id || nanoid(),
                title:action.payload.title,
                completed:action.payload.completed || false,
                createdAt:action.payload.createdAt || Date.now()
            });
        })
        .addCase(addAsyncTask.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        // remove async task cases
     
        .addCase(removeAsyncTask.fulfilled,(state,action)=>{
            state.loading = false;
            state.tasks = state.tasks.filter((task)=>task.id !== action.payload);
        })
      
    }
})

export const {toggelTask,removeTask,addTask} = taskSlice.actions;
export default taskSlice.reducer;
export const taskSelector = (state) => state.task.tasks;