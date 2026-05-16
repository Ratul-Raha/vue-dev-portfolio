<template>
  <section ref="sectionRef" class="contact reveal">
    <div class="section-inner">
      <h2 class="section-title">
        <span class="title-hash">#</span>
        <span class="title-text">contact</span>
      </h2>

      <div class="term-line">
        <span class="prompt">$</span>
        <span class="cmd">cat</span> contact.txt
      </div>

      <div class="contact-info">
        <div class="ci-row">
          <span class="ci-key">email</span>
          <a href="mailto:goutomdash.ratul@gmail.com" class="ci-val">goutomdash.ratul@gmail.com</a>
        </div>
        <div class="ci-row">
          <span class="ci-key">github</span>
          <a href="https://github.com/Ratul-Raha" target="_blank" class="ci-val">github.com/Ratul-Raha</a>
        </div>
        <div class="ci-row">
          <span class="ci-key">linkedin</span>
          <a href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/" target="_blank" class="ci-val">linkedin.com/in/goutom-kumer-dash-ratul</a>
        </div>
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
  padding: 40px 20px 60px;
  border-top: 2px solid var(--border-light);
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
.str { color: var(--accent-amber); }

.contact-info {
  border: 2px solid var(--border);
  background: var(--bg-alt);
  padding: 10px 14px;
}

.ci-row {
  display: flex;
  gap: 12px;
  padding: 5px 0;
  border-bottom: 1px solid var(--border-light);
  font-size: 0.85rem;
}
.ci-row:last-child { border-bottom: none; }

.ci-key {
  color: var(--accent-purple);
  width: 72px;
  flex-shrink: 0;
}

.ci-val {
  color: var(--accent-blue);
  text-decoration: underline;
  word-break: break-all;
}
.ci-val:hover {
  color: var(--accent);
}

@media (min-width: 768px) {
  .contact {
    padding: 48px 0 80px;
  }
}
</style>
