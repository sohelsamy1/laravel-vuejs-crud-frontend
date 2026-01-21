import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref([]);
  const loading = ref(false);

  // ======================
  // Create Task
  // ======================
  const createTask = async (payload) => {
    try {
      const res = await apiClient.post("/tasks", payload);
      if (res?.data) {
        tasks.value.unshift(res.data);
      }
    } catch (error) {
      console.error("Create task failed:", error);
      throw error;
    }
  };

  // ======================
  // Get Tasks by Status
  // ======================
  const fetchTasksByStatus = async (status = "pending") => {
    loading.value = true;
    tasks.value = [];

    try {
      const res = await apiClient.get(`/tasksfilter?status=${status}`);

     tasks.value = res?.data?.data?.data ?? [];
    } catch (error) {
      console.error("Fetch tasks failed:", error);
      tasks.value = [];
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
