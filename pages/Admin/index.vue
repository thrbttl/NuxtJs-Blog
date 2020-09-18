<template>
  <div class="container pb-5">
    <Info :blogs="fetchedBlogs" :idAdmin="fetchedAdminId" class="my-2" />
    <hr />
    <div class="row mb-5">
      <PieChartComponent :blogs="fetchedBlogs" class="col-lg-4" />
      <div class="col-lg-8  text-info pt-5 bgc ">
        <h6 class="col-lg-12 d-flex justify-content-center">Aylara göre Blog Dağılımı</h6>
        <div class="row">
          <LineChartComponent :blogs="fetchedBlogs" class="col-lg-6 " />
          <BarComponent :blogs="fetchedBlogs" class="col-lg-6 " />
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <AdminCard class="col-lg-7 mb-5" />
      <MainTodo class="col-lg-5 mb-5" />
    </div>

    <Table :blogs="fetchedBlogs" />
  </div>
</template>

<script>
import PieChartComponent from "@/components/Admin/Chart/PieChartComponent";
import LineChartComponent from "@/components/Admin/Chart/LineChartComponent";
import BarComponent from "@/components/Admin/Chart/BarComponent";
import Info from "@/components/Admin/Info";
import AdminCard from "@/components/Admin/AdminCard/AdminCard";
import Table from "@/components/Admin/Table";
import MainTodo from "@/components/Admin/Todo/MainTodo";

export default {
  head: {
    title: "Admin Paneli",
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content:
          "Baştan sona NuxtJs (VueJs) ile geliştirilmiş blog sitesi. (Tahir Battal tarafından geliştirildi: https://blog.tahirbattal.com.tr)",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "JavaScript, NuxtJs, VueJs, blog, expressJs, node.js, Tahir Battal",
      },
      { name: "author", content: "Tahir Battal" },
    ],
  },

  layout: "adminLayout",

  components: {
    PieChartComponent,
    LineChartComponent,
    BarComponent,
    Info,
    Table,
    AdminCard,
    MainTodo,
  },
  computed: {
    fetchedAdminId() {
      return this.$store.getters.getAdminId;
    },
    fetchedBlogs() {
      return this.$store.getters.getBlogs;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 50px;
}

.bgc {
  background-color: rgb(38, 43, 60);
}
</style>


