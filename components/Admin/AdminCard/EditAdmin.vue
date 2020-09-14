<template >
  <div class="my-5 py-5">
    <div class="col-12">
      <div class="d-flex justify-content-center">
        <img :src="admin.photo" :alt="admin.name" class="img-circle rounded-circle" />
      </div>
      <div class="d-flex justify-content-center">
        <AdminPhoto @adminPhoto="savePhoto($event)" />
      </div>
    </div>
    <form class="col-md-12 d-flex justify-content-center" @submit.prevent="editSubmit">
      <fieldset class="text-info col-md-8">
        <legend>Profil Düzenle</legend>
        <div class="form-group">
          <label>Kullanıcı ID</label>
          <input
            v-model="admin.adminId"
            type="text"
            class="form-control"
            placeholder="Kullanıcı ID"
            readonly
          />
        </div>

        <div class="form-group">
          <label>Kullanıcı Adı</label>
          <input
            v-model="admin.author"
            type="text"
            class="form-control text-capitalize"
            placeholder="Kullanıcı Adı"
          />
        </div>
        <div class="form-group">
          <label>E-Mail</label>
          <input
            v-model="admin.email"
            type="text"
            class="form-control"
            placeholder="E-mail"
            readonly
          />
        </div>

        <div class="form-group">
          <label>Yetkinlik</label>
          <input
            v-model="admin.skill"
            type="text"
            class="form-control"
            placeholder="Yetkinlik alanlarınızı giriniz..."
          />
        </div>
        <div class="form-group">
          <label>Hakkımda</label>
          <textarea
            v-model="admin.about"
            class="form-control"
            rows="3"
            maxlength="150"
            placeholder="Kısaca kendinden bahset..."
          ></textarea>
        </div>
        <button @click="$router.push('/admin')" class="btn btn-danger">İptal</button>
        <button type="submit" class="btn btn-primary">Kaydet</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import AdminPhoto from "../AdminCard/AdminPhoto";

export default {
  data() {
    return {
      admin: {
        id: this.adminData[0].id,
        email: this.adminData[0].email,
        author: this.adminData[0].author,
        skill: this.adminData[0].skill,
        about: this.adminData[0].about,
        adminId: this.adminData[0].adminId,
        photo: this.adminData[0].photo,
      },
    };
  },

  components: {
    AdminPhoto,
  },

  props: {
    adminData: {
      required: false,
    },
  },
  methods: {
    editSubmit() {
      this.$emit("editSubmit", this.admin);
    },
    savePhoto(photo) {
      this.admin.photo = photo[0];
    },
  },
  created() {
    this.adminData = this.adminData
      ? this.adminData
      : {
          id: this.adminData[0].id,
          email: this.adminData[0].email,
          author: this.adminData[0].author,
          skill: this.adminData[0].skill,
          about: this.adminData[0].about,
          adminId: this.adminData[0].adminId,
          photo: this.adminData[0].photo,
        };
  },
};
</script>
<style scoped>
input[type="text"] {
  border: none;
  border-bottom: 2px solid rgb(78, 156, 184);
  background: transparent;
}
textarea {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(78, 156, 184);
  resize: none;
}
textarea:focus {
  background-color: transparent;
}
img{
  max-width: 100px;
  max-height: 100px;
}
</style>
