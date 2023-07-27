<template>
  <div class="employees">
    <ul class="breadcrumbs flex gap-10">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Ichki tizim</router-link>
      </li>
      <li>
        <router-link to="/">Hodimlar</router-link>
      </li>
    </ul>
    <div class="employees__header flex justify-between items-center mb-6">
      <h1 class="title">Hodimlar</h1>
      <div class="search flex items-center">
        <div class="search__input flex gap-1.5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M11.024 18.0405C14.8997 18.0405 18.0416 14.8986 18.0416 11.0229C18.0416 7.14721 14.8997 4.00533 11.024 4.00533C7.1483 4.00533 4.00641 7.14721 4.00641 11.0229C4.00641 14.8986 7.1483 18.0405 11.024 18.0405Z"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.0366 16.0355L22.0517 22.0506"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" placeholder="Hodimlar bo’yicha qidirish" />
        </div>
        <router-link :to="{ name: 'teachersform' }">
          <BaseButton class="btn btn-green"> Yangi hodim </BaseButton>
        </router-link>
      </div>
    </div>
    <div class="employees__menu mb-11 flex justify-between items-start">
      <ul class="employees__tab">
        <li class="active">Barchasi <span>22</span></li>
        <li v-for="(category, i) in categories" :key="i">
          {{ category.category.name }} <span>{{ category.countFaces }}</span>
        </li>
      </ul>
      <div>
        <BaseButton @click="getCategories" class="btn">Lavozimga tayinlash</BaseButton>
      </div>
    </div>
    <div class="employees__table">
      <TableComponent></TableComponent>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../components/baseButton.vue'
import TableComponent from '../components/tableComponent.vue'
import { ref } from 'vue'
import api from '../services/baseHttp.js'

const categories = ref('')

async function getCategories() {
  api.get('physical-stuff/categories').then((response) => {
    categories.value = response.data
  })
}
getCategories()
</script>

