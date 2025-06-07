<template>
  <section ref="sectionRef" class="projects-section">
    <div class="projects-container">
      <h2 class="projects-heading">My Projects</h2>

      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <img :src="project.thumbnail" :alt="project.title" class="project-thumbnail" />
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const sectionRef = ref(null)
defineExpose({ sectionRef })

const projects = [
  {
    title: 'Portfolio Website',
    thumbnail: 'https://via.placeholder.com/600x400?text=Portfolio',
    link: 'https://yourportfolio.com'
  },
  {
    title: 'SaaS Dashboard',
    thumbnail: 'https://via.placeholder.com/600x400?text=Dashboard',
    link: 'https://yourdashboard.com'
  },
  {
    title: 'E-commerce Store',
    thumbnail: 'https://via.placeholder.com/600x400?text=E-commerce',
    link: 'https://yourecommerce.com'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@700;800&display=swap');

.projects-section {
  background: #1e1e1e;
  padding: 80px 20px;
  color: #f3f4f6;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #60a5fa;
  text-align: center;
  margin-bottom: 48px;
  text-shadow: 0 0 10px rgba(96, 165, 250, 0.4);
  letter-spacing: 0.04em;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.project-card {
  background: #2c2c2c;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(96, 165, 250, 0.5);
}

.project-thumbnail {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  background-color: #1f2937;
}

.project-info {
  padding: 16px;
}

.project-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: #93c5fd;
  font-weight: 700;
  transition: color 0.3s;
  letter-spacing: 0.03em;
}

.project-card:hover .project-title {
  color: #60a5fa;
}
</style>

