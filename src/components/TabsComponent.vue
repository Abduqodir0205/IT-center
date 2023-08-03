<template >
    <div class="container">
        <h1>Tabs</h1>
        <div class="component-tabs">
            <div class="cards-parent">
                <div class="card-account">
                    <h2 class="h_one" v-for="card in 1" :key="card">Account</h2>
                    <h2 class="h_one" >Notifications</h2>
                    <h2 class="h_one" >Interations</h2>
                    <h2 class="h_one" >Plans</h2>
                    <h2 class="h_one" >Billing</h2>
                </div>
                <div class="card-account">
                    <h2 class="h_two" v-for="card in 1" :key="card">Account</h2>
                    <h2 class="h_two" >Notifications</h2>
                    <h2 class="h_two" >Interations</h2>
                    <h2 class="h_two" >Plans</h2>
                    <h2 class="h_two" >Billing</h2>
                </div>
                <div class="card-account">
                    <h2 class="h_thre" v-for="card in 1" :key="card">Account</h2>
                    <h2 class="h_thre" > Notifications</h2>
                    <h2 class="h_thre" > Interations</h2>
                    <h2 class="h_thre" > Plans</h2>
                    <h2 class="h_thre" > Billing</h2>
                </div>


            </div>
        </div>

    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.card-account {
    margin-bottom: 88px;
}

h1 {
    color: #1E293B;
    padding-bottom: 92px;
}
h2{
    color:  #4D515A;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
}
.h_one:hover{
    color:  #5D5FEF;
    cursor: pointer;

}
.h_two:hover{
    color: #5D5FEF;
    border-bottom: 2px solid #5D5FEF ;
    cursor: pointer;

}
.h_thre:hover{
    color:  #FFF;
    display: flex;
    padding: 10px 20px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background:  #5D5FEF;
    cursor: pointer;
    border: none;
}
.h_thre{
    border: 1px solid #4D515A;
    padding: 9px 19px;
    border-radius: 30px;
}




.card-account {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-left: 20px;
    margin-left: 100px;
}
</style>