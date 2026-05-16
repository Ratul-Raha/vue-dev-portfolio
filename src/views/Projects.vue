<template>
  <div ref="pageRef" class="projects-page">
    <div class="page-inner">
      <div class="page-head reveal">
        <div class="term-line"><span class="prompt">$</span> <span class="cmd">cd</span> ~/projects</div>
        <h1 class="page-title">Projects</h1>
      </div>

      <div class="filter-bar reveal">
        <button v-for="f in filters" :key="f" class="filter-btn" :class="{ active: activeFilter === f }" @click="activeFilter = f">
          {{ f }}
        </button>
      </div>

      <div class="proj-grid reveal-stagger">
        <div v-for="p in filteredProjects" :key="p.title" class="proj-card">
          <div class="proj-img">
            <img v-if="p.image" :src="p.image" :alt="p.title" loading="lazy" />
          </div>
          <div class="proj-body">
            <h2 class="proj-title">{{ p.title }}</h2>
            <p class="proj-desc">{{ p.description }}</p>
            <div class="proj-feats">
              <span v-for="f in p.features.slice(0,3)" :key="f" class="feat">{{ f }}</span>
            </div>
            <div class="proj-techs">
              <span v-for="t in p.techs" :key="t.name" class="tech-badge" :style="{ background: t.bg, color: t.color }">{{ t.name }}</span>
            </div>
            <div class="proj-foot">
              <span class="proj-year">({{ p.year }})</span>
              <div class="proj-actions">
                <a v-if="p.live" :href="p.live" target="_blank">[live]</a>
                <a v-if="p.github && p.github !== '#'" :href="p.github" target="_blank">[code]</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="back-link reveal">
        <router-link to="/">[ &larr; cd .. ]</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from "../composables/useScrollReveal"
import FluentCartImg from "../assets/images/projects/fluentcart.webp";
import CalypsoImg from "../assets/images/projects/calystapro.jpg";
import MarconiImg from "../assets/images/projects/marconi.png";
import ConsultaImg from "../assets/images/projects/consulta.jpg";
import EventickImg from "../assets/images/projects/eventick.png";
import GeoThreadImg from "../assets/images/projects/geothread.jpg";

const pageRef = ref(null)
useScrollReveal(pageRef)

const activeFilter = ref('All')
const filters = ['All', 'Vue', 'React', 'Laravel', 'Shopify', 'WordPress', 'Node.js', 'Python']

