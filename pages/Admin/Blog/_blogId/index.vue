<template>
  <div class="">
    <EditBlog @submit="updateBlog($event)" :blogId="fetchedBlog" :is-update="true" />
  </div>
</template>

<script>
import axios from "axios";
import EditBlog from "@/components/Blog/EditBlog";

export default {
  layout: "adminLayout",

  components: {
    EditBlog,
  },
  asyncData(context) {
    return axios
      .get(
        process.env.firebaseDatabaseURL + "/blogs/" +
          context.params.blogId +
          ".json"
      )
      .then((res) => {
        return {
          fetchedBlog: res.data,
        };
      });
  },
  methods: {
    updateBlog(edittedBlog) {
      this.$store
        .dispatch("updateBlog", {
          ...edittedBlog,
          id: this.$route.params.blogId,
        })
        .then((res) => {
          this.$router.push("/admin/Blog");
        });
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


