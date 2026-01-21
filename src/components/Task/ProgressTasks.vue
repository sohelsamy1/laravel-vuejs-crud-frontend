<script setup>
import { onBeforeMount } from "vue";
import { useTaskStore } from "../../stores/taskStore";
import ShimmerLoader from "../ShimmerLoader.vue";

const taskStore = useTaskStore();


onBeforeMount(async () => {
  await taskStore.fetchTasksByStatus("in_progress");
});
</script>

<template>
  <div class="content-body container-fluid">
    <!-- Header -->
    <div class="row p-0 m-0 mb-3">
      <div class="col-12 col-md-6 col-lg-8 px-3">
        <h5>Task In Progress</h5>
      </div>
      <div class="col-12 col-md-6 col-lg-4 px-2">
        <div class="row">
          <div class="col-8">
            <input class="form-control w-100" placeholder="Search tasks..." />
          </div>
          <div class="col-4">
            <button class="btn btn-primary w-100">Search</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Task Cards -->
    <ShimmerLoader :loading="taskStore.loading" :count="8" :lines="1">
      <div class="row p-0 m-0">
        <div
          v-for="task in taskStore.tasks"
          :key="task.id"
          class="col-12 col-md-6 col-lg-4 p-2"
        >
          <div class="card h-100">
            <div class="card-body">
              <h6>{{ task.title }}</h6>
              <p>{{ task.description }}</p>
              <p class="m-0">
                <small>{{ new Date(task.created_at).toLocaleDateString() }}</small>

                <!-- Action Icons -->
                <span class="float-end">
                  <a class="icon-nav text-primary mx-1">
                    <!-- Edit icon placeholder -->
                    ✏️
                  </a>
                  <a class="icon-nav text-danger mx-1">
                    <!-- Delete icon placeholder -->
                    🗑️
                  </a>
                  <span class="badge bg-primary">{{ task.status }}</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <!-- No Tasks Message -->
        <div v-if="!taskStore.loading && taskStore.tasks.length === 0" class="col-12">
          <p class="text-center text-muted">No tasks found.</p>
        </div>
      </div>
    </ShimmerLoader>
  </div>
</template>
