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
        <button class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 11.9991H18"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 17.9991L12 5.99908"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ><span>Yangi hodim</span>
        </button>
      </div>
    </div>
    <div class="employees__menu mb-11 flex justify-between items-start">
      <ul class="employees__tab">
        <li class="active">Barchasi <span>22</span></li>
        <li v-for="item in 3" :key="item">O’qituvchilar <span>15</span></li>
      </ul>
      <div class="flex items-center gap-4">
        <div class="select flex items-center justify-between">
          <div class="flex gap-1.5">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M8.00305 2.99768V5.99768"
              stroke="#64748B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.0031 2.99768V5.99768"
              stroke="#64748B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.50305 10.0877H20.5031"
              stroke="#64748B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.0031 9.49768V17.9977C21.0031 20.9977 19.5031 22.9977 16.0031 22.9977H8.00305C4.50305 22.9977 3.00305 20.9977 3.00305 17.9977V9.49768C3.00305 6.49768 4.50305 4.49768 8.00305 4.49768H16.0031C19.5031 4.49768 21.0031 6.49768 21.0031 9.49768Z"
              stroke="#64748B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6978 14.6977H15.7067"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6978 17.6977H15.7067"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9985 14.6977H12.0075"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9985 17.6977H12.0075"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29736 14.6977H8.30635"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29736 17.6977H8.30635"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <!-- <span>Last 7 Days</span> -->
          <select name="" id="">
            <option value="">Last 7 Days</option>
            <option value="">Last 1 Month</option>
          </select>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M16.0031 10.9977L12.0031 14.9977L8.00305 10.9977"
              stroke="#64748B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <button class="filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <mask id="path-1-inside-1_624_2909" fill="white">
              <path
                d="M5.49768 10.2477H20.4977V11.7477H5.49768V10.2477ZM8.87268 14.9977H17.1227V16.4977H8.87268V14.9977ZM11.1227 19.7477H14.8727V21.2477H11.1227V19.7477ZM3.24768 5.49768H22.7477V6.99768H3.24768V5.49768Z"
              />
            </mask>
            <path
              d="M5.49768 10.2477H20.4977V11.7477H5.49768V10.2477ZM8.87268 14.9977H17.1227V16.4977H8.87268V14.9977ZM11.1227 19.7477H14.8727V21.2477H11.1227V19.7477ZM3.24768 5.49768H22.7477V6.99768H3.24768V5.49768Z"
              fill="#E4A951"
            />
            <path
              d="M5.49768 10.2477V8.24766H3.49768V10.2477H5.49768ZM20.4977 10.2477H22.4977V8.24766H20.4977V10.2477ZM20.4977 11.7477V13.7477H22.4977V11.7477H20.4977ZM5.49768 11.7477H3.49768V13.7477H5.49768V11.7477ZM8.87268 14.9977V12.9977H6.87268V14.9977H8.87268ZM17.1227 14.9977H19.1227V12.9977H17.1227V14.9977ZM17.1227 16.4977V18.4977H19.1227V16.4977H17.1227ZM8.87268 16.4977H6.87268V18.4977H8.87268V16.4977ZM11.1227 19.7477V17.7477H9.12268V19.7477H11.1227ZM14.8727 19.7477H16.8727V17.7477H14.8727V19.7477ZM14.8727 21.2477V23.2477H16.8727V21.2477H14.8727ZM11.1227 21.2477H9.12268V23.2477H11.1227V21.2477ZM3.24768 5.49768V3.49768H1.24768V5.49768H3.24768ZM22.7477 5.49768H24.7477V3.49768H22.7477V5.49768ZM22.7477 6.99768V8.99768H24.7477V6.99768H22.7477ZM3.24768 6.99768H1.24768V8.99768H3.24768V6.99768ZM5.49768 12.2477H20.4977V8.24766H5.49768V12.2477ZM18.4977 10.2477V11.7477H22.4977V10.2477H18.4977ZM20.4977 9.74766H5.49768V13.7477H20.4977V9.74766ZM7.49768 11.7477V10.2477H3.49768V11.7477H7.49768ZM8.87268 16.9977H17.1227V12.9977H8.87268V16.9977ZM15.1227 14.9977V16.4977H19.1227V14.9977H15.1227ZM17.1227 14.4977H8.87268V18.4977H17.1227V14.4977ZM10.8727 16.4977V14.9977H6.87268V16.4977H10.8727ZM11.1227 21.7477H14.8727V17.7477H11.1227V21.7477ZM12.8727 19.7477V21.2477H16.8727V19.7477H12.8727ZM14.8727 19.2477H11.1227V23.2477H14.8727V19.2477ZM13.1227 21.2477V19.7477H9.12268V21.2477H13.1227ZM3.24768 7.49768H22.7477V3.49768H3.24768V7.49768ZM20.7477 5.49768V6.99768H24.7477V5.49768H20.7477ZM22.7477 4.99768H3.24768V8.99768H22.7477V4.99768ZM5.24768 6.99768V5.49768H1.24768V6.99768H5.24768Z"
              fill="#64748B"
              mask="url(#path-1-inside-1_624_2909)"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="employees__table">
        <div class="employees__table-top">
            <p>Barchasi</p>
            <p>Ja’mi 22 ta</p>
        </div>
        <div class="employees__table-bottom">
            <p>Sahifasiga ma’lumotlar soni: 10</p>
            <p>1-10  87 ta dan</p>
            <button></button>
            <button></button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import baseButton from '../components/baseButton.vue';
</script>

<style lang="scss" scoped>
</style>