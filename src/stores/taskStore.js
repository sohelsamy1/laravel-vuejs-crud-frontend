import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref([]);
  const loading = ref(false);


    //Create Task
  const createTask = async (payload) => {
    const res = await apiClient.post("/tasks", payload);
    tasks.value.unshift(res.data);
  };

 // Get Tasks by Status
  const fetchTasksByStatus = async (status = "pending") => {
    tasks.value = [];
    loading.value = true;
    try {
      const res = await apiClient.get(`/tasksfilter?status=${status}`);
      tasks.value = res.data.data.data;
    } finally {
      loading.value = false;
    }
  };

  return {
    tasks,
    loading,
    createTask,
    fetchTasksByStatus,
  };
});
