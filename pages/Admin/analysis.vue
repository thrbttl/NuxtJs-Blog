<template>
  <div class="container pb-5">
    <div class="row">
      <LineChartComponent :blogs="fetchedBlogs" class="col-lg-6 mt-lg-3" />
      <BarComponent :blogs="fetchedBlogs" class="col-lg-6 mt-lg-3" />
      <PieChartComponent :blogs="fetchedBlogs" class="col-lg-5 mt-lg-3 mx-auto" />
      <Table :blogs="fetchedBlogs" class="col-lg-12 mt-lg-3" />
    </div>
  </div>
</template>

<script>
import PieChartComponent from "@/components/Admin/Chart/PieChartComponent";
import LineChartComponent from "@/components/Admin/Chart/LineChartComponent";
import BarComponent from "@/components/Admin/Chart/BarComponent";
import Table from "@/components/Admin/Table";


export default {
  layout: "adminLayout",

  components: {
    PieChartComponent,
    LineChartComponent,
    BarComponent,
    Table
  },
  computed: {
    fetchedBlogs() {
      return this.$store.getters.getBlogs;
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 100px;
  padding-right: 75px;
}
@media only screen and (max-width: 992px) {
  .container {
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>


