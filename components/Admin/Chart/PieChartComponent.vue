<template>
  <div class="bgc p-5">
    <h6 class="d-flex justify-content-center text-info">Kategorilere Göre Dağılımı</h6>
    <PieChart class="pt-5" :chart-data="datacollection" />
  </div>
</template>

<script>
import PieChart from "./PieChart.js";

export default {
  props: {
    blogs: {
      required: true,
    },
  },

  components: {
    PieChart,
  },
  data() {
    return {
      datacollection: null,
      category1: "yazilim",
      category2: "teknoloji",
      category3: "tasarim",
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["yazilim", "teknoloji", "tasarim"],
        datasets: [
          {
            backgroundColor: ["#1a535c", "#4ecdc4", "#457b9d"],
            borderColor: "#edf6f9",
            data: [
              this.category1Length.length,
              this.category2Length.length,
              this.category3Length.length,
            ],
          },
        ],
        options: {
          legend: {
            display: true,
            labels: {
              fontColor: "rgb(255, 99, 132)",
            },
          },
        },
      };
    },
  },
  computed: {
    category1Length() {
      return this.blogs.filter((blog) => {
        return blog.categories.includes(this.category1.toLowerCase());
      });
    },
    category2Length() {
      return this.blogs.filter((blog) => {
        return blog.categories.includes(this.category2.toLowerCase());
      });
    },
    category3Length() {
      return this.blogs.filter((blog) => {
        return blog.categories.includes(this.category3.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.bgc{
  background-color: rgb(38,43,60);
}

</style>
