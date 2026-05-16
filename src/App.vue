<template>
  <div class="app">
    <BootSequence />
    <TopMenu />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import TopMenu from './components/TopMenu.vue'
import BootSequence from './components/BootSequence.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #ffffff;
  --bg-alt: #f5f5f5;
  --bg-card: #fafafa;
  --text: #1a1a1a;
  --text-secondary: #555555;
  --text-muted: #888888;
  --border: #333333;
  --border-light: #cccccc;
  --accent: #cc0000;
  --accent-blue: #0000cc;
  --accent-green: #006600;
  --accent-purple: #660099;
  --accent-amber: #996600;
  --font: 'IBM Plex Mono', 'Courier New', monospace;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  overflow-x: hidden;
}

::selection {
  background: var(--text);
  color: var(--bg);
}

a {
  color: var(--accent-blue);
  text-decoration: underline;
}
a:hover {
  color: var(--accent);
}

h1, h2, h3, h4 {
  font-weight: 700;
  color: var(--text);
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.15s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
}

.reveal {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

.reveal-stagger > * {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: var(--reveal-delay, 0ms);
}
.reveal-stagger > *.revealed {
  opacity: 1;
  transform: translateY(0);
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f0f0f0; }
::-webkit-scrollbar-thumb { background: #aaa; border-radius: 0; }
</style>
