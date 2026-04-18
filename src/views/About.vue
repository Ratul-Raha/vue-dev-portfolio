<template>
  <div class="gh-page">
    <div class="gh-page-content">
      <section class="gh-about-page">
        <div class="page-header">
          <div class="header-icon">&#x1F464;</div>
          <h1 class="page-title">About Me</h1>
        </div>

        <div class="about-grid">
          <div class="about-card">
            <h2 class="card-title">Personal Information</h2>
            <div class="info-list">
              <div class="info-item">
                <span class="info-label">Name:</span>
                <span class="info-value">Goutom Dash</span>
              </div>
              <div class="info-item">
                <span class="info-label">Role:</span>
                <span class="info-value">Software Engineer</span>
              </div>
              <div class="info-item">
                <span class="info-label">Location:</span>
                <span class="info-value">Sylhet, Bangladesh</span>
              </div>
              <div class="info-item">
                <span class="info-label">Experience:</span>
                <span class="info-value">5+ Years</span>
              </div>
            </div>
          </div>

          <div class="about-card">
            <h2 class="card-title">Background</h2>
            <p class="about-text">
              I'm a software engineer with a passion for building impactful digital products.
              Currently working at WPManageNinja, I've contributed to WordPress plugins used by
              hundreds of thousands of users worldwide.
            </p>
            <p class="about-text">
              My expertise spans across frontend (Vue.js, React), backend (PHP, Laravel, Node.js),
              and the WordPress ecosystem. I love solving complex problems and creating scalable solutions.
            </p>
          </div>

          <div class="about-card">
            <h2 class="card-title">Work Philosophy</h2>
            <ul class="philosophy-list">
              <li>Build for scale and maintainability</li>
              <li>User experience comes first</li>
              <li>Clean, documented code matters</li>
              <li>Continuous learning is essential</li>
            </ul>
          </div>

          <div class="about-card">
            <h2 class="card-title">Contact</h2>
            <div class="contact-links">
              <a href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/" target="_blank" class="contact-link">
                <span class="link-icon">&#x1F4CB;</span>
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" class="contact-link">
                <span class="link-icon">&#x1F4BB;</span>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="back-link">
          <router-link to="/" class="gh-back-button">
            <span class="back-icon">&#x2190;</span>
            Back to Home
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.gh-page {
  min-height: 100vh;
  padding-top: 80px;
  background: var(--gh-bg);
}

.gh-page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gh-border-light);
}

.header-icon {
  font-size: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--gh-text);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.about-card {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 8px;
  padding: 24px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--gh-text);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--gh-border-light);
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  gap: 12px;
}

.info-label {
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  color: var(--gh-text-muted);
  min-width: 100px;
}

.info-value {
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  color: var(--gh-text);
}

.about-text {
  font-size: 0.95rem;
  color: var(--gh-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.about-text:last-child {
  margin-bottom: 0;
}

.philosophy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.philosophy-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: var(--gh-text-secondary);
}

.philosophy-list li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--gh-green);
  font-family: var(--gh-font-mono);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: var(--gh-bg);
  border-radius: 6px;
  font-size: 0.95rem;
  color: var(--gh-text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.contact-link:hover {
  background: var(--gh-green-light);
  color: var(--gh-green-border);
  text-decoration: none;
}

.link-icon {
  font-size: 1rem;
}

.back-link {
  padding-top: 24px;
  border-top: 1px solid var(--gh-border-light);
}

.gh-back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border);
  border-radius: 6px;
  font-family: var(--gh-font-mono);
  font-size: 0.9rem;
  color: var(--gh-text);
  text-decoration: none;
  transition: all 0.2s ease;
}

.gh-back-button:hover {
  background: var(--gh-bg-tertiary);
  border-color: var(--gh-text-muted);
}

.back-icon {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .gh-page-content {
    padding: 16px;
  }

  .page-title {
    font-size: 1.6rem;
  }
}
</style>