<template>
  <section ref="sectionRef" class="experience reveal">
    <div class="section-inner">
      <h2 class="section-title"><span class="title-hash">#</span> experience</h2>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">cat</span> ~/career.log</div>

      <div class="tl reveal-stagger">
        <div v-for="(job, i) in jobs" :key="i" class="tl-item">
          <div class="tl-head">
            <h3 class="tl-company">{{ job.company }}</h3>
            <span class="tl-tag" :class="job.badge === 'Current' ? 'tag-curr' : 'tag-past'">[{{ job.badge }}]</span>
          </div>
          <div class="tl-role">{{ job.position }}</div>
          <div class="tl-meta">{{ job.duration }} &mdash; {{ job.location }}</div>
          <p class="tl-desc">{{ job.description }}</p>
          <ul class="tl-list">
            <li v-for="r in job.responsibilities" :key="r">{{ r }}</li>
          </ul>
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
.experience { padding: 40px 20px; }

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

.title-hash { color: var(--accent-purple); }

.tl { display: flex; flex-direction: column; gap: 0; }

.tl-item {
  border: 2px solid var(--border-light);
  padding: 14px;
  margin-bottom: 12px;
}

.tl-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 2px;
}

.tl-company { font-size: 1rem; font-weight: 700; }

.tl-tag {
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.tag-curr { color: var(--accent-green); }
.tag-past { color: var(--text-muted); }

.tl-role {
  font-size: 0.85rem;
  color: var(--accent-blue);
  margin-bottom: 4px;
}

.tl-meta {
  font-family: var(--font);
  font-size: 0.78rem;
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
  .experience { padding: 48px 32px; }
}
</style>
