<template>
  <footer class="container-fluid bg-grey py-5 sticky-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-7 mb-3">
          <div class="row">
            <div class="col-md-8">
              <div class="logo-part">
                <router-link tag="div" to="/">
                  <img src="../../static/image/logo.png" class="main-logo logo-footer" />
                </router-link>
                <p class="pr-3 pl-2">
                  Türkiye - Ankara
                  <br />Baştan sona NuxtJs ile oluşturulmuş blog sitesi.
                </p>
              </div>
            </div>
            <div class="col-md-4 px-4">
              <h6>Kullanıcı Deneyimi Odaklı Blog</h6>
              <p>Bir blog sitesinden beklenenleri karşılayabilecek yapıda oluşturulmuş blog projesidir.</p>
              <router-link tag="a" to="/Contact" class="btn-footer nb-5">İletişim</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="row">
            <div class="col-md-4 px-4">
              <h6 class>Bağlantılar</h6>
              <div class="row">
                <div class="col-md-6">
                  <ul>
                    <router-link tag="li" to="/">
                      <a href="#">Anasayfa</a>
                    </router-link>
                    <router-link tag="li" to="/About">
                      <a href="#">Kakkımda</a>
                    </router-link>
                    <router-link tag="li" to="/Blog">
                      <a href="#">Blog</a>
                    </router-link>
                    <router-link tag="li" to="/Contact">
                      <a href="#">İletişim</a>
                    </router-link>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <h6>Sosyal Medya</h6>
              <div class="social">
                <a href="https://www.facebook.com">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCa5aTN2RT4r_iayz4z89f3Q?view_as=subscriber"
                >
                  <i class="fab fa-youtube" aria-hidden="true"></i>
                </a>
              </div>
              <div class="mt-4">
                <p>
                  &copy; 2020
                  <a href="https://tahirbattal.com.tr/">Tahir Battal</a>. Web Tasarım Hizmeti
                </p>
                <router-link class="admin" tag="div" to="/admin">
                  <i class="fas fa-user-astronaut"> Admin</i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg-grey {
  background: #292929;
}
.logo-footer {
  margin-bottom: 40px;
}
footer {
  color: grey;
}
footer p,
a {
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  color: grey;
  text-decoration: none;
}
footer h6 {
  font-family: "Playfair Display", serif;
  margin-bottom: 40px;
  position: relative;
}
footer h6:after {
  position: absolute;
  content: "";
  background: grey;
  width: 12%;
  height: 1px;
  left: 0;
  bottom: -20px;
}
.btn-footer {
  color: grey;
  text-decoration: none;
  border: 1px solid;
  border-radius: 43px;
  font-size: 13px;
  padding: 7px 30px;
  line-height: 47px;
}
.btn-footer:hover {
  text-decoration: none;
}
.form-footer input[type="text"] {
  border: none;
  border-radius: 16px 0 0 16px;
  outline: none;
  padding-left: 10px;
}
::placeholder {
  font-size: 10px;
  padding-left: 10px;
  font-style: italic;
}
.form-footer input[type="button"] {
  border: none;
  background: #232323;
  margin-left: -5px;
  color: #fff;
  outline: none;
  border-radius: 0 16px 16px 0;
  padding: 2px 12px;
}
.social .fab {
  color: grey;
  font-size: 22px;
  padding: 10px 15px;
  background: #3c3c3c;
}
.social .fab:hover {
  color: wheat;
}

.admin .fas {
  color: grey;
  font-size: 15px;
  padding: 10px 15px;
  background: #3c3c3c;
  cursor: pointer;
}
.admin .fas:hover{
  color: aquamarine;
}

footer ul li {
  list-style: none;
  display: block;
}
footer ul {
  padding-left: 0;
}
footer ul li a {
  text-decoration: none;
  color: grey;
}
footer ul li a:hover {
  text-decoration: none;
  color: #f5f5f5 !important;
}
.logo-part {
  border-right: 1px solid grey;
  height: 100%;
}

@media only screen and (max-width: 767px) {
  /* XS */
  .logo-part {
    border-right: none;
    margin-bottom: 10%;
  }
}

.main-logo {
  height: 60px;
  margin-top: 30px;
  cursor: pointer;
}

.admin-logo {
  height: 60px;
  margin-top: 30px;
  cursor: pointer;
}
@media only screen and (max-width: 767px) {
  /* XS */
  .admin-logo {
    height: 25px;
    margin-top: 5px;
  }
}
</style>