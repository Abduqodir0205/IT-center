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
                    <select>
                        <option value="frontend">Frontend</option>
                        <option value="flutter">Flutter</option>
                        <option value="backend">Backend</option>
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
let ScienceDerection = new FormData()
export default {
    data() {
        return {
            scienceName: "",
            directionName: "",
            message: "",
            
        }
    },
    methods: {
        add() {
            document.querySelector('.modal').classList.toggle('modal__show')
            document.querySelector('.bg__modal').classList.toggle('bg__modal-show')
        },
        science(){
            ScienceDerection.append()
        }
    }
}
</script>
<style></style>