<template>
  <div class="gh-sidebar">
    <div class="sidebar-header">
      <div class="header-badge">
        <span class="badge-dot"></span>
        <span class="badge-text">master</span>
      </div>
    </div>

    <nav class="sidebar-nav">
      <div
        v-for="(item, index) in navItems"
        :key="item.id"
        class="nav-item"
        :class="{ active: active === item.id }"
        @click="handleSelect(item.id)"
      >
        <span class="nav-icon">
          <svg v-if="item.id === 'homeSection'" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M8.156 1.835a.25.25 0 0 0-.156 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195l-5.25-4.2zM6.906.664a1.75 1.75 0 0 1 2.188 0l5.25 4.2c.415.332.656.835.656 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9h-5.5a.75.75 0 0 1-.75-.75v-5.5a1.75 1.75 0 0 1 .656-1.367l5.25-4.2z"/>
          </svg>
          <svg v-else-if="item.id === 'aboutSection'" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            <path d="M14 14a3 3 0 0 1-2.983-2.982c.114-.621.416-1.213.882-1.687a.25.25 0 0 0 .13-.171V9.036c0-.207-.137-.393-.354-.393H9.882c-.217 0-.354.186-.354.393v.964c0 .11.071.21.186.273.19.114.398.297.598.537.425.51.907.949 1.417 1.294A2.75 2.75 0 0 1 14 14z"/>
          </svg>
          <svg v-else-if="item.id === 'servicesSection'" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M14.5 2.5h-13a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zM4 4v7h1V4H4zm2 0v5h1V4H6zm2 0v7h1V4H8zm2 0v5h1V4h-1zm2 0v7h1V4h-1zM3 4h1v1H3V4zm6 0h1v1H9V4zm-3 2h1v1H6V6zm3 0h1v1H9V6zm-3 2h1v1H6V8zm3 0h1v1H9V8zm-3 2h1v1H6v-1zm3 0h1v1H9v-1z"/>
          </svg>
          <svg v-else-if="item.id === 'experienceSection'" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2V2zM3 3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3z"/>
          </svg>
          <svg v-else-if="item.id === 'projectsSection'" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zM2 4v8h12V4H2zm-1 1h1v1H1V4zm1 0h1v1H1V4zm2-1h9v1H3V3z"/>
          </svg>
        </span>
        <span class="nav-text">{{ item.label }}</span>
        <span class="nav-branch">{{ item.branch }}</span>
      </div>
    </nav>

    <div class="sidebar-stats">
      <div class="stat-line">
        <span class="stat-icon">&#9745;</span>
        <span class="stat-number">{{ stats.repos }}</span>
        <span class="stat-label">repos</span>
      </div>
      <div class="stat-line">
        <span class="stat-icon">&#9733;</span>
        <span class="stat-number">{{ stats.stars }}</span>
        <span class="stat-label">stars</span>
      </div>
    </div>

    <div class="sidebar-footer">
      <div class="terminal-prompt">
        <span class="prompt-char">$</span>
        <span class="prompt-text">git status</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  activeSection: String,
});

const emit = defineEmits(["navigate"]);

const active = ref("homeSection");

const navItems = [
  { id: "homeSection", label: "home", branch: "main" },
  { id: "aboutSection", label: "about", branch: "main" },
  { id: "servicesSection", label: "skills", branch: "main" },
  { id: "experienceSection", label: "experience", branch: "main" },
  { id: "projectsSection", label: "projects", branch: "main" }
];

const stats = {
  repos: "15+",
  stars: "50+"
};

watch(
  () => props.activeSection,
  (val) => {
    active.value = val;
  }
);

function handleSelect(index) {
  active.value = index;
  emit("navigate", index);
}
</script>

<style scoped>
.gh-sidebar {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  font-family: var(--gh-font-mono);
}

.sidebar-header {
  margin-bottom: 16px;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: var(--gh-green-light);
  border: 1px solid var(--gh-green-border);
  border-radius: 20px;
  font-size: 0.8rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--gh-green);
  border-radius: 50%;
}

.badge-text {
  color: var(--gh-green-border);
  font-weight: 600;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 24px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.nav-item:hover {
  background: var(--gh-bg-secondary);
}

.nav-item.active {
  background: var(--gh-bg-tertiary);
}

.nav-item.active .nav-text {
  color: var(--gh-text);
  font-weight: 600;
}

.nav-item.active .nav-branch {
  background: var(--gh-green-light);
  color: var(--gh-green-border);
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gh-text-muted);
}

.nav-text {
  flex: 1;
  font-size: 0.9rem;
  color: var(--gh-text-secondary);
}

.nav-branch {
  font-size: 0.7rem;
  padding: 2px 6px;
  background: var(--gh-bg-secondary);
  border-radius: 10px;
  color: var(--gh-text-muted);
}

.sidebar-stats {
  padding: 12px;
  background: var(--gh-bg-secondary);
  border-radius: 6px;
  margin-bottom: 24px;
}

.stat-line {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--gh-text-secondary);
  margin-bottom: 4px;
}

.stat-line:last-child {
  margin-bottom: 0;
}

.stat-icon {
  color: var(--gh-text-muted);
}

.stat-number {
  font-weight: 600;
  color: var(--gh-text);
}

.stat-label {
  color: var(--gh-text-muted);
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--gh-border-light);
}

.terminal-prompt {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
}

.prompt-char {
  color: var(--gh-green);
}

.prompt-text {
  color: var(--gh-text-muted);
}

@media (max-width: 900px) {
  .gh-sidebar {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 4px;
    width: 100%;
  }

  .sidebar-header,
  .sidebar-stats,
  .sidebar-footer {
    display: none;
  }

  .sidebar-nav {
    flex-direction: row;
    margin-bottom: 0;
    gap: 2px;
  }

  .nav-item {
    padding: 6px 8px;
  }

  .nav-text,
  .nav-branch {
    display: none;
  }

  .nav-icon {
    width: 20px;
    height: 20px;
  }
}
</style>