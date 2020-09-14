<template>
  <div class="back">
    <div class="contact-form">
      <form method="post">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="İsminiz ve Soyisminiz *"
                value
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="E-Posta Adresniz *"
                value
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Telefon Numaranız *"
                value
              />
            </div>
            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Mesajınız *"
                style="width: 100%; height: 250px;"
              ></textarea>
            </div>
            <div class="form-group col-6">
              <input type="submit" name="btnSubmit" class="btnContact" value="Gönder" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "adminLayout",
};
</script>

<style scoped>
input[type="text"] {
  border: none;
  border-bottom: 2px solid rgb(78, 156, 184);
  background: transparent;
}
textarea {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(78, 156, 184);
  resize: none;
}
textarea:focus {
  background-color: transparent;
}


.back {
  min-height: 100vh;
}

.contact-form {
  background: transparent;
  margin-top: 0;
  margin-bottom: 5%;
  width: 100%;
}
.contact-form .form-control {
  border-radius: 1rem;
}
.contact-form form {
  padding: 14%;
}
.contact-form form .row {
  margin-bottom: -7%;
}
.contact-form h3 {
  margin-bottom: 8%;
  margin-top: -10%;
  text-align: center;
  color: white;
}
.contact-form .btnContact {
  width: 50%;
  border: none;
  border-radius: 1rem;
  padding: 1.5%;
  background: #dc3545;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}
.btnContact:hover {
  background-color: #b52937;
}
.btnContactSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  color: #fff;
  background-color: #0062cc;
  border: none;
  cursor: pointer;
}
</style>