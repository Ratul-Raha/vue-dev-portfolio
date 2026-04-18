<template>
  <section class="gh-experience">
    <div class="exp-container">
      <div class="section-title-row">
        <span class="title-hash">#</span>
        <span class="title-text">experience</span>
        <div class="title-line"></div>
      </div>

      <p class="section-desc">Where I've worked</p>

      <div class="timeline">
        <div v-for="(job, index) in jobs" :key="index" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="exp-card">
            <div class="card-header">
              <div class="company-row">
                <span class="company-icon">
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
                  </svg>
                </span>
                <h3 class="company-name">{{ job.company }}</h3>
                <span class="company-badge">{{ job.badge }}</span>
              </div>
              <span class="job-duration">{{ job.duration }}</span>
            </div>

            <div class="job-position">{{ job.position }}</div>

            <div class="job-location">
              <span class="loc-icon">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M8 0a.75.75 0 0 1 .75.75v6.069l3.195-2.598a.75.75 0 1 1 .86 1.246l-3.813 3.1A.75.75 0 0 1 7.25 9.569V.75A.75.75 0 0 1 8 0z"/>
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" fill="none"/>
                </svg>
              </span>
              {{ job.location }}
            </div>

            <div class="job-desc">{{ job.description }}</div>

            <div v-if="job.products?.length" class="products-block">
              <div class="block-title">
                <span class="title-icon">&#9733;</span>
                Shipped Products
              </div>
              <div class="products-list">
                <div v-for="(prod, pIdx) in job.products" :key="pIdx" class="product-item">
                  <img :src="prod.logo" :alt="prod.name" class="prod-logo" />
                  <div class="prod-info">
                    <span class="prod-name">{{ prod.name }}</span>
                    <span class="prod-stats">{{ prod.stats }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="responsibilities-block">
              <div class="block-title">
                <span class="title-icon">&#10003;</span>
                What I did
              </div>
              <ul class="resp-list">
                <li v-for="(resp, rIdx) in job.responsibilities" :key="rIdx">{{ resp }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    company: "WPManage Ninja LLC",
    badge: "Current",
    duration: "2023 - Present",
    location: "Delaware, USA",
    description: "Building powerful WordPress plugins for website creators worldwide.",
    responsibilities: [
      "Core developer on Fluent Cart - high-impact eCommerce plugin",
      "Improved plugin performance reducing load time by 60%",
      "Built features serving 500K+ active users",
      "Collaborated with cross-functional teams across time zones"
    ],
    products: [
      { name: "Fluent Forms", logo: "https://fluentforms.com/wp-content/uploads/2021/05/fluentform-icon1.png", stats: "500K+ installs" },
      { name: "FluentCRM", logo: "https://wishlistmember.com/wp-content/uploads/2021/08/fluentCRM.png", stats: "20K+ installs" },
      { name: "Fluent Support", logo: "https://fluentsupport.com/wp-content/uploads/2023/09/Group-1000015260-1-1.png", stats: "10K+ installs" }
    ]
  },
  {
    company: "SJ Innovation LLC",
    badge: "Past",
    duration: "2022 - 2023",
    location: "New York, USA",
    description: "Full-stack development for enterprise clients in healthcare and retail.",
    responsibilities: [
      "Built MERN stack applications for enterprise clients",
      "Developed HIPAA-compliant EMR system with PHP",
      "Integrated REST APIs improving data flow by 50%",
      "Worked in agile teams across global time zones"
    ]
  }
];
</script>

<style scoped>
.gh-experience {
  background: var(--gh-bg);
  padding: 64px 32px;
  border-top: 1px solid var(--gh-border-light);
}

.exp-container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.title-hash {
  font-family: var(--gh-font-mono);
  font-size: 1.5rem;
  color: var(--gh-purple);
}

.title-text {
  font-family: var(--gh-font-mono);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gh-text);
}

.title-line {
  flex: 1;
  height: 2px;
  background: var(--gh-border-light);
  margin-left: 16px;
}

.section-desc {
  font-size: 1rem;
  color: var(--gh-text-muted);
  margin-bottom: 32px;
}

.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gh-border-light);
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-dot {
  position: absolute;
  left: -24px;
  top: 0;
  width: 14px;
  height: 14px;
  background: var(--gh-bg);
  border: 3px solid var(--gh-link);
  border-radius: 50%;
  z-index: 1;
}

.exp-card {
  background: var(--gh-bg-secondary);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
  padding: 20px;
  transition: all 0.2s ease;
}

.exp-card:hover {
  border-color: var(--gh-border);
}

.card-header {
  margin-bottom: 12px;
}

.company-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.company-icon {
  color: var(--gh-text-muted);
}

.company-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--gh-text);
}

.company-badge {
  font-size: 0.7rem;
  padding: 2px 8px;
  background: var(--gh-green-light);
  color: var(--gh-green-border);
  border-radius: 10px;
  font-family: var(--gh-font-mono);
}

.job-duration {
  font-family: var(--gh-font-mono);
  font-size: 0.85rem;
  color: var(--gh-text-muted);
}

.job-position {
  font-size: 0.95rem;
  color: var(--gh-link);
  margin-bottom: 6px;
}

.job-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--gh-text-muted);
  margin-bottom: 12px;
}

.loc-icon {
  display: flex;
}

.job-desc {
  font-size: 0.9rem;
  color: var(--gh-text-secondary);
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gh-border-light);
}

.products-block {
  margin-bottom: 16px;
}

.block-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gh-text);
  margin-bottom: 10px;
}

.title-icon {
  color: var(--gh-text-muted);
}

.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--gh-bg);
  border: 1px solid var(--gh-border-light);
  border-radius: 6px;
}

.prod-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 4px;
  background: white;
}

.prod-info {
  display: flex;
  flex-direction: column;
}

.prod-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gh-text);
}

.prod-stats {
  font-family: var(--gh-font-mono);
  font-size: 0.75rem;
  color: var(--gh-text-muted);
}

.responsibilities-block {
  padding-top: 16px;
  border-top: 1px solid var(--gh-border-light);
}

.resp-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
}

.resp-list li {
  position: relative;
  padding-left: 16px;
  font-size: 0.85rem;
  color: var(--gh-text-secondary);
}

.resp-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background: var(--gh-green);
  border-radius: 50%;
}

@media (max-width: 768px) {
  .resp-list {
    grid-template-columns: 1fr;
  }

  .products-list {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .gh-experience {
    padding: 48px 16px;
  }

  .exp-card {
    padding: 16px;
  }
}
</style>