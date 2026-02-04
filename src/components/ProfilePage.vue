<script setup>
import { onBeforeMount } from "vue";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();

onBeforeMount(async () => {
  await authStore.getUser();
});
</script>

<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 animate__animated animate__fadeInUp">
        <div class="card">
          <div class="card-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-4 p-2">
                  <label>Email Address</label
                  ><input
                    placeholder="User Email"
                    class="form-control animated fadeInUp"
                    type="email"
                    :value="authStore.user?.email"
                  />
                </div>
                <div class="col-4 p-2">
                  <label>Name</label
                  ><input
                    placeholder="First Name"
                    class="form-control animated fadeInUp"
                    type="text"
                    :value="authStore.user?.name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
