<template>
  <el-row :gutter="0" class="min-h-screen">
    <el-col :span="18" class="bg-white">
      <section id="homeSection">
        <HeroSection ref="homeSection" @navigate="scrollToSection" />
      </section>
      <section id="aboutSection">
        <AboutSection ref="aboutSection" />
      </section>
      <section id="servicesSection">
        <ServicesSection ref="servicesSection" />
      </section>
      <section id="experienceSection">
        <WorkExperience ref="experienceSection" />
      </section>
      <section id="projectsSection">
        <ProjectsSection ref="projectsSection" />
      </section>
      <section id="contactSection">
        <ContactSection ref="contactSection" />
      </section>
    </el-col>
    <el-col :span="6" class="menu-col">
      <SideMenu @navigate="scrollToSection" />
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ContactSection from "../components/ContactSection.vue";
import WorkExperience from "../components/WorkExperience.vue";
import SideMenu from "../components/SideMenu.vue";


const homeSection = ref(null);
const aboutSection = ref(null);
const servicesSection = ref(null);
const projectsSection = ref(null);
const contactSection = ref(null);

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
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
</style>
