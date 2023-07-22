<template>
    <div class="container">
        <div class="scienc-direction__right" v-for="card in 7 " :="card">
            <div class="teachers-scienc__card">
                <img src="https://picsum.photos/100/100" alt="bu rasm">
                <div class="card-right">
                    <h1>Web Frontend</h1>
                    <p>Sales ang marketing are two business....</p>
                </div>
                <div class="card-left">
                    <h2>Dasturlash</h2>
                    <p>O’qituvchilar soni: 20</p>
                </div>
                <hr>
                <hr>
            </div>
        </div>
        <div class="scienc-teachers__left">
            <div class="search">
                <input type="text" placeholder="Hodimlar bo’yicha qidirish">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.0202 17.042C14.8959 17.042 18.0378 13.9002 18.0378 10.0244C18.0378 6.14873 14.8959 3.00684 11.0202 3.00684C7.14445 3.00684 4.00256 6.14873 4.00256 10.0244C4.00256 13.9002 7.14445 17.042 11.0202 17.042Z"
                        stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.0327 15.0371L22.0478 21.0522" stroke="#64748B" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <button><span>+</span>O'qituvchi</button>
            </div>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style></style>