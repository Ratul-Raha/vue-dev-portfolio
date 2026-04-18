<template>
  <div class="gh-page">
    <div class="gh-page-content">
      <section class="gh-projects-page">
        <div class="page-header">
          <div class="header-icon">&#x1F4C1;</div>
          <h1 class="page-title">Projects</h1>
        </div>

        <div class="projects-intro">
          <p>A showcase of my work and side projects.</p>
        </div>

        <div class="projects-list">
          <div v-for="(project, index) in projects" :key="index" class="project-item">
            <div class="project-header">
              <h3 class="project-name">{{ project.title }}</h3>
              <span class="project-year">{{ project.year }}</span>
            </div>

            <div class="project-techs">
              <span
                v-for="(icon, idx) in project.icons"
                :key="idx"
                class="tech-icon"
              >
                <img :src="icon" alt="" />
              </span>
            </div>

            <div class="project-actions">
              <a v-if="project.live" :href="project.live" target="_blank" class="project-btn">
                <span>&#x1F310;</span> Live
              </a>
              <a v-if="project.github && project.github !== '#'" :href="project.github" target="_blank" class="project-btn">
                <span>&#x1F4BB;</span> Code
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

<script setup>
const icon = (name, color) => `https://cdn.simpleicons.org/${name}/${color}`;

const projects = [
  {
    title: "Fluent Cart",
    year: "2023-2025",
    icons: [icon("vuedotjs", "4FC08D"), icon("laravel", "FA5555"), icon("wordpress", "21759B")],
    live: "https://fluentcart.com"
  },
  {
    title: "Fun Feed - Chrome Extension",
    year: "2023-2025",
    icons: [icon("googlechrome", "4285F4"), icon("typescript", "3178C6")]
  },
  {
    title: "Tag Generator - Shopify App",
    year: "2023",
    icons: [icon("shopify", "7AB55C"), icon("react", "61DAFB")]
  },
  {
    title: "Zimbroom - E-Commerce",
    year: "2023",
    icons: [icon("shopify", "7AB55C")],
    live: "https://zimbroom.com"
  },
  {
    title: "Calystapro EMR",
    year: "2022",
    icons: [icon("php", "777BB4"), icon("javascript", "F7DF1E")],
    live: "https://www.calystaproemr.com/"
  },
  {
    title: "Social Media Management Tool",
    year: "2022",
    icons: [icon("react", "61DAFB"), icon("node", "339933")]
  },
  {
    title: "POS & Inventory System",
    year: "2022",
    icons: [icon("react", "61DAFB"), icon("laravel", "FA5555")]
  },
  {
    title: "Tender Scheduler",
    year: "2021",
    icons: [icon("laravel", "FA5555"), icon("jquery", "0769AD")]
  }
];
</script>

<style scoped>
.gh-page {
  min-height: 100vh;
  padding-top: 80px;
  background: var(--gh-bg);
}

.gh-page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
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

.projects-intro {
  margin-bottom: 32px;
}

.projects-intro p {
  font-size: 1.1rem;
  color: var(--gh-text-secondary);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.project-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px;
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.project-item:hover {
  border-color: var(--gh-border);
  transform: translateX(4px);
}

.project-header {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
}

.project-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--gh-text);
}

.project-year {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text-muted);
}

.project-techs {
  display: flex;
  gap: 8px;
}

.tech-icon {
  width: 24px;
  height: 24px;
  padding: 4px;
  background: var(--gh-bg-tertiary);
  border-radius: 4px;
}

.tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-actions {
  display: flex;
  gap: 12px;
}

.project-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-family: var(--gh-font-mono);
  color: var(--gh-blue);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.project-btn:hover {
  background: var(--gh-blue-light);
  text-decoration: none;
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

@media (max-width: 768px) {
  .project-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .project-techs {
    flex-wrap: wrap;
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