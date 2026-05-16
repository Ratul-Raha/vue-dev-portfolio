<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-heading">
        <span class="head-icon">#</span> navigate
      </div>
      <div
        v-for="item in navItems"
        :key="item.id"
        class="sidebar-link"
        :class="{ active: active === item.id }"
        @click="handleSelect(item.id)"
      >
        <span class="link-arrow">{{ active === item.id ? '>' : '-' }}</span>
        {{ item.label }}
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-heading">
        <span class="head-icon">*</span> status
      </div>
      <div class="sidebar-stat">
        <span class="stat-dot"></span>
        online
      </div>
      <div class="sidebar-stat">
        <span class="stat-label">repos:</span> 39+
      </div>
      <div class="sidebar-stat">
        <span class="stat-label">uptime:</span> 99.9%
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-heading">
        <span class="head-icon">$</span> quick
      </div>
      <div class="sidebar-quick">
        <a href="mailto:goutomdash.ratul@gmail.com" class="quick-link">email</a>
        <a href="https://github.com/Ratul-Raha" target="_blank" class="quick-link">github</a>
        <a href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/" target="_blank" class="quick-link">linkedin</a>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({ activeSection: String });
const emit = defineEmits(["navigate"]);
const active = ref("homeSection");

const navItems = [
  { id: "homeSection", label: "home" },
  { id: "aboutSection", label: "about" },
  { id: "servicesSection", label: "skills" },
  { id: "experienceSection", label: "experience" },
  { id: "projectsSection", label: "projects" },
  { id: "contactSection", label: "contact" },
];

watch(() => props.activeSection, (v) => { active.value = v; });

function handleSelect(id) {
  active.value = id;
  emit("navigate", id);
}
</script>

<style scoped>
.sidebar {
  font-family: var(--font);
  font-size: 0.82rem;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar-section {
  border: 2px solid var(--border);
  padding: 10px 12px;
}

.sidebar-heading {
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border-light);
}

.head-icon {
  color: var(--accent);
  margin-right: 4px;
}

.sidebar-link {
  padding: 3px 0;
  cursor: pointer;
  color: var(--accent-blue);
  text-decoration: underline;
  transition: color 0.15s;
}
.sidebar-link:hover {
  color: var(--accent);
}
.sidebar-link.active {
  color: var(--accent);
  font-weight: 600;
}

.link-arrow {
  display: inline-block;
  width: 12px;
  font-weight: 700;
  text-decoration: none;
}

.sidebar-stat {
  padding: 2px 0;
  color: var(--text-secondary);
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.stat-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-green);
  display: inline-block;
}

.stat-label {
  color: var(--text-muted);
}

.sidebar-quick {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.quick-link {
  font-size: 0.78rem;
  color: var(--accent-blue);
  text-decoration: underline;
  padding: 2px 0;
}
.quick-link:hover {
  color: var(--accent);
}
</style>
