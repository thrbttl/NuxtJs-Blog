<template>
  <div>
    <section class="section section-top">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 pt-5">
            <h1 class="mb-4 text-center animate">Yaratıcı ve benzersiz bir blog sistemi</h1>
            <p
              class="mb-6 text-center text-muted animate"
            >DENEME Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas harum aperiam minus corporis, nesciunt nobis quaerat voluptatumunt qui similique.</p>
          </div>
        </div>
        <div class="row form-row align-items-center">
          <div class="col-3">
            <div class="img-square">
              <img class="img-cover" alt="..." src="../../static/image/a1-min.jpg"/>
            </div>
          </div>
          <div class="col-6">
            <div class="row form-row align-items-end mb-2">
              <div class="col-7">
                <div class="img-square">
                  <img src="../../static/image/a4-min.jpg" alt="..." class="img-cover" />
                </div>
              </div>
              <div class="col-5">
                <div class="img-square">
                  <img src="../../static/image/a3-min.jpg" alt="..." class="img-cover" />
                </div>
              </div>
            </div>
            <div class="row form-row">
              <div class="col-5">
                <div class="img-square">
                  <img src="../../static/image/a2-min.jpg" alt="..." class="img-cover" />
                </div>
              </div>
              <div class="col-7">
                <div class="img-square">
                  <img src="../../static/image/a5-min.jpg" alt="..." class="img-cover" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="img-square">
              <img src="../../static/image/a6-min.jpg" alt="..." class="img-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-light" id="about">
      <div class="bg-triangle bg-triangle-dark bg-triangle-top bg-triangle-left"></div>
      <div class="bg-triangle bg-triangle-dark bg-triangle-bottom bg-triangle-right"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-lg-6">
            <h2 class="mb-4">
              Tasarımlarıyla fark yaratan <span class="text-primary">benzersiz</span> tasarımlar.
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem libero adipisci odit, iure quibusdam veniam eius perferendis numquam cumque repudiandae, quisquam veritatis mollitia. Molestiae ipsa porro, id enim deleniti aspernatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quos. Rerum eos voluptatibus asperiores magni? Minima perferendis ducimus laudantium ut dicta quo architecto, veniam vel, maiores, nostrum quis ex commodi.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="line line-top"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <h2 class="text-center mb-4">
              Neden
              <span class="text-primary">Bizi</span> Terjih Etmelisiniz?
            </h2>
            <p
              class="text-center text-muted text-left mb-5"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officiis odio repudiandae illum molestiae.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="text-center mb-5 mb-md-0">
              <div class="text-primary mb-4">
                <i class="far fa-user"></i>
              </div>
              <h4 class="mb-3">Profesyonellik</h4>
              <p
                class="text-muted mb-0"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa, corporis.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center mb-5 mb-md-0">
              <div class="text-primary mb-4">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4 class="mb-3">Güvenlik</h4>
              <p
                class="text-muted mb-0"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa, corporis.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center">
              <div class="text-primary mb-4">
                <i class="far fa-clock"></i>
              </div>
              <h4 class="mb-3">Sorumluluk</h4>
              <p
                class="text-muted mb-0"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa, corporis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section {
  position: relative;
  padding-bottom: 7.5rem;
  display: block;
  padding-top: 7.5rem;
}

.section-top {
  padding-top: 20px;
  margin-top: 0px;
}

.text-primary {
  color: #4bb4f5 !important;
}
.text-center {
  text-align: center !important;
}
.img-square {
  position: relative;
  padding-bottom: 100%;
}

.img-square .img-cover {
  position: absolute;
}
.img-cover {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
img {
  vertical-align: middle;
  border-style: none;
}

.bg-triangle {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100% auto;
}
.bg-triangle-left {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><path d='M0 100 V 90 L 10 100 Z' fill='%23212529' fill-opacity='0.03'></path><path d='M0 90 V 80 L 10 90 Z' fill='%23212529' fill-opacity='0.045'></path><path d='M10 100 V 90 L 20 100 Z' fill='%23212529' fill-opacity='0.025'></path><path d='M0 90 H 10 V 100 Z' fill='%23212529' fill-opacity='0.06'></path></svg>");
}
.bg-triangle-right {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><path d='M100 100 V 90 L 90 100 Z' fill='%23212529' fill-opacity='0.045'></path><path d='M100 90 V 80 L 90 90 Z' fill='%23212529' fill-opacity='0.015'></path><path d='M90 100 V 90 L 80 100 Z' fill='%23212529' fill-opacity='0.03'></path><path d='M90 100 V 90 H 100 Z' fill='%23212529' fill-opacity='0.06'></path></svg>");
}
.bg-triangle-top {
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
}
.section .container {
  position: relative;
  z-index: 1;
}

.line-top {
  top: 0;
}
.line {
  position: absolute;
  left: 50%;
  height: 7.5rem;
  border-left: 2px solid #4bb4f5;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
i {
  font-size: 3em;
}
</style>
