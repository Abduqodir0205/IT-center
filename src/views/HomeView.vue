<template>
  <div class="view">
    <SiteBar />
    <div>
      <Navbar />
      <TeacherFormView />
    </div>
   
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import ScienceDirection from './ScienceDirection.vue'
import SiteBar from '../components/sitebar.vue'
import TeacherFormView from './TeacherFormView.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    Navbar,
    ScienceDirection,
    SiteBar,
    TeacherFormView,
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
}

Navbar {
  grid-area: b;
}

ScienceDirection {
  grid-area: c;
}
</style>
