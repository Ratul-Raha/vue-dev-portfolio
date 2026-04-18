<template>
  <section class="gh-hero">
    <div class="hero-container">
      <div class="hero-grid">
        <div class="hero-left">
          <div class="typewriter-wrapper">
            <span class="typing-label">~/portfolio</span>
            <span class="cursor-line">
              <span class="typing-text">{{ typedText }}</span>
              <span class="typing-cursor">|</span>
            </span>
          </div>

          <h1 class="hero-title">
            Hey, I'm <span class="highlight">Goutom Dash</span>
          </h1>

          <p class="hero-subtitle">
            <span class="role-prefix">const</span>
            <span class="role">role</span>
            <span class="equals">=</span>
            <span class="role-value">"Software Engineer"</span>
          </p>

          <p class="hero-location">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" class="loc-icon">
              <path d="M8 0a.75.75 0 0 1 .75.75v6.069l3.195-2.598a.75.75 0 1 1 .86 1.246l-3.813 3.1A.75.75 0 0 1 7.25 9.569V.75A.75.75 0 0 1 8 0z"/>
            </svg>
            Based in Sylhet, Bangladesh
          </p>

          <div class="hero-description">
            <p>> Building digital products with precision and care.</p>
            <p>> Specializing in WordPress, React, and scalable solutions.</p>
          </div>

          <div class="hero-actions">
            <a href="#projectsSection" class="gh-button primary">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
              </svg>
              View Projects
            </a>
            <a href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/" target="_blank" class="gh-button secondary">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.5 14v-3.511l1.745.961 2.01-3.053V14h-1.5V9.418l-1.745.964-2.01-3.057V14h2.5zm3.5 0v-2.64l2.01 2.01V14H10v-3.508l-1.5 1.5v-2.64H12v-.5l-2.5 2v.5h-2z"/>
              </svg>
              Contact Me
            </a>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">500K+</span>
              <span class="stat-label">Users</span>
            </div>
          </div>
        </div>

        <div class="hero-right">
          <div class="profile-card">
            <div class="card-header">
              <div class="header-tabs">
                <span class="tab active">profile.tsx</span>
                <span class="tab">info.json</span>
              </div>
              <div class="header-dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
            <div class="card-body">
              <div class="code-block">
                <div class="code-line">
                  <span class="line-num">1</span>
                  <span class="line-content"><span class="code-comment">/**</span></span>
                </div>
                <div class="code-line">
                  <span class="line-num">2</span>
                  <span class="line-content"><span class="code-comment"> * Developer Profile</span></span>
                </div>
                <div class="code-line">
                  <span class="line-num">3</span>
                  <span class="line-content"><span class="code-comment"> */</span></span>
                </div>
                <div class="code-line">
                  <span class="line-num">4</span>
                  <span class="line-content"><span class="code-key">const</span> <span class="code-var">developer</span> = {</span>
                </div>
                <div class="code-line">
                  <span class="line-num">5</span>
                  <span class="line-content">  <span class="code-key">name</span>: <span class="code-string">"Goutom Dash"</span>,</span>
                </div>
                <div class="code-line">
                  <span class="line-num">6</span>
                  <span class="line-content">  <span class="code-key">role</span>: <span class="code-string">"Software Engineer"</span>,</span>
                </div>
                <div class="code-line">
                  <span class="line-num">7</span>
                  <span class="line-content">  <span class="code-key">location</span>: <span class="code-string">"Sylhet, BD"</span>,</span>
                </div>
                <div class="code-line">
                  <span class="line-num">8</span>
                  <span class="line-content">  <span class="code-key">stack</span>: [<span class="code-string">"Vue.js"</span>, <span class="code-string">"React"</span>, <span class="code-string">"PHP"</span>],</span>
                </div>
                <div class="code-line">
                  <span class="line-num">9</span>
                  <span class="line-content">  <span class="code-key">photo</span>: </span><span class="code-string">"</span><span class="img-ref">me.png</span><span class="code-string">"</span><span class="comma">,</span>
                </div>
                <div class="code-line">
                  <span class="line-num">10</span>
                  <span class="line-content">};</span>
                </div>
              </div>

              <div class="profile-image">
                <div class="img-frame">
                  <img :src="MeImage" alt="Goutom Dash" class="profile-img" />
                  <div class="img-overlay">
                    <span class="overlay-emoji">&#128187;</span>
                  </div>
                </div>
              </div>

              <div class="status-bar">
                <span class="status-item">
                  <span class="status-dot green"></span>
                  Available
                </span>
                <span class="status-item">
                  <span class="status-dot"></span>
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MeImage from "../assets/images/me.png";
import { ref, onMounted, onUnmounted } from "vue";

const typedText = ref("");
const fullText = "Welcome to my portfolio";

let charIndex = 0;
let typingInterval = null;

function typeText() {
  if (charIndex < fullText.length) {
    typedText.value += fullText.charAt(charIndex);
    charIndex++;
    typingInterval = setTimeout(typeText, 100);
  }
}

