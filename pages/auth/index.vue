<template>
  <section>
    <AuthPage />
  </section>
</template>

<script>
import AuthPage from "@/components/Auth/AuthPage";

export default {
  layout: "authLayout",

  components: {
    AuthPage,
  },
};
</script>

