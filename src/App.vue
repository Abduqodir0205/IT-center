<template>
  <div class="view">
    <SiteBar/>
    <div>
      <Navbar/>
    <!-- <ScienceDirection/> -->
    <UserView/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import SiteBar from './components/sitebar.vue'
import UserView from './views/UserView.vue'
// import { RouterLink, RouterView } from 'vue-router'
import ScienceDirection from './views/ScienceDirection.vue'

export default{
  data() {
    return {
      
    }
  },
  components:{
    Navbar,
    ScienceDirection,
    SiteBar,
    UserView
  }
}
</script>

<style scoped>
.view{
  display: grid;
  grid-template-areas: 
  'a b b b'
  'a b b b'
  'a b b b'
  'a b b b';
}
SiteBar{
  grid-area: a;
}
Navbar{
  grid-area: b;
}
ScienceDirection{
  grid-area: c;
}

</style>
