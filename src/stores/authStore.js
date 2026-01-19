import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";

export const useAuthStore = defineStore("auth", () => {
  // State
  const user = ref(null);
  const token = ref(localStorage.getItem("token") || null);

  // Action: Registration
  const register = async (credentials) => {
    try {
      await apiClient.post("/register", credentials);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return {
    user,
    token,
    register,
  };
});
