# 📝 Smart Task Manager

Smart Task Manager is a modern, scalable **Todo / Task Management web application** built using **React** and **Redux Toolkit**.  
The project demonstrates **real-world frontend architecture**, async API handling, global state management, and clean UI design.

---

## 🚀 Live Overview
Smart Task Manager allows users to:
- Create, manage, and track daily tasks
- Handle async operations with proper loading and error states
- Display global notifications for user actions
- Maintain a clean and responsive UI

---

## ✨ Features

- ➕ Add new tasks
- 🗑️ Delete tasks
- ✅ Toggle task completion
- 🔄 Full CRUD operations
- 🌐 Async API integration using `createAsyncThunk`
- 🔔 Global notification system (success, error, warning)
- 🧠 Centralized state management with Redux Toolkit
- ⚡ Fast development with Vite
- 🎨 Clean & responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Usage |
|----------|------|
| **React** | UI development |
| **Redux Toolkit** | State management |
| **React Redux** | Store connection |
| **createAsyncThunk** | Async API calls |
| **ExtraReducers** | Handling async states |
| **Tailwind CSS** | Styling |
| **Vite** | Build tool |
| **Git & GitHub** | Version control |

---

## 🧠 Architecture Overview

The application follows a **feature-based architecture**:

src/
├── app/
│ └── store.js
├── features/
│ ├── tasks/
│ │ └── taskSlice.js
│ └── notification/
│ └── notificationSlice.js
├── components/
│ ├── TaskForm.jsx
│ ├── TaskList.jsx
│ ├── TaskItem.jsx
│ └── Notification.jsx
├── pages/
│ └── Home.jsx
└── main.jsx


---

## 🔔 Notification System

The app uses a **Redux-based notification reducer** to show:
- Success messages
- Error alerts
- Warning notifications

Notifications are:
- Global
- Auto-dismissed
- Triggered from async actions and reducers

---

## 🌐 Async API Integration

- API integration handled using `createAsyncThunk`
- Proper handling of:
  - `pending`
  - `fulfilled`
  - `rejected`
- Graceful fallback for API failures

---

## 🧪 State Management

Redux Toolkit is used for:
- Creating slices
- Managing global state
- Handling async workflows
- Keeping UI and logic separated

---

## ▶️ Getting Started

### Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/smart-task-manager.git


##Install dependencies:
  npm install

##Run the project
  npm run dev



📌 Future Improvements

✏️ Edit task functionality

🌓 Dark mode

💾 LocalStorage / Database persistence

🔁 Task filters (All / Active / Completed)

🎬 Animations






👨‍💻 Author

Your Sandeep kumar
Frontend Developer (React)