<template>
  <div class="col-md-6 mt-5 d-flex justify-content-center mx-auto">
    <input
      v-model="todoText"
      @keypress.enter="addTodo"
      ref="todoTextInput"
      type="text"
      class="form-control form-control-lg mr-1"
      :class="{'is-invalid' : isInvalid}"
    />
    <button @click="addTodo" @keypress.enter="addTodo" class="btn btn-outline-info">Ekle</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoText: "",
      isInvalid: false,
    };
  },
  methods: {
    addTodo() {
      if (this.todoText !== "") {
        this.$emit("addTodoEvent", this.todoText);
        this.todoText = "";
        this.$nextTick(() => this.$refs.todoTextInput.focus());
      } else {
        this.isInvalid = true;
      }
    },
  },
};
</script>