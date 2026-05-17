<template>
  <section ref="sectionRef" class="contact reveal">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">Contact</h2>
      </div>

      <div class="contact-info">
        <a href="mailto:goutomdash.ratul@gmail.com" class="ci-block">
          <span class="ci-key">Email</span>
          <span class="ci-val">goutomdash.ratul@gmail.com</span>
        </a>
        <a href="https://github.com/Ratul-Raha" target="_blank" class="ci-block">
          <span class="ci-key">GitHub</span>
          <span class="ci-val">github.com/Ratul-Raha</span>
        </a>
        <a href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/" target="_blank" class="ci-block">
          <span class="ci-key">LinkedIn</span>
          <span class="ci-val">linkedin.com/in/goutom-kumer-dash-ratul</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal"

const sectionRef = ref(null)
useScrollReveal(sectionRef)
</script>

<style scoped>
.contact {
  padding: 60px 0 100px;
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

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.ci-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--border);
  background: var(--bg-card);
  padding: 20px 24px;
  text-decoration: none;
  color: var(--text);
  transition: all 0.2s;
}

.ci-block:hover {
  background: var(--text);
  color: var(--bg);
  transform: translateY(-4px);
}

.ci-key {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ci-val {
  font-family: var(--font-sans);
  font-size: 1rem;
}

@media (max-width: 600px) {
  .ci-block {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
