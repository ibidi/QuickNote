<template>
  <div id="app">
    <NoteApp />
  </div>
</template>

<script>
import NoteApp from './components/NoteApp.vue'

export default {
  components: {
    NoteApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
