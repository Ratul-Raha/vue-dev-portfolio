<template>
  <nav class="topnav">
    <div class="nav-inner">
      <router-link to="/" class="nav-brand">
        <span class="brand-prompt">></span>
        <span class="brand-name">goutom</span>
        <span class="brand-sep">@</span>
        <span class="brand-host">portfolio</span>
        <span class="brand-path">:~$</span>
      </router-link>
      <button class="nav-toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span class="toggle-icon" :class="{ open: menuOpen }"></span>
      </button>
      <div class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" class="nav-link" exact-active-class="link-active" @click="menuOpen = false">[ home ]</router-link>
        <router-link to="/projects" class="nav-link" exact-active-class="link-active" @click="menuOpen = false">[ projects ]</router-link>
        <router-link to="/about" class="nav-link" exact-active-class="link-active" @click="menuOpen = false">[ about ]</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  background: var(--bg);
  border-bottom: 2px solid var(--border);
  z-index: 100;
}

.nav-inner {
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.nav-brand {
  font-size: 0.85rem;
  color: var(--text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0;
  white-space: nowrap;
  flex-shrink: 0;
}
.nav-brand:hover {
  text-decoration: underline;
  color: var(--text);
}

.brand-prompt { color: var(--accent-green); margin-right: 4px; }
.brand-name { color: var(--accent-amber); font-weight: 600; }
.brand-sep { color: var(--text-muted); }
.brand-host { color: var(--accent-blue); font-weight: 600; }
.brand-path { color: var(--text-muted); margin-left: 2px; }

.nav-toggle {
  display: none;
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid var(--border);
  cursor: pointer;
  padding: 6px;
  flex-shrink: 0;
}

.toggle-icon {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  position: relative;
  transition: background 0.2s;
}
.toggle-icon::before,
.toggle-icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--text);
  transition: transform 0.2s;
}
.toggle-icon::before { top: -6px; }
.toggle-icon::after { bottom: -6px; }

.toggle-icon.open {
  background: transparent;
}
.toggle-icon.open::before {
  transform: translateY(6px) rotate(45deg);
}
.toggle-icon.open::after {
  transform: translateY(-6px) rotate(-45deg);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  font-size: 0.82rem;
  color: var(--accent-blue);
  text-decoration: underline;
  padding: 4px 8px;
  white-space: nowrap;
}
.nav-link:hover {
  color: var(--accent);
}

.link-active {
  color: var(--accent);
  font-weight: 600;
}

@media (max-width: 600px) {
  .topnav {
    height: auto;
    min-height: 48px;
  }

  .nav-inner {
    flex-wrap: wrap;
    height: auto;
    min-height: 48px;
    padding: 8px 16px;
  }

  .nav-toggle {
    display: block;
    order: 2;
  }

  .nav-brand {
    order: 1;
    flex: 1;
  }

  .nav-links {
    order: 3;
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0;
    padding-top: 8px;
    border-top: 1px solid var(--border);
    margin-top: 8px;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-link {
    width: 100%;
    padding: 8px 0;
    border-bottom: 1px solid var(--border-light);
    text-align: left;
  }
  .nav-link:last-child {
    border-bottom: none;
  }
}
</style>
