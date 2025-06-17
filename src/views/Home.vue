<template>
  <el-row :gutter="0" class="min-h-screen">
    <el-col :span="18" class="bg-white">
      <section id="homeSection"><HeroSection /></section>
      <section id="aboutSection"><AboutSection /></section>
      <section id="servicesSection"><ServicesSection /></section>
      <section id="experienceSection"><WorkExperience /></section>
      <section id="projectsSection"><ProjectsSection /></section>
    </el-col>
    <el-col :span="6" class="menu-col">
      <SideMenu
        :active-section="activeSection"
        @navigate="scrollToSection"
      />
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import WorkExperience from "../components/WorkExperience.vue";
import SideMenu from "../components/SideMenu.vue";

const activeSection = ref("homeSection");

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function handleScroll() {
  const sectionIds = [
    "homeSection",
    "aboutSection",
    "servicesSection",
    "experienceSection",
    "projectsSection",
  ];
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i]);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120) {
        activeSection.value = sectionIds[i];
        break;
      }
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.menu-col {
  position: sticky;
  top: 0;
  height: 100vh;
  background: #1e1e1e;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  overflow: hidden;
}
@media (max-width: 900px) {
  .el-col.menu-col {
    order: -1;
  }
  .el-row {
    flex-direction: column !important;
    min-height: unset;
  }
  .el-col {
    width: 100% !important;
    max-width: 100% !important;
    flex: 1 1 100%;
  }
  .menu-col {
    position: static;
    height: auto;
    min-height: 60px;
    padding: 0;
    justify-content: flex-start;
    background: #1e1e1e;
    width: 100%;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  }
}
@media (max-width: 600px) {
  .el-row {
    padding: 0 !important;
  }
  section {
    padding: 12px 0 !important;
  }
}
</style>
