<template>
  <nav class="top-menu">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>
  </nav>
</template>

<style scoped>
.top-menu {
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  gap: 20px;
}
a.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
}
</style>