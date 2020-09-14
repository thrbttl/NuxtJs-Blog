<template>
  <div class="p-5 bgc">
    <LineChart class="" :chart-data="datacollection" />
  </div>
</template>

<script>
import LineChart from "./LineChart";

export default {
  props: {
    blogs: {
      required: true,
    },
  },

  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      january: "Ocak",
      february: "Şubat",
      march: "Mart",
      april: "Nisan",
      may: "Mayıs",
      june: "Haziran",
      july: "Temmuz",
      august: "Ağustos",
      september: "Eylül",
      october: "Ekim",
      november: "Kasım",
      december: "Aralık",
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "Ocak",
          "Şubat",
          "Mart",
          "Nisan",
          "Masyıs",
          "Haziran",
          "Temmuz",
          "Ağustos",
          "Eylül",
          "Ekim",
          "Kasım",
          "Aralık",
        ],
        datasets: [
          {
            label: " Blog Sayısı ",
            backgroundColor: ["#006d77","#83c5be", "#edf6f9","#ffddd2","#e29578", "#457b9d","#3d405b","#e07a5f", "#81b29a","#a5a58d","#ffd166", "#006d77",],
            borderColor: "#81b29a",
            borderDash: [5, 5],
            fill: false,
            pointRadius: 10,
            pointHoverRadius: 12,
            
            data: [
              this.januaryLength.length,
              this.februaryLength.length,
              this.marchLength.length,
              this.aprilLength.length,
              this.mayLength.length,
              this.juneLength.length,
              this.julyLength.length,
              this.augustLength.length,
              this.septemberLength.length,
              this.octoberLength.length,
              this.novemberLength.length,
              this.decemberLength.length,
            ],
          },
        ],
        options: {
          responsive: true,
          legend: {
            display: true,
          },
          hover: {
            mode: "index",
          },
          
        },
      };
    },
  },
  computed: {

    januaryLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.january.toLowerCase());
      });
    },
    februaryLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.february.toLowerCase());
      });
    },
    marchLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.march.toLowerCase());
      });
    },
    aprilLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.april.toLowerCase());
      });
    },
    mayLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.may.toLowerCase());
      });
    },
    juneLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.june.toLowerCase());
      });
    },
    julyLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.july.toLowerCase());
      });
    },
    augustLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.august.toLowerCase());
      });
    },
    septemberLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.september.toLowerCase());
      });
    },
    octoberLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.october.toLowerCase());
      });
    },
    novemberLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.november.toLowerCase());
      });
    },
    decemberLength() {
      return this.blogs.filter((blog) => {
        return blog.date.toLowerCase().includes(this.december.toLowerCase());
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
