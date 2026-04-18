<template>
  <div class="gh-page">
    <div class="about-canvas">
      <canvas ref="canvasRef"></canvas>
    </div>

    <div class="gh-page-content">
      <section class="gh-about-page">
        <div class="about-hero">
          <div class="hero-glow"></div>
          <h1 class="about-title">
            <span class="title-bracket">{</span>
            <span class="title-text">about</span>
            <span class="title-bracket">}</span>
          </h1>
          <p class="about-subtitle">Building digital experiences that matter</p>
        </div>

        <div class="about-layout">
          <div class="about-left">
            <div class="profile-frame">
              <div class="frame-corner tl"></div>
              <div class="frame-corner tr"></div>
              <div class="frame-corner bl"></div>
              <div class="frame-corner br"></div>
              <img :src="MeImage" alt="Goutom Dash" class="profile-img" />
              <div class="status-indicator">
                <span class="status-dot"></span>
                <span class="status-text">Available for work</span>
              </div>
            </div>

            <div class="quick-info">
              <div class="info-row">
                <span class="info-key">location</span>
                <span class="info-val">Sylhet, Bangladesh</span>
              </div>
              <div class="info-row">
                <span class="info-key">company</span>
                <span class="info-val">WPManageNinja</span>
              </div>
              <div class="info-row">
                <span class="info-key">experience</span>
                <span class="info-val">5+ years</span>
              </div>
            </div>

            <div class="social-links">
              <a href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/" target="_blank" class="social-btn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" class="social-btn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="about-right">
            <div class="content-block">
              <h2 class="section-title">
                <span class="title-num">01.</span>
                <span>Who I Am</span>
              </h2>
              <p class="section-text">
                I'm a <span class="highlight">Software Engineer</span> at <span class="highlight-alt">WPManageNinja</span>, where I build WordPress plugins that power hundreds of thousands of websites worldwide.
              </p>
              <p class="section-text">
                My journey in tech started with a curiosity for how things work. That curiosity grew into a passion for building products that make a real impact. Whether it's crafting pixel-perfect UIs or architecting scalable backend systems, I bring precision and care to every line of code.
              </p>
            </div>

            <div class="content-block">
              <h2 class="section-title">
                <span class="title-num">02.</span>
                <span>What I Do</span>
              </h2>
              <div class="skills-grid">
                <div class="skill-tag">Vue.js</div>
                <div class="skill-tag">React</div>
                <div class="skill-tag">TypeScript</div>
                <div class="skill-tag">Node.js</div>
                <div class="skill-tag">PHP</div>
                <div class="skill-tag">Laravel</div>
                <div class="skill-tag">WordPress</div>
                <div class="skill-tag">MySQL</div>
              </div>
            </div>

            <div class="content-block">
              <h2 class="section-title">
                <span class="title-num">03.</span>
                <span>Philosophy</span>
              </h2>
              <ul class="philosophy-list">
                <li><span class="bullet">→</span> Code is read more than written — write for humans, not machines</li>
                <li><span class="bullet">→</span> Perfect is the enemy of good — ship, iterate, improve</li>
                <li><span class="bullet">→</span> Constraints breed creativity — work within limits to find elegant solutions</li>
              </ul>
            </div>

            <div class="content-block">
              <h2 class="section-title">
                <span class="title-num">04.</span>
                <span>Beyond Code</span>
              </h2>
              <p class="section-text">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or diving into a good sci-fi novel. I believe in continuous learning and staying curious about the world of software.
              </p>
            </div>
          </div>
        </div>

        <div class="back-link">
          <router-link to="/" class="gh-back-button">
            <span class="back-arrow">←</span>
            <span>cd ..</span>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import MeImage from "../assets/images/me.png";
import { ref, onMounted, onUnmounted } from "vue";

