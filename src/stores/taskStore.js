import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClient";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref([]);
  const loading = ref(false);

  // ======================
  // Create Task
  // ======================
  const createTask = async (payload) => {
    try {
      const res = await apiClient.post("/tasks", payload);
      if (res?.data?.data) {
        tasks.value.unshift(res.data.data);
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

  // ======================
  // Get Single Task
  // ======================
  const getTaskById = async (id) => {
    try {
      const res = await apiClient.get(`/tasks/${id}`);
      return res.data.data;
    } catch (error) {
      console.error("Get task failed:", error);
      return null;
    }
  };

  // ======================
  // Update Task
  // ======================
  const updateTask = async (id, payload) => {
    try {
      const res = await apiClient.put(`/tasks/${id}`, payload);
      const index = tasks.value.findIndex((t) => t.id === id);
      if (index !== -1) tasks.value[index] = res.data.data;
      return res.data.data;
    } catch (error) {
      console.error("Update task failed:", error);
      throw error;
    }
  };

  // ======================
  // Normal Delete Task (Soft Delete)
  // ======================
  const deleteTask = async (id) => {
    try {
      await apiClient.delete(`/tasks/${id}`);
      // Optionally fetch trashed tasks if Trash page is open
      tasks.value = tasks.value.filter((t) => t.id !== id);
    } catch (error) {
      console.error("Delete task failed:", error);
      cogoToast.error("Failed to delete task");
    }
  };

  // ======================
  // Fetch Trashed Tasks
  // ======================
  const fetchTrashedTasks = async () => {
    tasks.value = [];
    loading.value = true;
    try {
      const res = await apiClient.get("/tasks/trashed");
      tasks.value = res.data.data.data ?? res.data.data ?? [];
    } catch (error) {
      console.error("Failed to fetch trashed tasks", error);
      cogoToast.error("Failed to load trashed tasks");
    } finally {
      loading.value = false;
    }
  };

  // ======================
  // Permanent Delete Task
  // ======================
  const forceDeleteTask = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to recover this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await apiClient.delete(`/tasks/${id}/force`);
        tasks.value = tasks.value.filter((t) => t.id !== id);
        Swal.fire(
          "Deleted!",
          "The task has been permanently deleted.",
          "success"
        );
      } catch (error) {
        console.error("Failed to permanently delete task", error);
        Swal.fire("Failed", "Could not delete the task.", "error");
      }
    }
  };



  return {
    tasks,
    loading,
    createTask,
    fetchTasksByStatus,
    getTaskById,
    updateTask,
    deleteTask,
    fetchTrashedTasks,
    forceDeleteTask,
    
  };
});
