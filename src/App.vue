<template>
  <Navbar/>
  <div>
    <ScienceDirection/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
// import { RouterLink, RouterView } from 'vue-router'
import ScienceDirection from './views/ScienceDirection.vue'

export default{
  data() {
    return {
      
    }
  },
  components:{
    Navbar,
    ScienceDirection
  }
}
</script>

<style scoped></style>
