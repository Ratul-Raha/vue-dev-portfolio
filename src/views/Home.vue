<template>
  <div class="home">
    <div class="home-inner">
      <div class="home-main">
        <section id="homeSection"><HeroSection /></section>
        <hr class="section-hr" />
        <section id="aboutSection"><AboutSection /></section>
        <hr class="section-hr" />
        <section id="servicesSection"><ServicesSection /></section>
        <hr class="section-hr" />
        <section id="experienceSection"><WorkExperience /></section>
        <hr class="section-hr" />
        <section id="projectsSection"><ProjectsSection /></section>
        <hr class="section-hr" />
        <section id="contactSection"><ContactSection /></section>
        <hr class="section-hr" />
        <footer class="footer">
          <p class="footer-text">
            crafted by Goutom Dash &mdash; 2023-2025
          </p>
        </footer>
      </div>
      <div class="home-sidebar">
        <SideMenu :active-section="activeSection" @navigate="scrollToSection" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ContactSection from "../components/ContactSection.vue";
import WorkExperience from "../components/WorkExperience.vue";
import SideMenu from "../components/SideMenu.vue";

const activeSection = ref("homeSection");

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function handleScroll() {
  const ids = ["homeSection","aboutSection","servicesSection","experienceSection","projectsSection","contactSection"];
  for (let i = ids.length - 1; i >= 0; i--) {
    const el = document.getElementById(ids[i]);
    if (el && el.getBoundingClientRect().top <= 100) {
      activeSection.value = ids[i];
      break;
    }
  }
}
onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.home { padding-top: 48px; }

.home-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.home-main { flex: 1; min-width: 0; }

.home-sidebar {
  background: var(--bg-alt);
  border-left: 2px solid var(--border);
  border-top: 2px solid var(--border);
  padding: 0;
}

.section-hr {
  border: none;
  border-top: 2px solid var(--border-light);
  margin: 0;
}

.footer {
  padding: 24px 20px;
  text-align: center;
}

.footer-text {
  font-size: 0.82rem;
  color: var(--text-muted);
}

@media (min-width: 768px) {
  .home-inner { flex-direction: row; }
  .home-sidebar {
    width: 220px;
    flex-shrink: 0;
    border-left: 2px solid var(--border);
    border-top: none;
    min-height: calc(100vh - 48px);
    position: sticky;
    top: 48px;
    height: calc(100vh - 48px);
  }
}
</style>
