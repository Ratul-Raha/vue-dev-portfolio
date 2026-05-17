<template>
  <section ref="sectionRef" class="experience reveal">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">Experience</h2>
      </div>

      <div class="timeline reveal-stagger">
        <div v-for="(job, i) in jobs" :key="i" class="tl-item">
          <div class="tl-content">
            <div class="tl-head">
              <h3 class="tl-company">{{ job.company }}</h3>
              <div class="tl-meta">
                <span class="tl-duration">{{ job.duration }}</span>
                <span class="tl-location">{{ job.location }}</span>
              </div>
            </div>
            <div class="tl-role">{{ job.position }}</div>
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
    duration: "2023 - 2025",
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

.timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.tl-item {
  display: flex;
}

.tl-content {
  flex: 1;
  border: 2px solid var(--border);
  background: var(--bg-card);
  padding: 24px;
  position: relative;
}

.tl-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -12px;
  width: 12px;
  height: 100%;
  border-left: 4px solid var(--border);
}

.tl-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.tl-company {
  font-family: var(--font);
  font-size: 1.5rem;
  font-weight: 700;
}

.tl-meta {
  display: flex;
  gap: 12px;
  font-family: var(--font);
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
}

.tl-duration::after {
  content: '|';
  margin-left: 12px;
  color: var(--border-light);
}

.tl-role {
  font-family: var(--font);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.tl-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.tl-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tl-list li {
  position: relative;
  padding-left: 16px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.tl-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--text);
  font-weight: 700;
}

@media (min-width: 768px) {
  .experience {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 600px) {
  .experience {
    padding: 40px 16px;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .tl-content {
    padding: 16px;
  }
  .tl-content::before {
    left: -8px;
    width: 8px;
  }
  .tl-item {
    padding-left: 8px;
  }
  .tl-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .tl-company {
    font-size: 1.2rem;
  }
  .tl-duration::after {
    display: none;
  }
  .tl-role {
    font-size: 0.95rem;
  }
  .tl-desc {
    font-size: 0.9rem;
  }
  .tl-list li {
    font-size: 0.85rem;
  }
}
</style>
