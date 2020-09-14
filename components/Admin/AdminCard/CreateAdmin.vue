<template>
  <div class="my-5 py-5">
    <div class="col-12">
      <div class="d-flex justify-content-center">
        <strong class="text-danger">
          * Fotoğraf eklemelisiniz...
          <br />fotoğraf seçip yükle butonuna basınız.
        </strong>
      </div>
      <div class="d-flex justify-content-center">
        <AdminPhoto @adminPhoto="savePhoto($event)" />
      </div>
    </div>
    <form class="col-md-12 d-flex justify-content-center" @submit.prevent="createSubmit">
      <fieldset class="text-info col-md-8">
        <legend>Profil Oluştur</legend>
        <div class="form-group">
          <label>Kullanıcı ID</label>

          <input
            v-model="admin.id"
            type="text"
            class="form-control border border-danger"
            placeholder="Kullanıcı ID"
            readonly
          />
        </div>

        <div class="form-group">
          <label>Kullanıcı Adı</label>
          <input
            v-model="admin.author"
            type="text"
            class="form-control border border-danger"
            placeholder="Kullanıcı Adı"
          />
        </div>
        <div class="form-group">
          <label>E-Mail</label>
          <input
            v-model="admin.email"
            type="text"
            class="form-control border border-danger"
            placeholder="E-mail"
            readonly
          />
        </div>

        <div class="form-group">
          <label>Yetkinlik</label>
          <input
            v-model="admin.skill"
            type="text"
            class="form-control border border-info"
            placeholder="Yetkinlik alanlarınızı giriniz..."
          />
        </div>
        <div class="form-group">
          <label>Hakkımda</label>
          <textarea v-model="admin.about" class="form-control border border-info" rows="5"></textarea>
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
        id: this.adminId,
        email: this.adminEmail,
        author: this.adminName,
        skill: null,
        about: null,
        adminId: this.adminId,
        photo: null,
      },
    };
  },

  components: {
    AdminPhoto,
  },

  props: {
    adminId: {
      required: true,
    },
    adminName: {
      required: false,
    },
    adminEmail: {
      required: true,
    },
  },
  methods: {
    createSubmit() {
      this.$emit("createSubmit", this.admin);
    },
    savePhoto(photo) {
      this.admin.photo = photo[0];
    },
  },
  computed: {
    fetchedAdminId() {
      return this.$store.getters.getAdminId;
    },
  },
  created() {
    this.adminData = this.adminData
      ? this.adminData
      : {
          id: null,
          email: this.adminEmail,
          author: this.adminName,
          skill: null,
          about: null,
          adminId: this.adminId,
          photo: null,
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
</style>
