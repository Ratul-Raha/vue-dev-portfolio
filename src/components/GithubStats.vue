<template>
  <section ref="sectionRef" class="github-stats reveal">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">Open Source Activity</h2>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">GitHub User</span>
          <a href="https://github.com/Ratul-Raha" target="_blank" class="stat-val link">@Ratul-Raha</a>
        </div>
        <div class="stat-card">
          <span class="stat-label">Total Repos</span>
          <span class="stat-val">39</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Total Commits</span>
          <span class="stat-val">2,500+</span>
        </div>
      </div>

      <div class="density-wrapper">
        <div class="density-header">
          <h3 class="density-title">Commit Density Last 12 Months (Public & Private Repos)</h3>
        </div>
        <div class="density-graph">
          <!-- Note: Make sure "Show private contributions on my profile" is checked in your GitHub settings for this to reflect private commits! -->
          <img src="https://ghchart.rshah.org/Ratul-Raha" alt="Ratul-Raha's Github chart" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal"

const sectionRef = ref(null)
useScrollReveal(sectionRef)
</script>

<style scoped>
.github-stats {
  padding: 80px 0 40px;
  border-top: 4px solid var(--border);
}

.section-inner {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-header {
  border-bottom: 2px solid var(--border);
  padding-bottom: 12px;
}

.section-title {
  font-size: 2.5rem;
  letter-spacing: -1px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  border: 2px solid var(--border);
  padding: 20px;
  background: var(--bg-card);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-label {
  font-family: var(--font);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
}

.stat-val {
  font-family: var(--font);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
}

.stat-val.link {
  font-family: var(--font);
  font-size: 1.2rem;
  text-decoration: underline;
  transition: color 0.2s;
}

.stat-val.link:hover {
  color: var(--accent);
}

.density-wrapper {
  border: 2px solid var(--border);
  background: var(--bg-card);
  padding: 24px;
}

.density-header {
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 8px;
}

.density-title {
  font-family: var(--font);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

.density-graph {
  width: 100%;
  overflow-x: auto;
}

.density-graph img {
  min-width: 700px;
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .github-stats {
    padding: 40px 0;
  }
  .section-title {
    font-size: 2rem;
  }
}
</style>
