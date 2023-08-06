<template>
  <div class="login">
    <div class="container">
      <div class="login__content">
        <div class="login__left-item">
          <h2>Welcome Back!</h2>
          <div class="login__form" @submit="user">
            <span>Username:</span>
            <Form ref="formRef">
            <Field v-slot="{errors}" :model-value="form.username" name="username" rules="required">
             <input :class="{'error': errors[0]}" type="text" id="username" name="username" v-model="form.username" />
             <span v-if="errors[0]" class="text-red-500">{{ errors[0] }}</span>
            </Field>
            </Form>
            <span>Password:</span>
            <input type="password" id="password" name="password" v-model="form.password" />
            <button @click="user">Login</button>
          </div>
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
import { Field, Form } from 'vee-validate'


const FORM = {
  username: '',
  password: ''
}
const form = ref({ ...FORM })
const formRef = ref()

async function user() {
  console.log(formRef.value);
  const validate = await formRef.value.validate()
  console.log(validate);
  if(validate.valid) {
 const formData = new FormData()
  formData.append('username', form.value.username)
  formData.append('password', form.value.password)
  api
    .post('auth/login', formData)
    .then((response) => {
      let status = response.status
      localStorage.setItem('token', response.data.token)
      if (status == 200) {
        router.push('/')
      }
    })
    .catch((error) => console.log(error))
  }
 
}
</script>