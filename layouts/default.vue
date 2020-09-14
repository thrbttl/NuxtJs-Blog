<template>
  <div>
    <div id="area" @click.capture="blankClick()"><div class="t">Developer : <a href="https://tahirbattal.com.tr/">Tahir Battal</a> </div>
      <NavigationMobile :class="{'fixed-top': showNav}" />
      <div class="content" :class="{'open':showNav}">
        <div class="top-bar fixed-top">
          <div class="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
            <i class="fas fa-bars" :class="{'iconNone': showNav}"></i>
          </div>

          <router-link tag="a" to="/" class="navbar-brand mt-2 ml-auto mr-3">
            <img src="../static/image/logo.png" width="30px" alt />
          </router-link>

          <Navigation v-if="!mobileView" />
        </div>

        <nuxt />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation/DefaultNavigation/NavigationTop";
import NavigationMobile from "@/components/Navigation/DefaultNavigation/NavigationMobile";
import Footer from "../components/Common/Footer";

export default {
  middleware: ["session-control"],
  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },

  components: {
    Navigation,
    NavigationMobile,
    Footer,
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
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
};
</script>


<style>
body {
  width: 100%;
  height: 100% !important;
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
.t{
  padding-left: 90%;
}

.top-bar {
  display: flex;
  width: 100%;
  height: 55px;
  background-color: #00000010;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  padding: 0px !important;
  margin: 0 !important;
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 0.7s transform cubic-bezier(0, 0.12, 0.14, 1);
}

.fixed-top {
  z-index: 90;
}

.open {
  transform: translateX(300px);
  z-index: 99;
}

.iconNone {
  display: none;
}

.navigation-icon {
  padding: 25px 0px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  color: #7ca971;
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
