<template>
  <nav class="gh-top-menu">
    <div class="menu-left">
      <div class="menu-logo">
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="currentColor">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.44 1.12 0 .62.28 1.2.64 1.48-.32.2-.56.56-.56 1.12 0 .79.6 1.43 1.37 1.43.38 0 .72-.28.84-.65.12-.56.44-1.14.8-1.52-.64-.24-1.14-.64-1.14-1.48 0-.88.48-1.44 1.06-1.84-.13-.24-.23-.56-.23-1.12 0-.8.64-1.44 1.44-1.44.32 0 .62.04.92.12.64-.2 1.32-.28 2-.28.68 0 1.36.08 2 .28.3-.08.6-.12.92-.12.8 0 1.44.64 1.44 1.44 0 .56-.1 1.12-.23 1.12.58.4 1.06.96 1.06 1.84 0 1.34-.88 1.98-1.88 1.98-.68 0-1.16-.36-1.36-.76 0 0-.48 1.12-.56 1.36 0 .4.24.68.48.68z"></path>
          <path d="M8 1.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.76 1.7 5.1 4.06 5.93.3.05.4-.13.4-.3 0-.15-.01-.56-.01-1.1-1.66.45-2-.88-2-.88-.37-.94-.9-1.2-.9-1.2-.72-.5.05-.48.05-.48.8 0 .58.63.98.98.98.72 0 1.25-.75 1.25-1.62 0-.88-.48-1.56-1.13-1.96-.58-.36-1.13-.95-1.13-1.95v-.04c0-1.44 1.04-2.52 2.53-2.52 1.36 0 2.27.88 2.27 2.04 0 1.04-.48 1.92-1.13 2.4.15.12.28.36.28.62 0 .48-.28.92-.68 1.16.5.16 1.04.5 1.04 1.32 0 .88-.6 1.6-1.45 1.6-.52 0-.92-.28-1.08-.68 0 0-.42 1.2-.5 1.4-.08.2-.2.32-.4.32-.36 0-.6-.48-.6-.92 0-.64.5-1.2 1.2-1.2.28 0 .52.12.7.32.16-.12.4-.2.64-.2.24 0 .48.08.64.2.18-.2.42-.32.7-.32.7 0 1.2.56 1.2 1.2 0 .44-.28.92-.6.92-.2 0-.36-.12-.44-.32-.08-.2-.5-1.4-.5-1.4-.16.4-.56.68-1.08.68-.88 0-1.45-.72-1.45-1.6 0-1.04.64-1.64 1.2-2.04-.2-.16-.36-.52-.36-1.04 0-.52.24-1.16.68-1.52 0 0-.88 0-1.44-.88-.28-.24-.6-.48-.92-.6-.2-.08-.44-.12-.68-.12-.24 0-.48.04-.68.12-.32.12-.64.36-.92.6-.56.88-1.44.88-1.44.88.44.36.68 1 .68 1.52 0 .52-.16.88-.36 1.04-.56.4-1.08 1-1.08 2.04 0 .88.57 1.6 1.45 1.6z"></path>
        </svg>
        <span class="logo-text">Goutom</span>
      </div>
    </div>

    <div class="menu-center">
      <div class="search-box">
        <span class="search-icon">&#x1F50D;</span>
        <input type="text" placeholder="Type to search..." class="search-input" />
      </div>
    </div>

    <div class="menu-right">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
    </div>
  </nav>
</template>

<style scoped>
.gh-top-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--gh-border-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 1000;
  font-family: var(--gh-font-sans);
}

.menu-left {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.menu-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gh-text);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.menu-logo:hover {
  transform: scale(1.05);
}

.menu-logo svg {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.logo-text {
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
}

.menu-center {
  flex: 1;
  max-width: 500px;
  margin: 0 24px;
}

.search-box {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  opacity: 0.5;
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  font-size: 0.9rem;
  font-family: var(--gh-font-sans);
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border);
  border-radius: 6px;
  color: var(--gh-text);
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  background: var(--gh-bg);
  border-color: var(--gh-blue);
  box-shadow: 0 0 0 3px var(--gh-blue-light);
}

.search-input::placeholder {
  color: var(--gh-text-muted);
}

.menu-right {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 0 0 auto;
}

.nav-link {
  padding: 8px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gh-text-secondary);
  border-radius: 6px;
  transition: all 0.2s ease;
  text-decoration: none;
}

.nav-link:hover {
  background: var(--gh-bg-secondary);
  color: var(--gh-text);
  text-decoration: none;
}

.router-link-exact-active {
  background: var(--gh-bg-secondary);
  color: var(--gh-text);
  font-weight: 600;
}

@media (max-width: 768px) {
  .menu-center {
    display: none;
  }

  .gh-top-menu {
    padding: 0 16px;
  }

  .nav-link {
    padding: 6px 10px;
    font-size: 0.85rem;
  }
}
</style>