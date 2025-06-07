<template>
  <section ref="sectionRef" class="about-section">
    <div class="about-container">
      <div class="intro">
        <div>
          <h2 class="sub-heading">Know me more</h2>
          <h3 class="name-title">
            I'm <span class="highlight">Goutom Dash</span>, a Software Engineer
          </h3>

          <div class="desc-segment">
            <h4 class="segment-title">What I Do</h4>
            <p class="description">
              For the past 2 years at
              <a
                href="https://wpmanageninja.com"
                target="_blank"
                class="fluentcart-link"
              >
                WPManageNinja </a
              >, I've been a core developer on a high-impact WordPress plugin
              project:
              <a
                href="https://www.fluentcart.com"
                target="_blank"
                class="fluentcart-link"
              >
                Fluent Cart.
              </a>
              <br />
              My stack here: PHP, Vue.js, and deep integration with the
              WordPress ecosystem. I focus on building performant, secure, and
              extensible solutions that empower users and businesses.
            </p>
            <p class="description">
              Before that, I contributed to global, enterprise-level solutions
              at SJ Innovation, a New York-based software company. There, I
              worked on full-stack applications using React, Node.js, and
              Express.js—collaborating across time zones in agile teams. I was
              also involved in developing a HIPAA-compliant EMR platform,
                <a
                href="https://calypsaproemr.com"
                target="_blank"
                class="fluentcart-link"
                >
                CalypsaProEMR
                </a>, built with PHP, which emphasized secure data
              handling and healthcare compliance.
            </p>
          </div>

          <div class="desc-segment">
            <h4 class="segment-title">AI & Automation</h4>
            <p class="description">
              I have hands-on experience integrating AI into SaaS products and
              building utility tools powered by AI. I’ve also developed Google
              Chrome extensions using <strong>TypeScript</strong> and automated
              workflows using <strong>n8n</strong>, enabling smarter, more
              efficient product experiences.
            </p>
          </div>

          <div class="desc-segment">
            <h4 class="segment-title">Competitive Programming & Beyond</h4>
            <p class="description">
              I am an <strong>ACM Programming Alumni</strong> where I learned
              the art of structured problem-solving, efficiency, and thinking
              under pressure.
              <br />
              When I'm not pushing commits, you'll find me immersed in music,
              bingeing films, or trying out the latest dev tools and tech
              stacks. I'm always curious, always exploring.
            </p>
          </div>
        </div>
      </div>

      <div class="info-cards">
        <div class="info-item">
          <span class="label">Experience:</span
          ><span class="value">5+ years</span>
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@200;800&display=swap");

.about-section {
  background: #1e1e1e;
  padding: 100px 20px;
  color: #d1d5db;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
}

.about-container {
  max-width: 1100px;
  width: 100%;
  animation: fadeIn 1s ease-in-out;
}

.desc-segment {
  margin-bottom: 32px;
  padding-left: 8px;
  border-left: 3px solid #60a5fa;
}

.segment-title {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  color: #60a5fa;
  margin-bottom: 12px;
  user-select: none;
}

.intro {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
}

.vertical-line {
  width: 4px;
  height: 40px;
  background: linear-gradient(to bottom, #60a5fa, transparent);
  border-radius: 4px;
  margin-bottom: 16px;
  animation: growLine 1.2s ease forwards;
}

.section-divider {
  width: 64px;
  height: 4px;
  background: linear-gradient(to right, #60a5fa, #818cf8);
  border-radius: 2px;
  margin: 40px 0 16px;
}

.sub-heading {
  font-size: 1.125rem;
  color: #60a5fa;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-family: "Inter", sans-serif;
}

.name-title {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 200;
  color: #e0e7ff;
  margin-bottom: 16px;
  line-height: 1.3;
}

.name-title .highlight {
  color: #60a5fa;
  font-weight: 300;
  animation: pulseHighlight 2s infinite;
}

.description {
  font-size: 1.1rem;
  color: #d4d4d8;
  line-height: 1.8;
  margin-bottom: 16px;
}

ul.list {
  padding-left: 1rem;
  margin-bottom: 16px;
}

ul.list li {
  margin-bottom: 6px;
  font-size: 1.05rem;
  color: #d4d4d8;
  list-style-type: disc;
}

.info-cards {
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 4px;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
}

.info-item {
  display: flex;
  gap: 6px;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
}

.info-item:not(:last-child)::after {
  content: "|";
  margin-left: 12px;
  color: #4b5563;
}

.label {
  font-weight: 700;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.value {
  font-weight: 400;
  color: #e0e7ff;
}

.fluentcart-link {
  color: #60a5fa; /* blue-400 */
  font-weight: 600;
  text-decoration: underline;
}

@keyframes pulseHighlight {
  0%,
  100% {
    text-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
  }
  50% {
    text-shadow: 0 0 18px rgba(96, 165, 250, 0.9);
  }
}

@keyframes growLine {
  from {
    height: 0;
  }
  to {
    height: 40px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
