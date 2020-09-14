<template>
  <div class="pt-5">
    <BlogDetail class="py-5" :blog="fetchedBlog" />
  </div>
</template>

<script>
import axios from "axios";
import BlogDetail from "@/components/Blog/BlogDetail";

export default {
  components: {
    BlogDetail,
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
};
</script>
