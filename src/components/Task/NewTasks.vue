<script setup>
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useTaskStore } from "../../stores/taskStore";
import ShimmerLoader from "../ShimmerLoader.vue";

const taskStore = useTaskStore();
const router = useRouter();

onBeforeMount(async () => {
  await taskStore.fetchTasksByStatus("completed");
});

const goToEdit = (id) => {
  router.push({ name: "edittask", params: { id } });
};

const deleteTask = async (id) => {
  await taskStore.deleteTask(id);
};
</script>

<template>
  <div class="content-body container-fluid">
    <!-- Header -->
    <div class="row p-0 m-0">
      <div class="col-12 col-md-6 col-lg-8 px-3">
        <h5>Task New</h5>
      </div>
    </div>

    <!-- Task List -->
    <ShimmerLoader :loading="taskStore.loading" :count="12" :lines="1">
      <div class="row p-0 m-0">
        <div
          v-for="task in taskStore.tasks"
          :key="task.id"
          class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
        >
          <div class="card h-100">
            <div class="card-body">
              <h6>{{ task.title }}</h6>
              <p>{{ task.description }}</p>

              <div class="d-flex justify-content-between align-items-center">
                <small>
                  {{ new Date(task.created_at).toLocaleDateString() }}
                </small>

                <div>
                  <!-- Edit -->
                  <span
                    class="text-primary mx-2 cursor-pointer"
                    @click="goToEdit(task.id)"
                  >
                    ✏️
                  </span>

                  <!-- Delete -->
                  <span
                    class="text-danger cursor-pointer"
                    @click="deleteTask(task.id)"
                  >
                    🗑️
                  </span>
                </div>
              </div>

              <span class="badge bg-info mt-2">{{ task.status }}</span>
            </div>
          </div>
        </div>
      </div>
    </ShimmerLoader>
  </div>
</template>
