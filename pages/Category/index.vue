<template>
  <div class="pt-5 main">
    <BlogPage />
  </div>
</template>

<script>
import BlogPage from "@/components/Blog/BlogPage";

export default {
  components: {
    BlogPage,
  },
  
};
</script>
<style scoped>
.main {
  min-height: 100vh;
}
</style>
