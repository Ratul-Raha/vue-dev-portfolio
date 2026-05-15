<template>
  <section ref="sectionRef" class="projects-section reveal">
    <div class="section-inner">
      <h2 class="section-title"><span class="title-hash">#</span> projects</h2>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">ls</span> ~/projects/</div>

      <div class="proj-grid reveal-stagger">
        <div v-for="p in projects" :key="p.title" class="proj-card">
          <div class="proj-img">
            <img v-if="p.image" :src="p.image" :alt="p.title" loading="lazy" />
          </div>
          <div class="proj-body">
            <div class="proj-head">
              <h3 class="proj-title">{{ p.title }}</h3>
              <span class="proj-year">({{ p.year }})</span>
            </div>
            <p class="proj-desc">{{ p.description }}</p>
            <div class="proj-icons">
              <span v-for="(ic, i) in p.icons" :key="i" class="proj-icon">
                <img :src="ic" />
              </span>
            </div>
            <div class="proj-links">
              <a v-if="p.live" :href="p.live" target="_blank">[live]</a>
              <a v-if="p.github && p.github !== '#'" :href="p.github" target="_blank">[code]</a>
            </div>
          </div>
        </div>
      </div>

      <div class="section-cta">
        <router-link to="/projects">[ View all projects &rarr; ]</router-link>
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
    description: "High-impact WordPress eCommerce plugin",
    image: FluentCartImg,
    icons: [icon("vuedotjs","4FC08D"), icon("laravel","FA5555"), icon("wordpress","21759B")],
    live: "https://fluentcart.com"
  },
  {
    title: "CalypsoPro EMR", year: "2022",
    description: "HIPAA-compliant healthcare system",
    image: CalypsoImg,
    icons: [icon("php","777BB4"), icon("javascript","F7DF1E")],
    live: "https://www.calystaproemr.com/"
  },
  {
    title: "Marconi", year: "2025",
    description: "AI customer support agent for WhatsApp and Telegram",
    image: MarconiImg,
    icons: [icon("python","3776AB"), icon("openai","412991"), icon("whatsapp","25D366"), icon("telegram","26A5E4")]
  },
  {
    title: "Consulta", year: "2025",
    description: "AI-powered CRM for student consultancy services",
    image: ConsultaImg,
    icons: [icon("react","61DAFB"), icon("nodedotjs","339933"), icon("openai","412991")]
  },
  {
    title: "Eventick", year: "2025",
    description: "Paymentless event booking and RSVP platform",
    image: EventickImg,
    icons: [icon("vuedotjs","4FC08D"), icon("nodedotjs","339933"), icon("tailwindcss","06B6D4")]
  },
  {
    title: "GeoThread", year: "2025",
    description: "On-demand print and framing service",
    image: GeoThreadImg,
    icons: [icon("laravel","FA5555"), icon("vuedotjs","4FC08D"), icon("mysql","4479A1")]
  }
];
</script>

<style scoped>
.projects-section { padding: 40px 20px; background: var(--bg-alt); }

.section-inner { max-width: 700px; }

.term-line {
  font-size: 0.88rem;
  margin-bottom: 10px;
  color: var(--text-secondary);
}

.prompt { color: var(--accent-green); font-weight: 600; }
.cmd { color: var(--accent-blue); }

.section-title {
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.title-hash { color: var(--accent-green); }

.proj-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 20px; }

.proj-card {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--border-light);
}

.proj-img {
  width: 100%;
  height: 140px;
  overflow: hidden;
  background: var(--bg);
  border-bottom: 2px solid var(--border-light);
}
.proj-img img { width: 100%; height: 100%; object-fit: cover; }

.proj-body { padding: 12px; display: flex; flex-direction: column; flex: 1; }

.proj-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}

.proj-title { font-size: 0.92rem; font-weight: 700; }

.proj-year { font-size: 0.78rem; color: var(--text-muted); }

.proj-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 8px;
  flex: 1;
}

.proj-icons {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.proj-icon {
  width: 18px;
  height: 18px;
  display: flex;
}
.proj-icon img { width: 100%; height: 100%; object-fit: contain; }

.proj-links {
  display: flex;
  gap: 12px;
  padding-top: 6px;
  border-top: 1px solid var(--border-light);
}

.proj-links a {
  font-size: 0.82rem;
  text-decoration: underline;
}

.section-cta { text-align: center; }
.section-cta a { font-size: 0.9rem; }

@media (min-width: 600px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 768px) { .projects-section { padding: 48px 32px; } }
@media (min-width: 1024px) { .proj-grid { grid-template-columns: repeat(3, 1fr); } }
</style>
