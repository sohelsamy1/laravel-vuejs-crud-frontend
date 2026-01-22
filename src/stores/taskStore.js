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

  // Get Single Task
  const getTaskById = async (id) => {
    const res = await apiClient.get(`/tasks/${id}`);
    return res.data.data;
  };

  // Update Task
  const updateTask = async (id, payload) => {
    const res = await apiClient.put(`/tasks/${id}`, payload);
    const index = tasks.value.findIndex((t) => t.id === id);
    if (index !== -1) tasks.value[index] = res.data;
  };

    // Normal Delete Task
  const deleteTask = async (id) => {
    await apiClient.delete(`/tasks/${id}`);
    tasks.value = tasks.value.filter((t) => t.id !== id);
  };


  return {
    tasks,
    loading,
    createTask,
    fetchTasksByStatus,
    getTaskById,
    updateTask, 
    deleteTask,
  };
});
