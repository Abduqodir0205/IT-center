<template>
  <div class="table">
    <div class="table__top flex justify-between items-center px-6 py-7">
      <p @click="getCategories()">Barchasi</p>
      <p>Ja’mi 22 ta</p>
    </div>
    <div style="width:100%; height:700px; overflow:auto;">
      <table cellspacing="0" cellpadding="1" border="1" width="300" >
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>FIO</th>
          <th>Address</th>
          <th>Tug’ilgan sanasi</th>
          <th class="text-center">Passport</th>
          <th>Telefon</th>
          <th>RASMI</th>
          <th>KOPROQ</th>
        </tr>
      </thead>
      <tbody style="height: 100px">
        <tr v-for="(item, i) in this.filter" :key="i">
          <td>
            <input type="checkbox" />
          </td>
          <td>Tursunali Xorunaliyev {{i}}</td>
          <td>Quva t, “Rasta” MFY Bunyodkor 43</td>
          <td>08.07.1998</td>
          <td>AA 1234567</td>
          <td>+998 (99) 123-45-67</td>
          <td>
            <img :src="`https://picsum.photos/36/36?random=${i}`" alt="" />
          </td>
          <td>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M9.91891 4.19999C10.0637 3.79038 10.332 3.43577 10.6868 3.18503C11.0416 2.93429 11.4655 2.79976 11.8999 2.79999H16.0999C16.5344 2.79976 16.9582 2.93429 17.313 3.18503C17.6678 3.43577 17.9361 3.79038 18.0809 4.19999H20.2999C20.8569 4.19999 21.391 4.42124 21.7848 4.81506C22.1787 5.20889 22.3999 5.74303 22.3999 6.29999V20.9776C21.7989 21.2766 21.3086 21.7591 20.9999 22.3552V6.29999C20.9999 6.11434 20.9262 5.93629 20.7949 5.80501C20.6636 5.67374 20.4856 5.59999 20.2999 5.59999H18.0809C17.9361 6.0096 17.6678 6.36421 17.313 6.61495C16.9582 6.86569 16.5344 7.00022 16.0999 6.99999H11.8999C11.4655 7.00022 11.0416 6.86569 10.6868 6.61495C10.332 6.36421 10.0637 6.0096 9.91891 5.59999H7.69991C7.51426 5.59999 7.33622 5.67374 7.20494 5.80501C7.07366 5.93629 6.99991 6.11434 6.99991 6.29999V23.1C6.99991 23.2856 7.07366 23.4637 7.20494 23.595C7.33622 23.7262 7.51426 23.8 7.69991 23.8H9.44991C9.44991 24.304 9.56751 24.7786 9.77751 25.2H7.69991C7.14296 25.2 6.60882 24.9787 6.21499 24.5849C5.82116 24.1911 5.59991 23.6569 5.59991 23.1V6.29999C5.59991 5.74303 5.82116 5.20889 6.21499 4.81506C6.60882 4.42124 7.14296 4.19999 7.69991 4.19999H9.91891ZM11.8999 4.19999C11.7143 4.19999 11.5362 4.27374 11.4049 4.40501C11.2737 4.53629 11.1999 4.71434 11.1999 4.89999C11.1999 5.08564 11.2737 5.26369 11.4049 5.39496C11.5362 5.52624 11.7143 5.59999 11.8999 5.59999H16.0999C16.2856 5.59999 16.4636 5.52624 16.5949 5.39496C16.7262 5.26369 16.7999 5.08564 16.7999 4.89999C16.7999 4.71434 16.7262 4.53629 16.5949 4.40501C16.4636 4.27374 16.2856 4.19999 16.0999 4.19999H11.8999ZM14.3499 23.8C14.3499 24.2641 14.1655 24.7092 13.8374 25.0374C13.5092 25.3656 13.064 25.55 12.5999 25.55C12.1358 25.55 11.6907 25.3656 11.3625 25.0374C11.0343 24.7092 10.8499 24.2641 10.8499 23.8C10.8499 23.3359 11.0343 22.8907 11.3625 22.5625C11.6907 22.2344 12.1358 22.05 12.5999 22.05C13.064 22.05 13.5092 22.2344 13.8374 22.5625C14.1655 22.8907 14.3499 23.3359 14.3499 23.8ZM18.1999 25.55C18.664 25.55 19.1092 25.3656 19.4374 25.0374C19.7655 24.7092 19.9499 24.2641 19.9499 23.8C19.9499 23.3359 19.7655 22.8907 19.4374 22.5625C19.1092 22.2344 18.664 22.05 18.1999 22.05C17.7358 22.05 17.2907 22.2344 16.9625 22.5625C16.6343 22.8907 16.4499 23.3359 16.4499 23.8C16.4499 24.2641 16.6343 24.7092 16.9625 25.0374C17.2907 25.3656 17.7358 25.55 18.1999 25.55ZM23.7999 25.55C24.264 25.55 24.7092 25.3656 25.0374 25.0374C25.3655 24.7092 25.5499 24.2641 25.5499 23.8C25.5499 23.3359 25.3655 22.8907 25.0374 22.5625C24.7092 22.2344 24.264 22.05 23.7999 22.05C23.3358 22.05 22.8907 22.2344 22.5625 22.5625C22.2343 22.8907 22.0499 23.3359 22.0499 23.8C22.0499 24.2641 22.2343 24.7092 22.5625 25.0374C22.8907 25.3656 23.3358 25.55 23.7999 25.55Z"
                  fill="#7364FF"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="table__bottom flex justify-end py-5 px-6 gap-9 items-center">
      <p>Sahifasiga ma’lumotlar soni: 10</p>
      <p>1-10 87 ta dan</p>
      <div class="flex gap-3">
        <button class="left flex items-center gap-1" :class="{ disabled: true }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M19.9959 12.9988L5.99585 12.9988"
              stroke="#B4BFCD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9958 18.9988L5.99585 12.9988L11.9959 6.99878"
              stroke="#B4BFCD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Oldingisi</span>
        </button>
        <button
        @click="next" 
        class="right flex items-center gap-1">
          <span>Keyingisi</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M5.9978 12.9988H19.9978"
              stroke="#5D5FEF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.9978 6.99878L19.9978 12.9988L13.9978 18.9988"
              stroke="#5D5FEF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/baseHttp.js'

