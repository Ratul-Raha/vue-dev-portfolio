<template>
  <div class="home">
    <div class="home-inner">
      <div class="home-main">
        <section id="homeSection"><HeroSection /></section>
        <section id="aboutSection"><AboutSection /></section>
        <section id="servicesSection"><ServicesSection /></section>
        <section id="experienceSection"><WorkExperience /></section>
        <section id="projectsSection"><ProjectsSection /></section>
        <section id="githubSection"><GithubStats /></section>
        <section id="contactSection"><ContactSection /></section>
      </div>
      <div class="home-sidebar">
        <SideMenu :active-section="activeSection" @navigate="scrollToSection" />
      </div>
    </div>
    <footer class="home-footer">
      <span class="footer-text">&copy; {{ new Date().getFullYear() }} Goutom Dash. All rights reserved.</span>
      <span class="footer-build">Built with Vue.js &middot; Designed minimally.</span>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import WorkExperience from "../components/WorkExperience.vue";
import GithubStats from "../components/GithubStats.vue";
import ContactSection from "../components/ContactSection.vue";
import SideMenu from "../components/SideMenu.vue";

const activeSection = ref("homeSection");

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function handleScroll() {
  const ids = ["homeSection","aboutSection","servicesSection","experienceSection","projectsSection","githubSection","contactSection"];
  for (let i = ids.length - 1; i >= 0; i--) {
    const el = document.getElementById(ids[i]);
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = ids[i];
      break;
    }
  }
}
onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.home { 
  padding-top: 60px; /* Space for TopMenu */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.home-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
}

.home-main { 
  flex: 1; 
  min-width: 0; 
}

.home-sidebar {
  display: none;
}

.home-footer {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 4px solid var(--border);
  font-family: var(--font);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text);
  margin-top: 40px;
}

.footer-text {
  color: var(--text);
}

.footer-build {
  color: var(--text-muted);
}

@media (min-width: 900px) {
  .home-inner {
    flex-direction: row;
    gap: 48px;
  }
  .home-sidebar {
    display: block;
    width: 240px;
    flex-shrink: 0;
    position: sticky;
    top: 80px;
    height: fit-content;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }
}

@media (max-width: 600px) {
  .home-footer {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