const canvasRef = ref(null);
let animationId = null;

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(63, 185, 80, ${this.opacity})`;
    ctx.fill();
  }
}

class GridLine {
  constructor(canvas, isHorizontal) {
    this.canvas = canvas;
    this.isHorizontal = isHorizontal;
    this.progress = 0;
    this.speed = 0.005 + Math.random() * 0.01;
    this.delay = Math.random() * 2000;
    this.started = false;
  }

  update(deltaTime) {
    if (!this.started) {
      if (this.delay > 0) {
        this.delay -= deltaTime;
      } else {
        this.started = true;
      }
      return;
    }

    if (this.progress < 1) {
      this.progress += this.speed;
      if (this.progress > 1) this.progress = 1;
    }
  }

  draw(ctx) {
    if (!this.started) return;

    const color = `rgba(63, 185, 80, ${0.1 + this.progress * 0.2})`;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;

    ctx.beginPath();
    if (this.isHorizontal) {
      const y = Math.random() * this.canvas.height;
      ctx.moveTo(0, y);
      ctx.lineTo(this.canvas.width * this.progress, y);
    } else {
      const x = Math.random() * this.canvas.width;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.canvas.height * this.progress);
    }
    ctx.stroke();
  }
}

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext('2d');

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 50 }, () => new Particle(canvas));
  const gridLines = [
    ...Array.from({ length: 5 }, () => new GridLine(canvas, true)),
    ...Array.from({ length: 5 }, () => new GridLine(canvas, false))
  ];

  let lastTime = performance.now();

  const animate = (currentTime) => {
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    ctx.fillStyle = 'rgba(13, 17, 23, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw(ctx);
    });

    gridLines.forEach(line => {
      line.update(deltaTime);
      line.draw(ctx);
    });

    animationId = requestAnimationFrame(animate);
  };

  animate(performance.now());
});

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId);
});
</script>

<style scoped>
.gh-page {
  min-height: 100vh;
  background: var(--gh-bg);
  position: relative;
  overflow: hidden;
}

.about-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.about-canvas canvas {
  width: 100%;
  height: 100%;
}

.gh-page-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 32px 48px;
}

.about-hero {
  text-align: center;
  margin-bottom: 48px;
  position: relative;
}

.hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(63, 185, 80, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.about-title {
  font-family: var(--gh-font-mono);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.title-bracket {
  color: var(--gh-green);
  opacity: 0.6;
}

.title-text {
  color: var(--gh-text);
  margin: 0 8px;
}

.about-subtitle {
  font-family: var(--gh-font-mono);
  font-size: 1.1rem;
  color: var(--gh-text-muted);
}

.about-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 48px;
  align-items: start;
}

.about-left {
  position: sticky;
  top: 100px;
}

.profile-frame {
  position: relative;
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
}

.frame-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--gh-green);
  border-style: solid;
}

.frame-corner.tl {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
  border-radius: 12px 0 0 0;
}

.frame-corner.tr {
  top: -1px;
  right: -1px;
  border-width: 2px 2px 0 0;
  border-radius: 0 12px 0 0;
}

.frame-corner.bl {
  bottom: -1px;
  left: -1px;
  border-width: 0 0 2px 2px;
  border-radius: 0 0 0 12px;
}

.frame-corner.br {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
  border-radius: 0 0 12px 0;
}

.profile-img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  margin-top: 12px;
  border-top: 1px solid var(--gh-border);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gh-green);
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.status-text {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text-secondary);
}

.quick-info {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
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

.info-key {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text-muted);
}

.info-val {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text);
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border);
  border-radius: 8px;
  color: var(--gh-text-secondary);
  transition: all 0.2s ease;
}

.social-btn:hover {
  border-color: var(--gh-green);
  color: var(--gh-green);
  background: var(--gh-bg-tertiary);
}

.about-right {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.content-block {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border);
  border-radius: 12px;
  padding: 24px;
}

.section-title {
  font-family: var(--gh-font-mono);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--gh-text);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.title-num {
  color: var(--gh-green);
  font-size: 1rem;
}

.section-text {
  font-size: 0.95rem;
  color: var(--gh-text-secondary);
  line-height: 1.7;
  margin-bottom: 12px;
}

.section-text:last-child {
  margin-bottom: 0;
}

.highlight {
  color: var(--gh-green);
}

.highlight-alt {
  color: var(--gh-purple);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  padding: 8px 14px;
  background: var(--gh-bg);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
  color: var(--gh-text-secondary);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  border-color: var(--gh-green);
  color: var(--gh-green);
}

.philosophy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.philosophy-list li {
  display: flex;
  gap: 12px;
  padding: 10px 0;
  font-size: 0.95rem;
  color: var(--gh-text-secondary);
  border-bottom: 1px solid var(--gh-border-light);
}

.philosophy-list li:last-child {
  border-bottom: none;
}

.bullet {
  color: var(--gh-green);
  font-family: var(--gh-font-mono);
}

.back-link {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--gh-border);
}

.gh-back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border);
  border-radius: 8px;
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  color: var(--gh-text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.gh-back-button:hover {
  border-color: var(--gh-green);
  color: var(--gh-green);
}

.back-arrow {
  color: var(--gh-green);
}

@media (max-width: 900px) {
  .about-layout {
    grid-template-columns: 1fr;
  }

  .about-left {
    position: static;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .gh-page-content {
    padding: 80px 16px 32px;
  }

  .about-title {
    font-size: 2rem;
  }

  .content-block {
    padding: 20px;
  }
}
</style>