export default {
  data() {
    return {
      categories: '',
      filter: 15,
    }
  },
  methods: {
    async getCategories() {
      api.get('physical-stuff/categories').then((response) => {
        console.log(response)
        this.categories = response.data
      })
    }
  },
  computed: {
    next(){
      this.filter +=10;
      console.log(1);
    }
  },
  async mounted() {
    this.getCategories()
  }
}
</script>


<style lang="scss" scoped>
.table {
  width: 100%;
  &__top {
    border-radius: 12px 12px 0 0;
    background: #fff;
    p {
      color: #1e293b;
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
    }
  }
  &__bottom {
    background: #f8fafc;
    border-radius: 0 0 12px 12px;
    p {
      color: #64748b;
      font-size: 18px;
      font-weight: 500;
    }
    .left {
      padding: 14px 18px 14px 12px;
    }
    .right {
      padding: 14px 12px 14px 18px;
    }
    button {
      border-radius: 9px;
      border: 1px solid #e2e8f0;
      background: #fff;
      color: #5d5fef;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      &.disabled {
        border-radius: 9px;
        border: 1px solid #e2e8f0;
        background: #f1f2f4;
        color: #b4bfcd;
      }
    }
  }
  table {
    width: 100%;
    thead {
      background: #f8fafc;
    }
    tbody {
      height: 200px;
      tr {
        background: #fff;
        border-top: 1px solid #e2e8f0;
        border-bottom: 1px solid #e2e8f0;
      }
    }
    td,
    th {
      padding: 14px 24px;
      text-align: center;
    }
    input {
      &[type='checkbox'] {
        position: relative;
        cursor: pointer;
      }
      &[type='checkbox']:before {
        content: '';
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #E0E7FF;
        border-radius: 3px;
        background-color: white;
      }
      &[type='checkbox']:checked:after {
        content: '';
        display: block;
        width: 6px;
        height: 12px;
        border: solid #10B981;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: -1px;
        left: 4px;
      }
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin: 0 auto;
    }
  }
}
</style>