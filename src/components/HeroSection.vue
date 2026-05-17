<template>
  <section ref="heroRef" class="hero reveal">
    <div class="hero-container">
      <div class="hero-header">
        <div class="hero-title-row">
          <h1 class="hero-title">Goutom Dash</h1>
          <span class="hire-badge">
            <span class="hire-dot"></span>
            Available for Hire
          </span>
        </div>
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
            Architect &middot; Builder &middot; Founder. 6 years+. Still figuring it out.
          </p>
          <div class="hero-actions">
            <a href="https://wa.me/8801684566828" target="_blank" class="action-btn whatsapp-btn">WhatsApp Me!</a>
            <a href="#contactSection" class="action-btn">Get In Touch</a>
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
  padding: 40px 16px 60px;
}

.hero-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero-header {
  border-bottom: 4px solid var(--border);
  padding-bottom: 16px;
  margin-bottom: 8px;
}

.hero-title-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.hire-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #006600;
  color: #ffffff;
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: var(--font);
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
}

.hire-dot {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: pulse-dot 1.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.hero-subtitle {
  font-family: var(--font);
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
  font-family: var(--font);
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
  font-family: var(--font);
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
  font-family: var(--font);
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

.whatsapp-btn {
  background: #25D366;
  color: #ffffff;
  border-color: #25D366;
}

.whatsapp-btn:hover {
  background: #128C7E;
  border-color: #128C7E;
  color: #ffffff;
}

@media (min-width: 768px) {
  .hero {
    padding: 60px 0 60px;
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 40px 16px 40px;
  }
  .hero-title-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .hire-badge {
    font-size: 0.7rem;
    padding: 4px 10px;
  }
  .hire-dot {
    width: 6px;
    height: 6px;
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 0.95rem;
  }
  .lead-text {
    font-size: 0.95rem;
  }
  .hero-bio {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  .hero-actions {
    flex-direction: column;
    gap: 8px;
  }
  .action-btn {
    text-align: center;
    padding: 10px 20px;
    font-size: 0.85rem;
  }
  .inc-badge {
    font-size: 0.7rem;
    padding: 1px 6px;
  }
}
</style>
