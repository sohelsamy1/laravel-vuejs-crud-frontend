<template>
  <div class="container my-4">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8 animate__animated animate__fadeInUp">
        <div class="card shadow-sm">
          <div class="card-body">
            <h4 class="mb-4">Profile Information</h4>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="User Email"
                  readonly
                />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.075);
}

.form-label {
  font-weight: 500;
  font-size: 14px;
  color: #4a4a4a;
}

input.form-control {
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
}
</style>
