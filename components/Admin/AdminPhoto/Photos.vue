<template>
  <div class="area">
    <h2
      class="title text-white mt-5 mb-5 d-flex justify-content-center align-items-center"
    >Fotoğraflarnız {{fetchedUserName}}</h2>

    <div class="container">
      <div class="row pt-5">
        <div class="col-md-10 ml-auto mr-auto">
          <form class="my-2 my-lg-0 col-12">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="search"
            />
          </form>
          <hr />
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div v-for="photo in filteredList" :key="photo.id" class="card-deck text-light col-md-3 m-3">
        <div class="card">
          <img class="card-img-top" :src="photo.photo" />
          <p
            class="card-title d-flex justify-content-center align-items-center d-inline-block text-truncate text-danger"
          >{{ photo.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    let user = this.fetchedUserName;
    return {
      title: `tahirbattal.com.tr ${user} Fotoğraflar`,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: `${user} Fotoğrafları `
        }
      ]
    };
  },

  data() {
    return {
      search: ""
    };
  },
  props: {
    photos: {
      required: true,
      type: Array
    },
    idUser: {
      required: true
    }
  },
  computed: {
    fetchedUserName() {
      let userName = this.$store.getters.getUserName;
      let userNameDec = decodeURIComponent(userName);
      return userNameDec;
    },
    reversed() {
      return this.photos.filter(item => item.userId == this.idUser).reverse();
    },
    filteredList() {
      return this.reversed.filter(photo => {
        return photo.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.area {
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-right: 40px;
  padding-left: 100px;
  background-color: #3e3e52dd;
  font-family: "Times New Roman", Times, serif;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .area {
    padding-left: 40px;
    padding-bottom: 5%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .area {
    padding-left: 40px;
    padding-bottom: 5%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .area {
    padding-left: 40px;
    padding-bottom: 10%;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .area {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20%;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .area {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 20%;
  }
}

.border {
  border: 5x solid red !important;
}

.card-image {
  margin: 10px;
  border-radius: 12px;
  float: left;
  margin-top: 50px;
  margin-bottom: 50px;
}

.img:hover {
  box-shadow: -8px 14px 30px 2px rgba(0, 0, 0, 0.4);
}

.bosluk {
  margin-left: 300px;
  margin-right: 300px;
  margin-top: 100px;
}
</style>


