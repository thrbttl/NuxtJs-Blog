<template>
  <div class="shadow rounded py-5 bgc ">
    <h2 class="text-center text-info font-weight-bold">Todo</h2>
    <TodoForm @addTodoEvent="addTodo($event)" />
    <h3 v-show="todos.length !== 0" class="text-center text-success mt-5">Yapılacaklar Listesi</h3>
    <Alert v-if="todos.length === 0" class="mt-5" />
    <Todos
      class="mt-4"
      v-else
      @update-todo="showUpdateTodo($event)"
      @delete-todo="deleteTodo($event)"
      :todos="todos"
    />
    <UpdateTodo
      :updateTodo="toUpdateTodo"
      @update-todo="updateTodo($event)"
      @hide-update="showUpdate = false"
      :class="{'show-update-container' : showUpdate}"
    />
  </div>
</template>

<script>
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import UpdateTodo from "./UpdateTodo";
import Alert from "./Alert";

export default {
  layout: "adminLayout",

  data() {
    return {
      showUpdate: false,
      toUpdateTodo: null,
    };
  },
  components: {
    Todos,
    TodoForm,
    UpdateTodo,
    Alert,
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch("addTodo", todo);
    },
    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo);
    },
    showUpdateTodo(e) {
      this.showUpdate = true;
      this.toUpdateTodo = e;
    },
    updateTodo(updatedTodo) {
      this.showUpdate = false;
      this.$store.dispatch("updateTodo", updatedTodo);
    },
  },
  computed: {
    todos(e) {
      return this.$store.getters.getTodos;
    },
  },
};
</script>

<style scoped>

.bgc{
  background-color: rgb(38,43,60);
}


.container {
  background-color: rgb(38,43,60);
  padding: 30px 0 30px 0;
}
@media only screen and (min-width: 992px) {
  .container {
    max-width: 540px;
  }
}
</style>
