<template>
  <div>
    <div id="area" @click.capture="blankClick()">
      <NavigationMobile :adminData="fetchedAdminData" :class="{'fixed-top': showNav}" />
      <div class="content" :class="{'open': showNav}">
        <div class="top-bar fixed-top">
          <div class="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
            <i class="fas fa-bars" :class="{'iconNone': showNav}"></i>
          </div>
          <router-link tag="a" to="/" class="navbar-brand mt-2 ml-auto mr-3">
            <img class="mr-2" src="../static/image/logo.png" width="30px" alt />
          </router-link>
          <NavigationTop :adminData="fetchedAdminData" v-if="!mobileView" />
        </div>
        <NavigationLeft />
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import NavigationTop from "../components/Navigation/AdminNavigation/NavigationTop";
import NavigationMobile from "../components/Navigation/AdminNavigation/NavigationMobile";
import NavigationLeft from "../components/Navigation/AdminNavigation/NavigationLeft";

export default {
  middleware: ["session-control", "authmid"],

  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },

  components: {
    NavigationTop,
    NavigationMobile,
    NavigationLeft,
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 992;
    },
    blankClick() {
      if (this.showNav === true) {
        this.showNav = false;
      }
    },
  },
  mounted() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  computed: {
    fetchedAdminData() {
      return this.$store.getters.getAdminData;
    },
  },
};
</script>


<style scoped>
body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: rgb(38, 43, 60);

}

#area {
  position: absolute;
  width: 100%;
  margin: 0;
  
}

.top-bar {
  display: flex;
  width: 100%;
  height: 55px;
  background-color: rgb(38, 43, 60);
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(34, 39, 54);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 0.7s transform cubic-bezier(0, 0.12, 0.14, 1);
}

.fixed-top {
  z-index: 90;

}

.open {
  transform: translateX(250px);
  z-index: 99;
  display: block;
}

.iconNone {
  display: none;
}

.navigation-icon {
  padding: 25px 0px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  color: rgb(78, 156, 184);
}
.navigation-icon i {
  font-size: 2rem;
}

@media only screen and (min-width: 2561px) {
  .navigation-icon {
    padding: 13px 0px 10px 40px;
  }
}
@media only screen and (min-width: 1441px) and (max-width: 2560px) {
  .navigation-icon {
    padding: 13px 0px 10px 40px;
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  .navigation-icon {
    padding: 13px 0px 10px 40px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .navigation-icon {
    padding: 13px 0px 40px 30px;
  }
}
@media only screen and (min-width: 426px) and (max-width: 767px) {
  .navigation-icon {
    padding: 13px 0px 40px 25px;
  }
}
@media only screen and (min-width: 376px) and (max-width: 425px) {
  .navigation-icon {
    padding: 13px 0px 40px 20px;
  }
}
@media only screen and (min-width: 321px) and (max-width: 375px) {
  .navigation-icon {
    padding: 13px 0px 40px 20px;
  }
}
@media only screen and (max-width: 320px) {
  .navigation-icon {
    padding: 13px 0px 40px 20px;
  }
}
</style>
