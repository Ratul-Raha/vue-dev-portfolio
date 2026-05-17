<template>
  <section ref="heroRef" class="hero reveal">
    <div class="hero-container">
      <div class="hero-header">
        <h1 class="hero-title">Goutom Dash</h1>
        <h2 class="hero-subtitle">Founding Engineer at Marconi AI</h2>
      </div>

      <div class="hero-content">
        <div class="hero-bio">
          <p class="lead-text">
            Pushing the boundaries of technology at <a href="https://marconi.madstackbd.com" target="_blank">Marconi AI</a>.
            Former Engineer at <a href="https://sjinnovation.com" target="_blank">SJ Innovation</a>, an <span class="inc-badge">INC 5000</span> company,
            and at the incredible team behind <a href="https://wpmanageninja.com" target="_blank">WP Manage Ninja</a>, helping deliver trusted products used by <strong>1.4M+ users</strong> in the WordPress ecosystem.
          </p>
          <p>
            Architect &middot; Builder &middot; Hacker. Five years in. Still figuring it out.
          </p>
          <div class="hero-actions">
            <a href="#projectsSection" class="action-btn">View Projects</a>
            <a href="#contactSection" class="action-btn">Get In Touch</a>
            <a href="https://github.com/Ratul-Raha" target="_blank" class="action-btn">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal"

const heroRef = ref(null)
useScrollReveal(heroRef)
</script>

<style scoped>
.hero {
  padding: 80px 0 60px;
}

.hero-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero-header {
  border-bottom: 4px solid var(--border);
  padding-bottom: 16px;
  margin-bottom: 8px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.hero-subtitle {
  font-family: var(--font-sans);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-muted);
}

.hero-content {
  display: flex;
  flex-direction: column;
}

.hero-bio {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
}

.lead-text {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  line-height: 1.6;
}

.hero-bio p:not(.lead-text) {
  color: var(--text-secondary);
}

.inc-badge {
  display: inline-block;
  background: var(--text);
  color: var(--bg);
  padding: 2px 8px;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: var(--font-sans);
  letter-spacing: 1px;
  vertical-align: middle;
}

.hero-bio a {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  font-weight: 600;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.action-btn {
  display: inline-block;
  padding: 12px 24px;
  border: 2px solid var(--border);
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  text-decoration: none !important;
  transition: all 0.2s;
  background: var(--bg);
  color: var(--text);
}

.action-btn:hover {
  background: var(--text);
  color: var(--bg);
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 3rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .lead-text {
    font-size: 1.2rem;
  }
  .hero-actions {
    flex-direction: column;
  }
  .action-btn {
    text-align: center;
  }
}
</style>
