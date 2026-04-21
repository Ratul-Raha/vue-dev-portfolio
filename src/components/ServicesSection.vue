<template>
  <section ref="sectionRef" class="gh-tech">
    <div class="tech-container">
      <div class="section-title-row">
        <span class="title-hash">#</span>
        <span class="title-text">tech-stack</span>
        <div class="title-line"></div>
      </div>

      <div class="tech-grid">
        <div v-for="(category, idx) in techCategories" :key="idx" class="tech-category">
          <div class="category-header">
            <span class="category-icon" v-html="category.icon"></span>
            <span class="category-name">{{ category.name }}</span>
          </div>
          <div class="tech-items">
            <div v-for="tech in category.techs" :key="tech.name" class="tech-item">
              <img :src="tech.icon" :alt="tech.name" class="tech-logo" />
              <span class="tech-label">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const sectionRef = ref(null);
defineExpose({ sectionRef });

const techCategories = [
  {
    name: "Frontend",
    icon: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M3 1l10 7.5-10 7.5L3 1z"/></svg>',
    techs: [
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    name: "Backend",
    icon: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M6 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H6zm0 1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/></svg>',
    techs: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" }
    ]
  },
  {
    name: "Database",
    icon: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 1v6.5a.5.5 0 0 1-.5.5H3v2l-1.5 1.5v1.5h18v-1.5L12 14.5v-2h-.5a.5.5 0 0 1-.5-.5V1H8z"/></svg>',
    techs: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
    ]
  },
  {
    name: "Tools",
    icon: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M14.5 2.5l-1 1-5-5-1 1L9 0l1.5 1.5L14.5 2.5z"/></svg>',
    techs: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ]
  }
];
</script>

<style scoped>
.gh-tech {
  background: var(--gh-bg);
  padding: 64px 32px;
  border-top: 1px solid var(--gh-border-light);
}

.tech-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
}

.title-hash {
  font-family: var(--gh-font-mono);
  font-size: 1.5rem;
  color: var(--gh-link);
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

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.tech-category {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s ease;
}

.tech-category:hover {
  border-color: var(--gh-green);
  transform: translateY(-2px);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--gh-border-light);
}

.category-icon {
  color: var(--gh-green);
  display: flex;
}

.category-name {
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gh-text);
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: var(--gh-bg);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
  transition: all 0.2s ease;
}

.tech-item:hover {
  border-color: var(--gh-link);
}

.tech-logo {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.tech-label {
  font-family: var(--gh-font-mono);
  font-size: 0.8rem;
  color: var(--gh-text-secondary);
}

@media (max-width: 1024px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gh-tech {
    padding: 48px 16px;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>