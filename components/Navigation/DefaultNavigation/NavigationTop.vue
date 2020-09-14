<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navigation">
    <router-link tag="a" to="/" class="navbar-brand ml-3 mr-5">
      <img src="../../../static/image/logo.png" width="30" alt="tahir battal" />
    </router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/" class="items">Anasayfa</router-link>
        <router-link tag="li" to="/Blog" class="items">Blog</router-link>
        <router-link tag="li" to="/About" class="items">Hakkımda</router-link>
        <router-link tag="li" to="/Contact" class="items">İletişim</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#navigation {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid transparent;
  border-radius: 0px;
}

.navbar {
  background-color: #000000 !important;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
}

.items {
  font-size: 22px;
  padding: 2px 10px;
  cursor: pointer;
  color: #ecfdff;
}
.items:hover {
  color: #a9a9a9;
}

.fixed-top {
  position: fixed !important;
  top: 0px !important;
}
</style>