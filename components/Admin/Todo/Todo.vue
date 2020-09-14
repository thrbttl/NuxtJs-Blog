<template>
  <div class="bg p-2 mb-3 text-dark col-8 offset-2 shadow card flex-row align-items-center mx-auto">
    <!-- <input type="checkbox" id="checkbox" v-model="checked" class="ml-2" /> -->
    <p
      :class="{'through' : checked }"
      class="d-flex justify-content-center m-0 w-100 text-info text-capitalize"
    >{{todo.todo}}</p>
    <button
      @click="$emit('update-todo', todo)"
      class="btn btn-sm btn-success flex-shrink-1 mr-1"
    >Düzenle</button>
    <button @click="$emit('delete-todo', todo)" class="btn btn-sm btn-danger flex-shrink-1">X</button>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    checked: false,
  },
};
</script>

<style scoped>
.bg {
  background-color: 2px solid rgba(9, 193, 150, 0.605) !important;
}
.through {
  text-decoration: line-through;
}
</style>