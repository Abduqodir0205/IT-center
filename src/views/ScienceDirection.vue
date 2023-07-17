<template>
  <div class="science">
      <div class="science__content">
        <div class="science-direction">
          <h1>Yo’nalishlar</h1>
          <button @click="add"><span>+</span>New Task</button>
        </div>
        <div class="science__departments">
          <ul class="ulllll snap-mandatory snap-x">
            <li @click="getAllByOrg()" 
            :class="{ active: all }">
            Barchasi
            </li>
            <li
              class="break-normal snap-center"
              v-for="(ignition, i) in ssOrgSubjects"
              :key="i"
              @click="filterByOrders(ignition.id, i)"
              :class="{ active: i === activeClass }"
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
    <div class="overlay" v-show="modal"></div>

    <div class="modal__content" :class="{ modal__show: modal }">
      <form @submit.prevent="submit">
        <div class="save__btn">
          <button id="save">Saqlash</button>
          <div id="saveX" @click="modal = !modal">Bekor qilish</div>
        </div>
        <div class="selects">
          <div>
            <label class="label" for="">Fan</label>
            {{ form.sid }}
            <select id="modal__inputs" @change="getFanData" v-model="form.sid">
              <option v-for="(element, i) in fan" :key="i" :value="element.id">
                {{ element.name }}
              </option>
            </select>
          </div>
          <div>
            <label class="label" for="">Yo'nalish</label>
            <select id="modal__inputs" @change="getSubData" v-model="form.ssid">
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
            <textarea cols="30" rows="5" v-model="form.description"></textarea>
          </div>
        </div>
        <div class="upload">
          <input type="file" :multiple="false" @change="changeFile" />
          <div class="image" v-if="selectedImage?.url">
            <img :src="selectedImage.url" alt="Salom" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Options from '../components/options.vue';
import api from '../services/baseHttp.js';

const FORM = {
  description: '',
  photo: '',
  sid: '',
  ssid: ''
}
export default {
  data() {
    return {
      form: {...FORM},
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
      selectedImage:  {},
      changeFileEl: false,
      modal: false,
      activeClass: null,
      all: true
    }
  },
  watch: {
    modal(val) {
      console.log(val, 'modal');
      if(!val) {  
        this.form = {...FORM}
        this.selectedImage = {}
      }
    }
  },
  methods: {
    add() {
      this.modal = true
      api.get('subjects/all').then((response) => {
        this.fan = response.data
        this.form.sid = this.fan[0].id
      })
      // yo'nalish
      api.get('subjects/sub/all').then((responseEl) => {
        this.yonalish = responseEl.data
        this.form.ssid = this.yonalish[0].id
      })

      // let form = new FormData()
      // form.append('sid', this.selected1)
      // form.append('ssid', this.selected2)
      // form.append('description ', this.textareaValue)
      // form.append('photo ', this.file)

      // api.post('/subject', form)

      //date
      const dateObj = new Date()
      const currentDate =
        dateObj.getMonth() == 12
          ? dateObj.getMonth()
          : dateObj.getMonth() + 1 + '/' + dateObj.getDay() + '/' + dateObj.getFullYear()
      this.date = currentDate
    },
    // getFanData(e) {
    //   this.selected1 = e.target.value
    // },
    // getSubData(e) {
    //   this.selected2 = e.target.value
    // },
    changeFile(e) {
      // console.log(this.file);

      const files = e.target.files
      if (files.length === 0) return
      this.selectedImage = { name: files[0].name, url: URL.createObjectURL(files[0]) }
      this.file = e.target.files[0]
    },
    submit(e) {
      

      let form = new FormData()
      form.append('sid', this.form.sid)
      form.append('ssid', this.form.ssid)
      form.append('description ', this.form.description)
      form.append('photo ', this.file)
      // axios
      //   .post('http://192.168.1.3:8080/api/org/ss/create', form, {
      //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      //   })
      //   .then(() => {
      //     this.getAllByOrg()
      //     this.getSs()
      //   })
      //   .catch((error) => {
      //     console.log(error.response.data.message)
      //   })
      api
        .post('org/ss/create', form)
        .then(res => {
          this.getAllByOrg()
          this.getSs()
          this.modal = false
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
    },
    async getSs() {
      api.get('org/ss/org-subjects').then((response) => {
        this.ssOrgSubjects = response.data
        console.log(response);
      })
    },
    async getAllByOrg() {
      this.all = true
      this.activeClass = null
      api.get('org/ss/all-by-org').then((response) => {
        this.allByOrg = response.data
      })
    },
    async filterByOrders(id, index) {
        this.activeClass = index
        this.all = false
      api.get(`org/ss/ss-by-org?sid=${id}`).then((response) => {
        this.allByOrg = response.data
      })
    },
    async refreshAllOrders() {
      this.modal = false
      api.get(`org/ss/all-by-org`).then((response) => {
        this.allByOrg = response.data
      })
    }
  },
  components: {
    Options
  },
  async mounted() {
    this.getSs(), this.getAllByOrg(), this.refreshAllOrders()
  }
}
</script>
<style></style>