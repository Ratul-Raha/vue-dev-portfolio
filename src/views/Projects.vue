<template>
  <div class="gh-page">
    <div class="gh-page-content">
      <section class="gh-projects-page">
        <div class="page-header">
          <div class="typewriter-wrapper">
            <span class="typing-label">~/projects</span>
            <span class="cursor-line">
              <span class="typing-text">{{ typedText }}</span>
              <span class="typing-cursor">|</span>
            </span>
          </div>
        </div>

        <div class="projects-filter">
          <button
            v-for="filter in filters"
            :key="filter"
            class="filter-btn"
            :class="{ active: activeFilter === filter }"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="projects-grid">
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            class="project-card"
          >
            <div class="card-header">
              <div class="card-icon">
                <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                  <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                </svg>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
            </div>

            <p class="card-description">{{ project.description }}</p>

            <div class="card-features">
              <span v-for="feature in project.features.slice(0, 3)" :key="feature" class="feature-tag">
                {{ feature }}
              </span>
            </div>

            <div class="card-techs">
              <span
                v-for="tech in project.techs"
                :key="tech.name"
                class="tech-badge"
                :style="{ background: tech.bg, color: tech.color }"
              >
                {{ tech.name }}
              </span>
            </div>

            <div class="card-footer">
              <span class="card-year">{{ project.year }}</span>
              <div class="card-actions">
                <a v-if="project.live" :href="project.live" target="_blank" class="action-btn">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
                    <path d="M8 3.5a.5.5 0 0 1 .5.5v4.293l1.146 1.147a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L8.5 7.543V4a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                  Live
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" class="action-btn">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-.99.04-.47.11-.97.41-1.41-.16-.19-.56-1.02-.84-1.22-.22-.16-.59-.58-.01-.59.54-.01 1.02.37 1.29.79.47.93 1.22.64 1.52.49.04-.38.18-.64.33-.56-.86-.62-1.84-.08-1.99.37-.37.97-.4 1.41-.15.05-.37.12-.64.23-.94-.86-.34-1.84-.3-1.99.24-.1.32-.37.64-.76.79-.13.19-.4.05-.41.05-.31-.01-.56.31-.79.49 0 .01-.01.02-.01.03 0 .02.01.03.01.04-.01.01-.02.03-.03.04h.01c-.04.13-.07.27-.07.41 0 .35.17.68.5.89-.09.02-.19.04-.29.04-.09 0-.16-.01-.21-.03-.3-.13-.58-.32-.94-.63-.36.02-.64.13-.85.28-.06-.08-.16-.15-.28-.16-.12-.01-.24.02-.32.1-.17.15-.42.32-.78.49z"/>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="back-link">
          <router-link to="/" class="gh-back-button">
            <span class="back-icon">←</span>
            cd ..
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const typedText = ref('')
const fullText = 'ls -la'
const activeFilter = ref('All')

const filters = ['All', 'Vue', 'React', 'Laravel', 'Shopify', 'WordPress', 'Node.js']

