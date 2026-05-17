<template>
  <section ref="sectionRef" class="about reveal">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">About</h2>
      </div>

      <div class="about-grid">
        <div class="about-text-col">
          <p class="lead-text">
            Software engineer turned founder, specializing in AI orchestration,
            LLM integration, and building products that solve real problems.
          </p>
          <p>
            Previously a core developer at <strong>WPManageNinja</strong> 
            building Fluent Cart, and a full-stack engineer at <a href="https://sjinnovation.com" target="_blank"><strong>SJ Innovation</strong></a> (New York) — an INC 5000 company. 
            I bridge the gap between complex backend systems and intuitive user experiences.
          </p>
          <div class="fortune-block">
            <span class="fortune-text">"The best way to predict the future is to build it."</span>
            <span class="fortune-attrib">— Alan Kay</span>
          </div>
        </div>

        <div class="about-details-col">
          <div class="profile-block">
            <img src="../assets/images/me.jpg" alt="Goutom Dash" class="profile-img" />
          </div>
        </div>
      </div>

      <div class="expertise-section">
        <h3>Core Expertise</h3>
        <div class="expertise-grid">
          <div class="ecard">
            <h4>AI Orchestration</h4>
            <p>AI agents with n8n, OpenAI, Claude. RAG pipelines and multi-agent systems.</p>
          </div>
          <div class="ecard">
            <h4>Full-Stack</h4>
            <p>Vue, React, Node, Laravel — serving 500K+ users across products.</p>
          </div>
          <div class="ecard">
            <h4>Product</h4>
            <p>Customer support agents, CRM copilots, booking platforms that ship.</p>
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
.about {
  padding: 60px 16px;
  border-top: 4px solid var(--border);
}

.section-inner {
  max-width: 1000px;
  margin: 0 auto;
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

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
}

.about-text-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.lead-text {
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--font);
  line-height: 1.6;
}

.about-text-col p:not(.lead-text) {
  font-size: 1rem;
  color: var(--text-secondary);
}

.fortune-block {
  margin-top: 16px;
  padding: 16px;
  border-left: 4px solid var(--border);
  background: var(--bg-card);
}

.fortune-text {
  font-family: var(--font);
  font-size: 1.1rem;
  font-style: italic;
  display: block;
  margin-bottom: 8px;
}

.fortune-attrib {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.profile-block {
  border: 2px solid var(--border);
  background: var(--bg-card);
  overflow: hidden;
}

.profile-img {
  width: 100%;
  display: block;
}

.expertise-section {
  margin-top: 24px;
}

.expertise-section h3 {
  font-family: var(--font);
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.ecard {
  border: 2px solid var(--border);
  padding: 20px;
  background: var(--bg-card);
  transition: transform 0.2s;
}

.ecard:hover {
  transform: translateY(-4px);
}

.ecard h4 {
  font-family: var(--font);
  font-size: 1.1rem;
  margin-bottom: 8px;
  border-bottom: 2px solid var(--border);
  padding-bottom: 8px;
  display: inline-block;
}

.ecard p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (min-width: 768px) {
  .about {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .expertise-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .about {
    padding: 40px 16px;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .lead-text {
    font-size: 0.95rem;
  }
  .about-text-col p:not(.lead-text) {
    font-size: 0.9rem;
  }
  .fortune-block {
    padding: 12px;
  }
  .fortune-text {
    font-size: 0.9rem;
  }
  .fortune-attrib {
    font-size: 0.75rem;
  }
  .expertise-section h3 {
    font-size: 0.85rem;
  }
  .ecard {
    padding: 14px;
  }
  .ecard h4 {
    font-size: 0.95rem;
  }
  .ecard p {
    font-size: 0.85rem;
  }
}
</style>
