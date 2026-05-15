<template>
  <section ref="sectionRef" class="gh-projects">
    <div class="proj-container">
      <div class="section-title-row">
        <span class="title-hash">#</span>
        <span class="title-text">projects</span>
        <div class="title-line"></div>
      </div>

      <p class="section-desc">Some things I've built</p>

      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <div class="card-topper">
            <svg class="card-icon" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9z"/>
            </svg>
            <span class="card-year">{{ project.year }}</span>
          </div>

          <h3 class="project-title">{{ project.title }}</h3>

          <p v-if="project.description" class="project-desc">{{ project.description }}</p>

          <img v-if="project.image" :src="project.image" :alt="project.title" class="project-thumb" loading="lazy" />

          <div class="project-techs">
            <span
              v-for="(icon, idx) in project.icons"
              :key="idx"
              class="tech-badge"
            >
              <img :src="icon" alt="" />
            </span>
          </div>

          <div class="project-links">
            <a v-if="project.live" :href="project.live" target="_blank" class="link-btn">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
                <path d="M8.636 12.036a.75.75 0 1 1-1.06-1.06l2.105-2.105-1.414-1.414-2.106 2.105a.75.75 0 0 1-1.06-1.06l2.106-2.106L8.22 3.757a.75.75 0 1 1 1.06-1.06l2.106 2.106L14.636 1.56a.75.75 0 0 1 1.06 1.06l-2.106 2.106 1.414 1.414 2.106-2.106a.75.75 0 0 1 1.06 1.06l-2.106 2.106a.75.75 0 0 1-1.06 0z"/>
              </svg>
              Live
            </a>
            <a v-if="project.github && project.github !== '#'" :href="project.github" target="_blank" class="link-btn">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.72.09.52.64 1.05 1.19 1.08.72.01 1.21.58 1.21.58 0 .57.01 1.21.01 1.49 0 .22-.17.47-.5.48-.31.01-.63-.24-.65-.48-.01-.53.47-.98 1.02-.98.92.01 1.84.62 1.84 1.52 0 .91-.51 1.51-1.24 1.51-.63 0-1.03-.42-1.21-.81-.17-.37-.48-.78-.87-.78-.35 0-.68.3-.73.69-.04.33.21.62.59.69.58.11 1.07.42 1.07 1.03 0 .82-.52 1.41-1.23 1.41-1.08 0-1.93-.81-1.93-1.93 0-.98.6-1.56 1.14-1.56.43 0 .81.18 1.07.49.03-.41.05-.83.05-1.23 0-1.52-.99-2.03-2.53-2.03-1.4 0-2.28.67-2.28 2.28 0 .91.48 1.52.87 1.52.31 0 .56-.22.56-.49 0-.25-.21-.47-.49-.49H2.59c-.27 0-.49.18-.49.49 0 .31.21.54.49.54.48.03.87.43.87 1.03 0 .82-.52 1.41-1.23 1.41-.84 0-1.51-.68-1.51-1.51 0-.49.23-.92.58-1.23-.06-.14-.26-.48-.58-.48z"/>
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>

      <div class="git-summary">
        <div class="git-line">
          <span class="git-icon">&#9733;</span>
          <span class="git-stat">15+ repositories</span>
        </div>
        <div class="git-line">
          <span class="git-icon">&#9632;</span>
          <span class="git-stat">1000+ contributions</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineExpose } from "vue";
import FluentCartImg from "../assets/images/projects/fluentcart.webp";
import CalypsoImg from "../assets/images/projects/calystapro.jpg";
import MarconiImg from "../assets/images/projects/marconi.png";
import ConsultaImg from "../assets/images/projects/consulta.jpg";
import EventickImg from "../assets/images/projects/eventick.png";
import GeoThreadImg from "../assets/images/projects/geothread.jpg";

const sectionRef = ref(null);
defineExpose({ sectionRef });

const icon = (name, color) => `https://cdn.simpleicons.org/${name}/${color}`;

