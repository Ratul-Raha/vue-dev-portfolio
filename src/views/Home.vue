<template>
  <div class="gh-home">
    <el-row :gutter="0" class="min-h-screen">
      <el-col :span="19" class="main-content">
        <section id="homeSection"><HeroSection /></section>
        <section id="aboutSection"><AboutSection /></section>
        <section id="servicesSection"><ServicesSection /></section>
        <section id="experienceSection"><WorkExperience /></section>
        <section id="projectsSection"><ProjectsSection /></section>
        <footer class="gh-footer">
          <div class="footer-content">
            <div class="footer-line"></div>
            <p class="footer-text">
              <span class="terminal-prompt">$</span> made with
              <span class="heart">&#x2665;</span> and lots of
              <span class="code-accent">&lt;/&gt;</span>
            </p>
            <p class="footer-year">2023-2025 // MIT License</p>
          </div>
        </footer>
      </el-col>
      <el-col :span="5" class="sidebar-col">
        <SideMenu
          :active-section="activeSection"
          @navigate="scrollToSection"
        />
      </el-col>
    </el-row>
  </div>
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
      if (rect.top <= 150) {
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
.gh-home {
  position: relative;
  z-index: 1;
}

.min-h-screen {
  min-height: 100vh;
}

.main-content {
  background: var(--gh-bg);
  min-height: 100vh;
}

.sidebar-col {
  position: sticky;
  top: 0;
  height: 100vh;
  background: var(--gh-bg-tertiary);
  border-left: 1px solid var(--gh-border-light);
  z-index: 10;
  display: flex;
  align-items: flex-start;
  padding-top: 80px;
}

.gh-footer {
  background: var(--gh-bg);
  padding: 48px 24px;
  border-top: 1px solid var(--gh-border-light);
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.footer-line {
  width: 60px;
  height: 3px;
  background: var(--gh-green);
  margin: 0 auto 20px;
  border-radius: 2px;
}

.footer-text {
  font-family: var(--gh-font-mono);
  font-size: 0.95rem;
  color: var(--gh-text-secondary);
  margin-bottom: 8px;
}

.terminal-prompt {
  color: var(--gh-green);
  margin-right: 8px;
}

.heart {
  color: var(--gh-red);
  animation: pulse 1s ease infinite;
}

.code-accent {
  color: var(--gh-purple);
  font-family: var(--gh-font-mono);
}

.footer-year {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text-muted);
}

@media (max-width: 900px) {
  .el-row {
    flex-direction: column !important;
  }

  .el-col {
    width: 100% !important;
    max-width: 100% !important;
    flex: 1 1 100%;
  }

  .sidebar-col {
    position: static;
    height: auto;
    border-left: none;
    border-top: 1px solid var(--gh-border-light);
    padding: 12px 16px;
  }
}
</style>