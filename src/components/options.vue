<template>
        <option  v-for="item in massiv" :id="item.id"  value="frontend">{{item.name}}</option>
</template>
<script>
export default {
    props:{
        massiv:{
            type: Array,
            requaried: true,
        }
    }

}
</script>
<style></style>