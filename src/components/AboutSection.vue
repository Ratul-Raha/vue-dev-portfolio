<template>
  <section ref="sectionRef" class="about reveal">
    <div class="section-inner">
      <h2 class="section-title">
        <span class="title-hash">#</span>
        <span class="title-text">about</span>
      </h2>

      <div class="about-terminal">
        <div class="term-line">
          <span class="prompt">$</span>
          <span class="cmd">cat</span> about.md
        </div>
        <div class="about-text">
          <p>
            Software engineer turned founder, specializing in AI orchestration,
            LLM integration, and building products that solve real problems.
            Previously core developer at
            <a href="https://wpmanageninja.com" target="_blank">WPManageNinja</a>
            building <a href="https://fluentcart.com" target="_blank">Fluent Cart</a>,
            and full-stack engineer at SJ Innovation (New York).
          </p>
        </div>
      </div>

      <div class="about-terminal">
        <div class="term-line">
          <span class="prompt">$</span>
          <span class="cmd">cat</span> profile.json
        </div>
        <div class="profile-block">
          <div class="profile-row">
            <span class="profile-key">"name"</span>
            <span class="profile-colon">:</span>
            <span class="profile-str">"Goutom Dash"</span>
          </div>
          <div class="profile-row">
            <span class="profile-key">"role"</span>
            <span class="profile-colon">:</span>
            <span class="profile-str">"Founder &amp; AI Engineer"</span>
          </div>
          <div class="profile-row">
            <span class="profile-key">"location"</span>
            <span class="profile-colon">:</span>
            <span class="profile-str">"Sylhet, Bangladesh"</span>
          </div>
          <div class="profile-row">
            <span class="profile-key">"status"</span>
            <span class="profile-colon">:</span>
            <span class="profile-str status-on">"active &amp; building"</span>
          </div>
        </div>
      </div>

      <div class="about-terminal">
        <div class="term-line">
          <span class="prompt">$</span>
          <span class="cmd">ls</span> expertise/
        </div>
        <div class="about-cards">
          <div class="acard">
            <div class="acard-head">
              <span class="acard-icon">></span>
              AI Orchestration
            </div>
            <p class="acard-text">
              AI agents with n8n, OpenAI, Claude. RAG pipelines
              and multi-agent systems.
            </p>
          </div>
          <div class="acard">
            <div class="acard-head">
              <span class="acard-icon">></span>
              Full-Stack Engineering
            </div>
            <p class="acard-text">
              Vue, React, Node, Laravel — serving 500K+ users
              across products.
            </p>
          </div>
          <div class="acard">
            <div class="acard-head">
              <span class="acard-icon">></span>
              AI Products
            </div>
            <p class="acard-text">
              Customer support agents, CRM copilots, booking
              platforms that ship.
            </p>
          </div>
        </div>
      </div>

      <div class="about-terminal">
        <div class="term-line">
          <span class="prompt">$</span>
          <span class="cmd">fortune</span>
        </div>
        <div class="fortune-block">
          <span class="fortune-text">"The best way to predict the future is to build it."</span>
          <span class="fortune-attrib">— Alan Kay</span>
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
.about {
  padding: 40px 20px;
}

.section-inner {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-hash {
  color: var(--accent);
  font-size: 1.2rem;
}

.title-text {
  color: var(--text);
  font-weight: 700;
}

.about-terminal {
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

.about-text {
  background: var(--bg-alt);
  border: 2px solid var(--border-light);
  padding: 12px 14px;
}

.about-text p {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.about-text a {
  color: var(--accent-blue);
  text-decoration: underline;
}
.about-text a:hover {
  color: var(--accent);
}

.profile-block {
  background: #0d1117;
  color: #c9d1d9;
  border: 1px solid #30363d;
  padding: 10px 14px;
  font-family: var(--font);
  font-size: 0.82rem;
}

.profile-row {
  padding: 2px 0;
  display: flex;
  gap: 4px;
}

.profile-key {
  color: #79c0ff;
}

.profile-colon {
  color: #8b949e;
}

.profile-str {
  color: #a5d6ff;
}

.status-on {
  color: #3fb950;
}

.about-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

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

.acard-icon {
  color: var(--accent-green);
  margin-right: 6px;
  font-weight: 700;
}

.acard-text {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
  padding-left: 14px;
}

.fortune-block {
  background: var(--bg-alt);
  border: 2px solid var(--border-light);
  border-left: 4px solid var(--accent-amber);
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.fortune-text {
  font-size: 0.85rem;
  color: var(--accent-amber);
  font-style: italic;
}

.fortune-attrib {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-align: right;
}

@media (min-width: 768px) {
  .about {
    padding: 48px 0;
  }
  .about-cards {
    flex-direction: row;
    gap: 10px;
  }
  .acard {
    flex: 1;
  }
}
</style>
