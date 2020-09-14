<template>
  <div class="col-md-12">
    <p class="text-success d-flex justify-content-center">Fotoğraf Yükle</p>
    <div class="d-flex flex-wrap justify-content-center">
      <input class="text-success" type="file" @change="previewImage" accept="image/*" />
    </div>
    <div class="d-flex justify-content-center text-primary">Progress: {{uploadValue.toFixed()+"%"}}</div>
    <div class="d-flex justify-content-center">
      <progress id="progress" :value="uploadValue" max="100"></progress>
    </div>
    <div class="d-flex justify-content-center" v-if="imageData!=null">
      <img class="preview" :src="picture" />
    </div>
    <div class="d-flex justify-content-center" v-if="imageData!=null">
      <button class="btn btn-success my-2" @click="onUpload">Yükle</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);

      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            let photo = [];
            photo.push(this.picture);
            this.$emit("adminPhoto", photo);
          });
        }
      );
    },
  },
};
</script>
<style scoped>
img.preview {
  width: 200px;
  border-radius: 100px;
}
</style>