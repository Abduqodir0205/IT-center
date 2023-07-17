<template>
    <div class="container">
        <div class="sitebar">
            <div class="sitebar__top">
                <img src="../assets/images/svg/logo.svg" alt="">
            </div>
            <div class="sitebar__bottom">
                <div class="sitebar__child">
                    <div class="site__child__top">
                        <p class="site__child__top__p">Pages</p>
                        <img src="../assets/images/svg/Plus.svg" alt="">
                    </div>
                    <div class="dashboard">
                        <img src="../assets/images/svg/dashboard.svg" alt="">
                        <p class="dashboard__p">Dashboard</p>
                    </div>
                    <div class="analysis">
                        <img src="../assets/images/svg/analysis.svg" alt="">
                        <p class="analysis__p">Analytics</p>
                        <img class="analysis__img2" src="../assets/images/svg/new.svg" alt="">
                    </div>
                    <div class="dropdown" @click="dropContent = !dropContent">
                        <div class="dropdown__child">
                            <img class="dropdown__img" src="../assets/images/png/Iconebox.png" alt="">
                        <span class="dropdown__span">Ichki tizim</span>
                        <img class="dropdown__img2" src="../assets/images/svg/sitebar__top.svg" alt="">
                        </div>
                        <div class="dropdown__content" v-show="dropContent">
                            <p class="dropdown__p">Hodimlar</p>
                            <p class="dropdown__p">O’qituvchilar</p>
                            <p class="dropdown__p">Dars jadvallari</p>
                        </div>
                    </div>
                    <div class="apps">
                        <p class="apps__p">Apps</p>
                        <img src="../assets/images/svg/Plus.svg" alt="">
                    </div>
                    <div class="apps__title">
                        <img src="../assets/images/svg/empty-wallet.svg" alt="">
                        <p>Fan va yo’nalishlar</p>
                        <img class="apps__title__img1" src="../assets/images/svg/sitebar-bottom.svg" alt="">
                    </div>
                    <div class="apps__title">
                        <img src="../assets/images/svg/messages-2.svg" alt="">
                        <p>Yo’nalishlar</p>
                        <img class="apps__title__img2" src="../assets/images/svg/new-yolanish.svg" alt="">
                    </div>
                    <div class="apps__title">
                        <img src="../assets/images/svg/calendar.svg" alt="">
                        <p>Calendar</p>
                    </div>
                    <div class="apps__title">
                        <img src="../assets/images/svg/Tasks.svg" alt="">
                        <p>Tasks</p>
                    </div>
                    <div class="settings">
                        <p class="settings__p">SETTINGS</p>
                        <div class="settings__child">
                            <img src="../assets/images/svg/setting-2.svg" alt="">
                            <p class="settings__child__p">My Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropContent: false
        }
    },
}
</script>
<style></style>