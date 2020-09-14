<template>
  <div class="pt-5">
    <div class="container bg-white mb-2 mb-md-4 mt-0">
      <div class="row p-5 mt-2">
        <div v-show="!filteredList.length" class="alert alert-danger my-5">
          <h3 class="d-flex justify-content-center">Bu kategoride yazı paylaşılmamış.</h3>
        </div>

        <LeftColum
          class="col-lg-8"
          :blogComments="{...blog.comments}"
          :blog="blog"
          v-for="blog in filteredList"
          :key="blog.id"
        />
        <RightColumn :category="data" class="col-lg-4 position" />
      </div>
    </div>
  </div>
</template>

<script>
import RightColumn from "@/components/Blog/RightColumn";
import LeftColum from "@/components/Blog/LeftColum";

export default {
  data() {
    return {
      data: this.$route.params.categoryBlog,
    };
  },
  components: {
    LeftColum,
    RightColumn,
  },

  computed: {
    getBlog() {
      return this.$store.getters.getBlogs;
    },
    reversed() {
      return this.getBlog.filter((item) => this.getBlog.length > 0).reverse();
    },
    filteredList() {
      return this.reversed.filter((blog) => {
        return blog.categories.includes(
          this.$route.params.categoryBlog.toLowerCase()
        );
      });
    },
  },
};
</script>
<style scoped>
.container {
  min-height: 120vh;
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
}
.page-item {
  margin: 0.15rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
}
.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.3125rem;
  border-bottom-left-radius: 0.3125rem;
}
.page-link {
  position: relative;
  transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out;
  position: relative;
  display: block;
  padding: 0.375rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #4b566b;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0);
}

.page-link:focus {
  z-index: 3;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(254, 105, 106, 0.25);
}
.page-link:hover {
  z-index: 2;
  color: #4b566b;
  text-decoration: none;
  background-color: #f3f5f9;
  border-color: #f3f5f9;
}

.page-link > i {
  margin-top: -0.125rem;
  vertical-align: middle;
}
</style>