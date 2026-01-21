import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";

export const useTaskStore = defineStore("task", () => {
const tasks = ref([]);
 


  //Create Task
  const createTask = async (payload) => {
    const res = await apiClient.post("/tasks", payload);
    tasks.value.unshift(res.data);
  };

  return{
    tasks,
    createTask,
  };
  });


  