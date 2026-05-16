<template>
  <section ref="sectionRef" class="experience reveal">
    <div class="section-inner">
      <h2 class="section-title">
        <span class="title-hash">#</span>
        <span class="title-text">experience</span>
      </h2>

      <div class="term-line">
        <span class="prompt">$</span>
        <span class="cmd">cat</span> ~/career.log
      </div>

      <div class="timeline reveal-stagger">
        <div v-for="(job, i) in jobs" :key="i" class="tl-item">
          <div class="tl-marker">
            <span class="tl-dot" :class="job.badge === 'Current' ? 'dot-active' : 'dot-past'"></span>
            <span class="tl-line" v-if="i < jobs.length - 1"></span>
          </div>
          <div class="tl-content">
            <div class="tl-head">
              <h3 class="tl-company">{{ job.company }}</h3>
              <span class="tl-badge" :class="job.badge === 'Current' ? 'badge-current' : 'badge-past'">
                [{{ job.badge }}]
              </span>
            </div>
            <div class="tl-role">{{ job.position }}</div>
            <div class="tl-meta">{{ job.duration }} — {{ job.location }}</div>
            <p class="tl-desc">{{ job.description }}</p>
            <ul class="tl-list">
              <li v-for="r in job.responsibilities" :key="r">{{ r }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal"

const sectionRef = ref(null)
useScrollReveal(sectionRef, 100)

const jobs = [
  {
    company: "Freelance",
    position: "Founder & AI Engineer",
    badge: "Current",
    duration: "2025 - Present",
    location: "Worldwide",
    description: "Building AI-powered products, automation workflows, and modern web solutions.",
    responsibilities: [
      "Architecting AI agents with n8n, OpenAI, Claude, and custom GPTs",
      "Building AI customer support agents for WhatsApp & Telegram",
      "Developing AI-powered CRM and event booking platforms",
      "Modernizing legacy systems with Vue, React, and Node.js"
    ]
  },
  {
    company: "WPManageNinja LLC",
    position: "Core Software Engineer",
    badge: "Current",
    duration: "2023 - Present",
    location: "Delaware, USA",
    description: "Building WordPress plugins that power hundreds of thousands of websites worldwide.",
    responsibilities: [
      "Core developer on Fluent Cart — high-impact eCommerce plugin",
      "Improved performance reducing load time by 60%",
      "Built features serving 500K+ active users",
      "Collaborated across cross-functional teams globally"
    ]
  },
  {
    company: "SJ Innovation LLC",
    position: "Full-Stack Engineer",
    badge: "Past",
    duration: "2022 - 2023",
    location: "New York, USA",
    description: "Full-stack development for enterprise clients in healthcare and retail.",
    responsibilities: [
      "Built MERN stack applications for enterprise clients",
      "Developed HIPAA-compliant EMR system with PHP",
      "Integrated REST APIs improving data flow by 50%"
    ]
  }
]
</script>

<style scoped>
.experience {
  padding: 40px 20px;
}

.section-inner {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-hash {
  color: var(--accent-purple);
  font-size: 1.2rem;
}

.title-text {
  color: var(--text);
  font-weight: 700;
}

.term-line {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.prompt { color: var(--accent-green); font-weight: 600; }
.cmd { color: var(--accent-blue); }

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.tl-item {
  display: flex;
  gap: 16px;
}

.tl-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16px;
  flex-shrink: 0;
  padding-top: 4px;
}

.tl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  z-index: 1;
}

.dot-active {
  background: var(--accent-green);
}

.dot-past {
  background: var(--border-light);
}

.tl-line {
  width: 2px;
  flex: 1;
  background: var(--border-light);
  margin: 4px 0;
}

.tl-content {
  flex: 1;
  border: 2px solid var(--border-light);
  background: var(--bg-alt);
  padding: 12px 14px;
  margin-bottom: 12px;
}

.tl-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 2px;
}

.tl-company {
  font-size: 0.95rem;
  font-weight: 700;
}

.tl-badge {
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
}

.badge-current { color: var(--accent-green); }
.badge-past { color: var(--text-muted); }

.tl-role {
  font-size: 0.85rem;
  color: var(--accent-blue);
  margin-bottom: 4px;
}

.tl-meta {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.tl-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
  line-height: 1.6;
}

.tl-list {
  list-style: none;
  padding: 0;
}

.tl-list li {
  position: relative;
  padding-left: 14px;
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.tl-list li::before {
  content: '*';
  position: absolute;
  left: 0;
  color: var(--accent-green);
}

@media (min-width: 768px) {
  .experience {
    padding: 48px 0;
  }
}
</style>
