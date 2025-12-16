
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// fetch tasks from the API

export const fetchTasksApi = async()=>{
    const response = await fetch(BASE_URL);
    if(!response.ok){
        throw new Error('Failed to fetch tasks');
    }
    return await response.json();
}


// add a new task to the API

export const addTaskApi = async(task)=>{
    const response = await fetch(BASE_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:task,
            completed:false,
            userId:1})
    })
    if(!response.ok){
        throw new Error('Failed to add task');
    }
    return await response.json();
}

// delete a task from the API
export const deleteTaskApi  = async(taskId)=>{
   const response = await fetch(`${BASE_URL}/${taskId}`,{
    method:"DELETE"
   });
   if(!response.ok){
       throw new Error('Failed to delete task');
   }
   return taskId;
}



