import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";
import DashboardPage from "./pages/DashboardPage.vue";
import CreateTask from "./components/Task/CreateTask.vue";
import NewTasks from "./components/Task/NewTasks.vue";
import ProgressTasks from "./components/Task/ProgressTasks.vue";
import CompletedTasks from "./components/Task/CompletedTasks.vue";
import CanceledTasks from "./components/Task/CanceledTasks.vue";
import TrashedTasks from "./components/Task/TrashedTasks.vue";
import ProfilePage from "./components/ProfilePage.vue";
import EditTask from "./components/Task/EditTask.vue";
import SummaryPage from "./components/SummaryPage.vue";
import { useAuthStore } from "./stores/authStore";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/register",
    component: RegistrationPage,
    name: "register",
  },
  {
    path: "/dashboard",
    component: DashboardPage,
    name: "dashboard",
    meta: { requiresAuth: true },
    children: [
        {
        path: "summary",
        component: SummaryPage,
        name: "summary",
      },
       {
        path: "create",
        component: CreateTask,
        name: "create",
      },
        {
        path: "newtasks",
        component: NewTasks,
        name: "newtasks",
      },
        {
        path: "inprogress",
        component: ProgressTasks,
        name: "inprogress",
      },
        {
        path: "completed",
        component: CompletedTasks,
        name: "completed",
      },
        {
        path: "cancelled",
        component: CanceledTasks,
        name: "cancelled",
      },
        {
        path: "tasks/trashed",
        component: TrashedTasks,
        name: "trashed",
      },
        {
        path: "profile",
        component: ProfilePage,
        name: "profile",
      },
       {
        path: "tasks/:id/edit",
        name: "edittask",
        component: EditTask,
      },
    ],
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next)=> {
    const auth = useAuthStore();
    const isAuthenticated = auth.isAuthenticated;

    //if user is not logged in but trying to access dasjboard or other....... 
    if(to.meta.requiresAuth && !isAuthenticated) {
      return next({ name: "login" });
    }
    
    //if user is already logged in but trying to access login/ registration page......
    if((to.name === 'login' || to.name === 'register') && isAuthenticated){
      return next ({ name: "summary"});
    }
      
    next();
});


export default router;
