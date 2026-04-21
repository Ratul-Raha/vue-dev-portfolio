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

          <div class="hero-description">
            <p>> Full-stack developer & UI enthusiast</p>
            <p>> Turning coffee into clean code since 2019</p>
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
          <div class="terminal-card">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="terminal-title">bash — generate-profile</span>
            </div>
            <div class="terminal-body">
              <div class="terminal-split">
                <div class="terminal-left">
                  <div class="cli-code">
                    <div v-for="(line, index) in cliLines" :key="index" class="cli-line" :class="{ visible: lineVisible[index] }">
                      <span class="cli-prompt">$</span>
                      <span class="cli-text" v-html="line"></span>
                    </div>
                  </div>
                </div>
                <div class="terminal-right">
                  <div class="image-reveal-container">
                    <img :src="MeImage" alt="Goutom Dash" class="revealed-image" :style="{ clipPath: revealClipPath }" />
                    <div class="reveal-overlay" v-if="!revealComplete">
                      <span class="loading-dots">{{ loadingDots }}</span>
                    </div>
                  </div>
                </div>
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
import { ref, computed, onMounted, onUnmounted } from "vue";

const typedText = ref("");
const fullText = "Welcome to my portfolio";

const revealClipPath = computed(() => `inset(0 0 ${100 - revealProgress.value}% 0)`);

let charIndex = 0;
let typingInterval = null;

function typeText() {
  if (charIndex < fullText.length) {
    typedText.value += fullText.charAt(charIndex);
    charIndex++;
    typingInterval = setTimeout(typeText, 100);
  }
}

const cliLines = [
  '<span class="cmd">npm</span> <span class="arg">init</span> developer-profile',
  '<span class="comment">// Loading modules...</span>',
  '<span class="var">const</span> <span class="name">skills</span> = [<span class="str">"Vue"</span>, <span class="str">"React"</span>, <span class="str">"Node"</span>]',
  '<span class="func">import</span> <span class="imp">passion</span> <span class="from">from</span> <span class="str">"./heart"</span>',
  '<span class="comment">// Generating output...</span>',
  '<span class="var">await</span> <span class="func">renderImage</span>(<span class="str">"me.png"</span>)',
  '<span class="success">✓ Profile rendered successfully</span>'
];

const lineVisible = ref([]);
const revealProgress = ref(0);
const revealComplete = ref(false);
const loadingDots = ref("...");

let cliLineIndex = 0;
let cliCharIndex = 0;
let cliInterval = null;
let revealInterval = null;
let dotsInterval = null;

function animateCLI() {
  if (cliLineIndex >= cliLines.length) return;
  
  if (cliCharIndex === 0) {
    lineVisible.value[cliLineIndex] = false;
  }
  
  cliCharIndex++;
  lineVisible.value[cliLineIndex] = cliCharIndex >= cliLines[cliLineIndex].length;
  
  if (lineVisible.value[cliLineIndex]) {
    cliLineIndex++;
    cliCharIndex = 0;
    if (cliLineIndex < cliLines.length) {
      cliInterval = setTimeout(animateCLI, 80);
    } else {
      startImageReveal();
    }
  } else {
    cliInterval = setTimeout(animateCLI, 5);
  }
}

function startImageReveal() {
  revealInterval = setInterval(() => {
    revealProgress.value += 2;
    if (revealProgress.value >= 100) {
      revealProgress.value = 100;
      revealComplete.value = true;
      clearInterval(revealInterval);
    }
  }, 40);
}

function animateDots() {
  const dots = [".", "..", "..."];
  let i = 0;
  dotsInterval = setInterval(() => {
    loadingDots.value = dots[i];
    i = (i + 1) % dots.length;
  }, 300);
}

onMounted(() => {
  setTimeout(typeText, 500);
  setTimeout(() => {
    lineVisible.value = new Array(cliLines.length).fill(false);
    animateCLI();
    animateDots();
  }, 1000);
});

onUnmounted(() => {
  if (typingInterval) clearTimeout(typingInterval);
  if (cliInterval) clearTimeout(cliInterval);
  if (revealInterval) clearInterval(revealInterval);
  if (dotsInterval) clearInterval(dotsInterval);
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

.terminal-card {
  background: #0d1117;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  border: 1px solid #30363d;
  font-family: var(--gh-font-mono);
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #161b22;
  border-bottom: 1px solid #30363d;
}

.terminal-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #f85149; }
.dot.yellow { background: #e3b341; }
.dot.green { background: #3fb950; }

.terminal-title {
  font-size: 0.8rem;
  color: #8b949e;
}

.terminal-body {
  padding: 16px;
}

.terminal-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  min-height: 280px;
}

.terminal-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cli-code {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cli-line {
  display: flex;
  gap: 8px;
  font-size: 0.85rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.cli-line.visible {
  opacity: 1;
  transform: translateX(0);
}

.cli-prompt {
  color: #3fb950;
}

.cli-text :deep(.cmd) { color: #79c0ff; }
.cli-text :deep(.arg) { color: #a5d6ff; }
.cli-text :deep(.comment) { color: #8b949e; }
.cli-text :deep(.var) { color: #ff7b72; }
.cli-text :deep(.name) { color: #d2a8ff; }
.cli-text :deep(.func) { color: #79c0ff; }
.cli-text :deep(.imp) { color: #ffa657; }
.cli-text :deep(.from) { color: #8b949e; }
.cli-text :deep(.str) { color: #a5d6ff; }
.cli-text :deep(.success) { color: #3fb950; }

.terminal-right {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #161b22;
  border-radius: 8px;
  border: 1px solid #30363d;
  position: relative;
  overflow: hidden;
}

.image-reveal-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.revealed-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.reveal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 17, 23, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-dots {
  font-size: 1.2rem;
  color: #3fb950;
  animation: pulse 1s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

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

  .terminal-split {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .terminal-left {
    order: 2;
  }

  .terminal-right {
    order: 1;
    min-height: 200px;
  }
}

@media (max-width: 600px) {
  .gh-hero { padding: 80px 16px 32px; }
  .hero-title { font-size: 1.8rem; }
  .hero-stats { flex-direction: column; gap: 12px; }
}
</style>