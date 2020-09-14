<template>
  <div class="container mt-5 pt-5">
    <comments :commentsBlog="blog" v-for="blog in fetchedBlogs" :key="blog.id" />
  </div>
</template>

<script>
import comments from "@/components/Admin/comments";

export default {
  layout: "adminLayout",
  components: {
    comments,
  },
  computed: {
    fetchedBlogs() {
      return this.$store.getters.getBlogs;
    },
  },
};
</script>
<style scoped>
.container {
  min-height: 100vh;
}
</style>