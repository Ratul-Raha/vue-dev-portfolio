<template>
  <section ref="sectionRef" class="services-section">
    <div class="content-wrapper">
      <div class="services-header">
        <h2 class="section-heading">Tech Stacks</h2>
        <p class="section-description">
          These are the core technologies I work with to build fast, scalable,
          and reliable digital solutions—from dynamic frontends to powerful
          backends and cloud infrastructure.
        </p>
      </div>

      <el-row :gutter="32" justify="start" align="top" class="services-container">
        <!-- Technologies -->
        <el-col :xs="48" :sm="48" :md="24" class="technologies-column">
          <h3 class="sub-section-title tech-section-title">Technologies I Use</h3>
          <div
            v-for="(techGroup, index) in technologies"
            :key="index"
            class="tech-group"
          >
            <h4 class="tech-sector">{{ techGroup.sector }}</h4>
            <div class="tech-icons">
              <div
                v-for="(tech, idx) in techGroup.techs"
                :key="idx"
                class="tech-icon"
              >
                <CanvasIcon :texture-url="tech.icon" />
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script setup>
import { ref, defineExpose } from "vue";
import CanvasIcon from "./CanvasIcon.vue";

const sectionRef = ref(null);
defineExpose({ sectionRef });

const technologies = [
  {
    sector: "Frontend",
    techs: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    sector: "Backend",
    techs: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
    ]
  },
  {
    sector: "Databases",
    techs: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    sector: "DevOps & Cloud",
    techs: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg" }
    ]
  }
];
</script>

<style scoped>
.services-section {
  background: #1e1e1e;
  padding: 100px 20px;
  color: #e2e8f0;
  font-family: "Inter", sans-serif;
}
.services-header {
  max-width: 1100px;
  margin: 0 auto 40px auto;
  padding: 0 20px;
  text-align: left;
}
.section-heading {
  font-size: 1.125rem;
  color: #60a5fa;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-family: "Inter", sans-serif;
}
.section-description {
  margin-top: 16px;
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.6;
}
.sub-section-title.tech-section-title {
  margin-left: 20px;
}
.tech-group {
  margin-bottom: 32px;
  margin-left: 20px;
}
.tech-sector {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #bfdbfe;
}
.tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.tech-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  text-align: center;
  font-size: 0.75rem;
  color: #e2e8f0;
  border-radius: 12px;
  padding: 6px;
  background: #1e1e1e;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  will-change: transform;
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.2);
}
.tech-icon:hover {
  transform: rotateX(10deg) scale(1.05);
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.4);
}
.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
