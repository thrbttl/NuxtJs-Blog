<template>
  <div class>
    <EditAdmin @editSubmit="editAdminData($event)" :adminData="fetchedAdminData" />
  </div>
</template>

<script>
import EditAdmin from "@/components/Admin/AdminCard/EditAdmin";

export default {
  layout: "adminLayout",

  components: {
    EditAdmin,
  },
  computed: {
    fetchedAdminData() {
      return this.$store.getters.getAdminData;
    },
  },
  methods: {
    editAdminData(editedAdminData) {
      this.$store.dispatch("editAdminData", editedAdminData).then((res) => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>

<style scoped>
.area {
  height: 150vh !important ;
}
</style>