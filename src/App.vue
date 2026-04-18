<template>
  <div class="github-app">
    <canvas ref="threeCanvas" class="three-canvas" :class="{ hidden: !isHomePage }"></canvas>
    <TopMenu />
    <router-view />
  </div>
</template>

<script setup>
import TopMenu from './components/TopMenu.vue'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import * as THREE from 'three'

const route = useRoute()
const threeCanvas = ref(null)
const isHomePage = ref(route.path === '/')

onMounted(() => {
  if (threeCanvas.value) {
    initThreeJS()
  }
})

watch(() => route.path, (path) => {
  isHomePage.value = path === '/'
})

function initThreeJS() {
  const canvas = threeCanvas.value
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  camera.position.z = 50

  const geometry = new THREE.BufferGeometry()
  const vertices = []
  for (let i = 0; i < 2000; i++) {
    vertices.push(
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200
    )
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  const material = new THREE.PointsMaterial({
    color: 0x28a745,
    size: 0.5,
    transparent: true,
    opacity: 0.6
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  const lines = []
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x28a745,
    transparent: true,
    opacity: 0.15
  })

  for (let i = 0; i < 300; i++) {
    const points = []
    points.push(new THREE.Vector3(
      (Math.random() - 0.5) * 150,
      (Math.random() - 0.5) * 150,
      (Math.random() - 0.5) * 150
    ))
    points.push(new THREE.Vector3(
      (Math.random() - 0.5) * 150,
      (Math.random() - 0.5) * 150,
      (Math.random() - 0.5) * 150
    ))
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const line = new THREE.Line(lineGeometry, lineMaterial)
    lines.push(line)
    scene.add(line)
  }

  let mouseX = 0, mouseY = 0
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.05
    mouseY = (e.clientY - window.innerHeight / 2) * 0.05
  })

  function animate() {
    requestAnimationFrame(animate)

    particles.rotation.x += 0.0003
    particles.rotation.y += 0.0005

    camera.position.x += (mouseX - camera.position.x) * 0.02
    camera.position.y += (-mouseY - camera.position.y) * 0.02
    camera.lookAt(scene.position)

    lines.forEach(line => {
      line.rotation.x += 0.0002
      line.rotation.y += 0.0003
    })

    renderer.render(scene, camera)
  }

  animate()

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --gh-bg: #ffffff;
  --gh-bg-secondary: #f6f8fa;
  --gh-bg-tertiary: #eaeef2;
  --gh-border: #d0d7de;
  --gh-border-light: #e1e4e8;
  --gh-text: #24292f;
  --gh-text-secondary: #57606a;
  --gh-text-muted: #6e7781;
  --gh-link: #0969da;
  --gh-link-hover: #0550ae;
  --gh-green: #1a7f37;
  --gh-green-light: #dafbe1;
  --gh-green-border: #1a7f37;
  --gh-blue: #0969da;
  --gh-blue-light: #ddf4ff;
  --gh-red: #cf222e;
  --gh-red-light: #ffebe9;
  --gh-orange: #bf8700;
  --gh-purple: #8250df;
  --gh-code-bg: #f6f8fa;
  --gh-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  --gh-font-mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

body {
  font-family: var(--gh-font-sans);
  background: var(--gh-bg);
  color: var(--gh-text);
  line-height: 1.5;
  overflow-x: hidden;
}

.github-app {
  position: relative;
  min-height: 100vh;
}

.three-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.three-canvas.hidden {
  display: none;
}

main {
  max-width: 100%;
  margin: 0;
  font-family: var(--gh-font-sans);
  text-align: left;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  color: var(--gh-text);
}

a {
  color: var(--gh-link);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: var(--gh-link-hover);
}

::selection {
  background: var(--gh-blue-light);
  color: var(--gh-text);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--gh-bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--gh-border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gh-text-muted);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

@keyframes typeCursor {
  0%, 100% { border-right-color: var(--gh-green); }
  50% { border-right-color: transparent; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>