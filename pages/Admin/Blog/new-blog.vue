<template>
  <div class="container">
    <NewBlog :blogIn="getBlog"  :adminData="getAdminData" @submit="saveBlog($event)" />
  </div>
</template>

<script>
import axios from "axios";

import NewBlog from "@/components/Blog/NewBlog";

export default {
  layout: "adminLayout",

  components: {
    NewBlog,
  },
  methods: {
    saveBlog(blog) {
      this.$store.dispatch("addBlog", blog).then((res) => {
        this.$router.push("/admin");
      });
    },
  },
  computed: {
    getAdminData() {
      return this.$store.getters.getAdminData;
    },
    getBlog() {
      let blogIn=this.$store.getters.getBlogs
      return (blogIn.length +1).toString();
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
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


