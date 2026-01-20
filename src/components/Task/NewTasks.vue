<script setup>
</script>

<template>
  <div class="content-body container-fluid">
    <!-- Header and Search Bar -->
    <div class="row p-0 m-0">
      <div class="col-12 col-md-6 col-lg-8 px-3">
        <h5>Task New</h5>
      </div>
      <div class="col-12 col-md-6 col-lg-4 px-2">
        <div class="row">
          <div class="col-8">
            <input class="form-control w-100" placeholder="Search task" />
          </div>
          <div class="col-4">
            <button class="btn btn-primary w-100">Search</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Static Task Cards -->
    <div class="row p-0 m-0 mt-3">
      <div class="col-12 col-lg-3 col-sm-6 col-md-4 p-2">
        <div class="card h-100">
          <div class="card-body">
            <h6>Sample Task Title</h6>
            <p>Sample task description goes here.</p>

            <p class="m-0 p-0">
              <span>📅 01/01/2026</span>

              <!-- Icons (static) -->
              <a class="icon-nav text-primary mx-1">✏️</a>
              <a class="icon-nav text-danger mx-1">🗑️</a>

              <span class="badge float-end bg-info text-white">
                New
              </span>
            </p>
          </div>
        </div>
      </div>

         </div>
  </div>
</template>
