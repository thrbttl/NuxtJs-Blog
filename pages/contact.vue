<template>
  <div class="">
    <Contact class="pt-5" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>

<script>
import Contact from '@/components/Common/Contact'

export default {
    head: {
    title: "İletişim",
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content: "Baştan sona NuxtJs (VueJs) ile geliştirilmiş blog sitesi. (Tahir Battal tarafından geliştirildi: https://blog.tahirbattal.com.tr)",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content: "JavaScript, NuxtJs, VueJs, blog, expressJs, node.js, Tahir Battal",
      },
      { name: "author", content: "Tahir Battal" },
    ],
  },

  components: {
    Contact
  },
};
</script>


