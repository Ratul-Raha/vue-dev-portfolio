<template>
  <section ref="heroRef" class="hero reveal">
    <div class="hero-container">
      <div class="term-line"><span class="prompt">$</span> <span class="cmd">cd</span> ~/home</div>

      <h1 class="hero-title">
        Hey, I'm <span class="hl">Goutom Dash</span>
      </h1>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">cat</span> profile.json</div>
      <div class="code-block">
        <span class="code-comment">// Founder &amp; AI Engineer</span>
        <span class="code-line">{</span>
        <span class="code-line">  "<span class="code-key">name</span>": "<span class="code-str">Goutom Dash</span>",</span>
        <span class="code-line">  "<span class="code-key">role</span>": "<span class="code-str">Founder &amp; AI Engineer</span>",</span>
        <span class="code-line">  "<span class="code-key">location</span>": "<span class="code-str">Sylhet, BD</span>"</span>
        <span class="code-line">}</span>
        <span class="code-cursor">&nbsp;</span>
      </div>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">echo</span> <span class="str">"$BIO"</span></div>
      <p class="hero-bio">
        Founder &amp; Software Engineer. I architect AI agents, build
        AI-powered products, and craft digital experiences that scale.
      </p>

      <div class="hero-actions">
        <a href="#projectsSection" class="btn"><span class="prompt2">&gt;</span> View Projects</a>
        <a href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/" target="_blank" class="btn"><span class="prompt2">&gt;</span> LinkedIn</a>
      </div>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">ls</span> tech/</div>
      <div class="hero-techs">
        <span class="tech" v-for="t in techs" :key="t.name">{{ t.name }}</span>
      </div>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">cat</span> stats.txt</div>
      <div class="hero-stats">
        <span class="stat"><span class="stat-num">5+</span> years</span>
        <span class="stat-sep">|</span>
        <span class="stat"><span class="stat-num">20+</span> projects</span>
        <span class="stat-sep">|</span>
        <span class="stat"><span class="stat-num">500K+</span> users</span>
      </div>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">curl</span> <span class="str">github.com/ratul-raha</span></div>
      <div class="contrib-chart">
        <img src="https://ghchart.rshah.org/ratul-raha" alt="GitHub contribution chart" />
      </div>

      <div class="term-end">~<span class="cursor-blink">_</span></div>
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
  { name: "Python" }, { name: "TypeScript" }, { name: "OpenAI" }
]
</script>

<style scoped>
.hero {
  padding: 60px 20px 40px;
}

.hero-container { max-width: 700px; }

.term-line {
  font-size: 0.88rem;
  margin-bottom: 6px;
  color: var(--text-secondary);
}

.prompt { color: var(--accent-green); font-weight: 600; }
.cmd { color: var(--accent-blue); }
.str { color: var(--accent-green); }
.prompt2 { color: var(--accent-green); font-weight: 600; }

.code-block {
  background: #0d1117;
  padding: 14px;
  margin-bottom: 18px;
  border: 1px solid #30363d;
  font-size: 0.82rem;
  line-height: 1.7;
  overflow-x: auto;
}

.code-comment { color: #8b949e; display: block; }
.code-line { color: #c9d1d9; display: block; }
.code-key { color: #79c0ff; }
.code-str { color: #a5d6ff; }

.code-cursor {
  display: inline-block;
  width: 8px;
  height: 16px;
  background: #3fb950;
  animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.2;
}

.hl { color: var(--accent); }

.hero-bio {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.btn {
  font-size: 0.9rem;
  color: var(--text);
  text-decoration: underline;
  padding: 4px 0;
}
.btn:hover { color: var(--link-hover); }

.hero-techs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.tech {
  font-size: 0.82rem;
  padding: 3px 8px;
  border: 2px solid var(--border-light);
  color: var(--text-secondary);
}

.hero-stats {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.stat-num { color: var(--accent); font-weight: 700; }

.stat-sep { color: var(--border-light); }

.contrib-chart {
  border: 1px solid var(--border-light);
  padding: 8px;
  margin-bottom: 10px;
  background: var(--bg-alt);
  overflow-x: auto;
}

.contrib-chart img {
  display: block;
  width: 100%;
  min-width: 600px;
  height: auto;
}

.term-end {
  margin-top: 6px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.cursor-blink {
  color: var(--accent-green);
  animation: blink 1s step-end infinite;
}

@media (min-width: 768px) {
  .hero { padding: 80px 32px 48px; }
  .hero-title { font-size: 2.4rem; }
}
</style>
