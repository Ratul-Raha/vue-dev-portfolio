<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-title">Navigation</div>
      <div
        v-for="item in navItems"
        :key="item.id"
        class="sidebar-link"
        :class="{ active: active === item.id }"
        @click="handleSelect(item.id)"
      >
        [ {{ item.label }} ]
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">Stats</div>
      <div class="sidebar-stat">repos: 39+</div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-stat" style="color: var(--accent-green);">$ git status</div>
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
  font-size: 0.85rem;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sidebar-section {
  border: 2px solid var(--border);
  padding: 10px;
}

.sidebar-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-bottom: 8px;
  color: var(--accent);
}

.sidebar-link {
  padding: 3px 0;
  cursor: pointer;
  color: var(--link);
  text-decoration: underline;
}
.sidebar-link:hover { color: var(--link-hover); }
.sidebar-link.active { color: var(--accent); font-weight: 600; }

.sidebar-stat {
  padding: 2px 0;
  color: var(--text-secondary);
  font-size: 0.82rem;
}
</style>
