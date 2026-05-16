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
      </div>
      <div class="home-sidebar">
        <SideMenu :active-section="activeSection" @navigate="scrollToSection" />
      </div>
    </div>
    <footer class="home-footer">
      <span class="footer-prompt">$</span>
      <span class="footer-text">goutom@portfolio:~$ <span class="footer-blink">_</span></span>
      <span class="footer-year">2026</span>
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
import ContactSection from "../components/ContactSection.vue";
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
.home { padding-top: 48px; }

.home-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.home-main { flex: 1; min-width: 0; }

.home-sidebar {
  display: none;
}

.section-hr {
  border: none;
  border-top: 2px solid var(--border-light);
  margin: 0;
}

.home-footer {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--border-light);
  font-size: 0.82rem;
}

.footer-prompt {
  color: var(--accent-green);
  font-weight: 600;
}

.footer-text {
  color: var(--text-muted);
}

.footer-blink {
  color: var(--accent-green);
  animation: blink 1s step-end infinite;
}

.footer-year {
  color: var(--text-muted);
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

@media (min-width: 768px) {
  .home-inner {
    flex-direction: row;
    gap: 32px;
  }
  .home-sidebar {
    display: block;
    width: 220px;
    flex-shrink: 0;
    position: sticky;
    top: 64px;
    height: fit-content;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }
}
</style>
