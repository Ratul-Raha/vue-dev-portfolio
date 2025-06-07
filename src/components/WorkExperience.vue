<template>
  <section class="work-section">
    <div class="content-wrapper">
      <div class="work-header">
        <h2 class="section-heading">Professional Experience</h2>
        <p class="section-description">
          A timeline of my professional journey—contributing to impactful projects and collaborating with industry-leading teams.
        </p>
      </div>

      <div v-for="(job, index) in workExperiences" :key="index" class="work-card">
        <h4 class="company-name">
          {{ job.company }} <span class="duration">({{ job.duration }})</span>
        </h4>
        <p class="position">Position: {{ job.position }}</p>
        <p class="company-desc">{{ job.description }}</p>

        <div class="responsibilities">
          <p class="section-subtitle">Responsibilities:</p>
          <ul>
            <li v-for="(item, idx) in job.responsibilities" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const workExperiences = [
  {
    company: "SJ Innovation LLC",
    duration: "2022–2023",
    position: "Software Engineer (MERN)",
    description:
      "SJ Innovation is a global software development company specializing in delivering scalable web and mobile solutions across diverse industries.",
    responsibilities: [
      "Built and maintained full-stack web applications using the MERN stack.",
      "Worked collaboratively with frontend and backend teams to deliver high-quality software on tight deadlines.",
      "Integrated RESTful APIs and improved database performance using MongoDB optimization techniques.",
    ],
  },
  {
    company: "WPManage Ninja LLC",
    duration: "2023–2025",
    position: "Software Engineer",
    description:
      "WPManage Ninja is known for developing powerful WordPress plugins and solutions that empower website creators and businesses worldwide.",
    responsibilities: [
      "Developed WordPress plugin Fluent Cart, enhancing e-commerce capabilities for WordPress users.",
      "Collaborated with cross-functional teams to develop features to meet user needs and marketing goals.",
      "Ensured plugin compatibility with WordPress core updates and PHP versions.",
      "Optimized backend performance and adhered to WordPress coding standards.",
    ],
  },
];
</script>

<style scoped>
.work-section {
  background: #1e1e1e;
  padding: 100px 20px;
  color: #e2e8f0;
  font-family: "Inter", sans-serif;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.work-header {
  margin-bottom: 48px;
}

.section-heading {
  font-size: 1.125rem;
  color: #60a5fa;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.section-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.6;
  max-width: 800px;
}

.work-card {
  background: #1e1e1e;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.company-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 4px;
}

.duration {
  font-weight: 400;
  color: #9ca3af;
  font-size: 0.95rem;
}

.position {
  font-weight: 500;
  color: #93c5fd;
  margin-bottom: 10px;
}

.company-desc {
  font-size: 0.95rem;
  color: #cbd5e1;
  margin-bottom: 16px;
}

.section-subtitle {
  font-weight: 600;
  margin-bottom: 6px;
  color: #dbeafe;
}

.responsibilities ul {
  list-style: disc;
  padding-left: 20px;
  margin: 0;
}

.responsibilities li {
  margin-bottom: 6px;
  font-size: 0.95rem;
  color: #e2e8f0;
}
</style>
