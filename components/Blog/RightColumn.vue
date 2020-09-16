<template>
  <div>
    <aside class>
      <div class="cz-sidebar border-left ml-lg-auto d-none d-lg-block" id="blog-sidebar">
        <div class="cz-sidebar-body py-lg-1">
          <div class="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom">
            <h3 class="widget-title">Blog categories</h3>
            <ul class="widget-list">
              <router-link :to="'/Category/yazilim'" tag="li" class="widget-list-item">
                <div class="widget-list-link d-flex justify-content-between align-items-center">
                  <span>Yazılım</span>
                  <span class="font-size-xs text-muted ml-3">{{ category1Length.length }}</span>
                </div>
              </router-link>
              <router-link :to="'/Category/teknoloji'" tag="li" class="widget-list-item">
                <div
                  class="widget-list-link d-flex justify-content-between align-items-center"
                  href="#"
                >
                  <span>Teknoloji</span>
                  <span class="font-size-xs text-muted ml-3">{{ category2Length.length }}</span>
                </div>
              </router-link>
              <router-link :to="'/Category/tasarim'" tag="li" class="widget-list-item">
                <div
                  class="widget-list-link d-flex justify-content-between align-items-center"
                  href="#"
                >
                  <span>Tasarım</span>
                  <span class="font-size-xs text-muted ml-3">{{ category3Length.length }}</span>
                </div>
              </router-link>
              <router-link :to="'/blog'" tag="li" class="widget-list-item">
                <div class="widget-list-link d-flex justify-content-between align-items-center">
                  <span>Toplam Blog</span>
                  <span class="font-size-xs text-muted ml-3">{{ getBlog.length }}</span>
                </div>
              </router-link>
            </ul>
          </div>
          <div v-show="category" class="widget mb-grid-gutter pb-grid-gutter border-bottom">
            <h3 class="widget-title text-capitalize">{{category}} yazıları</h3>
            <div
              v-for="categoryBlog in filteredCategoryBlog"
              :key="categoryBlog.id"
              class="media align-items-center mb-3"
            >
              <a href="#">
                <img class="rounded" :src="categoryBlog.photo" :alt="categoryBlog.title" width="64" />
              </a>
              <div class="media-body pl-3">
                <h6 class="blog-entry-title font-size-sm mb-0 text-capitalize">
                  <a
                    href="#"
                    @click.prevent="$router.push('/Blog/' + categoryBlog.id)"
                  >{{categoryBlog.title}}</a>
                </h6>
                <span class="font-size-ms text-muted">
                  by
                  <a href="#" class="blog-entry-meta-link">{{admimData[0].author}}</a>
                </span>
              </div>
            </div>
          </div>
          <div class="widget mb-grid-gutter pb-grid-gutter border-bottom">
            <h3 class="widget-title">Rastgele Yazı</h3>
            <div
              v-for="blog in filteredBlog"
              :key="blog.id"
              class="media align-items-center mb-3"
            >
              <a href="#">
                <img class="rounded" :src="blog.photo" :alt="blog.title" width="64" />
              </a>
              <div class="media-body pl-3">
                <h6 class="blog-entry-title font-size-sm mb-0 text-capitalize">
                  <a href="#" @click.prevent="$router.push('/Blog/' + blog.id)">{{blog.title}}</a>
                </h6>
                <span class="font-size-ms text-muted">
                  by
                  <a href="#" class="blog-entry-meta-link">{{admimData[0].author}}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category1: "yazilim",
      category2: "teknoloji",
      category3: "tasarim",
    };
  },
  props: {
    category: {
      required: false,
    },
  },
  computed: {
    getBlog() {
      return this.$store.getters.getBlogs;
    },
    filteredBlog() {
      const randomNumb = Math.floor(Math.random() * (this.getBlog.length - 2));

      if (this.getBlog.length == 3) {
        return this.getBlog.slice(0, 3);
      }
      return this.getBlog.slice(randomNumb, randomNumb + 3);
    },
    categoryBlog() {
      return this.getBlog.filter((blog) => {
        return blog.categories.includes(this.category);
      });
    },
    filteredCategoryBlog() {
      const randomNumb = Math.floor(
        Math.random() * (this.categoryBlog.length - 2)
      );

      if (this.categoryBlog.length < 3) {
        return this.categoryBlog;
      }
      return this.categoryBlog.slice(randomNumb, randomNumb + 3);
    },
    admimData() {
      return this.$store.getters.getAdminData;
    },

    category1Length() {
      return this.getBlog.filter((blog) => {
        return blog.categories.includes(this.category1.toLowerCase());
      });
    },
    category2Length() {
      return this.getBlog.filter((blog) => {
        return blog.categories.includes(this.category2.toLowerCase());
      });
    },
    category3Length() {
      return this.getBlog.filter((blog) => {
        return blog.categories.includes(this.category3.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.cz-sidebar {
  width: 100%;
  max-width: 22rem;
  background-color: #fff;
}

.cz-sidebar-body {
  padding: 1.875rem 1.875rem;
}

.border-left {
  border-left: 1px solid #e3e9ef !important;
}
.widget-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.widget-list-item {
  margin-bottom: 0.375rem;
  cursor: pointer;
}
.widget-list-link {
  display: block;
  transition: color 0.25s ease-in-out;
  color: #4b566b;
  font-size: 0.875rem;
  font-weight: normal;
}
.widget-title {
  margin-bottom: 1.125rem;
  font-size: 1.0625rem;
  font-weight: 500;
}
.mb-grid-gutter {
  margin-bottom: 30px !important;
}
.pb-grid-gutter {
  padding-bottom: 30px !important;
}
.blog-entry-title > a {
  color: #373f50;
  text-decoration: none !important;
  line-height: 1.3;
}
.blog-entry-title > a:hover {
  color: #7e7e7e;
}
.blog-entry-meta-link {
  display: inline-block;
  color: #7d879c !important;
  font-weight: normal;
}
.blog-entry-meta-link:hover {
  color: #22252b !important;
}
.blog-entry-meta-link > i {
  margin-top: -0.0625rem;
  margin-right: 0.375rem;
  vertical-align: middle;
}
.blog-entry-meta-link {
  display: inline-block;
  color: #7d879c !important;
  font-weight: normal;
}
.blog-entry-meta-link:hover {
  color: #22252b !important;
}
a {
  transition: color 0.25s ease-in-out;
  color: #fe696a;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #290d0e;
  text-decoration: none;
}
</style>
