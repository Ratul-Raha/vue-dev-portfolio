<template>
  <section ref="sectionRef" class="gh-tech">
    <div class="tech-container">
      <div class="section-title-row">
        <span class="title-hash">#</span>
        <span class="title-text">tech-stack</span>
        <div class="title-line"></div>
      </div>

      <div class="grid-container">
        <div v-for="(group, gIdx) in techGroups" :key="gIdx" class="tech-box">
          <div class="box-header">
            <span class="folder-icon">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M1 2.75A2.75 2.75 0 0 1 3.75 0h5.692c.225 0 .423.06.582.165L13.182 1h.068A2.75 2.75 0 0 1 16 3.75v8.5A2.75 2.75 0 0 1 13.25 15h-9.5A2.75 2.75 0 0 1 1 12.25v-9.5zM3.75 1.5a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25h-.068l-1.147-.948A.25.25 0 0 0 12.835 2H3.75z"/>
              </svg>
            </span>
            <span class="folder-path">{{ group.path }}</span>
            <span class="file-count">{{ group.techs.length }}</span>
          </div>
          <div class="box-body">
            <div
              v-for="(tech, tIdx) in group.techs"
              :key="tIdx"
              class="tech-chip"
              :style="{ animationDelay: (gIdx * 0.03 + tIdx * 0.02) + 's' }"
            >
              <span class="chip-icon">
                <img :src="tech.icon" :alt="tech.name" />
              </span>
              <span class="chip-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="terminal-section">
        <div class="terminal-header-bar">
          <div class="terminal-buttons">
            <span class="btn red"></span>
            <span class="btn yellow"></span>
            <span class="btn green"></span>
          </div>
          <span class="terminal-label">bash ~ stack</span>
        </div>
        <div class="terminal-body-bar">
          <div class="cmd-line">
            <span class="prompt">$</span>
            <span class="cmd">ls -la /stack</span>
          </div>
          <div class="output-grid">
            <div class="output-item" v-for="(item, iIdx) in stackList" :key="iIdx">
              <span class="out-icon" v-html="item.icon"></span>
              <span class="out-name">{{ item.name }}</span>
            </div>
          </div>
          <div class="cmd-line prompt-line">
            <span class="prompt">$</span>
            <span class="cursor">_</span>
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

const techGroups = [
  {
    path: "/frontend",
    techs: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    path: "/frameworks",
    techs: [
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ]
  },
  {
    path: "/backend",
    techs: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
    ]
  },
  {
    path: "/database",
    techs: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Mongo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ]
  }
];

const stackList = [
  { name: "Vue.js", icon: "&#9745;" },
  { name: "React", icon: "&#9745;" },
  { name: "PHP", icon: "&#9745;" },
  { name: "Laravel", icon: "&#9745;" },
  { name: "Node.js", icon: "&#9745;" },
  { name: "WordPress", icon: "&#9745;" },
  { name: "Git", icon: "&#9745;" },
  { name: "Docker", icon: "&#9745;" }
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.tech-box {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
  overflow: hidden;
}

.box-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: var(--gh-bg-tertiary);
  border-bottom: 1px solid var(--gh-border-light);
}

.folder-icon {
  color: var(--gh-text-muted);
  display: flex;
}

.folder-path {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text);
  flex: 1;
}

.file-count {
  font-family: var(--gh-font-mono);
  font-size: 0.75rem;
  color: var(--gh-text-muted);
  background: var(--gh-bg);
  padding: 2px 8px;
  border-radius: 10px;
}

.box-body {
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background: var(--gh-bg);
  border: 1px solid var(--gh-border-light);
  border-radius: 4px;
  font-family: var(--gh-font-mono);
  font-size: 0.75rem;
  animation: fadeInUp 0.3s ease forwards;
  opacity: 0;
  transition: all 0.15s ease;
}

.tech-chip:hover {
  border-color: var(--gh-link);
  background: var(--gh-blue-light);
}

.chip-icon {
  width: 16px;
  height: 16px;
}

.chip-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.chip-name {
  color: var(--gh-text);
}

.terminal-section {
  background: #24292e;
  border-radius: 6px;
  overflow: hidden;
}

.terminal-header-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: #1c2128;
  border-bottom: 1px solid #30363d;
}

.terminal-buttons {
  display: flex;
  gap: 6px;
}

.btn {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red { background: #f85149; }
.yellow { background: #e3b341; }
.green { background: #3fb950; }

.terminal-label {
  font-family: var(--gh-font-mono);
  font-size: 0.75rem;
  color: #6e7681;
}

.terminal-body-bar {
  padding: 12px;
}

.cmd-line {
  display: flex;
  gap: 8px;
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.prompt {
  color: #3fb950;
}

.cmd {
  color: #c9d1d9;
}

.output-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #30363d;
}

.output-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--gh-font-mono);
  font-size: 0.8rem;
  color: #8b949e;
}

.out-icon {
  color: #3fb950;
}

.cursor {
  color: #58a6ff;
  animation: blink 1s step-end infinite;
}

.prompt-line {
  margin-bottom: 0;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gh-tech {
    padding: 48px 16px;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }

  .output-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>