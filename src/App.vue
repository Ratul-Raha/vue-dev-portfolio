<template>
  <div class="app">
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
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #f4f4f0;
  --bg-alt: #eaeaea;
  --bg-card: #ffffff;
  --text: #111111;
  --text-secondary: #333333;
  --text-muted: #666666;
  --border: #000000;
  --border-light: #000000;
  --accent: #0000ee;
  --accent-red: #d32f2f;
  --accent-blue: #0000cc;
  --accent-green: #006600;
  --font: 'Times New Roman', Times, Georgia, serif;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

::selection {
  background: var(--text);
  color: var(--bg);
}

a {
  color: var(--text);
  text-decoration: none;
}
a:hover {
  color: var(--accent);
  text-decoration: underline;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font);
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.2s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
}

.reveal {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
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

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg); border-left: 1px solid var(--border); }
::-webkit-scrollbar-thumb { background: var(--text); border-radius: 0; }
</style>
