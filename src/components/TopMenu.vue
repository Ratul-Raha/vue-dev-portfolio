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
      <div class="nav-links">
        <router-link to="/" class="nav-link" exact-active-class="link-active">[ home ]</router-link>
        <router-link to="/projects" class="nav-link" exact-active-class="link-active">[ projects ]</router-link>
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
  font-size: 0.85rem;
  color: var(--text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0;
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
}
.nav-link:hover {
  color: var(--accent);
}

.link-active {
  color: var(--accent);
  font-weight: 600;
}
</style>
