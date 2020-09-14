<template>
  <div class="container">
    <div class="d-flex justify-content-center pb-5">
      <button @click="$router.push('/admin/blog/new-blog')" class="btn btn-outline-info border-0">
        <i class="far fa-file-alt"></i>
        <br />Yeni Bir Yazı Ekle
      </button>
    </div>

    <LeftColum :blogComments="{...blog.comments}" :blog="blog" v-for="blog in reversed" :key="blog.id" />
  </div>
</template>

<script>
import LeftColum from "@/components/Blog/LeftColum";

export default {
  layout: "adminLayout",

  components: {
    LeftColum,
  },
  computed: {
    getBlog() {
      return this.$store.getters.getBlogs;
    },

    reversed() {
      return this.getBlog.filter((item) => this.getBlog.length > 0).reverse();
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 150vh;
  min-width: 100%;
  padding-top: 150px;
  padding-bottom: 50px;
  padding-left: 20%;
  padding-right: 20%;
  background-color: rgb(255, 255, 255);
}
@media only screen and (max-width: 992px) {
  .container {
    height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 30px;
    padding-right: 30px;
  }
}

button {
  height: 120px;
  min-width: 250px;
  padding: 10px;
  border-radius: 100px;
}

i {
  font-size: 50px;
  padding-bottom: 10px;
}
</style>


