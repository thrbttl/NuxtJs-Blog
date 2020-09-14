<template>
  <div class="bg-white pt-1">
    <About class="pt-5" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>

<script>
import About from "@/components/Common/About";

export default {
  head: {
    title: "Hakkımda",
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
    About,
  },
};
</script>


