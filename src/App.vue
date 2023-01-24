<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  methods: {
    
  },
  components: {
    NavBar,
  }
}
</script>

<template>
  <div id="app">
    <NavBar />
    <RouterView />
  </div>
</template>