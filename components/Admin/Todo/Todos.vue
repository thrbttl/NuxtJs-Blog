<template>
  <div>
    <Todo @update-todo="$emit('update-todo', $event)" @delete-todo="$emit('delete-todo', $event)" v-for="todo in todos" :todo="todo" :key="todo.id" />
  </div>
</template>
<script>
import Todo from "./Todo";

export default {
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      required: false,
    },
  },
};
</script>