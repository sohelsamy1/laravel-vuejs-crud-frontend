<template>
  <div class="content-body container-fluid">
    <!-- Header and Search -->
    <div class="row p-0 m-0">
      <div class="col-12 col-md-6 col-lg-8 px-3">
        <h5>Task Completed</h5>
      </div>

      <div class="col-12 float-end col-md-6 col-lg-4 px-2">
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

    <!-- Task Cards -->
    <div class="row p-0 m-0 mt-3">
      <div class="col-12 col-lg-4 col-sm-6 col-md-4 p-2">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="animated fadeInUp">Task Title</h6>
            <p class="animated fadeInUp">
              Task description goes here
            </p>

            <p class="m-0 animated fadeInUp p-0 d-flex align-items-center">
              <!-- Date Icon -->
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32z"
                />
              </svg>

              <span class="mx-1">21 Jan 2026</span>

              <!-- Edit -->
              <a class="icon-nav text-primary mx-1">
                ✏️
              </a>

              <!-- Delete -->
              <a class="icon-nav text-danger mx-1">
                🗑️
              </a>

              <a class="badge float-end bg-success ms-auto">
                Completed
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
