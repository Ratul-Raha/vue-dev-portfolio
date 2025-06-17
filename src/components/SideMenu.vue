<template>
  <div class="menu-container">
    <!-- Desktop Menu -->
    <el-menu
      v-if="!isMobile"
      :default-active="active"
      @select="handleSelect"
      class="menu-items"
      mode="vertical"
      background-color="transparent"
      text-color="#d1d5db"
      active-text-color="#60a5fa"
    >
      <el-menu-item index="homeSection">HOME</el-menu-item>
      <el-menu-item index="aboutSection">ABOUT ME</el-menu-item>
      <el-menu-item index="servicesSection">TECHNOLOGIA</el-menu-item>
      <el-menu-item index="experienceSection">WORK EXPERIENCE</el-menu-item>
      <el-menu-item index="projectsSection">MY PROJECTS</el-menu-item>
    </el-menu>

    <!-- Mobile Dropdown -->
    <div v-else class="mobile-dropdown">
      <el-dropdown trigger="click" @command="handleSelect">
        <el-button class="dropdown-button" plain>
          ☰ MENU
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu class="dropdown-menu">
            <el-dropdown-item command="homeSection">HOME</el-dropdown-item>
            <el-dropdown-item command="aboutSection">ABOUT ME</el-dropdown-item>
            <el-dropdown-item command="servicesSection">TECHNOLOGIA</el-dropdown-item>
            <el-dropdown-item command="experienceSection">WORK EXPERIENCE</el-dropdown-item>
            <el-dropdown-item command="projectsSection">MY PROJECTS</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  activeSection: String,
});
const emit = defineEmits(["navigate"]);

const active = ref("homeSection");
const isMobile = ref(false);

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

watch(
  () => props.activeSection,
  (val) => {
    active.value = val;
  }
);

function handleSelect(index) {
  active.value = index;
  emit("navigate", index);
}
</script>

<style scoped>
.menu-container {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #1e1e1e;
  padding: 0 8px;
  margin: 0;
  min-width: 300px;
  user-select: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

/* Mobile Dropdown Styles */
.mobile-dropdown {
  position: fixed;
  top: 12px;
  left: 12px; /* Or change to right: 12px for right-side */
  z-index: 9999;
  background: transparent;
}

.dropdown-button {
  background: #1e1e1e;
  color: #d1d5db;
  border: 1px solid #333;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 6px;
  letter-spacing: 0.05em;
  transition: background 0.3s ease, color 0.3s ease;
}

.dropdown-button:hover {
  background: #2b2b2b;
  color: #60a5fa;
  border-color: #60a5fa;
}

.dropdown-menu {
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 4px 0;
}

.dropdown-menu ::v-deep(.el-dropdown-menu__item) {
  color: #d1d5db;
  font-weight: 500;
  padding: 10px 16px;
}

.dropdown-menu ::v-deep(.el-dropdown-menu__item:hover) {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
}

/* Hide desktop menu on mobile */
@media (max-width: 767px) {
  .menu-items {
    display: none;
  }
}
</style>
