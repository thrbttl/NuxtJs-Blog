<template>
  <div>
    <CreateAdmin
      :adminId="fetchedAdminId"
      :adminName="fetchedAdminName"
      :adminEmail="fetchedAdminEmail"
      @createSubmit="createAdminData($event)"
    />
  </div>
</template>

<script>
import CreateAdmin from "@/components/Admin/AdminCard/CreateAdmin";
export default {
  layout: "adminLayout",

  components: {
    CreateAdmin,
  },
  methods: {
    createAdminData(createdAdminData) {
      this.$store.dispatch("createAdminData", createdAdminData).then((res) => {
        this.$router.push("/admin");
      });
    },
  },

  computed: {
    fetchedAdminId() {
      return this.$store.getters.getAdminId;
    },
    fetchedAdminName() {
      return this.$store.getters.getAdminName;
    },
    fetchedAdminEmail() {
      return this.$store.getters.getAdminEmail;
    },
  },
};
</script>