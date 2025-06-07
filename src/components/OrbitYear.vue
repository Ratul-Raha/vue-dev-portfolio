<template>
  <TresCanvas clear-color="#0f172a" shadows class="orbit-year-canvas">
    <TresPerspectiveCamera :position="[0, 3, 10]" :look-at="[0, 0, 0]" />
    <OrbitControls />

    <TresAmbientLight :intensity="0.8" />
    <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" cast-shadow />

    <Suspense>
      <primitive :object="textMesh" />
    </Suspense>

    <group :rotation="[0, angle, 0]">
      <mesh
        v-for="(item, i) in projects"
        :key="i"
        :position="projectPosition(i)"
        @pointerover="hovered = true"
        @pointerout="hovered = false"
      >
        <sphereGeometry :args="[0.25, 32, 32]" />
        <meshStandardMaterial :color="hovered ? '#38bdf8' : '#60a5fa'" />
      </mesh>
    </group>
  </TresCanvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { TresCanvas, TresPerspectiveCamera } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import * as THREE from 'three'

const props = defineProps({
  year: String,
  projects: Array,
  index: Number,
})

const angle = ref(0)
const hovered = ref(false)
let animationFrame

const animate = () => {
  angle.value += 0.01
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  animate()
  loadFont()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})

const textMesh = ref(null)

const loadFont = () => {
  const loader = new FontLoader()
  loader.load('/fonts/Roboto_Regular.typeface.json', (font) => {
    const geometry = new TextGeometry(props.year, {
      font,
      size: 0.6,
      height: 0.2,
      bevelEnabled: true,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    })
    const material = new THREE.MeshBasicMaterial({ color: '#60a5fa' })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-1.5, 2, 0)
    textMesh.value = mesh
  })
}

const projectPosition = (i) => {
  const radius = 3 + props.index * 0.5
  const angle = (i / props.projects.length) * 2 * Math.PI
  return [
    Math.cos(angle) * radius,
    0,
    Math.sin(angle) * radius,
  ]
}

watch(hovered, (val) => {
  if (textMesh.value) {
    textMesh.value.material.color.set(val ? '#38bdf8' : '#60a5fa')
  }
})
</script>

<style scoped>
.orbit-year-canvas {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}
</style>
