<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <router-link tag="a" to="/admin" class="nav-link">
            <span class="link-text logo-text">
              Admin
              <img src="../../../static/image/logo.png" width="30" alt="tahir battal" />
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                />
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                />
              </g>
            </svg>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link tag="a" :to="'/admin/profile'" class="nav-link">
            <i class="far fa-address-card"></i>
            <span class="link-text">Profil</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link tag="a" to="/admin/blog" class="nav-link">
            <i class="fas fa-pencil-alt"></i>
            <span class="link-text">Blog</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link tag="a" to="/admin/photos" class="nav-link">
            <i class="far fa-images"></i>
            <span class="link-text">Fotoğraflar</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link tag="a" to="/admin/settings" class="nav-link">
            <i class="fas fa-wrench"></i>
            <span class="link-text">Ayarlar</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" to="/admin/comments" class="nav-link">
            <i class="far fa-comments"></i>
            <span class="link-text">Yorumlar</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" to="/admin/todos" class="nav-link">
            <i class="fas fa-list"></i>
            <span class="link-text">Todo</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link tag="a" to="/" class="nav-link">
            <i class="fas fa-home"></i>
            <span class="link-text">Ansayfa</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-s ::-webkit-scrollbar-track {
  background: rgb(38, 43, 60);
}
::-webkit-scrollbar-corner {
  background: rgb(38, 43, 60);
  color: rgb(38, 43, 60);
}
::-webkit-scrollbar-thumb {
  background: rgb(38, 43, 60);
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 43, 60);
}

.navbar {
  position: fixed;
  background-color: rgb(38, 43, 60);
  padding: 0;
  transition: width 600ms ease;
  overflow: scroll;
  z-index: 99;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 50px;
  color: #358baa;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 600ms;
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  color: #ffffff;
}

.link-text {
  display: none;
  margin-left: 16px;
}

.nav-link svg {
  width: 30px;
  min-width: 30px;
  margin: 0 15px;
}

.fa-primary {
  color: rgb(235, 235, 235);
}

.fa-secondary {
  color: rgb(78, 156, 184);
}

.fa-primary,
.fa-secondary {
  transition: 600ms;
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding: 6px 0 6px 0;
  text-align: center;
  color: #ececec;
  background: rgb(38, 43, 60);
  font-size: 24px;
  letter-spacing: 0.3ch;
  width: 100%;
}
.logo svg {
  transform: rotate(0deg);
  transition: 600ms;
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: 600ms;
}

.navbar:hover .logo svg {
  transform: rotate(-180deg);
}

i {
  display: flex;
  font-size: 20px;
  padding-left: 18px;
  padding-right: 18px;
  color: #8faaab;
  text-decoration: none;
  transition: 600ms;
}

@media only screen and (max-width: 992px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 50px;
  }
  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }
  .nav-item:last-child {
    margin-right: 0;
    margin-left: auto;
  }
}

@media only screen and (min-width: 992px) {
  .navbar {
    top: 0;
    width: 59px;
    height: 100vh;
  }

  .navbar:hover {
    width: 220px;
  }

  .navbar:hover .link-text {
    display: inline;
  }

  .navbar:hover .logo svg {
    margin-left: 176px;
  }

  .navbar:hover .logo-text {
    left: 0px;
  }

  .logo {
    background: rgb(34, 39, 54);
  }
}
</style>