<template>
    <div class="employees">
        <h1>SALOm {{salom}}</h1>
        <button @click="salom++">Click</button>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const salom = ref(5)

</script>

<style lang="scss" scoped>

</style>