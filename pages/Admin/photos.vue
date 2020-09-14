<template>
  <div class="d-flex justify-content-center mt-5 pt-5">
    <PhotoUpload class="col-md-6"/>
  </div>
</template>

<script>
import PhotoUpload from '@/components/Admin/AdminPhoto/PhotoUpload'

export default {
  layout: "adminLayout",

  components: {
      PhotoUpload
  },
};
</script>

<style scoped>
div{
  min-height: 100vh;
}
.container {
  height: 100vh;
  min-width: 100%;
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 100px;
  padding-right: 75px;
  background-color: rgb(255, 255, 255);
}
@media only screen and (max-width: 992px) {
  .container {
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>


