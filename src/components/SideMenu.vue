<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-heading">Index</div>
      <div
        v-for="(item, index) in navItems"
        :key="item.id"
        class="sidebar-link"
        :class="{ active: active === item.id }"
        @click="handleSelect(item.id)"
      >
        <span class="link-num">{{ index + 1 }}.</span>
        {{ item.label }}
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-heading">Details</div>
      <div class="sidebar-stat">
        <span class="stat-label">Status:</span> Online
      </div>
      <div class="sidebar-stat">
        <span class="stat-label">Location:</span> Remote
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-heading">Contact</div>
      <div class="sidebar-quick">
        <a href="mailto:gkdratul@gmail.com" class="quick-link">Email</a>
        <a href="https://github.com/Ratul-Raha" target="_blank" class="quick-link">GitHub</a>
        <a href="https://www.linkedin.com/in/goutom-dash-7b48471b9/" target="_blank" class="quick-link">LinkedIn</a>
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
  { id: "homeSection", label: "Home" },
  { id: "aboutSection", label: "About" },
  { id: "servicesSection", label: "Skills" },
  { id: "experienceSection", label: "Experience" },
  { id: "projectsSection", label: "Projects" },
  { id: "contactSection", label: "Contact" },
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
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-section {
  border: 2px solid var(--border);
  background: var(--bg-card);
}

.sidebar-heading {
  font-family: var(--font);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--bg);
  background: var(--text);
  padding: 8px 12px;
  text-transform: capitalize;
  border-bottom: 2px solid var(--border);
}

.sidebar-link {
  padding: 10px 12px;
  cursor: pointer;
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 500;
  border-bottom: 1px solid var(--border-light);
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sidebar-link:last-child {
  border-bottom: none;
}

.sidebar-link:hover {
  background: var(--bg-alt);
}

.sidebar-link.active {
  background: var(--text);
  color: var(--bg);
}

.link-num {
  font-weight: 700;
  opacity: 0.7;
}

.sidebar-stat {
  padding: 10px 12px;
  color: var(--text);
  font-size: 0.9rem;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
}

.sidebar-stat:last-child {
  border-bottom: none;
}

.stat-label {
  font-weight: 600;
}

.sidebar-quick {
  display: flex;
  flex-direction: column;
}

.quick-link {
  font-size: 0.9rem;
  color: var(--text);
  font-weight: 500;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border-light);
  text-decoration: none;
  transition: background 0.2s;
}

.quick-link:last-child {
  border-bottom: none;
}

.quick-link:hover {
  background: var(--text);
  color: var(--bg);
}
</style>
