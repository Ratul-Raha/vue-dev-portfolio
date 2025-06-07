<template>
  <section ref="sectionRef" class="projects-section">
    <div class="projects-container">
      <div class="intro">
        <div>
          <h2 class="sub-heading">Explore my work</h2>
          <h3 class="name-title">
            A curated timeline of <span class="highlight">projects</span> I've crafted
          </h3>
        </div>
      </div>

      <el-timeline>
        <el-timeline-item
          v-for="(projects, year) in projectsByYear"
          :key="year"
          color="#60a5fa"
        >
          <h4 class="year-header">{{ year }}</h4>
          <ul class="project-list">
            <li
              v-for="(project, index) in projects"
              :key="index"
              class="project-title"
            >
              <div class="title-line">
                {{ project.title }}
                <span class="tech-icons">
                  <span
                    v-for="(icon, idx) in project.icons"
                    :key="idx"
                    class="tech-icon-box"
                  >
                    <img :src="icon" class="tech-icon" alt="tech icon" />
                  </span>
                </span>
              </div>

              <div class="project-links">
                <a v-if="project.live" :href="project.live" target="_blank">Live</a>
                <a v-if="project.github" :href="project.github" target="_blank">GitHub</a>
              </div>
            </li>
          </ul>
        </el-timeline-item>
      </el-timeline>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { ElTimeline, ElTimelineItem } from "element-plus";

const sectionRef = ref(null);

const icon = (name, color) => `https://cdn.simpleicons.org/${name}/${color}`;

const projects = [
  {
    title: "Tender Scheduler",
    year: "2021",
    icons: [icon("laravel", "FA5555"), icon("jquery", "0769AD")],
  },
  {
    title: "Employee management software",
    year: "2021",
    icons: [icon("php", "777BB4"), icon("html5", "E34F26"), icon("css3", "1572B6")],
  },
  {
    title: "POS and Inventory Management",
    year: "2022",
    icons: [icon("react", "61DAFB"), icon("laravel", "FA5555")],
  },
  {
    title: "Calystapro EMR",
    year: "2022",
    icons: [icon("php", "777BB4"), icon("javascript", "F7DF1E"), icon("html5", "E34F26"), icon("css3", "1572B6")],
    live: "https://www.calystaproemr.com/",
    github: "#",
  },
  {
    title: "Social Media Content Management Tool",
    year: "2022",
    icons: [icon("react", "61DAFB"), icon("nodedotjs", "339933"), icon("express", "000000")],
  },
  {
    title: "Zimbroom - E-Commerce Platform",
    year: "2023",
    icons: [icon("shopify", "7AB55C")],
    live: "https://zimbroom.com",
    github: "#",
  },
  {
    title: "PhoneBlasterPro",
    year: "2023",
    icons: [],
  },
  {
    title: "Tag Generator - Shopify App",
    year: "2023",
    icons: [icon("shopify", "7AB55C"), icon("react", "61DAFB"), icon("nodedotjs", "339933")],
  },
  {
    title: "Fluent Cart",
    year: "2023–2025",
    icons: [icon("vuedotjs", "4FC08D"), icon("laravel", "FA5555"), icon("wordpress", "21759B")],
    live: "https://fluentcart.com",
    github: "#",
  },
  {
    title: "Fun Feed - Chrome Extension",
    year: "2023–2025",
    icons: [icon("googlechrome", "4285F4"), icon("typescript", "3178C6")],
  },
];

const orderedYears = ["2021", "2022", "2023", "2023–2025"];

const projectsByYear = computed(() => {
  const grouped = {};
  for (const year of orderedYears) grouped[year] = [];
  projects.forEach((project) => {
    if (!grouped[project.year]) grouped[project.year] = [];
    grouped[project.year].push(project);
  });
  return grouped;
});
</script>

<style scoped>
.projects-section {
  background: #1e1e1e;
  padding: 80px 20px;
  color: #d1d5db;
  font-family: "Inter", sans-serif;
}

.projects-container {
  max-width: 1100px;
  margin: 0 auto;
}

.intro {
  margin-bottom: 48px;
}

.sub-heading {
  font-size: 1.125rem;
  color: #60a5fa;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.name-title {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 200;
  color: #e0e7ff;
  line-height: 1.3;
}

.name-title .highlight {
  color: #60a5fa;
  font-weight: 300;
  animation: pulseHighlight 2s infinite;
}

.year-header {
  font-size: 1.5rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 8px;
}

.project-list {
  padding-left: 20px;
  list-style-type: disc;
  margin-top: 4px;
}

.project-title {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  margin-bottom: 12px;
}

.title-line {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tech-icons {
  display: inline-flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tech-icon-box {
  background: #2a2a2a;
  padding: 4px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon {
  width: 18px;
  height: 18px;
  display: block;
  filter: brightness(1.2);
}

.project-links {
  font-size: 0.8rem;
  margin-top: 4px;
  color: #a1a1aa;
  display: flex;
  gap: 12px;
  padding-left: 2px;
}

.project-links a {
  color: #93c5fd;
  text-decoration: none;
  transition: color 0.2s;
}

.project-links a:hover {
  color: #bfdbfe;
}

@keyframes pulseHighlight {
  0%, 100% {
    text-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
  }
  50% {
    text-shadow: 0 0 18px rgba(96, 165, 250, 0.9);
  }
}
</style>