const projects = [
  {
    title: "Fluent Cart",
    year: "2023-25",
    description: "High-impact WordPress eCommerce plugin",
    image: FluentCartImg,
    icons: [icon("vuedotjs", "4FC08D"), icon("laravel", "FA5555"), icon("wordpress", "21759B")],
    live: "https://fluentcart.com"
  },
  {
    title: "CalypsoPro EMR",
    year: "2022",
    description: "HIPAA-compliant healthcare system",
    image: CalypsoImg,
    icons: [icon("php", "777BB4"), icon("javascript", "F7DF1E")],
    live: "https://www.calystaproemr.com/"
  },
  {
    title: "Marconi",
    year: "2025",
    description: "AI customer support agent for WhatsApp and Telegram",
    image: MarconiImg,
    icons: [icon("python", "3776AB"), icon("openai", "412991"), icon("whatsapp", "25D366"), icon("telegram", "26A5E4")]
  },
  {
    title: "Consulta",
    year: "2025",
    description: "AI-powered CRM for student consultancy services",
    image: ConsultaImg,
    icons: [icon("react", "61DAFB"), icon("nodedotjs", "339933"), icon("openai", "412991")]
  },
  {
    title: "Eventick",
    year: "2025",
    description: "Paymentless event booking and RSVP platform",
    image: EventickImg,
    icons: [icon("vuedotjs", "4FC08D"), icon("nodedotjs", "339933"), icon("tailwindcss", "06B6D4")]
  },
  {
    title: "GeoThread",
    year: "2025",
    description: "On-demand print and framing service",
    image: GeoThreadImg,
    icons: [icon("laravel", "FA5555"), icon("vuedotjs", "4FC08D"), icon("mysql", "4479A1")]
  }
];
</script>

<style scoped>
.gh-projects {
  background: var(--gh-bg);
  padding: 64px 32px;
  border-top: 1px solid var(--gh-border-light);
}

.proj-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.title-hash {
  font-family: var(--gh-font-mono);
  font-size: 1.5rem;
  color: var(--gh-red);
}

.title-text {
  font-family: var(--gh-font-mono);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gh-text);
}

.title-line {
  flex: 1;
  height: 2px;
  background: var(--gh-border-light);
  margin-left: 16px;
}

.section-desc {
  font-size: 1rem;
  color: var(--gh-text-muted);
  margin-bottom: 32px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.project-card {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
  padding: 16px;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--gh-border);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card-topper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.card-icon {
  color: var(--gh-text-muted);
}

.card-year {
  font-family: var(--gh-font-mono);
  font-size: 0.75rem;
  color: var(--gh-text-muted);
  background: var(--gh-bg-tertiary);
  padding: 2px 8px;
  border-radius: 10px;
}

.project-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gh-text);
  margin-bottom: 6px;
}

.project-desc {
  font-size: 0.8rem;
  color: var(--gh-text-muted);
  margin-bottom: 12px;
  flex: 1;
}

.project-thumb {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
  background: var(--gh-bg);
}

.project-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.tech-badge {
  width: 20px;
  height: 20px;
  padding: 3px;
  background: var(--gh-bg);
  border-radius: 4px;
  display: flex;
}

.tech-badge img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-links {
  display: flex;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--gh-border-light);
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--gh-font-mono);
  font-size: 0.8rem;
  color: var(--gh-link);
  text-decoration: none;
  transition: color 0.15s ease;
}

.link-btn:hover {
  color: var(--gh-link-hover);
}

.git-summary {
  display: flex;
  gap: 32px;
  padding: 16px;
  background: #24292e;
  border-radius: 6px;
  max-width: fit-content;
}

.git-line {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  color: #8b949e;
}

.git-icon {
  color: #58a6ff;
}

.git-stat {
  color: #c9d1d9;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gh-projects {
    padding: 48px 16px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .git-summary {
    flex-direction: column;
    gap: 12px;
  }
}
</style>