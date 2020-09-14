<template>
  <div class="bg-white main">
    <BlogPage class="pt-5" />
  </div>
</template>

<style scoped>
.main{
  min-height: 100vh;
}
</style>

<script>
import BlogPage from "@/components/Blog/BlogPage";

export default {
  components: {
    BlogPage,
  },
};
</script>


