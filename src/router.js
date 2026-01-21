import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";
import DashboardPage from "./pages/DashboardPage.vue";
import CreateTask from "./components/Task/CreateTask.vue";
import NewTasks from "./components/Task/NewTasks.vue";
import ProgressTasks from "./components/Task/ProgressTasks.vue";

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
    ],
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
