<template>
  <section class="hero-section">
    <el-row class="hero-content" justify="center" align="middle" :gutter="40">
      <el-col :xs="24" :md="14" class="text-content">
        <div class="title-wrapper">
          <!-- Animated tech labels -->
          <div class="rotating-labels">
            <span
              v-for="(lang, index) in languages"
              :key="index"
              class="rotating-text"
              :style="{ animationDelay: index * 0.1 + 's' }"
            >
              {{ lang }}
            </span>
          </div>

          <!-- Main Title -->
          <h1 class="hero-title">
            Hey, I'm <span class="highlight">Goutom Dash</span>
          </h1>
        </div>

        <p class="hero-subtitle">Software Engineer & Web Developer</p>
        <p class="hero-location">Based in Sylhet, Bangladesh</p>

        <div class="hero-buttons">
          <el-button
            round
            type="primary"
            size="large"
            @click="$emit('navigate', 'projectsSection')"
          >
            🌟 View Projects
          </el-button>
            <el-button
            round
            type="info"
            size="large"
            plain
            >
            <a
              href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/"
              target="_blank"
              rel="noopener noreferrer"
              style="color: inherit; text-decoration: none;"
            >
              ✉️ Contact Me
            </a>
            </el-button>
        </div>
      </el-col>

      <el-col
        :xs="24"
        :md="10"
        class="image-wrapper"
        @mousemove="handleMouseMove"
        @mouseleave="resetTransform"
      >
        <el-image
          :src="MeImage"
          fit="cover"
          class="hero-image"
          :style="{ transform: imageTransform }"
          :preview-src-list="[MeImage]"
          alt="Goutom Dash"
        />
      </el-col>
    </el-row>
  </section>
</template>

<script setup>
import MeImage from "../assets/images/me.png";
import { ref } from "vue";

const languages = [
  "js",
  "ts",
  "vue",
  "next",
  "wordpress",
  "php",
  "sql",
  "html",
  "css",
  "node",
  "react",
];

const imageTransform = ref("translate(0px, 0px)");

const handleMouseMove = (event) => {
  const container = event.currentTarget.getBoundingClientRect();
  const centerX = container.left + container.width / 2;
  const centerY = container.top + container.height / 2;

  const deltaX = event.clientX - centerX;
  const deltaY = event.clientY - centerY;

  // Calculate the inverse offset (fly away)
  const maxOffset = 40;
  const offsetX = Math.max(-maxOffset, Math.min(maxOffset, -deltaX / 10));
  const offsetY = Math.max(-maxOffset, Math.min(maxOffset, -deltaY / 10));

  imageTransform.value = `translate(${offsetX}px, ${offsetY}px)`;
};

const resetTransform = () => {
  imageTransform.value = "translate(0px, 0px)";
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&display=swap");

.hero-section {
  min-height: 100vh;
  padding: 60px 20px;
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  color: #d1d5db;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 24px;
}

.rotating-labels {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.rotating-text {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: rgba(96, 165, 250, 0.7);
  display: inline-block;
  animation: spin360 3s linear infinite;
}

@keyframes spin360 {
  0% {
    transform: rotateY(0deg);
    opacity: 0.7;
  }
  50% {
    transform: rotateY(180deg);
    opacity: 0.3;
  }
  100% {
    transform: rotateY(360deg);
    opacity: 0.7;
  }
}

.hero-title {
  font-family: "Poppins", sans-serif;
  font-size: 3.25rem;
  font-weight: 400;
  color: #e0e7ff;
  margin: 0;
  letter-spacing: 0.04em;
  line-height: 1.1;
}

.hero-title .highlight {
  color: #60a5fa;
}

.hero-subtitle {
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #93c5fd;
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}

.hero-location {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  color: #a1a1aa;
  margin-bottom: 24px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.el-button--primary {
  background-color: #2563eb;
  border-color: #2563eb;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

.el-button--primary:hover {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.el-button--info.is-plain {
  background-color: transparent;
  color: #60a5fa;
  border-color: #60a5fa;
}

.el-button--info.is-plain:hover {
  background-color: rgba(96, 165, 250, 0.2);
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  transition: transform 0.4s ease;
  will-change: transform;
}
</style>
