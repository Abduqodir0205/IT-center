<template>
  <div class="view">
    <SiteBar />
    <div>
      <Navbar />
      <ScienceDirection />
    </div>
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import ScienceDirection from './ScienceDirection.vue'
import SiteBar from '../components/sitebar.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    Navbar,
    ScienceDirection,
    SiteBar,
  }
}
</script>
<style>
.view {
  display: grid;
  grid-template-areas:
    'a b b b'
    'a c c c'
    'a c c c'
    'a c c c';
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
