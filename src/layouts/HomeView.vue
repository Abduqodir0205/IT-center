<template>
  <div class="view">
    <SiteBar />
    <div>
      <Navbar />
      <router-view />
    </div>
   
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import SiteBar from '../components/sitebar.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    Navbar,
    SiteBar,
  },
  methods: {
  },
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

SiteBar {
  grid-area: a;
  height: 1000px;
  overflow-y: scroll;
}

Navbar {
  grid-area: b;
}

ScienceDirection {
  grid-area: c;
}
</style>
