<template>
    <div class="science">
        <div class="container">
            <div class="science__content">
                <div class="stories"></div>
                <div class="science-direction">
                    <h1>Yo’nalishlar</h1>
                    <button @click="add"><span>+</span>New Task</button>
                </div>
                <div class="science__departments">
                    <ul class="ulllll">
                        <li>View All</li>
                        <li>Sprints</li>
                        <li>Marketing</li>
                        <li>Sales</li>
                        <li>Development</li>
                    </ul>
                </div>
                <div class="science__cards">
                    <div class="science__card" v-for="item in 6" :key="item">
                        <div class="science-card__top">
                            <h1>Orders</h1>
                            <img src="../assets/images/svg/ShapeMore.svg" alt="">
                        </div>
                        <p>Sales ang marketing are two business functions within an organization. Sales ang marketing are
                            two business functions within an organization.Sales ang marketing are two business functions
                            within an organization. Sales ang marketing are two business functions within an organization.
                        </p>
                        <img src="../assets/images/png/Image (1).png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal drop-shadow-2xl">
            <form @submit.prevent="science">
                <div>
                    <input type="text" placeholder="Yo'nalish">
                    <select >
                        <Options v-bind:massiv="massiv"/>
                    </select>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <div id="File-Body">
                    <label id="File-Lable" for="File-For">
                        Rasm qo'shish:
                        <div id="Filebutton">+</div>
                    </label>
                    <input id="File-For" type="file">

                    <button class="btn">Jo'natish</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
// let ScienceDerection = new FormData()
import axios from 'axios'
import Options from '../components/options.vue'
export default {
    data() {
        return {
            scienceName: "",
            directionName: "",
            message: "",
            massiv: null,

            
        }
    },
    methods: {
        add() {
            document.querySelector('.modal').classList.add('modal__show')
            axios.get('http://192.168.1.3:8080/api/subjects/all', { headers: { 'Authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0dXJzdW5hbGkiLCJpYXQiOjE2ODgxMTg0MzAsImV4cCI6MTY4ODEyMTAyMn0.CdIL0Q1S3sP204Dl7SWZyTLGoAfMcZ4jOqnq996ikz7ROOOWUFbgcIV_2vumIZWAW9g6Rdjk5n9JyMkWPqWb1Q" } })
                .then((response) => {
                    let derectionData = response.data
                    this.massiv = derectionData
                    
                })
                .catch(error => console.log(error))

        },
        science() {
            ScienceDerection.append()
        }
    },
    components:{
        Options,
    },
}
</script>
<style></style>