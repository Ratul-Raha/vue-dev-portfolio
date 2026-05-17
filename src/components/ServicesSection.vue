<template>
  <section ref="sectionRef" class="services reveal">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">Capabilities</h2>
      </div>

      <div class="expertise-block">
        <p class="expertise-text">
          I specialize in building scalable web applications and intelligent automation workflows. 
          My core expertise revolves around <strong>PHP</strong> and <strong>JavaScript</strong> for full-stack development, 
          combined with robust database management using <strong>MySQL</strong> and <strong>NoSQL</strong> solutions.
        </p>
        <p class="expertise-text">
          Beyond traditional web development, I am heavily focused on <strong>AI Automation</strong> and <strong>LLM Orchestration</strong>. 
          I build sophisticated AI agents, integrate large language models into existing products, and automate complex business operations to drive efficiency.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal"

const sectionRef = ref(null)
useScrollReveal(sectionRef, 60)
</script>

<style scoped>
.services {
  padding: 60px 0;
  border-top: 4px solid var(--border);
}

.section-inner {
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

.expertise-block {
  border: 2px solid var(--border);
  background: var(--bg-card);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.expertise-text {
  font-family: var(--font);
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.expertise-text strong {
  color: var(--text);
  font-weight: 700;
}

@media (max-width: 768px) {
  .expertise-block {
    padding: 20px;
  }
  
  .expertise-text {
    font-size: 1.2rem;
  }
}
</style>
