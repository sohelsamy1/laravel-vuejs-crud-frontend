# Laravel-VueJS CRUD Frontend  

Frontend for a Task Management CRUD app using **Vue 3**, **Pinia**, and **Axios**.  

---

## Author  

**Sohel Samy**  
Email: sohelsamy18@gmail.com  
LinkedIn: https://linkedin.com/in/sohelsamy  

---  

## Backend  

Make sure you have the Laravel backend running:  
🔗 Backend Repository: https://github.com/sohelsamy1/laravel-vuejs-crud-backend  

API base URL in `axiosClient.js` should match your backend, e.g.:  

```js  
const apiClient = axios.create({  
  baseURL: "http://127.0.0.1:8000/api/v1",  
  headers: { "Content-Type": "application/json" },  
});  
```
## Features  

Task Management  
Create, read, update, soft delete, restore, and permanently delete tasks  
Update task status (new, in_progress, completed, canceled)  

Pages:   

Dashboard: View tasks by status  
Progress Tasks: Tasks with in_progress status  
Trashed Tasks: Soft-deleted tasks (restore & permanent delete)  
Edit Task: Update task details  

Notifications:   

Toasts via CogoToast  
Confirmation dialogs via SweetAlert2  

Loading State:    

Shimmer loader for async fetches  

## Project Structure  

src/
├─ components/       # Reusable UI components (e.g., ShimmerLoader.vue)  
├─ pages/            # Main pages (Dashboard, EditTask, TrashedTasks, ProgressTasks)  
├─ router/           # Vue-router config  
├─ services/         # Axios client setup  
├─ stores/           # Pinia store for task state (taskStore.js)  
└─ App.vue  

## Quick Setup  

Clone repo & install dependencies:  
git clone <frontend-repo-url>  
cd laravel-vuejs-crud-frontend  
npm install  

Run dev server:  
npm run dev  

Configure API base URL in axiosClient.js (see Backend section)  

## Pinia Task Store  

taskStore.js manages all task operations:  
tasks, loading  
createTask(payload)  
fetchTasksByStatus(status)  
getTaskById(id)  
deleteTask(id) → soft delete  
fetchTrashedTasks()  
forceDeleteTask(id) → permanent delete  
restoreTask(id) → restore soft-deleted tasks  

## Notes  

SweetAlert2 handles confirmations.  
CogoToast handles success/error messages.  
Tasks API returns paginated results; frontend currently fetches all tasks.  

## Future Features  

File Uploads: Attach pictures or videos to tasks  
Enhanced Search & Filters: Filter by date, priority, or user  
Drag & Drop Tasks: Reorder tasks visually  
