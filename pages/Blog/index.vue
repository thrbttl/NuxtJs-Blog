<template>
  <div class="pt-5 main">
    <BlogPage />
  </div>
</template>

<script>
import BlogPage from "@/components/Blog/BlogPage";

export default {
  head: {
    title: "Bloglar",
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content: "Baştan sona NuxtJs (VueJs) ile geliştirilmiş blog sitesi.",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content: "JavaScript, NuxtJs, VueJs, blog, expressJs, node.js",
      },
      { name: "author", content: "Tahir Battal" },
    ],
  },

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
