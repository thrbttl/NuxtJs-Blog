<template>
  <div>
    <section class>
      <article v-show="show" class="blog-list border-bottom pb-4 mb-lg-5 ">
        <div class="left-column">
          <div class="d-flex align-items-center font-size-sm pt-3 pt-lg-0 pb-2 mb-1">
            <router-link to="/about" tag="a" class="blog-entry-meta-link">
              <div class="blog-entry-author-ava">
                <img :src="admimData[0].photo" :alt="admimData[0].author" />
              </div>
              {{admimData[0].author}}
            </router-link>
            <span class="blog-entry-meta-divider"></span>
            <div class="font-size-sm mb-2">
              <a
                class="blog-entry-meta-link text-nowrap"
                href="#"
                @click.prevent="$router.push('/Blog/' + blog.id)"
              >
                <i class="far fa-comment-dots"></i>
                {{getComments.length}}
              </a>
            </div>
          </div>
          <h2 class="h5 blog-entry-title text-uppercase">
            <a href="#" @click.prevent="$router.push('/Blog/' + blog.id)">{{blog.title}}</a>
          </h2>
          <hr />
          <p class="font-size-sm">{{blog.subTitle}}</p>
          <a
            href="#"
            @click.prevent="$router.push('/Blog/' + blog.id)"
            class="blog-entry-meta-link font-weight-medium"
          >Devamı ...</a>
          <div v-show="authenticated" class="row my-md-4 my-3">
            <button
              class="btn btn-info col-4 ml-3"
              @click.prevent="$router.push('/Admin/Blog/' + blog.id)"
            >Düzenle</button>
            <button class="btn btn-danger col-4 ml-auto mr-5" @click.prevent="deleteBlog">Sil</button>
            <span
              v-show="this.deleted"
              class="badge badge-pill badge-danger py-2 px-5 mt-3"
            >Blog Yazısı Siliniyor...</span>
          </div>
        </div>
        <div class="right-column">
          <div class="d-flex justify-content-end pt-1 pr-3 mb-1">
            <span class="date-font pl-3">{{ blog.date}}</span>
          </div>
          <a
            class="blog-entry-thumb mb-3"
            @click.prevent="$router.push('/Blog/' + blog.id)"
            href="#"
          >
            <img class="shadow" :src="blog.photo" :alt="blog.title" />
          </a>
          <div class="d-flex justify-content-end pt-1 mb-1">
            <div
              v-for="categori in blog.categories"
              :key="categori.index"
              class="font-size-sm text-muted pr-2 mb-2"
            >
              <router-link
                tag="a"
                :to="'/Category/' + categori"
                class="blog-entry-meta-link border-top border-bottom px-2 text-capitalize"
              >{{ categori }}</router-link>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleted: false,
      show: true,
    };
  },
  props: {
    blog: {
      type: Object,
      required: false,
    },
    blogComments: {
      required: false,
    },
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog).then((res) => {
        this.deleted = true;
        setTimeout(() => {
          this.show = false;
          this.$router.push("/admin/Blog");
        }, 1000);
      });
    },
  },

  computed: {
    authenticated() {
      return this.$store.getters.getAuthKey;
    },
    admimData() {
      return this.$store.getters.getAdminData;
    },
    getComments() {
      return Object.values(this.blogComments);
    },
  },
};
</script>

<style scoped>


img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: 20px;
}

@media (min-width: 768px) {
  .blog-list {
    display: -ms-flexbox;
    display: flex;
  }
}
@media (min-width: 768px) {
  .blog-list .left-column {
    width: 37%;
    padding-right: 15px;
  }
}
@media (min-width: 768px) {
  .blog-list .right-column {
    width: 63%;
    padding-left: 15px;
  }
}

.font-size-sm {
  font-size: 0.875rem !important;
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
.blog-entry-author-ava {
  display: inline-block;
  width: 2rem !important;
  height: 2rem !important;
  margin-right: 0.5rem;
  padding: 0.125rem;
  border: 1px solid #e3e9ef;
  border-radius: 50%;
  vertical-align: middle;
}
.blog-entry-author-ava > img {
  display: block;
  width: 100%;
  border-radius: 50%;
}
.blog-entry-meta-divider {
  display: inline-block;
  width: 1px;
  height: 1rem;
  margin: 0 1rem;
  background-color: #d9e1e9;
  vertical-align: middle;
}
.blog-entry-thumb {
  display: block;
  position: relative;
}
.text-nowrap {
  white-space: nowrap !important;
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

a {
  transition: color 0.25s ease-in-out;
  color: #457b9d;
  text-decoration: none;
  background-color: transparent;
  line-height: 1.3;
}
a:hover {
  color: #7e7e7e;
  text-decoration: none;
}

.date-font {
  font-size: 11px;
  color: #333b4db3;
}
</style>