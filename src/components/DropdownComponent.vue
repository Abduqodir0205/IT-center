<template >
  <div>
    <div v-if="fa " class="left dropdown">
      <div @click="openOptions" class="dropdawon width flex justify-between">
        <h2>{{this.datas}}</h2>
        <div :class="{ rotate: rotation }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 10L12 14L8 10"
              stroke="#4D515A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div v-show="isActivei" class="dropdown_two_foot flex justify-between">
        <h2
          v-for="(country, i) in this.countries"
          :key="i"
          class="text flex  items-center"
          @click="isActiveTX(i)"
          :class="{ active: i === checked }"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 12.0001L8.94975 16.9499L19.5563 6.34326"
              stroke="#5D5FEF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{country.name}}</span>
          
        </h2>
      </div>
    </div>
    <div v-else class="right dropdown">
      <div @click="openOptions" class="dropdown_two flex justify-between">
        <h2>{{this.datas}}</h2>
        <div :class="{ rotate: rotation }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 10L12 14L8 10"
              stroke="#4D515A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>  
      </div>
      <div v-show="isActivei" class="dropdown_two_foot">
        <h2
          v-for="(country, i) in this.countries"
          :key="i"
          class="text flex justify-between items-center"
          @click="isActiveTX(i)"
          :class="{ active: i === checked }"
        >
          <span>{{country.name}}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 12.0001L8.94975 16.9499L19.5563 6.34326"
              stroke="#5D5FEF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      isActivei: false,
      rotation: false,
      checked: null,
      datas: 'Time',
      countries: [
        { name: "Spain" },
        { name: "France" },
        { name: "Ghana" },
        { name: "Nigeria" },
        { name: "Brazil" },
        { name: "Ecuador" }
      ]
    }
  },
  methods: {
    openOptions() {
      this.rotation = !this.rotation
      this.isActivei = !this.isActivei
    },
    isActiveTX(index) {
      this.checked = index
      this.datas = this.countries[index].name
      console.log(this.checked);
        if(this.checked === index){
            this.icon = !this.icon
        }
    }
  }
}
</script> 
<style lang="scss">
.right {
  .dropdown_two {
    width: 421px;
    padding: 12px 18px;
    border-radius: 9px;
    border: 1px solid #e2e8f0;
    background: #fff;
    box-shadow: 2px 2px 6px 0px rgba(191, 191, 191, 0.15);
    h2 {
      color: #4d515a;
      font-size: 18px;
      font-weight: 500;
    }
    .rotate {
      transform: rotate(180deg);
    }
  }
  .dropdown_two_foot {
    display: flex;
    flex-direction: column;
    width: 421px;
    gap: 14px;
    border-radius: 9px;
    border: 1px solid rgba(191, 191, 191, 0.25);
    margin-top: 4px;
    background: #fff;
    padding: 16px 18px 18px 18px;
    h2 {
      span {
        color: #4d515a;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
      }
      svg{
        display: none;
      }
      &.active {
        span {
          color: #5d5fef;
        }
        svg{
            display: block;
        }
      }
    }
  }
}
.left{
  .dropdawon{
    width: 214px;
    padding: 12px 18px;
    border-radius: 9px;
    border: 1px solid #e2e8f0;
    background: #fff;
    box-shadow: 2px 2px 6px 0px rgba(191, 191, 191, 0.15);
     h2 {
      color: #4d515a;
      font-size: 18px;
      font-weight: 500;
    }
    .rotate {
      transform: rotate(180deg);
    }
  }
  .dropdown_two_foot {
    display: flex;
    flex-direction: column;
    width: 214px;
    gap: 14px;
    border-radius: 9px;
    border: 1px solid rgba(191, 191, 191, 0.25);
    margin-top: 4px;
    background: #fff;
    padding: 16px 18px 18px 18px;
    h2 {
      span {
        color: #4d515a;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
      }
      svg{
        display: none;
      }
      &.active {
        span {
          color: #5d5fef;
          cursor: pointer;
        }
        svg{
            display: block;
        }
      }
    }
  }
}

</style>