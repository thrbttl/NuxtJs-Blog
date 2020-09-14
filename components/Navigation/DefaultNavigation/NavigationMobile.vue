<template>
  <div id="navigation-mobile">
    <div class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/" class="items col-3">Anasayfa</router-link>
        <router-link tag="li" to="/Blog" class="items col-3">Blog</router-link>
        <router-link tag="li" to="/About" class="items col-3">Hakkımda</router-link>
        <router-link tag="li" to="/Contact" class="items col-3">İletişim</router-link>
        <router-link tag="li" to="/Category/yazilim" class="items col-3">Yazılım</router-link>
        <router-link tag="li" to="/Category/teknoloji" class="items col-3">Teknoloji</router-link>
        <router-link tag="li" to="/Category/tasarim" class="items col-3">Tasarım</router-link>
      </ul>
      <div class="exitButton">
        <router-link tag="i" to class="fas fa-times"></router-link>
      </div>
      <div class="backButton">
        <router-link tag="i" to class="fas fa-sign-out-alt">
          <span>Geri</span>
        </router-link>
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
export default {};
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
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .items {
    font-size: 1.5rem;
  }
}
@media only screen and (min-width: 426px) and (max-width: 767px) {
  .items {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 376px) and (max-width: 425px) {
  .items {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 321px) and (max-width: 375px) {
  .items {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 320px) {
  .items {
    font-size: 1rem;
  }
}

.items:hover {
  color: rgb(74, 113, 74) !important;
}

.social-media {
  position: absolute;
  left: 40px;
  top: 118%;
}

i {
  margin: 0 20px 0 0;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}

i:hover {
  color: rgb(74, 113, 74) !important;
  /* transform:rotateZ(60deg) !important; */
}

.exitButton {
  position: absolute;
  top: 30px;
  left: 40px;
}
.exitButton i {
  color: rgb(0, 34, 34);
}

.backButton {
  position: absolute;
  top: 100%;
  left: 40px;
}

.backButton i {
  font-size: 4rem;
  color: rgb(255, 255, 255);
}

@media only screen and (min-width: 426px) and (max-width: 767px) {
  .backButton i {
    font-size: 3rem;
  }
}
@media only screen and (min-width: 376px) and (max-width: 425px) {
  .backButton i {
    font-size: 2rem;
  }
}
@media only screen and (min-width: 321px) and (max-width: 375px) {
  .backButton i {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 320px) {
  .backButton i {
    font-size: 2rem;
  }
}

.backButton span {
  font-size: 2rem;
  font-weight: bolder;
  position: absolute;
  top: 15px;
  left: 80px;
}

@media only screen and (min-width: 426px) and (max-width: 767px) {
  .backButton span {
    font-size: 2rem;
    top: 6px;
    left: 60px;
  }
}
@media only screen and (min-width: 376px) and (max-width: 425px) {
  .backButton span {
    font-size: 2rem;
    top: -1px;
    left: 50px;
  }
}
@media only screen and (min-width: 321px) and (max-width: 375px) {
  .backButton span {
    font-size: 2rem;
    top: -1px;
    left: 50px;
  }
}
@media only screen and (max-width: 320px) {
  .backButton span {
    font-size: 2rem;
    top: -2px;
    left: 50px;
  }
}
</style>
