<script setup>
</script>

<template>
  <div class="content-body container-fluid">
    <div class="d-flex justify-content-center row">
      <div class="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
        <div class="card">
          <div class="card-body">
            <h4>Create New</h4>
            <br />
            <input
              placeholder="Task Name"
              class="form-control animated fadeInUp"
              type="text"
            />
            <br />
            <textarea
              rows="5"
              placeholder="Task Description"
              class="form-control animated fadeInUp"
              type="text"
            ></textarea>
            <br />
            <button class="btn float-end btn-primary">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
