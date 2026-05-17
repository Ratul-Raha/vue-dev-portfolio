<template>
  <section ref="sectionRef" class="contact reveal">
    <div class="section-inner">
      <div class="contact-card">
        <h2 class="section-title">Let's work together</h2>
        <p class="contact-subtitle">Have a project in mind? Reach out.</p>
        <div class="contact-grid">
          <a href="mailto:gkdratul@gmail.com" class="contact-item">
            <div class="contact-icon">✉</div>
            <div class="contact-detail">
              <span class="detail-label">Email</span>
              <span class="detail-value">gkdratul@gmail.com</span>
            </div>
          </a>
          <a href="https://wa.me/8801684566828" target="_blank" class="contact-item whatsapp">
            <div class="contact-icon">💬</div>
            <div class="contact-detail">
              <span class="detail-label">WhatsApp</span>
              <span class="detail-value">+8801684566828</span>
            </div>
          </a>
          <a href="https://github.com/Ratul-Raha" target="_blank" class="contact-item">
            <div class="contact-icon">⌨</div>
            <div class="contact-detail">
              <span class="detail-label">GitHub</span>
              <span class="detail-value">Ratul-Raha</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/goutom-dash-7b48471b9/" target="_blank" class="contact-item">
            <div class="contact-icon">in</div>
            <div class="contact-detail">
              <span class="detail-label">LinkedIn</span>
              <span class="detail-value">Goutom Dash</span>
            </div>
          </a>
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
.contact {
  padding: 32px 16px 40px;
  border-top: 4px solid var(--border);
}

.section-inner {
  max-width: 1000px;
  margin: 0 auto;
}

.contact-card {
  border: 2px solid var(--border);
  background: var(--bg-card);
  padding: 24px;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.contact-subtitle {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--bg-card);
  text-decoration: none;
  color: var(--text);
  transition: background 0.15s;
}

.contact-item:hover {
  background: var(--bg-alt);
  text-decoration: none;
}

.contact-item.whatsapp:hover {
  background: #e8f5e9;
}

.contact-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  border: 1px solid var(--border);
  font-size: 1rem;
  flex-shrink: 0;
}

.contact-detail {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.detail-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 0.85rem;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .contact {
    padding-left: 0;
    padding-right: 0;
  }
  .contact-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 600px) {
  .contact {
    padding: 24px 0 32px;
  }
  .contact-card {
    padding: 16px;
  }
  .section-title {
    font-size: 1.2rem;
  }
  .contact-subtitle {
    font-size: 0.85rem;
  }
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .contact-item {
    padding: 12px;
  }
}
</style>
