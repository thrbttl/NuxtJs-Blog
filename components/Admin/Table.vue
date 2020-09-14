<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title text-info">Blog Listesi</h3>
    </div>
    <div>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col" class="text-muted">#</th>
              <th class="text-muted">Blog ID</th>
              <th class="text-success">Başlık</th>
              <th class="text-info">Yazar</th>
              <th class="text-warning">Like</th>
            </tr>
          </thead>
          <tbody v-for="blog in blogs" :key="blog.id">
            <tr>
              <th scope="row" class="text-info">{{blog.indexBlog}}</th>

              <td>
                <span class="badge badge-secondary text-white">{{blog.id}}</span>
              </td>
              <td>
                <a
                  @click.prevent="$router.push('/Blog/' + blog.id)"
                  class="text-success text-uppercase"
                >{{blog.title}}</a>
              </td>
              <td>
                <span class="badge badge-info text-white">{{blog.author}}</span>
              </td>
              <td>
                <div v-for="like in blog" :key="like.id">
                  <span class="badge badge-warning text-white">{{like.like}}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogs: {
      required: false,
    },
  },
};
</script>

<style scoped>
.box {
  position: relative;
  border-radius: 3px;
  background: rgb(38, 43, 60);
  border-top: 3px solid #d2d6de;
  border-top-color: rgb(73, 83, 116);
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.box-info {
  border-top-color: #00b37a;
}
.box-header {
  color: #444;
  display: block;
  padding: 10px;
  position: relative;
}
.box-title {
  display: inline-block;
  font-size: 18px;
  margin: 0;
  line-height: 1;
}
table {
  min-width: 800px;
}
.table-responsive {
  min-height: 0.01%;
  overflow-x: scroll;
}
a {
  color: #3c8dbc;
  cursor: pointer;
}
</style>