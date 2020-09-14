<template>
  <div id="navigation-mobile">
    <div class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <div v-if="adminData[0]">
          <router-link tag="li" class="items col-3 ml-4" :to="'/admin/profile'">
            <div class="avatar">
              <img :src="adminData[0].photo" :alt="adminData[0].author" width="100" />
            </div>
          </router-link>

          <router-link tag="li" class="items col-12 pl-5 ml-1 " :to="'/admin/profile'">
            <label class="avatar-text">{{adminData[0].author}}</label>
          </router-link>
        </div>
        <router-link tag="li" to="/admin" class="items col-6">
          <i class="fas fa-user-shield"></i>
          <span>Admin</span>
        </router-link>

        <router-link tag="li" :to="'/admin/profile'" class="items col-6">
          <i class="fas fa-users-cog"></i>
          <span>Profil</span>
        </router-link>

        <router-link tag="li" class="items col-6" :to="'/admin/blog'">
          <i class="fas fa-pencil-alt"></i>
          <span>Blog</span>
        </router-link>
        <router-link tag="li" class="items col-6" :to="'/admin/photos'">
          <i class="far fa-images"></i>
          <span>Fotoğraf</span>
        </router-link>
        <router-link tag="li" class="items col-6" :to="'/admin/analysis'">
          <i class="fas fa-chart-line"></i>
          <span>Analiz</span>
        </router-link>

        <router-link tag="li" class="items col-6" :to="'/admin/todos'">
          <i class="fas fa-list"></i>
          <span>Todo List</span>
        </router-link>
        <router-link tag="li" class="items col-6" :to="'/admin/editAdmin'">
          <i class="fas fa-wrench"></i>
          <span>Ayarlar</span>
        </router-link>
      </ul>

      <div class="exitButton">
        <router-link tag="i" to class="fas fa-times"></router-link>
      </div>

      <div class="social-media">
        <a href="https://www.twitter.com/tahirbattal" target="”_blank”">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/thrbttl/" target="”_blank”">
          <i class="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCa5aTN2RT4r_iayz4z89f3Q?view_as=subscriber"
          target="”_blank”"
        >
          <i class="fab fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    adminData: {
      required: false,
    },
  },
};
</script>


<style scoped>
#navigation-mobile {
  padding: 80px 0 0 0;
  width: 100%;
}

ul {
  list-style: none;
  width: 100%;
  padding-left: 25px;
  padding-top: 20px;
}

.items {
  color: #fff !important;
  font-size: 0.7rem;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}

.items:hover {
  color: rgb(78, 156, 184) !important;
}

.social-media {
  position: absolute;
  left: 40px;
  top: 110%;
}

i {
  margin: 0 20px 0 0;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

i:hover {
  color: rgb(78, 156, 184);
}

.exitButton {
  position: absolute;
  top: 30px;
  left: 40px;
}
.exitButton i {
  color: rgb(0, 34, 34);
}
.exitButton i:hover {
  color: rgb(78, 156, 184);
}
.avatar label {
  font-size: 16px;
}

.avatar img {
  border: 3px solid yellow;
  border-radius: 50px;
  opacity: 0.9;
}
.avatar img:hover {
  opacity: 1;
}
</style>
