<template>
  <div class="content-body container-fluid">
    <h5>Trashed Tasks</h5>

    <!-- Task Cards -->
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 p-2">
        <div class="card h-100">
          <div class="card-body">
            <h6>Task Title</h6>

            <p>
              Task description goes here
            </p>

            <p class="mb-0">
              Deleted at: 21 Jan 2026, 10:30 AM
            </p>

            <button
              class="btn btn-danger btn-sm mt-2"
            >
              Permanently Delete
            </button>

            <button
              class="btn btn-success btn-sm mt-2 ms-2"
            >
              Restore
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
