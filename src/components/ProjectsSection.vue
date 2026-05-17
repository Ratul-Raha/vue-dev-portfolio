<template>
  <section ref="sectionRef" class="projects-section reveal">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">Selected Projects</h2>
      </div>

      <div class="proj-grid reveal-stagger">
        <div v-for="p in projects" :key="p.title" class="proj-card">
          <div class="proj-img">
            <img v-if="p.image" :src="p.image" :alt="p.title" loading="lazy" />
          </div>
          <div class="proj-body">
            <div class="proj-head">
              <h3 class="proj-title">{{ p.title }}</h3>
              <span class="proj-year">{{ p.year }}</span>
            </div>
            <p class="proj-desc">{{ p.description }}</p>
            <div class="proj-techs">
              <span v-for="(ic, i) in p.icons" :key="i" class="proj-tech-icon">
                <img :src="ic" />
              </span>
            </div>
            <div class="proj-links">
              <a v-if="p.live" :href="p.live" target="_blank" class="proj-btn">Visit Site</a>
              <a v-if="p.github && p.github !== '#'" :href="p.github" target="_blank" class="proj-btn">Source Code</a>
            </div>
          </div>
        </div>
      </div>

      <div class="section-cta">
        <router-link to="/projects" class="cta-link">
          View All Projects &rarr;
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal"
import FluentCartImg from "../assets/images/projects/fluentcart.webp";
import CalypsoImg from "../assets/images/projects/calystapro.jpg";
import MarconiImg from "../assets/images/projects/marconi.png";
import ConsultaImg from "../assets/images/projects/consulta.jpg";
import EventickImg from "../assets/images/projects/eventick.png";
import GeoThreadImg from "../assets/images/projects/geothread.jpg";

const sectionRef = ref(null)
useScrollReveal(sectionRef, 80)

const icon = (name, color) => `https://cdn.simpleicons.org/${name}/${color}`;

const projects = [
  {
    title: "Fluent Cart", year: "2023-25",
    description: "High-impact WordPress eCommerce plugin.",
    image: FluentCartImg,
    icons: [icon("vuedotjs","4FC08D"), icon("laravel","FA5555"), icon("wordpress","21759B")],
    live: "https://fluentcart.com"
  },
  {
    title: "CalypsoPro EMR", year: "2022",
    description: "HIPAA-compliant healthcare system.",
    image: CalypsoImg,
    icons: [icon("php","777BB4"), icon("javascript","F7DF1E")],
    live: "https://www.calystaproemr.com/"
  },
  {
    title: "Marconi", year: "2025",
    description: "AI customer support agent for WhatsApp and Telegram.",
    image: MarconiImg,
    icons: [icon("python","3776AB"), icon("openai","412991"), icon("whatsapp","25D366"), icon("telegram","26A5E4")]
  },
  {
    title: "Consulta", year: "2025",
    description: "AI-powered CRM for student consultancy services.",
    image: ConsultaImg,
    icons: [icon("react","61DAFB"), icon("nodedotjs","339933"), icon("openai","412991")]
  },
  {
    title: "Eventick", year: "2025",
    description: "Paymentless event booking and RSVP platform.",
    image: EventickImg,
    icons: [icon("vuedotjs","4FC08D"), icon("nodedotjs","339933"), icon("tailwindcss","06B6D4")]
  },
  {
    title: "GeoThread", year: "2025",
    description: "On-demand print and framing service.",
    image: GeoThreadImg,
    icons: [icon("laravel","FA5555"), icon("vuedotjs","4FC08D"), icon("mysql","4479A1")]
  }
];
</script>

<style scoped>
.projects-section {
  padding: 60px 16px;
  border-top: 4px solid var(--border);
}

.section-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-header {
  border-bottom: 2px solid var(--border);
  padding-bottom: 12px;
}

.section-title {
  font-size: 2.5rem;
  letter-spacing: -1px;
}

.proj-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.proj-card {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--border);
  background: var(--bg-card);
  transition: transform 0.2s;
}

.proj-card:hover {
  transform: translateY(-4px);
}

.proj-img {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--bg-alt);
  border-bottom: 2px solid var(--border);
}

.proj-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.2);
  transition: filter 0.3s;
}

.proj-card:hover .proj-img img {
  filter: grayscale(0%);
}

.proj-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.proj-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
}

.proj-title {
  font-family: var(--font);
  font-size: 1.4rem;
  font-weight: 700;
}

.proj-year {
  font-family: var(--font);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
}

.proj-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 16px;
  flex: 1;
}

.proj-techs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.proj-tech-icon {
  width: 24px;
  height: 24px;
  display: flex;
}
.proj-tech-icon img { width: 100%; height: 100%; object-fit: contain; }

.proj-links {
  display: flex;
  gap: 12px;
}

.proj-btn {
  display: inline-block;
  padding: 8px 16px;
  border: 2px solid var(--border);
  font-family: var(--font);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  text-decoration: none !important;
  background: var(--bg);
  color: var(--text);
  transition: all 0.2s;
}

.proj-btn:hover {
  background: var(--text);
  color: var(--bg);
}

.section-cta {
  text-align: center;
  margin-top: 24px;
}

.cta-link {
  display: inline-block;
  padding: 12px 24px;
  background: var(--text);
  color: var(--bg);
  font-family: var(--font);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid var(--border);
  transition: all 0.2s;
}

.cta-link:hover {
  background: var(--bg);
  color: var(--text);
  text-decoration: none;
}

@media (min-width: 768px) {
  .projects-section {
    padding-left: 0;
    padding-right: 0;
  }
  .proj-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-section {
    padding: 40px 0;
  }
  .section-title {
    font-size: 1.8rem;
  }
  .proj-img {
    height: 140px;
  }
  .proj-body {
    padding: 16px;
  }
  .proj-title {
    font-size: 1.1rem;
  }
  .proj-year {
    font-size: 0.8rem;
  }
  .proj-desc {
    font-size: 0.9rem;
  }
  .proj-btn {
    padding: 6px 12px;
    font-size: 0.75rem;
  }
  .cta-link {
    padding: 10px 20px;
    font-size: 0.85rem;
  }
}
</style>
