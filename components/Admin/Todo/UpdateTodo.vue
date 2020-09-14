<template>
  <div class="update-container d-flex flex-column justify-content-center align-items-center">
    <div class="card shadow pt-2 pb-2" style="width: 15rem;">
      <div class="card-body">
        <h5 class="card-title">Kaydı Düzenle</h5>
        <input
          v-model="loadedTodo.todo"
          type="text"
          class="form-control mt-3 mb-3"
          value="Burada değişecek değer yazacak.."
        />
        <a
          @click.prevent="$emit('hide-update', true)"
          href="#"
          class="card-link btn btn-sm btn-outline-danger"
        >vazgeç</a>
        <a
          @click.prevent="$emit('update-todo', loadedTodo)"
          href="#"
          class="card-link btn btn-sm btn-outline-warning"
        >Güncelle</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["updateTodo"],
  computed: {
    loadedTodo() {
      return this.updateTodo
        ? { ...this.updateTodo }
        : {
            id: null,
            todo: "",
          };
    },
  },
};
</script>