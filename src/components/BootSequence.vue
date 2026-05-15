<template>
  <div class="boot" v-if="visible">
    <div class="boot-screen">
      <div class="boot-content">
        <div v-for="(line, i) in displayedLines" :key="i" class="boot-line" :class="{ error: line.type === 'error', ok: line.type === 'ok', info: line.type === 'info' }">
          <span class="boot-status">[{{ line.type === 'ok' ? '  OK  ' : line.type === 'error' ? 'FAILED' : ' .... ' }}]</span>
          <span class="boot-msg">{{ line.msg }}</span>
        </div>
        <div class="boot-cursor" v-if="!done">
          <span class="boot-status">[ .... ]</span>
          <span class="boot-msg">_</span>
        </div>
        <div class="boot-end" v-if="done">
          <span class="boot-prompt">$</span> <span class="boot-cmd">./start</span> — <span class="boot-ready">Ready</span>
          <span class="boot-blink">_</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(true)
const done = ref(false)
const displayedLines = ref([])

const bootLines = [
  { msg: 'Booting system...', type: 'info' },
  { msg: 'Loading kernel module', type: 'ok' },
  { msg: 'Initializing memory', type: 'ok' },
  { msg: 'Mounting filesystems', type: 'ok' },
  { msg: 'Starting network services', type: 'ok' },
  { msg: 'Connecting to GitHub API', type: 'ok' },
  { msg: 'Loading AI models', type: 'info' },
  { msg: 'Compiling portfolio assets', type: 'ok' },
  { msg: 'Starting portfolio service', type: 'ok' },
]

let index = 0
let timer = null

function boot() {
  if (index < bootLines.length) {
    displayedLines.value.push(bootLines[index])
    index++
    timer = setTimeout(boot, 120 + Math.random() * 150)
  } else {
    done.value = true
    timer = setTimeout(() => {
      visible.value = false
    }, 1200)
  }
}

onMounted(() => {
  timer = setTimeout(boot, 200)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.boot {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0d1117;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;
}

.boot-screen {
  width: 100%;
  max-width: 560px;
  padding: 24px;
}

.boot-content {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.8;
}

.boot-line {
  display: flex;
  gap: 8px;
  opacity: 0;
  animation: fadeInLine 0.15s ease forwards;
}

@keyframes fadeInLine {
  to { opacity: 1; }
}

.boot-status {
  color: #8b949e;
  width: 72px;
  flex-shrink: 0;
}

.boot-line.ok .boot-status { color: #3fb950; }
.boot-line.error .boot-status { color: #f85149; }
.boot-line.info .boot-status { color: #58a6ff; }

.boot-msg { color: #c9d1d9; }

.boot-cursor {
  display: flex;
  gap: 8px;
}

.boot-cursor .boot-msg {
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

.boot-end {
  display: flex;
  align-items: center;
  gap: 6px;
  animation: fadeInLine 0.3s ease forwards;
}

.boot-prompt { color: #3fb950; }
.boot-cmd { color: #79c0ff; }
.boot-ready { color: #3fb950; font-weight: 600; }

.boot-blink {
  color: #3fb950;
  animation: blink 0.8s step-end infinite;
}
</style>
