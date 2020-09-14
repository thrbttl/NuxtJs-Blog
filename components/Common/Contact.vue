<template>
  <div>
    <section class="section bg-light mt-2" >
      <div class="bg-triangle bg-triangle-dark bg-triangle-top bg-triangle-left"></div>
      <div class="bg-triangle bg-triangle-dark bg-triangle-bottom bg-triangle-right"></div>
      <div class="container">
            <div class="container">
      <div class="row">
        <div class="col-md-10">
          <h3 class="mb-4">
            Bize <span class="text-primary">ulaşmak</span> için kullanabileceğiniz kanallar.
          </h3>
          <p
            class="text-muted mb-5"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nam voluptatum facilis, atque officiis possimus totam placeat maiores at tempore nulla corporis rem aliquid iusto ab, distinctio, nostrum cumque asperiores!</p>

          <div class="row">
            <div class="col-md-6 col-lg-5">
              <h5>Adres:</h5>

              <p class="text-muted">1234 Atatürk Mahallesi, Ankara, 06060</p>

              <h5>Email:</h5>

              <p class="text-muted">
                <a href="#">xyz@info.com</a>
              </p>
            </div>
            <div class="col-md-6 col-lg-5 ">
              <h5>Telefon:</h5>

              <p class="text-muted">
                <a href="#">132-465-78-90</a>
              </p>

              <h5>Linkedin:</h5>

              <p class="text-muted">
                <a href="#">www.linkedin.com/</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
    </section>

    <section class="section">
      <div class="line line-top"></div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <h2 class="text-center mb-4">Neden <span class="text-primary">Bizi</span> Terjih Etmelisiniz?</h2>

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

.text-primary {
  color: #4bb4f5 !important;
}
.text-center {
  text-align: center !important;
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

a{
  text-decoration: none;
}
</style>