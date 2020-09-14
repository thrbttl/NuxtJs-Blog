<template>
  <div class="container setting">
    <div class="card mb-3">
      <div class="card-img-overlay">
        <h5
          class="card-title d-flex justify-content-center"
        >Hatalı işlem. Lütfen tekrar işlem yapınız.</h5>
      </div>
      <div class="card-body">
        <div class="col-12 d-flex justify-content-center mt-4">
          <router-link class="btn btn-lg btn-info" tag="button" to="/">Anasayfa</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.setting {
  margin-top: 125px;
  margin-bottom: 500px;
}
</style>
