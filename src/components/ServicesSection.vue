<template>
  <section ref="sectionRef" class="tech reveal">
    <div class="section-inner">
      <h2 class="section-title"><span class="title-hash">#</span> tech-stack</h2>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">ls</span> ~/skills/</div>

      <div class="tech-grid reveal-stagger">
        <div v-for="cat in categories" :key="cat.name" class="tech-cat">
          <h3 class="tc-title">{{ cat.name }}</h3>
          <div class="tc-items">
            <span v-for="t in cat.items" :key="t.name" class="tc-item">{{ t.name }}</span>
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
useScrollReveal(sectionRef, 60)

const categories = [
  {
    name: "Frontend",
    items: [{ name: "Vue.js" }, { name: "React" }, { name: "TypeScript" }]
  },
  {
    name: "Backend",
    items: [{ name: "Node.js" }, { name: "Laravel" }, { name: "Python" }]
  },
  {
    name: "AI & Data",
    items: [{ name: "OpenAI" }, { name: "n8n" }, { name: "MySQL" }]
  },
  {
    name: "Tools",
    items: [{ name: "Git" }, { name: "Docker" }, { name: "Figma" }]
  }
]
</script>

<style scoped>
.tech { padding: 40px 20px; background: var(--bg-alt); }

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

.title-hash { color: var(--accent-blue); }

.tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.tech-cat {
  border: 2px solid var(--border);
  padding: 12px;
}

.tc-title {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.tc-items { display: flex; flex-direction: column; gap: 4px; }

.tc-item { font-size: 0.9rem; }

@media (min-width: 768px) {
  .tech { padding: 48px 32px; }
  .tech-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
}
</style>
