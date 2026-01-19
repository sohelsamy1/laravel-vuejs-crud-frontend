<script setup>

</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-6 center-screen">
        <div class="card w-90 p-4">
          <div class="card-body">
            <form >
              <h4>SIGN IN</h4>
              <br />
              <input
                placeholder="User Email"
                class="form-control animated fadeInUp"
                type="email"
                name="email"
                v-model="email"
              />
              <br />
              <input
                placeholder="User Password"
                class="form-control animated fadeInUp"
                type="password"
                name="password"
                v-model="password"
              />
              <br />
              <button class="btn w-100 animated fadeInUp float-end btn-primary">
                Next
              </button>
            </form>
            <hr />
            <div class="float-end mt-3">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
