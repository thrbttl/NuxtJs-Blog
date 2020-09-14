<template>
  <div class="container bg-white mb-2 mb-md-4 mt-0">
    <div class="row p-md-5 p-2 mt-2">
      <LeftColum
        class="col-lg-8"
        :blogComments="{...blog.comments}"
        :blog="blog"
        v-for="blog in filteredBlog"
        :key="blog.id"
      />
      <RightColumn class="col-lg-4 position" />
      <nav class="d-flex justify-content-center pt-2 col-md-8" aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" :class="[this.start == 0 ? disabled : null]">
            <a class="page-link" href="#" @click.prevent="previousBlog">
              <i class="fas fa-angle-double-left"></i>
            </a>
          </li>
        </ul>
        <ul v-for="(item, index) in paginationList" :key="index" class="pagination">
          <li class="page-item d-sm-block">
            <a class="page-link" href="#" @click.prevent="pagination($event)">{{item}}</a>
          </li>
        </ul>
        <ul class="pagination">
          <li class="page-item" :class="[this.end < this.getBlog.length ? null : disabled]">
            <a class="page-link" href="#" @click.prevent="nextBlog" aria-label="Next">
              <i class="fas fa-angle-double-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import RightColumn from "./RightColumn";
import LeftColum from "./LeftColum";

export default {
  data() {
    return {
      start: 0,
      end: 5,
      disabled: "disabled",
    };
  },
  components: {
    RightColumn,
    LeftColum,
  },
  methods: {
    nextBlog() {
      this.start += 5;
      this.end += 5;
    },
    previousBlog() {
      this.start -= 5;
      this.end -= 5;
    },
    pagination(event) {
      this.end = parseInt(event.target.text) * 5;
      this.start = this.end - 5;
    },
  },
  computed: {
    getBlog() {
      return this.$store.getters.getBlogs;
    },
    reversed() {
      return this.getBlog.filter((item) => this.getBlog.length > 0).reverse();
    },
    filteredBlog() {
      return this.reversed.slice(this.start, this.end);
    },
    paginationList() {
      return Math.ceil(this.getBlog.length / 5);
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 130vh;
}

.position {
  position: absolute;
  right: 0%;
}
@media only screen and (min-width: 992px) {
  .position {
    right: 0%;
  }
}
@media only screen and (min-width: 1200px) {
  .position {
    right: 5%;
  }
}
@media only screen and (min-width: 1300px) {
  .position {
    right: 8%;
  }
}
@media only screen and (min-width: 1600px) {
  .position {
    right: 15%;
  }
}

.pagination .page-link {
  border-radius: 0.3125rem;
  font-size: 0.9375rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.25;
  color: #05180a;
  background-color: rgba(0, 0, 0, 0);
  border: none;
}
.page-item {
  margin: 0.15rem;
}
.page-link:focus {
  outline: 0;
  box-shadow: none;
  color: #0f5021;
  background-color: rgb(234, 241, 252);
}
.page-link:hover {
  text-decoration: none;
  color: #0f5021;
  background-color: #f3f5f9;
}
.page-link > i {
  margin-top: -0.125rem;
  vertical-align: middle;
}
</style>