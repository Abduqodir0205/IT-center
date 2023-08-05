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
        <li :class="{active: all}" @click="getPhysicalStuffAll()">
          Barchasi <span>{{ tableData.length }}</span>
        </li>
        <li
        class="break-normal snap-center"
          v-for="(category, i) in categories"
          :key="i"
          @click="getPhysicalStuffCategory(category.category.id, i)"
          :class="{active: i === activeClass}"
        >
          {{ category.category.name }} <span>{{ category.countFaces }}</span>
        </li>
      </ul>
      <div>
        <BaseButton @click="modal = !modal" class="btn">Lavozimga tayinlash</BaseButton>
      </div>
      <div class="overlay dark" v-show="modal" @click="modal = false"></div>
      <Transition name="modalEvent">
        <div class="modal" v-show="modal">
          <h1 class="title">Jismoniy shahslarni lavozimga ta’yinlash</h1>
          <form class="modal__content" @submit.prevent="postPhysicalStuff">
            <div>
              <label for="">Jismoniy shahslar</label>
              <select v-model="form.fid">
                <option
                  v-for="(naturalPerson, i) in naturalPersons"
                  :key="i"
                  :value="naturalPerson.id"
                >
                  {{ naturalPerson.firstName }}
                  {{ naturalPerson.lastName }}
                  {{ naturalPerson.middleName }}
                </option>
              </select>
            </div>
            <div>
              <label for="">Lavozimlar</label>
              <select v-model="form.cid">
                <option v-for="(position, i) in positionUser" :key="i" :value="position.id">
                  {{ position.name }}
                </option>
              </select>
            </div>
            <div>
              <label for="">Sanadan boshlab</label>
              {{ form.start_date }}
              <input type="date" v-model="form.start_date" />
            </div>
            <div>
              <label for="">Sanagacha</label>
              <input type="date" v-model="form.end_date" />
            </div>
            <div class="flex justify-end gap-3">
              <div class="button" @click="modal = false">Bekor qilish</div>
              <button type="submit" @click="modal = false" class="btn-green">Biriktirish</button>
            </div>
          </form>
        </div>
      </Transition>
    </div>
    <div class="employees__table">
      <TableComponent :tableData="tableData"></TableComponent>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../components/baseButton.vue'
import TableComponent from '../components/tableComponent.vue'
import { ref } from 'vue'
import api from '../services/baseHttp.js'

const categories = ref('')
const modal = ref(false)
const naturalPersons = ref([])
const positionUser = ref([])
const tableData = ref([])
const activeClass = ref(null);
const all = ref(true);

const FORM = {
  fid: '',
  cid: '',
  end_date: '',
  start_date: ''
}
const form = ref({ ...FORM })

async function getCategories() {
  api.get('physical-stuff/categories').then((response) => {
    categories.value = response.data
  })
}
getCategories()

async function getPhysicalFace() {
  api.get('physical-face/all').then((response) => {
    naturalPersons.value = response.data
    form.value.fid = response.data[0].id
  })
}
getPhysicalFace()

async function getstuffController() {
  api.get('stuff/all').then((response) => {
    positionUser.value = response.data
    form.value.cid = response.data[0].id
  })
}
getstuffController()

async function postPhysicalStuff() {
  let formData = new FormData()
  formData.append('fid', form.value.fid)
  formData.append('cid', form.value.cid)
  formData.append('start_date', form.value.start_date)
  formData.append('end_date', form.value.end_date)

  api
    .post('physical-stuff/create', formData)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error.response.data.message)
    })
}

async function getPhysicalStuffAll() {
  api.get('physical-stuff/all').then((response) => {
    tableData.value = response.data
    all.value = true;
    activeClass.value = null;
  })
}
getPhysicalStuffAll()

async function getPhysicalStuffCategory(id, index) {
  api.get(`physical-stuff/by-category?cid=${id}`).then((response) => {
    tableData.value = response.data
    activeClass.value = index
    all.value = false
  })
}
</script>

