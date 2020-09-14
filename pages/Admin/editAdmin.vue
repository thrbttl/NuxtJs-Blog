<template>
  <div>
    <EditAdmin
      :adminData="adminDataTo"
      @editSubmit="editAdminData($event)"
    />
  </div>
</template>

<script>
import EditAdmin from "@/components/Admin/AdminCard/EditAdmin";
export default {
  layout: "adminLayout",

  components: {
    EditAdmin
  },
  methods: {
    editAdminData(editedAdminData) {
      this.$store.dispatch("editAdminData", editedAdminData).then(res => {
        this.$router.push("/admin");
      });
    }
  },

  computed: {
    fetchedAdminData() {
      return this.$store.getters.getAdminData;
    },
    fetchedAdminId() {
      return this.$store.getters.getAdminId;
    },

    adminDataTo() {
      return this.fetchedAdminData.filter(
        item => item.adminId == this.fetchedAdminId
      );
    }
  }
};
</script>