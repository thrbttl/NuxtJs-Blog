<template>
  <section>
    <div class="container">
      <div class="login-form border-success">
        <h1 class="text-success">
          <i class="fas fa-user-astronaut"></i>
          <br />Admin Girişi
        </h1>
        <form @submit.prevent="onSubmit">
          <input
            @blur="$v.admin.email.$touch()"
            v-model="admin.email"
            type="email"
            class="form-control"
            :class="{'is-invalid': $v.admin.email.$error}"
            placeholder="E-posta adresinizi giriniz"
          />

          <input
            v-model="$v.admin.password.$model"
            type="password"
            class="form-control"
            :class="{'is-invalid': $v.admin.email.$error}"
            placeholder="Şifreniz..."
          />

          <small
            v-if="!$v.admin.password.minLength"
            class="form-text text-muted mb-4"
          >* Şifre en az {{$v.admin.password.$params.minLength.min}} karakter olmalı.</small>
          <small
            v-if="!$v.admin.password.maxLength"
            class="form-text text-muted mb-4"
          >* Şifre en fazla {{$v.admin.password.$params.maxLength.max}} karakter olmalı.</small>

          <div class="button-container d-flex flex-column align-items-center">
            <button
              :disabled="$v.$invalid"
              type="submit"
              class="btn btn-block mb-2 btn-success"
            >Giriş Yap</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  alpha,
} from "vuelidate/lib/validators";

export default {
  layout: "authLayout",

  data() {
    return {
      admin: {
        email: null,
        password: null,
      },
      name: false,
    };
  },
  validations: {
    admin: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(21),
      },
    },
  },

  methods: {
    onSubmit() {
      this.$store
        .dispatch("authAdmin", {
          admin: this.admin,
        })
        .then((res) => {
          this.$router.push("/admin");
        })
        .catch((error) => {
          alert("Parola veya e-mail hatalı.");
        });
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  background: url(../../static/image/auth-bg-min.jpg);
  background-size: cover;
  font-family: "Roboto Condensed", sans-serif;
  letter-spacing: 1px;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  text-align: center;
}

.login-form {
  position: relative;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 60px 30px;
  transition: 0.5s;
}
.login-form:hover {
  background: rgba(187, 226, 247, 0.08);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.login-form h1 {
  margin: 0 0 20px;
  color: #ffffff;
  font-size: 30px;
}
.login-form input {
  display: block;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 25px;
  outline: none;
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;
  border: none;
  background: rgba(255, 255, 255, 0.1);
}
.login-form input::placeholder {
  color: #fff;
}

.login-form input[type="submit"] {
  color: #fff;
  background: #0072ff;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.login-form input[type="submit"]:hover {
  background: #005aca;
}

.login-form a {
  text-decoration: none;
  text-transform: uppercase;
}

.login-form small {
  font-size: 10px;
  margin-top: -15px !important;
  margin-bottom: 10px;
  padding: 0 !important;
}

i {
  font-size: 75px;
}
</style>
