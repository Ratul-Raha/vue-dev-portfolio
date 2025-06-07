<template>
  <TopMenu />
  <router-view />
</template>

<script setup>
import TopMenu from './components/TopMenu.vue'
</script>

<style>
main {
  max-width: 600px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
  text-align: center;
}
h1 {
  color: #42b983;
}
</style>


