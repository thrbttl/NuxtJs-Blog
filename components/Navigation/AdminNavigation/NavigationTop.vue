<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navigation">
    <router-link tag="a" to="/" class="navbar-brand ml-5 mr-5">
      <img src="../../../static/image/logo.png" width="30" alt="tahir battal" />
    </router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/blog'">
          <i class="fas fa-pencil-alt"></i>
        </router-link>
        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/photos'">
          <i class="far fa-images"></i>
        </router-link>
        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/todos'">
          <i class="fas fa-list"></i>
        </router-link>
        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/analysis'">
          <i class="fas fa-chart-line"></i>
        </router-link>

        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/profile'">
          <i class="far fa-address-card"></i>
        </router-link>
        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/blog/new-blog'">
          <i class="far fa-edit"></i>
        </router-link>
      </ul>
      <ul class="d-flex navbar">
        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/message'">
          <i class="far fa-envelope"></i>
        </router-link>
        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/comments'">
          <i class="far fa-comments"></i>
        </router-link>
        <router-link tag="li" class="items ml-auto mr-0" :to="'/admin/settings'">
          <i class="fas fa-users-cog"></i>
        </router-link>
        <router-link tag="li" class="items ml-auto mr-1" :to="'/admin/profile'">
          <div v-if="adminData[0]" class="avatar">
            <label class="avatar-text mx-3"> {{adminData[0].author}} </label>
            <img :src="adminData[0].photo" width="40" :alt="adminData[0].author" />
          </div>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      show: null,
    };
  },
  props:{
    adminData : {
      required:false
    }
  },
};
</script>



<style scoped>
#navigation {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border: 1px solid transparent;
  z-index: 98;
}
@media only screen and (max-width: 600px) {
  #navigation {
    left: 0px;
  }
}
.navbar {
  background-color: rgb(38, 43, 60) !important;
}
.navbar-brand img {
  margin-left: 40px;
}
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
}
.items {
  font-size: 22px;
  padding: 2px 10px;
  cursor: pointer;
  color: #79a8a9;
}
.items:hover {
  color: #d7ebf1;
}

.fixed-top {
  position: fixed !important;
  top: 0px !important;
}

.avatar-text{
  cursor: pointer;
}

.avatar label {
  font-size: 16px;
}

.avatar img {
  border: 3px solid rgb(78, 156, 184);
  border-radius: 50px;
}
.avatar img:hover {
  opacity: 0.9;
}
</style>


