<template>
  <section ref="heroRef" class="hero reveal">
    <div class="hero-container">
      <div class="hero-ascii">
        <pre class="ascii-art">
  +==================================+
  |   GOUTOM DASH                    |
  |   Founding Engineer, Marconi AI  |
  |   Architect · Builder · Hacker   |
  +==================================+</pre>
      </div>

      <p class="hero-bio">
        I build software. Currently at <a href="https://marconi.madstackbd.com" target="_blank">Marconi AI</a>.
        Previously at <a href="https://wpmanageninja.com" target="_blank">WPManageNinja</a>
        and <a href="https://sjinnovation.com" target="_blank">SJ Innovation</a>.
        Five years in. Still figuring it out.
      </p>

      <div class="hero-actions">
        <a href="#projectsSection" class="action-btn">
          <span class="action-bracket">[</span>
          view projects
          <span class="action-bracket">]</span>
        </a>
        <a href="#contactSection" class="action-btn">
          <span class="action-bracket">[</span>
          get in touch
          <span class="action-bracket">]</span>
        </a>
        <a href="https://github.com/Ratul-Raha" target="_blank" class="action-btn">
          <span class="action-bracket">[</span>
          github
          <span class="action-bracket">]</span>
        </a>
      </div>

      <div class="hero-terminal">
        <div class="term-line">
          <span class="prompt">$</span>
          <span class="cmd">ls</span> tech/
        </div>
        <div class="hero-techs">
          <span class="tech-tag" v-for="t in techs" :key="t.name">{{ t.name }}</span>
        </div>
      </div>

      <div class="hero-terminal">
        <div class="term-line">
          <span class="prompt">$</span>
          <span class="cmd">cat</span> stats.txt
        </div>
        <div class="hero-stats">
          <div class="stat-block">
            <span class="stat-num">5+</span>
            <span class="stat-label">years building</span>
          </div>
          <div class="stat-block">
            <span class="stat-num">20+</span>
            <span class="stat-label">shipped projects</span>
          </div>
          <div class="stat-block">
            <span class="stat-num">500K+</span>
            <span class="stat-label">users served</span>
          </div>
        </div>
      </div>

      <div class="hero-cursor">
        <span class="cursor-prompt">goutom@portfolio:~$</span>
        <span class="cursor-blink">_</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal"

const heroRef = ref(null)
useScrollReveal(heroRef)

const techs = [
  { name: "Vue.js" }, { name: "React" }, { name: "Node.js" },
  { name: "Python" }, { name: "TypeScript" }, { name: "OpenAI" },
  { name: "n8n" }, { name: "Laravel" }
]
</script>

<style scoped>
.hero {
  padding: 60px 20px 40px;
}

.hero-container {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-ascii {
  overflow-x: auto;
}

.ascii-art {
  font-family: var(--font);
  font-size: 0.65rem;
  line-height: 1.3;
  color: var(--accent-green);
  border: 2px solid var(--accent-green);
  padding: 8px;
  display: inline-block;
  background: var(--bg-alt);
}

.hero-terminal {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.term-line {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.prompt { color: var(--accent-green); font-weight: 600; }
.cmd { color: var(--accent-blue); }
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-bio {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
.hero-bio a {
  color: var(--accent-blue);
}

.action-btn {
  font-size: 0.85rem;
  color: var(--text);
  text-decoration: underline;
  padding: 4px 0;
}
.action-btn:hover {
  color: var(--accent);
}

.action-bracket {
  color: var(--accent-green);
}

.hero-techs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tech-tag {
  font-size: 0.82rem;
  padding: 3px 8px;
  border: 2px solid var(--border-light);
  color: var(--text-secondary);
}

.hero-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.stat-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 16px;
  border: 2px solid var(--border-light);
  min-width: 100px;
}

.stat-num {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-block .stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-cursor {
  margin-top: 4px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.cursor-prompt {
  color: var(--text-muted);
}

.cursor-blink {
  color: var(--accent-green);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

@media (min-width: 768px) {
  .hero {
    padding: 80px 0 48px;
  }
  .ascii-art {
    font-size: 0.72rem;
  }
}
</style>
