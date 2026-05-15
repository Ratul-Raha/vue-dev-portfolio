<template>
  <section ref="sectionRef" class="about reveal">
    <div class="section-inner">
      <h2 class="section-title"><span class="title-hash">#</span> about-me</h2>

      <div class="about-body">
        <div class="term-line"><span class="prompt">$</span> <span class="cmd">cat</span> about.md</div>
        <div class="about-text">
          <p>
            Software engineer turned founder, specializing in AI orchestration, LLM integration,
            and building products that solve real problems. Previously core developer at
            <a href="https://wpmanageninja.com" target="_blank">WPManageNinja</a> building
            <a href="https://fluentcart.com" target="_blank">Fluent Cart</a>, and full-stack engineer at
            SJ Innovation (New York).
          </p>
        </div>

        <div class="term-line"><span class="prompt">$</span> <span class="cmd">cat</span> profile.txt</div>
        <div class="info-box">
          <div class="info-row"><span class="info-key">name</span><span>Goutom Dash</span></div>
          <div class="info-row"><span class="info-key">role</span><span>Founder &amp; AI Engineer</span></div>
          <div class="info-row"><span class="info-key">location</span><span>Sylhet, Bangladesh</span></div>
          <div class="info-row"><span class="info-key">experience</span><span>5+ years</span></div>
          <div class="info-row"><span class="info-key">status</span><span class="status-val">active</span></div>
        </div>

        <div class="term-line"><span class="prompt">$</span> <span class="cmd">ls</span> expertise/</div>
        <div class="about-cards">
          <div class="acard">
            <div class="acard-head"><span class="acard-bullet">&gt;</span> AI Orchestration</div>
            <p class="acard-text">AI agents with n8n, OpenAI, Claude. RAG pipelines and multi-agent systems.</p>
          </div>
          <div class="acard">
            <div class="acard-head"><span class="acard-bullet">&gt;</span> Full-Stack Engineering</div>
            <p class="acard-text">Vue, React, Node, Laravel — serving 500K+ users across products.</p>
          </div>
          <div class="acard">
            <div class="acard-head"><span class="acard-bullet">&gt;</span> AI Products</div>
            <p class="acard-text">Customer support agents, CRM copilots, booking platforms that ship.</p>
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
useScrollReveal(sectionRef)
</script>

<style scoped>
.about { padding: 40px 20px; }

.section-inner { max-width: 700px; }

.term-line {
  font-size: 0.88rem;
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.prompt { color: var(--accent-green); font-weight: 600; }
.cmd { color: var(--accent-blue); }

.section-title {
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.title-hash { color: var(--accent); }

.about-body { display: flex; flex-direction: column; gap: 14px; }

.about-text {
  background: var(--bg-alt);
  padding: 12px;
  border: 1px solid var(--border-light);
}

.about-text p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.info-box {
  border: 2px solid var(--border);
  padding: 10px;
}

.info-row {
  display: flex;
  gap: 12px;
  padding: 4px 0;
  font-size: 0.85rem;
  border-bottom: 1px solid var(--border-light);
}
.info-row:last-child { border-bottom: none; }

.info-key { color: var(--accent-purple); width: 100px; flex-shrink: 0; }

.status-val { color: var(--accent-green); }

.about-cards { display: flex; flex-direction: column; gap: 8px; }

.acard {
  border: 2px solid var(--border-light);
  padding: 10px 12px;
  background: var(--bg-alt);
}

.acard-head {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.acard-bullet { color: var(--accent-green); font-weight: 700; margin-right: 6px; }

.acard-text {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
  padding-left: 14px;
}

@media (min-width: 768px) {
  .about { padding: 48px 32px; }
  .about-cards { flex-direction: row; gap: 12px; }
  .acard { flex: 1; }
}
</style>
