<template>
  <div>
    <section class="container col-lg-10">
      <div class="row">
        <div class="col-lg-8 blog-main">
          <div class="d-flex align-items-center font-size-sm pb-2 mb-1">
            <router-link tag="a" class="blog-entry-meta-link" to="/about">
              <div class="blog-entry-author-ava">
                <img :src="adminData[0].photo" :alt="adminData[0].author" />
              </div>
              {{adminData[0].author}}
            </router-link>
            <div class="ml-auto pr-2">
              <span class="date-font pl-3">{{ blog.date }}</span>
            </div>
          </div>
          <hr />
          <div class="blog-img mb-4 d-flex align-items-center">
            <img :src="blog.photo" alt="Post" />
          </div>
          <hr />
          <div class="blog-post pb-5">
            <h2 class="blog-post-title text-capitalize text-info">{{blog.title}}</h2>
            <p class="text-muted">{{blog.subTitle}}</p>
            <hr />

            <div id="textArea"></div>
          </div>
          <likes :likeBlog="{...blog.likes}" :blogId="blogDetail[0].id" />
          <!-- /.blog-post -->
          <hr />
          <Comments :commentsBlog="{...blog.comments}" :blogId="blogDetail[0].id" />
          <nav class="blog-pagination">
            <a
              v-show="previousBlog[0]"
              class="btn btn-primary text-white"
              href="#"
              @click.prevent="$router.push('/Blog/' + previousBlog[0].id)"
            >
              <i class="fas fa-angle-double-left"></i>
              <span>Önceki</span>
            </a>
            <a
              v-show="nextBlog[0]"
              class="btn btn-primary text-white"
              href="#"
              @click.prevent="$router.push('/Blog/' + nextBlog[0].id)"
            >
              <span>Sonraki</span>
              <i class="fas fa-angle-double-right"></i>
            </a>
          </nav>
        </div>
        <RightColumn class="col-lg-4" />
      </div>
    </section>
  </div>
</template>

<script>
import RightColumn from "./RightColumn";
import Likes from "./Likes";
import Comments from "./Comments";

export default {
    head() {
    let blog = this.blog;
    return {
      title: `${blog.title}`,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: `${blog.subTitle}`
        }
      ]
    };
  },

  components: {
    RightColumn,
    Comments,
    Likes,
  },
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  computed: {
    adminData() {
      return this.$store.getters.getAdminData;
    },
    getBlog() {
      return this.$store.getters.getBlogs;
    },
    blogDetail() {
      let blogId = parseInt(this.blog.indexBlog);
      return this.getBlog.filter((blogs) => {
        return blogs.indexBlog.includes(blogId);
      });
    },

    nextBlog() {
      let blogNext = parseInt(this.blog.indexBlog) + 1;
      return this.getBlog.filter((blogs) => {
        return blogs.indexBlog.includes(blogNext);
      });
    },
    previousBlog() {
      let blogPrevious = parseInt(this.blog.indexBlog) - 1;
      return this.getBlog.filter((blogs) => {
        return blogs.indexBlog.includes(blogPrevious);
      });
    },
  },
  mounted: function () {
    this.$nextTick(function blogText() {
      var div = document.createElement("DIV");
      div.innerHTML = this.blog.text;
      document.getElementById("textArea").appendChild(div);
    });
  },
};
</script>

<style scoped>
.blog-img {
  width: 100%;
  max-height: 235px;
  overflow: hidden;
  -webkit-box-shadow: -11px 14px 17px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -11px 14px 17px -10px rgba(0, 0, 0, 0.75);
  box-shadow: -11px 14px 17px -10px rgba(0, 0, 0, 0.75);
}
img {
  width: 100%;
  height: auto;
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

.date-font {
  color: #7d879c !important;
}

.blog-entry-author-ava {
  display: inline-block;
  width: 3rem !important;
  height: 3rem !important;
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

a:link {
  color: rgb(255, 162, 0);
}
a:visited {
  color: rgb(17, 128, 0);
}
a:hover {
  color: hotpink;
  text-decoration: none;
}
a:active {
  color: blue;
}
</style>

