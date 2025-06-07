<template>
  <canvas ref="canvas" class="icon-canvas" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  textureUrl: String
})

const canvas = ref()

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  camera.position.z = 2

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true
  })
  renderer.setSize(80, 80)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const texture = new THREE.TextureLoader().load(props.textureUrl)
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  animate()
})
</script>

<style scoped>
.icon-canvas {
  width: 60px;
  height: 60px;
  display: block;
}
</style>
