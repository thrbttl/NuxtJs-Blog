<template>
  <div class="col-12">
    <div class="row">
      <div class="col-sm-3">
        <router-link tag="div" class="info-box" to="/admin/blog">
          <span class="info-box-icon bg-aqua">
            <i class="far fa-file-alt"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Bloglar</span>
            <span class="info-box-number">{{ blogs.length }}</span>
          </div>
        </router-link>
      </div>
      <div class="col-sm-3">
        <router-link tag="div" class="info-box" to="/Category/yazilim">
          <span class="info-box-icon bg-red">
            <i class="far fa-file-code"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Yazılım</span>
            <span class="info-box-number">{{ category1Length.length }}</span>
          </div>
        </router-link>
      </div>
      <div class="col-sm-3">
        <router-link tag="div" class="info-box" to="/Category/teknoloji">
          <span class="info-box-icon bg-green">
            <i class="fas fa-laptop-code"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Teknoloji</span>
            <span class="info-box-number">{{ category2Length.length }}</span>
          </div>
        </router-link>
      </div>
      <div class="col-sm-3">
        <router-link tag="div" class="info-box" to="/Category/tasarim">
          <span class="info-box-icon bg-yellow">
            <i class="fas fa-pencil-ruler"></i>
          </span>

          <div class="info-box-content">
            <span class="info-box-text">Tasarım</span>
            <span class="info-box-number">{{category3Length.length}}</span>
          </div>
        </router-link>
      </div>
      <div class="clearfix visible-sm-block"></div>
    </div>
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
    idAdmin: {
      required: true,
    },
    blogs: {
      required: true,
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
.info-box {
  display: block;
  min-height: 90px;
  background: rgb(38,43,60);
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-bottom: 15px;
  cursor: pointer;
}
.info-box:hover{
  transform:rotateZ(5deg);
}
.info-box-icon {
  border-top-left-radius: 2px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 2px;
  display: block;
  float: left;
  height: 90px;
  width: 90px;
  text-align: center;
  font-size: 45px;
  line-height: 90px;
  background: rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
}
.bg-aqua {
  background-color: #00c0ef !important;
  color: #fff !important;
}
.bg-red {
  background-color: #dd4b39 !important;
  color: #fff !important;
}
.bg-green {
  background-color: #00a65a !important;
  color: #fff !important;
}
.bg-yellow {
  background-color: #f39c12 !important;
  color: #fff !important;
}
.info-box-content {
  padding: 20px 20px;
  margin-left: 90px;
}
.info-box-text {
  color: aliceblue;
  text-transform: uppercase;
  display: block;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info-box-number {
    color: aliceblue;

  display: block;
  font-weight: bold;
  font-size: 18px;
}
</style>