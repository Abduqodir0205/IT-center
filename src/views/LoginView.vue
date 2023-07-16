<template>
    <div class="login">
        <div class="container">
            <div class="login__content">
                <div class="login__left-item">
                    <h2>Welcome Back!</h2>
                    <form class="login__form" @submit.prevent="user">
                        <span>Username:</span>
                        <input type="text" id="username" v-model="username">
                        <span>Password:</span>
                        <input type="password" id="password" v-model="password">
                        <button>Login</button>
                    </form>
                    <p>Dont have and account?<span>Register</span></p>
                    <div class="icons"></div>
                </div>
                <div class="login__right-item">
                    <img src="../assets/images/png/Other 03.png" alt="">
                </div>
            </div>
        </div>
        <div class="login__rot"></div>
    </div>
</template>
<script>
import axios from 'axios'
var form = new FormData()


export default {
    name: 'CreatPost',
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        user() {
            form.append('username', this.username)
            form.append('password', this.password)
            axios.post('http://192.168.1.3:8080/api/auth/login', form)
            .then((response)=>{
                let status = response.status
                localStorage.setItem('token', response.data.token)
                if (status == 200) {
                    this.$router.push('/home')
                }
            })
            .catch(error => console.log(error))

        }
    },
}
</script>