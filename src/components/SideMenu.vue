<template>
  <div class="menu-container">
    <el-menu
      :default-active="active"
      @select="handleSelect"
      class="menu-items"
      background-color="transparent"
      text-color="#d1d5db"
      active-text-color="#60a5fa"
      mode="vertical"
    >
      <el-menu-item index="homeSection">HOME</el-menu-item>
      <el-menu-item index="aboutSection">ABOUT ME</el-menu-item>
      <el-menu-item index="servicesSection">MY SERVICES</el-menu-item>
      <el-menu-item index="projectsSection">MY PROJECTS</el-menu-item>
       <el-menu-item index="projectsSection">WORK EXPERIENCE</el-menu-item>
      <el-menu-item index="contactSection">CONTACT ME</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['navigate'])
const active = ref('homeSection') // HOME will be active initially

function handleSelect(index) {
  active.value = index
  emit('navigate', index)
}

// Optional: If you want to allow parent to control active tab, accept a prop and watch it
</script>

<style scoped>
.menu-container {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1e1e1e; /* Consistent dark background */
  padding: 0 8px;
  margin: 0;
  min-width: 300px;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-y: auto;
}

.menu-items ::v-deep(.el-menu-item) {
  position: relative;
  transition: color 0.3s ease, background-color 0.3s ease;
  overflow: hidden;
  color: #d1d5db;
  background: transparent;
  padding: 14px 18px;
  cursor: pointer;
  font-weight: 600;
  user-select: none;
  letter-spacing: 0.05em;
  border-left: 1px solid var(--el-menu-border-color);
}

.el-menu {
  border-right: none !important;
}


.menu-items ::v-deep(.el-menu-item.is-active) {
  color: #60a5fa !important;
  background: rgba(96, 165, 250, 0.15);
}

.menu-items ::v-deep(.el-menu-item:hover) {
  color: #60a5fa !important;
  background: rgba(96, 165, 250, 0.15);
}

.menu-items ::v-deep(.el-menu-item:hover)::before {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(96, 165, 250, 0.15);
  animation: slideFadeIn 0.4s forwards;
  z-index: 0;
}

@keyframes slideFadeIn {
  to {
    left: 0;
  }
}
</style>
