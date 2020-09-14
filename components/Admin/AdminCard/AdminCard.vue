<template>
  <div >
    <div v-if="adminControl" class="col-md-12 d-flex justify-content-center pb-5">
      <router-link
        tag="button"
        to="/admin/createAdmin"
        class="btn btn-success"
      >Profil Bilgileri Oluştur</router-link>
    </div>

    <div v-for="admin in adminCard" :key="admin.id" class="emp-profile shadow">
      <div class="row">
        <div class="col-md-4">
          <div class="profile-img">
            <img :src="admin.photo" :alt="admin.author" />
          </div>
        </div>
        <div class="col-md-6 ml-lg-5 p-5">
          <div class="profile-head text-center">
            <h5 class="text-warning h1">{{admin.author}}</h5>
            <h6 class="text-muted">{{admin.skill}}</h6>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-8 mt-5 pl-5">
          <div class="row">
            <div class="col-md-6 text-info">
              <label>Kullanıcı Id</label>
            </div>
            <div class="col-md-6 text-muted adminId">
              <p>{{admin.adminId}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 text-info">
              <label>Kullanıcı Adı</label>
            </div>
            <div class="col-md-6 text-muted">
              <p>{{admin.author}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 text-info">
              <label>Email</label>
            </div>
            <div class="col-md-6 text-muted">
              <p>{{admin.email}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 text-info">
              <label>Yetkinlik</label>
            </div>
            <div class="col-md-6 text-muted">
              <p>{{admin.skill}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 text-info">
              <label>Hakkımda</label>
            </div>
            <div class="col-md-6 text-muted">
              <p>{{ admin.about }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row pb-4 pr-4">
        <div class="col-12 d-flex justify-content-end">
          <router-link tag="button" to="/admin/editAdmin" class="btn btn-info">Düzenle</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminTo: true,
    };
  },
  computed: {
    adminCard() {
      return this.fetchedAdminData.filter(
        (item) => item.adminId == this.fetchedAdminId
      );
    },

    fetchedAdminData() {
      return this.$store.getters.getAdminData;
    },
    fetchedAdminId() {
      return this.$store.getters.getAdminId;
    },
    fetchedAdminName() {
      return this.$store.getters.getAdminName;
    },
    adminControl() {
      if (this.adminCard[0] == null) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.emp-profile {
  border-radius: 0.5rem;
  background-color: rgb(38,43,60);
}
.profile-img {
  text-align: center;
}
.profile-img img {
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  margin-bottom: 0px;
  padding: 30px 0px 0px 0px;
  max-height: 160px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.817));
}

.adminId {
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
  font-size: 0.7rem;
}

a {
  text-decoration: none;
}
a:link {
  color: darkcyan;
}
a:visited {
  color: green;
}
a:hover {
  color: rgb(227, 155, 0);
}
</style>