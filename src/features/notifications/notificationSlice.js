import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    message:"",
    type:"info",
    visible:false
}
 const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
        showNotification:(state,action)=>{
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.visible = true;
        },
        hideNotification:(state)=>{
            state.message = "";
            state.visible  = false;
        }
    }
 })


 export  const {showNotification,hideNotification}= notificationSlice.actions;
 export default notificationSlice.reducer;

 export const notificationSelector = (state)=>state.notification