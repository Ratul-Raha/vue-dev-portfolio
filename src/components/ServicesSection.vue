<template>
  <section ref="sectionRef" class="services reveal">
    <div class="section-inner">
      <h2 class="section-title">
        <span class="title-hash">#</span>
        <span class="title-text">tech-stack</span>
      </h2>

      <div class="term-line">
        <span class="prompt">$</span>
        <span class="cmd">ls</span> ~/skills/
      </div>

      <div class="skills-grid reveal-stagger">
        <div v-for="cat in categories" :key="cat.name" class="skill-cat">
          <div class="sc-head">
            <span class="sc-bracket">[</span>
            {{ cat.name }}
            <span class="sc-bracket">]</span>
          </div>
          <div class="sc-items">
            <span v-for="t in cat.items" :key="t.name" class="sc-item">{{ t.name }}</span>
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
    items: [{ name: "Vue.js" }, { name: "React" }, { name: "TypeScript" }, { name: "Tailwind" }]
  },
  {
    name: "Backend",
    items: [{ name: "Node.js" }, { name: "Laravel" }, { name: "Python" }, { name: "PHP" }]
  },
  {
    name: "AI & Data",
    items: [{ name: "OpenAI" }, { name: "n8n" }, { name: "LangChain" }, { name: "MySQL" }]
  },
  {
    name: "Tools",
    items: [{ name: "Git" }, { name: "Docker" }, { name: "Figma" }, { name: "Linux" }]
  }
]
</script>

<style scoped>
.services {
  padding: 40px 20px;
  background: var(--bg-alt);
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
  color: var(--accent-blue);
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

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.skill-cat {
  border: 2px solid var(--border);
  padding: 12px;
  background: var(--bg);
}

.sc-head {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border-light);
}

.sc-bracket {
  color: var(--accent);
}

.sc-items {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.sc-item {
  font-size: 0.88rem;
  color: var(--text-secondary);
  padding: 2px 0;
}

@media (min-width: 768px) {
  .services {
    padding: 48px 0;
  }
  .skills-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
}
</style>
