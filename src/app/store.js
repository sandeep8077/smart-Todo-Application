import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/tasks/taskSlice'
import notificationReducer from '../features/notifications/notificationSlice'


export const store = configureStore({
    reducer:{
        task:taskReducer,
        notification:notificationReducer
    }
})