const projects = [
  {
    title: 'Fluent Cart',
    description: 'A modern e-commerce platform with real-time cart sync, multi-currency support, and advanced analytics.',
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
    title: 'Fun Feed',
    description: 'Chrome extension that curates your feed with intelligent filtering and content aggregation.',
    features: ['AI Filtering', 'Auto-refresh', 'Export data'],
    year: '2023-2025',
    live: null,
    github: '#',
    techs: [
      { name: 'Chrome', bg: '#4285F4', color: '#fff' },
      { name: 'TypeScript', bg: '#3178C6', color: '#fff' }
    ]
  },
  {
    title: 'Tag Generator',
    description: 'Shopify app for automated product tagging using AI-powered tag suggestions and bulk operations.',
    features: ['AI tags', 'Bulk edit', 'SEO optimized'],
    year: '2023',
    live: null,
    github: '#',
    techs: [
      { name: 'Shopify', bg: '#7AB55C', color: '#fff' },
      { name: 'React', bg: '#61DAFB', color: '#000' }
    ]
  },
  {
    title: 'Zimbroom',
    description: 'Full-featured e-commerce store with custom checkout flow and inventory management.',
    features: ['Custom checkout', 'Inventory', 'Payment gateway'],
    year: '2023',
    live: 'https://zimbroom.com',
    github: '#',
    techs: [
      { name: 'Shopify', bg: '#7AB55C', color: '#fff' }
    ]
  },
  {
    title: 'CalystaPro EMR',
    description: 'Healthcare management system with patient records, appointment scheduling, and billing.',
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
    title: 'SocialPilot',
    description: 'Social media management tool for scheduling posts, analytics, and team collaboration.',
    features: ['Scheduling', 'Analytics', 'Team management'],
    year: '2022',
    live: null,
    github: '#',
    techs: [
      { name: 'React', bg: '#61DAFB', color: '#000' },
      { name: 'Node.js', bg: '#339933', color: '#fff' }
    ]
  },
  {
    title: 'POS System',
    description: 'Point of sale with inventory tracking, barcode scanning, and sales reporting.',
    features: ['Barcode scan', 'Reports', 'Multi-store'],
    year: '2022',
    live: null,
    github: '#',
    techs: [
      { name: 'React', bg: '#61DAFB', color: '#000' },
      { name: 'Laravel', bg: '#FA5555', color: '#fff' }
    ]
  },
  {
    title: 'Tender Scheduler',
    description: 'Project scheduling and task management system with team collaboration features.',
    features: ['Gantt chart', 'Task dependencies', 'Notifications'],
    year: '2021',
    live: null,
    github: '#',
    techs: [
      { name: 'Laravel', bg: '#FA5555', color: '#fff' },
      { name: 'jQuery', bg: '#0769AD', color: '#fff' }
    ]
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p =>
    p.techs.some(t => t.name.includes(activeFilter.value)))
})

function typeText() {
  let charIndex = 0
  const interval = setInterval(() => {
    if (charIndex <= fullText.length) {
      typedText.value = fullText.substring(0, charIndex)
      charIndex++
    } else {
      clearInterval(interval)
    }
  }, 120)
}

onMounted(() => {
  setTimeout(typeText, 500)
})
</script>

<style scoped>
.gh-page {
  min-height: 100vh;
  padding-top: 80px;
  background: var(--gh-bg);
}

.gh-page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 32px;
}

.page-header {
  margin-bottom: 32px;
}

.typewriter-wrapper {
  margin-bottom: 8px;
}

.typing-label {
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  color: var(--gh-purple);
  display: block;
  margin-bottom: 8px;
}

.cursor-line {
  display: flex;
  align-items: center;
}

.typing-text {
  font-family: var(--gh-font-mono);
  font-size: 1.1rem;
  color: var(--gh-text);
}

.typing-cursor {
  font-family: var(--gh-font-mono);
  font-size: 1.1rem;
  color: var(--gh-green);
  animation: blink 0.8s step-end infinite;
  margin-left: 4px;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

.projects-filter {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.filter-btn {
  padding: 6px 14px;
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text-secondary);
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: var(--gh-border);
  color: var(--gh-text);
}

.filter-btn.active {
  background: var(--gh-green);
  border-color: var(--gh-green);
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.project-card {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: #3fb950;
  box-shadow: 0 8px 24px rgba(63, 185, 80, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.card-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2937;
  border-radius: 8px;
  color: #3fb950;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e6edf3;
}

.card-description {
  font-size: 0.9rem;
  color: #8b949e;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-features {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.feature-tag {
  padding: 4px 10px;
  font-family: var(--gh-font-mono);
  font-size: 0.75rem;
  color: #7ee787;
  background: rgba(63, 185, 80, 0.1);
  border-radius: 4px;
}

.card-techs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.tech-badge {
  padding: 4px 10px;
  font-family: var(--gh-font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 4px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #30363d;
}

.card-year {
  font-family: var(--gh-font-mono);
  font-size: 0.8rem;
  color: #6e7681;
}

.card-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-family: var(--gh-font-mono);
  font-size: 0.8rem;
  color: #58a6ff;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background: rgba(88, 166, 255, 0.1);
  text-decoration: none;
}

.back-link {
  padding-top: 24px;
}

.gh-back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border);
  border-radius: 6px;
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  color: var(--gh-text);
  text-decoration: none;
  transition: all 0.2s ease;
}

.gh-back-button:hover {
  background: var(--gh-bg-tertiary);
  border-color: var(--gh-text-muted);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .gh-page-content {
    padding: 32px 16px;
  }
}

@media (max-width: 600px) {
  .projects-filter {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 8px;
  }

  .filter-btn {
    white-space: nowrap;
  }
}
</style>