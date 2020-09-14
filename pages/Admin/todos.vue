<template>
  <div class="container">
      <MainTodo/>
  </div>
</template>

<script>
import MainTodo from "@/components/Admin/Todo/MainTodo";

export default {
  layout: "adminLayout",

  components: {
      MainTodo
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh !important;
  padding-top: 90px;
  margin-bottom: 30px;
}
</style>
