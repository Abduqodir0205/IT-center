<template>
  <div class="science">
    <div class="stories"></div>
    <div class="middle">
      <div class="left">
        <h1>Yangi hodim</h1>
        <DropdownComponent />
      </div>
      <div class="right">
        <button>Saqlash</button>
      </div>
    </div>
    <div class="employee">
      <form  @submit.prevent="submit">
         <button type="submit" >Saqlash</button>
        <div class="left">
          <div class="left__content">
            <div class="left-content__flex">
              <div class="employee__a employee__global">
                <label for=""
                  >Ism
                  <strictly />
                </label>
                <input type="text" v-model="form.firstName" />
              </div>
              <div class="employee__b employee__global">
                <label for=""
                  >Familyasi
                  <strictly />
                </label>
                <input type="text" v-model="form.lastName" />
              </div>
              <div class="employee__c employee__global">
                <label for=""
                  >Otasining ismi
                  <strictly />
                </label>
                <input type="text" v-model="form.middleName" />
              </div>
              <div class="employee__v employee__global">
                <label for="">Tug'ilgan sanasi</label>
                <input type="date" v-model="form.birthday" />
              </div>
              <div class="employee__e employee__global">
                <label for=""
                  >Pasport seriyasi
                  <strictly />
                </label>
                <input type="text" v-model="form.identification" />
              </div>
              <div class="employee__r employee__global">
                <label for="">Yashash manzili</label>
                <input type="text" v-model="form.address" />
              </div>
            </div>
            <div class="child2">
              <div class="employee__w employee__global">
                <label for="">Ma'lumoti</label>
                <span v-if="nol">Malumotni tanlang</span>
                <select v-model="form.eLevel">
                  <option v-for="(item, i) in educationLevel" :key="i" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="employee__q employee__global">
                <label for=""
                  >Telefefon raqam(Asosiy)
                  <strictly />
                </label>
                <input type="tel" placeholder="+998" v-model="form.phone1"/>
              </div>
              <div class="employee__f employee__global">
                <label for="">Telefon raqam(Qo'shimcha)</label>
                <input type="tel" placeholder="+998" v-model="form.phone2"/>
              </div>
              <div class="employee__g employee__global">
                <label for="">Telegram(Username)</label>
                <input type="text" v-model="form.telegram"/>
              </div>
              <div class="employee__h employee__global">
                <label for="">Instagram(Username)</label>
                <input type="text" v-model="form.instagram"/>
              </div>
            </div>
          </div>
          <div class="employee__m employee__global">
            <label for="">Qiziqishlar</label>
            <div>
              <Multiselect
                v-model="form.interests"
                track-by="name"
                mode="tags"
                label="name"
                :close-on-select="false"
                :searchable="true"
                :create-option="false"
                :options="options"
              />
            </div>
          </div>
        </div>
        <div class="right">
          <div class="employee__d">
            <div class="img">
              <h3>Hodim rasmi</h3>
              <div class="employee-d__img" v-if="selectedImageEl?.url">
                <img class="employee__img" :src="selectedImageEl.url" alt="Salom" />
              </div>
            </div>
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile"
              :multiple="false"
              @input="changeFile"
            />
            <label for="file">Rasm tanlash</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import strictly from '../components/strictly.vue'
import Multiselect from '@vueform/multiselect'
import DropdownComponent from '../components/DropdownComponent.vue'
import api from '../services/baseHttp.js'
import { ref } from 'vue'

const options = ref([])
const selectedImageEl = ref({})
const changeFileEl = ref(false)
const file = ref(null)
const educationLevel = ref([])
const nol = ref(false)
const FORM_EMPLOYEE = {
  firstName: '',
  lastName: '',
  middleName: '',
  birthday: '',
  identification: '',
  address: '',
  eLevel: '',
  phone1: '',
  phone2: '',
  telegram: '',
  instagram: '',
  photo: '',
  interests: null
}

const form = ref({ ...FORM_EMPLOYEE })

function changeFile(e) {
  const files = e.target.files
  if (files.length === 0) return
  selectedImageEl.value = { name: files[0].name, url: URL.createObjectURL(files[0]) }
  file.value = e.target.files[0]
}

async function getEducationLevel() {
  api.get(`education-level/all`).then((response) => {
    educationLevel.value = response.data
    form.value.educationLevel = educationLevel.value[0].id
  })
}
getEducationLevel()

async function getInterest() {
  api.get(`interests/all`).then((response) => {
    const datas = response.data
    options.value = datas.map((data) => {
      return {
        value: data.id,
        name: data.name
      }
    })
  })
}
getInterest()

async function submit() {
  let formData = new FormData()
  formData.append('firstname', form.value.firstName)
  formData.append('lastname', form.value.lastName)
  formData.append('middleName', form.value.middleName)
  formData.append('birthday', form.value.birthday)
  formData.append('identification ', form.value.identification)
  formData.append('address', form.value.address)
  formData.append('e_level', form.value.eLevel)
  formData.append('phone1', form.value.phone1)
  formData.append('phone2', form.value.phone2)
  formData.append('instagram', form.value.instagram)
  formData.append('telegram', form.value.telegram)
  formData.append('interests', form.value.interests)
  formData.append('photo', file.value)

  api.post('physical-face/create', formData).then(res =>{
    console.log(res);
  }).catch((error)=>{
    console.log(error.response.data.message);
  })
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>