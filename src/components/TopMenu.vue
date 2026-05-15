<template>
  <nav class="topnav">
    <div class="nav-inner">
      <router-link to="/" class="nav-brand">Goutom Dash</router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">[ Home ]</router-link>
        <router-link to="/projects" class="nav-link">[ Projects ]</router-link>
      </div>
    </div>
  </nav>
</template>

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
  padding: 0 20px;
}

.nav-brand {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
  text-decoration: none;
}
.nav-brand:hover { text-decoration: underline; }

.nav-links { display: flex; gap: 4px; }

.nav-link {
  padding: 4px 8px;
  font-size: 0.85rem;
  color: var(--link);
  text-decoration: underline;
}
.nav-link:hover { color: var(--link-hover); }

.router-link-exact-active {
  color: var(--accent);
  font-weight: 600;
}
</style>
