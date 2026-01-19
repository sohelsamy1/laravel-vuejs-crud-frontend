import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";

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
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