onMounted(() => {
  setTimeout(typeText, 500);
});

onUnmounted(() => {
  if (typingInterval) clearTimeout(typingInterval);
});
</script>

<style scoped>
.gh-hero {
  min-height: 100vh;
  padding: 80px 32px 48px;
  background: var(--gh-bg);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.hero-left {
  animation: fadeInUp 0.8s ease forwards;
}

.typewriter-wrapper {
  margin-bottom: 24px;
}

.typing-label {
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  color: var(--gh-purple);
  display: block;
  margin-bottom: 8px;
}

.cursor-line {
  display: flex;
  align-items: center;
}

.typing-text {
  font-family: var(--gh-font-mono);
  font-size: 1.1rem;
  color: var(--gh-text-secondary);
}

.typing-cursor {
  font-family: var(--gh-font-mono);
  font-size: 1.1rem;
  color: var(--gh-green);
  animation: blink 0.8s step-end infinite;
  margin-left: 4px;
}

.hero-title {
  font-family: var(--gh-font-sans);
  font-size: 3rem;
  font-weight: 700;
  color: var(--gh-text);
  margin-bottom: 16px;
  line-height: 1.2;
}

.highlight {
  color: var(--gh-green);
}

.hero-subtitle {
  font-family: var(--gh-font-mono);
  font-size: 1.1rem;
  color: var(--gh-text-secondary);
  margin-bottom: 8px;
}

.role-prefix { color: var(--gh-purple); }
.role { color: var(--gh-blue); }
.equals { color: var(--gh-text-muted); }
.role-value { color: var(--gh-green); }

.hero-location {
  font-size: 1rem;
  color: var(--gh-text-muted);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.loc-icon {
  color: var(--gh-text-muted);
}

.hero-description {
  margin-bottom: 24px;
}

.hero-description p {
  font-family: var(--gh-font-mono);
  font-size: 0.95rem;
  color: var(--gh-green);
  margin-bottom: 6px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.gh-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.gh-button.primary {
  background: var(--gh-green);
  color: white;
  border: 1px solid var(--gh-green);
}

.gh-button.primary:hover {
  background: var(--gh-green-border);
  transform: translateY(-2px);
}

.gh-button.secondary {
  background: var(--gh-bg);
  color: var(--gh-text);
  border: 1px solid var(--gh-border);
}

.gh-button.secondary:hover {
  background: var(--gh-bg-secondary);
}

.hero-stats {
  display: flex;
  gap: 24px;
}

.stat-item {
  padding: 12px 16px;
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
}

.stat-number {
  font-family: var(--gh-font-mono);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--gh-green);
  display: block;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--gh-text-muted);
  font-family: var(--gh-font-mono);
}

.hero-right {
  animation: fadeInUp 0.8s ease 0.3s forwards;
  opacity: 0;
}

.profile-card {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: #2d2d2d;
}

.header-tabs {
  display: flex;
  gap: 12px;
}

.tab {
  font-family: var(--gh-font-mono);
  font-size: 0.8rem;
  color: #6e7681;
}

.tab.active {
  color: #c9d1d9;
  background: #1e1e1e;
  padding: 4px 8px;
  border-radius: 4px;
}

.header-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #6e7681;
}

.dot:first-child { background: #f85149; }
.dot:nth-child(2) { background: #e3b341; }
.dot:nth-child(3) { background: #3fb950; }

.code-block {
  padding: 12px;
  border-bottom: 1px solid #30363d;
}

.code-line {
  display: flex;
  font-family: var(--gh-font-mono);
  font-size: 0.8rem;
}

.line-num {
  width: 20px;
  color: #484f58;
  user-select: none;
}

.line-content {
  color: #c9d1d9;
}

.code-comment { color: #8b949e; }
.code-key { color: #79c0ff; }
.code-var { color: #d2a8ff; }
.code-string { color: #a5d6ff; }
.img-ref { color: #7ee787; }
.comma { color: #c9d1d9; }

.profile-image {
  padding: 16px;
  display: flex;
  justify-content: center;
}

.img-frame {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #30363d;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 30, 30, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.img-frame:hover .img-overlay {
  opacity: 1;
}

.overlay-emoji {
  font-size: 2rem;
}

.status-bar {
  display: flex;
  gap: 16px;
  padding: 10px 12px;
  border-top: 1px solid #30363d;
  background: #262c36;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--gh-font-mono);
  font-size: 0.75rem;
  color: #8b949e;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #484f58;
}

.status-dot.green { background: #3fb950; }

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-left { order: 2; }
  .hero-right { order: 1; }
  .hero-title { font-size: 2.4rem; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; }
}

@media (max-width: 600px) {
  .gh-hero { padding: 80px 16px 32px; }
  .hero-title { font-size: 1.8rem; }
  .hero-stats { flex-direction: column; gap: 12px; }
}
</style>