const projects = [
  {
    title: 'Fluent Cart',
    description: 'A modern e-commerce platform with real-time cart sync, multi-currency support, and advanced analytics.',
    image: FluentCartImg,
    features: ['Real-time sync', 'Multi-currency', 'Analytics', 'REST API'],
    year: '2023-2025',
    live: 'https://fluentcart.com',
    github: '#',
    techs: [
      { name: 'Vue', bg: '#4FC08D', color: '#fff' },
      { name: 'Laravel', bg: '#FA5555', color: '#fff' },
      { name: 'WordPress', bg: '#21759B', color: '#fff' }
    ]
  },
  {
    title: 'CalystaPro EMR',
    description: 'Healthcare management system with patient records, appointment scheduling, and billing.',
    image: CalypsoImg,
    features: ['Patient records', 'Scheduling', 'Billing', 'HIPAA compliant'],
    year: '2022',
    live: 'https://www.calystaproemr.com/',
    github: '#',
    techs: [
      { name: 'PHP', bg: '#777BB4', color: '#fff' },
      { name: 'JavaScript', bg: '#F7DF1E', color: '#000' }
    ]
  },
  {
    title: 'Marconi',
    description: 'AI-powered customer support agent for WhatsApp and Telegram messaging platforms.',
    image: MarconiImg,
    features: ['WhatsApp integration', 'Telegram bot', 'AI responses', 'Ticket management'],
    year: '2025',
    live: null,
    github: '#',
    techs: [
      { name: 'Python', bg: '#3776AB', color: '#fff' },
      { name: 'OpenAI', bg: '#412991', color: '#fff' },
      { name: 'WhatsApp', bg: '#25D366', color: '#fff' },
      { name: 'Telegram', bg: '#26A5E4', color: '#fff' }
    ]
  },
  {
    title: 'Consulta',
    description: 'AI-powered CRM platform for student consultancy with intelligent matching and application tracking.',
    image: ConsultaImg,
    features: ['Student profiling', 'AI recommendations', 'Application tracking', 'Communication hub'],
    year: '2025',
    live: null,
    github: '#',
    techs: [
      { name: 'React', bg: '#61DAFB', color: '#000' },
      { name: 'Node.js', bg: '#339933', color: '#fff' },
      { name: 'OpenAI', bg: '#412991', color: '#fff' }
    ]
  },
  {
    title: 'Eventick',
    description: 'Paymentless event booking platform with RSVP management and QR code check-in.',
    image: EventickImg,
    features: ['RSVP management', 'Event calendar', 'QR check-in', 'Guest list'],
    year: '2025',
    live: null,
    github: '#',
    techs: [
      { name: 'Vue', bg: '#4FC08D', color: '#fff' },
      { name: 'Node.js', bg: '#339933', color: '#fff' },
      { name: 'Tailwind CSS', bg: '#06B6D4', color: '#fff' }
    ]
  },
  {
    title: 'GeoThread',
    description: 'On-demand print and framing service with custom design preview and order tracking.',
    image: GeoThreadImg,
    features: ['Custom framing', 'Print on demand', 'Order tracking', 'Design preview'],
    year: '2025',
    live: null,
    github: '#',
    techs: [
      { name: 'Laravel', bg: '#FA5555', color: '#fff' },
      { name: 'Vue', bg: '#4FC08D', color: '#fff' },
      { name: 'MySQL', bg: '#4479A1', color: '#fff' }
    ]
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.techs.some(t => t.name.includes(activeFilter.value)))
})
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding-top: 48px;
  background: var(--bg);
}

.page-inner {
  max-width: 700px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

.term-line {
  font-size: 0.88rem;
  margin-bottom: 6px;
  color: var(--text-muted);
}

.prompt { color: var(--accent-green); font-weight: 600; }
.cmd { color: var(--accent-blue); }

.page-head { margin-bottom: 16px; }

.page-title { font-size: 1.5rem; font-weight: 700; }

.filter-bar {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.filter-btn {
  padding: 4px 10px;
  font-family: var(--font);
  font-size: 0.82rem;
  color: var(--text-secondary);
  background: var(--bg);
  border: 2px solid var(--border-light);
  cursor: pointer;
  white-space: nowrap;
}
.filter-btn:hover { border-color: var(--border); }
.filter-btn.active { background: var(--text); color: var(--bg); border-color: var(--text); }

.proj-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 32px; }

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

.proj-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 4px; }

.proj-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 8px;
  flex: 1;
}

.proj-feats {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.feat {
  font-size: 0.72rem;
  padding: 2px 6px;
  border: 1px solid var(--border-light);
  color: var(--text-muted);
}

.proj-techs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.tech-badge {
  padding: 2px 6px;
  font-family: var(--font);
  font-size: 0.72rem;
  font-weight: 500;
}

.proj-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid var(--border-light);
}

.proj-year { font-size: 0.78rem; color: var(--text-muted); }

.proj-actions { display: flex; gap: 10px; }
.proj-actions a { font-size: 0.82rem; text-decoration: underline; }

.back-link { text-align: center; }
.back-link a { font-size: 0.9rem; }

@media (min-width: 600px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 768px) { .page-inner { padding: 48px 32px 64px; } }
@media (min-width: 1024px) { .proj-grid { grid-template-columns: repeat(3, 1fr); } }
</style>
