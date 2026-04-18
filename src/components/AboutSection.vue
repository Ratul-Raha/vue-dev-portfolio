<template>
  <section ref="sectionRef" class="gh-about">
    <div class="about-container">
      <div class="section-title-row">
        <span class="title-hash">#</span>
        <span class="title-text">about-me</span>
        <div class="title-line"></div>
      </div>

      <div class="about-layout">
        <div class="left-sidebar">
          <div class="profile-card">
            <div class="card-header">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
              </svg>
              <span>Profile</span>
            </div>
            <div class="card-body">
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">Goutom Dash</span>
              </div>
              <div class="info-row">
                <span class="label">Role:</span>
                <span class="value">Software Engineer</span>
              </div>
              <div class="info-row">
                <span class="label">Location:</span>
                <span class="value">Sylhet, Bangladesh</span>
              </div>
              <div class="info-row">
                <span class="label">Experience:</span>
                <span class="value">5+ years</span>
              </div>
            </div>
          </div>

          <div class="json-card">
            <div class="card-header">developer.json</div>
            <pre class="json-body"><code><span class="key">const</span> <span class="var">dev</span> = {
  <span class="key">name</span>: <span class="str">"Goutom Dash"</span>,
  <span class="key">role</span>: <span class="str">"Software Engineer"</span>,
  <span class="key">location</span>: <span class="str">"Sylhet, BD"</span>,
  <span class="key">available</span>: <span class="bool">true</span>,
  <span class="key">stack</span>: [<span class="str">"Vue.js"</span>, <span class="str">"React"</span>, <span class="str">"PHP"</span>]
};</code></pre>
          </div>
        </div>

        <div class="right-content">
          <div class="intro-text">
            <h2 class="intro-title">
              I build <span class="highlight">impactful</span> digital solutions
            </h2>
            <p class="intro-desc">
              With over 5 years of experience in software development, I've worked on products that serve hundreds of thousands of users worldwide.
            </p>
          </div>

          <div class="cards-row">
            <div class="content-card">
              <div class="card-icon">&#128187;</div>
              <h3 class="card-title">My Journey</h3>
              <p class="card-text">
                Currently at <a href="https://wpmanageninja.com" target="_blank">WPManageNinja</a>, I'm a core developer on
                <a href="https://fluentcart.com" target="_blank">Fluent Cart</a>, a high-impact WordPress e-commerce plugin.
                I work with PHP, Vue.js, and the WordPress ecosystem to build performant, secure solutions.
              </p>
              <p class="card-text">
                Before that, at <span class="company">SJ Innovation</span> (New York), I built full-stack applications using React, Node.js, and Express.js.
                I also contributed to <a href="https://calypsaproemr.com" target="_blank">CalypsoProEMR</a>, a HIPAA-compliant healthcare platform.
              </p>
            </div>

            <div class="content-card">
              <div class="card-icon">&#129302;</div>
              <h3 class="card-title">AI & Automation</h3>
              <p class="card-text">
                I've integrated AI into SaaS products and built automation tools. I develop Chrome extensions with TypeScript and create workflows with n8n for smarter, efficient product experiences.
              </p>
            </div>

            <div class="content-card">
              <div class="card-icon">&#127918;</div>
              <h3 class="card-title">Beyond Code</h3>
              <ul class="hobby-list">
                <li>Competitive Programming (ACM Alumni)</li>
                <li>Music & Films</li>
                <li>Exploring New Tech</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineExpose } from "vue";
const sectionRef = ref(null);
defineExpose({ sectionRef });
</script>

<style scoped>
.gh-about {
  background: var(--gh-bg);
  padding: 64px 32px;
  border-top: 1px solid var(--gh-border-light);
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
}

.title-hash {
  font-family: var(--gh-font-mono);
  font-size: 1.5rem;
  color: var(--gh-green);
}

.title-text {
  font-family: var(--gh-font-mono);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gh-text);
}

.title-line {
  flex: 1;
  height: 2px;
  background: var(--gh-border-light);
  margin-left: 16px;
}

.about-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 32px;
}

.left-sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.profile-card,
.json-card {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
  overflow: hidden;
}

.profile-card .card-header,
.json-card .card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: var(--gh-bg-tertiary);
  border-bottom: 1px solid var(--gh-border-light);
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gh-text);
}

.profile-card .card-header svg {
  color: var(--gh-text-muted);
}

.card-body {
  padding: 12px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--gh-border-light);
}

.info-row:last-child {
  border-bottom: none;
}

.label {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text-muted);
}

.value {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text);
}

.json-card {
  background: #24292e;
  border-color: #30363d;
}

.json-card .card-header {
  background: #1c2128;
  border-bottom-color: #30363d;
  color: #8b949e;
}

.json-body {
  padding: 12px;
  margin: 0;
  font-family: var(--gh-font-mono);
  font-size: 0.8rem;
  color: #c9d1d9;
  line-height: 1.6;
  overflow-x: auto;
}

.key { color: #79c0ff; }
.var { color: #d2a8ff; }
.str { color: #a5d6ff; }
.bool { color: #79c0ff; }

.right-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.intro-text {
  margin-bottom: 8px;
}

.intro-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--gh-text);
  margin-bottom: 12px;
}

.highlight {
  color: var(--gh-green);
}

.intro-desc {
  font-size: 1.1rem;
  color: var(--gh-text-secondary);
  line-height: 1.7;
}

.cards-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.content-card {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
  padding: 20px;
}

.card-icon {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gh-text);
  margin-bottom: 12px;
}

.card-text {
  font-size: 0.9rem;
  color: var(--gh-text-secondary);
  line-height: 1.6;
  margin-bottom: 10px;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-text a {
  color: var(--gh-link);
  font-weight: 500;
}

.company {
  color: var(--gh-text);
  font-weight: 500;
}

.hobby-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hobby-list li {
  font-size: 0.9rem;
  color: var(--gh-text-secondary);
  margin-bottom: 8px;
  position: relative;
  padding-left: 16px;
}

.hobby-list li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--gh-green);
  font-family: var(--gh-font-mono);
}

@media (max-width: 1024px) {
  .cards-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about-layout {
    grid-template-columns: 1fr;
  }

  .left-sidebar {
    order: 2;
  }

  .right-content {
    order: 1;
  }
}

@media (max-width: 600px) {
  .gh-about {
    padding: 48px 16px;
  }
}
</style>