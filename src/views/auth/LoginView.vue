<template>
  <div class="login">
    <div class="container">
      <div class="login__content">
        <div class="login__left-item">
          <h2>Welcome Back!</h2>
          <form class="login__form" @submit.prevent="user">
            <span>Username:</span>
            <input type="text" id="username" name="username" v-model="form.username" />
            <span>Password:</span>
            <input type="password" id="password" name="password" v-model="form.password" />
            <button>Login</button>
          </form>
          <p>Dont have and account?<span>Register</span></p>
          <div class="icons"></div>
        </div>
        <div class="login__right-item">
          <img src="../../assets/images/png/Other 03.png" alt="" />
        </div>
      </div>
    </div>
    <div class="login__rot"></div>
  </div>
</template>
<script setup>
import api from '@/services/baseHttp.js'
import { ref } from 'vue'
import router from '@/router'

const FORM = {
  username: '',
  password: ''
}
const form = ref({ ...FORM })
function user() {
  const formData = new FormData()
  formData.append('username', form.value.username)
  formData.append('password', form.value.password)
  api
    .post('auth/login', form)
    .then((response) => {
      let status = response.status
      localStorage.setItem('token', response.data.token)
      if (status == 200) {
        router.push('/')
      }
    })
    .catch((error) => console.log(error))
}
</script>