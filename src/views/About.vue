<template>
  <div ref="pageRef" class="about-page">
    <div class="page-inner">
      <div class="li-card">
        <h1 class="page-title">About</h1>
        <p class="page-subtitle">A bit more about me</p>

        <div class="about-content">
          <div class="about-main">
            <section class="content-block">
              <h2 class="block-title">Who I Am</h2>
              <p class="block-text">
                I'm a <strong>Software Engineer</strong> turned founder, specializing in AI orchestration and building products that solve real problems.
              </p>
              <p class="block-text">
                Previously core developer at <a href="https://wpmanageninja.com" target="_blank">WPManageNinja</a> building <a href="https://fluentcart.com" target="_blank">Fluent Cart</a>, and full-stack engineer at <a href="https://sjinnovation.com" target="_blank">SJ Innovation</a> (New York) — an INC 5000 company.
              </p>
            </section>

            <section class="content-block">
              <h2 class="block-title">What I Do</h2>
              <div class="skills-list">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">PHP</span>
                <span class="skill-tag">Laravel</span>
                <span class="skill-tag">WordPress</span>
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">OpenAI</span>
                <span class="skill-tag">n8n</span>
                <span class="skill-tag">Python</span>
              </div>
            </section>

            <section class="content-block">
              <h2 class="block-title">Philosophy</h2>
              <ul class="philosophy-list">
                <li>Code is read more than written — write for humans, not machines</li>
                <li>Perfect is the enemy of good — ship, iterate, improve</li>
                <li>Constraints breed creativity — work within limits to find elegant solutions</li>
              </ul>
            </section>
          </div>

          <aside class="about-sidebar">
            <div class="info-card">
              <div class="info-row">
                <span class="info-label">Location</span>
                <span class="info-value">Sylhet, Bangladesh</span>
              </div>
              <div class="info-row">
                <span class="info-label">Experience</span>
                <span class="info-value">5+ years</span>
              </div>
              <div class="info-row">
                <span class="info-label">Status</span>
                <span class="info-value status-active">● Available for work</span>
              </div>
            </div>

            <div class="social-links">
              <a href="https://www.linkedin.com/in/goutom-dash-7b48471b9/" target="_blank" class="social-link">LinkedIn</a>
              <a href="https://github.com/Ratul-Raha" target="_blank" class="social-link">GitHub</a>
            </div>
          </aside>
        </div>

        <div class="back-link">
          <router-link to="/">← Back to profile</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";

const pageRef = ref(null);
useScrollReveal(pageRef);
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  padding-top: 52px;
}

.page-inner {
  max-width: 780px;
  margin: 0 auto;
  padding: 16px;
}

.li-card {
  background: var(--bg-card);
  border: 2px solid var(--border);
  padding: 24px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.page-subtitle {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 32px;
}

.about-main {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.block-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.block-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 8px;
}

.block-text:last-child {
  margin-bottom: 0;
}

.block-text a {
  color: var(--accent);
  font-weight: 600;
}

.block-text strong {
  color: var(--text);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  font-size: 0.8125rem;
  padding: 6px 12px;
  border: 2px solid var(--border);
  background: var(--bg-card);
  color: var(--text);
  transition: all 0.15s;
}

.skill-tag:hover {
  background: var(--text);
  color: var(--bg);
}

.philosophy-list {
  list-style: none;
  padding: 0;
}

.philosophy-list li {
  padding: 8px 0 8px 16px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
  border-bottom: 1px solid var(--border-light);
  position: relative;
}

.philosophy-list li:last-child {
  border-bottom: none;
}

.philosophy-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--text-muted);
}

.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card {
  border: 2px solid var(--border);
  background: var(--bg-card);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info-label {
  font-size: 0.6875rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 0.875rem;
  color: var(--text);
}

.status-active {
  color: var(--accent);
  font-weight: 600;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-link {
  font-size: 0.8125rem;
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
}

.social-link:hover {
  text-decoration: underline;
}

.back-link {
  text-align: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 2px solid var(--border);
}

.back-link a {
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
}

.back-link a:hover {
  text-decoration: underline;
}

@media (max-width: 700px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-sidebar {
    order: -1;
  }

  .info-card {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .social-links {
    flex-direction: row;
    gap: 12px;
  }
}
</style>
