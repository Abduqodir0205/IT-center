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
            <li @click="filterAllOrders()">Barchasi</li>
            <li
              v-for="(ignition, i) in ssOrgSubjects"
              :key="i"
              @click="filterByOrders(ignition.id)"
            >
              {{ ignition.name }}
            </li>
          </ul>
        </div>
        <div class="science__cards">
          <div class="science__card" v-for="(orders, i) in allByOrg" :key="i" v-show="displayOrder">
            <div class="science-card__top">
              <h1>{{ orders.subSubject.name }}</h1>
              <img src="../assets/images/svg/ShapeMore.svg" alt="" />
            </div>
            <p>
             {{ orders.description }}
            </p>
             <img :src="orders.imageStore" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="modal drop-shadow-2xl">
      <div class="modal__content">
        <form @submit.prevent="submit">
          <div class="save__btn">
            <button id="save">Saqlash</button>
            <div id="saveX" @click="removeSave">Bekor qilish</div>
          </div>
          <div class="selects">
            <div>
              <label class="label" for="">Fan</label>
              <select id="modal__inputs" @change="getFanData">
                <option v-for="(element, i) in fan" :key="i" :value="element.id">
                  {{ element.name }}
                </option>
              </select>
            </div>
            <div>
              <label class="label" for="">Yo'nalish</label>
              <select id="modal__inputs" @change="getSubData">
                <option v-for="(item, i) in yonalish" :key="i" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="datas">
            <div>
              <label class="label" for="">Ochilgan sana</label>
              <input disabled="false" id="modal__inputs" type="text" v-model="date" />
            </div>
            <div>
              <label class="label" for="">Yopilish sana</label>
              <input id="modal__inputs" type="date" placeholder="12.12.2023" />
            </div>
          </div>
          <div>
            <label class="label" for="">Qisqacha ma’lumot</label>
            <div class="texterya">
              <textarea cols="30" rows="5" v-model="textareaValue"></textarea>
            </div>
          </div>
          <div class="upload">
            <input type="file" multiple @change="changeFile" />
            <div class="image" v-for="(img, i) in images" :key="i">
              <img style="width: 150px; height: 130px" :src="img.url" alt="Salom" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// let ScienceDerection = new FormData()
import axios from 'axios'
import Options from '../components/options.vue'
import api from '../services/services.js'
export default {
  data() {
    return {
      scienceName: '',
      directionName: '',
      message: '',
      massiv: null,
      fan: null,
      yonalish: null,
      date: null,
      selected1: null,
      selected2: null,
      textareaValue: '',
      file: null,
      ssOrgSubjects: '',
      allByOrg: [],
      displayOrder: true,
      // images
      images: [],
      changeFileEl: false
    }
  },
  methods: {
    add() {
      document.querySelector('.modal__content').classList.add('modal__show')
      document.querySelector('body').style = 'overflow: hidden;'
      axios({
        method: 'get',
        url: 'http://192.168.1.4:8080/api/subjects/all',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        this.fan = response.data
        console.log(response)
      })
      // yo'nalish

      axios({
        method: 'get',
        url: 'http://192.168.1.4:8080/api/subjects/sub/all',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((responseEl) => {
        this.yonalish = responseEl.data
      })

      //date
      const dateObj = new Date()
      const currentDate =
        dateObj.getMonth() == 12
          ? dateObj.getMonth()
          : dateObj.getMonth() + 1 + '/' + dateObj.getDay() + '/' + dateObj.getFullYear()
      this.date = currentDate
    },
    removeSave() {
      document.querySelector('.modal__content').classList.remove('modal__show')
      document.querySelector('body').style = 'overflow: auto;'
    },
    getFanData(e) {
      this.selected1 = e.target.value
      console.log(this.selected1)
    },
    getSubData(e) {
      this.selected2 = e.target.value
      console.log(this.selected2)
    },
    changeFile(e) {
      // console.log(this.file);

      const files = e.target.files
      if (files.length === 0) return
      for (let i = 0; i < 1; i++) {
        if (files[i].type.split('/')[0] != 'image') continue
        if (!this.changeFileEl) {
          if (!this.images.some((e) => e.name === files[i].name)) {
            this.images.push({ name: files[i].name, url: URL.createObjectURL(files[i]) })
            this.changeFileEl = true
          }
        }
      }
      this.file = e.target.files[0]
    },
    submit(e) {
      console.log('Slaom')
      let form = new FormData()
      form.append('sid', this.selected1)
      form.append('ssid', this.selected2)
      form.append('description ', this.textareaValue)
      form.append('photo ', this.file)

      axios
        .post('http://192.168.1.4:8080/api/org/ss/create', form, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error.response.data.message)
        })
    },
    async getSs() {
      axios({
        method: 'get',
        url: 'http://192.168.1.4:8080/api/org/ss/org-subjects',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        this.ssOrgSubjects = response.data
        console.log(response)
      })
    },
     async getAllByOrg() {
      axios({
        method: 'get',
        url: 'http://192.168.1.4:8080/api/org/ss/all-by-org',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        this.allByOrg = response.data
        console.log(response)
      })
    },
    async filterByOrders(id) {
      axios({
        method: 'get',
        url: `http://192.168.1.4:8080/api/org/ss/ss-by-org?sid=${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        this.allByOrg = response.data
        console.log(response);
      })
    },
    filterAllOrders() {
      axios({
        method: 'get',
        url: 'http://192.168.1.4:8080/api/org/ss/all-by-org',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        this.allByOrg = response.data
        console.log(response)
      })
    },
  },
  components: {
    Options
  },
  async mounted() {
    this.getSs(), this.getAllByOrg()
  }
}
</script>
<style></style>