<template>
  <div class="view">
    <SiteBar />
    <Navbar />
    <div class="ccc">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import SiteBar from '../components/sitebar.vue'
export default {
  data() {
    return {}
  },
  components: {
    Navbar,
    SiteBar
  },
  methods: {}
}
</script>
<style lang="scss">
.view {
  display: grid;
  gap: 0;
  grid-template-rows: auto 1fr auto; 
  grid-template-columns: repeat(6, 1fr);
  min-height: 100vh;
  grid-template-areas:
    'sidebar nav nav nav nav nav'
    'sidebar main main main main main'
    'sidebar main main main main main';
  .sss {
    grid-area: sidebar;
    min-height: 100vh;

  }
  .nnn {
    grid-area: nav;
  }
  .ccc {
    grid-area: main;
  }
}
</style>
