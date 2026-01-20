import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";

export const useAuthStore = defineStore("auth", () => {
  // State
  const user = ref(null);
  const token = ref(localStorage.getItem("token") || null);

  // Action

  //Registration
  const register = async (credentials) => {
    try {
      await apiClient.post("/register", credentials);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

//Login
const login = async (credentials) => {
    try {
      const res = await apiClient.post("/login", credentials);
      console.log(res);
      token.value = res.data.data.token;
      localStorage.setItem("token", token.value);
      return true;
    } catch (error) {
      console.log(error);
      
    }
  };

  return {
    user,
    token,
    register,
    login,
  };
});
