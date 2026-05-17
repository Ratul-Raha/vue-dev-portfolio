<template>
  <nav class="topnav">
    <div class="nav-inner">
      <router-link to="/" class="nav-brand">
        <span class="brand-name">G. Dash</span>
      </router-link>
      <button class="nav-toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span class="toggle-text">{{ menuOpen ? 'Close' : 'Menu' }}</span>
      </button>
      <div class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" class="nav-link" exact-active-class="link-active" @click="menuOpen = false">Home</router-link>
        <router-link to="/projects" class="nav-link" exact-active-class="link-active" @click="menuOpen = false">Projects</router-link>
        <router-link to="/about" class="nav-link" exact-active-class="link-active" @click="menuOpen = false">About</router-link>
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
  background: var(--bg);
  border-bottom: 2px solid var(--border);
  z-index: 100;
}

.nav-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.nav-brand {
  font-family: var(--font);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  padding: 12px 20px;
  border-right: 2px solid var(--border);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.nav-brand:hover {
  background: var(--text);
  color: var(--bg);
  text-decoration: none;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  border-left: 2px solid var(--border);
  cursor: pointer;
  padding: 0 20px;
  font-family: var(--font);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text);
}

.nav-toggle:hover {
  background: var(--text);
  color: var(--bg);
}

.nav-links {
  display: flex;
  align-items: stretch;
}

.nav-link {
  font-family: var(--font);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: var(--text);
  padding: 16px 24px;
  border-left: 2px solid var(--border);
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background 0.2s, color 0.2s;
}

.nav-link:hover {
  background: var(--text);
  color: var(--bg);
  text-decoration: none;
}

.link-active {
  background: var(--text);
  color: var(--bg);
}

@media (max-width: 768px) {
  .nav-inner {
    flex-wrap: wrap;
  }

  .nav-brand {
    border-right: none;
    flex: 1;
  }

  .nav-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    border-top: 2px solid var(--border);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-link {
    width: 100%;
    border-left: none;
    border-bottom: 2px solid var(--border);
  }
  
  .nav-link:last-child {
    border-bottom: none;
  }
}
</style>
