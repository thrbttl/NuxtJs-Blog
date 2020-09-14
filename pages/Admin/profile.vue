<template>
  <div class="area container pt-5 mb-5">
    <AdminCard class="pt-5" />
  </div>
</template>

<script>
import AdminCard from "@/components/Admin/AdminCard/AdminCard";

export default {
  layout: "adminLayout",

  components: {
    AdminCard,
  },
};
</script>

<style scoped>
.area {
  min-height: 100vh;
}
</style>