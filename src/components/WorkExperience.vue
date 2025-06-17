<template>
  <section class="work-section">
    <div class="content-wrapper">
      <div class="work-header">
        <h2 class="section-heading">Professional Experience</h2>
        <p class="section-description">
          A timeline of my professional journey—contributing to impactful projects and collaborating with industry-leading teams.
        </p>
      </div>

      <div v-for="(job, index) in workExperiences" :key="index" class="work-card">
        <div class="card-top">
          <h4 class="company-name">
            {{ job.company }}
            <span class="duration">({{ job.duration }})</span>
          </h4>
          <p class="company-location">{{ job.location }}</p>
          <p class="position">Position: {{ job.position }}</p>
          <p class="company-desc">{{ job.description }}</p>
        </div>

        <div v-if="job.products?.length" class="product-showcase">
          <p class="section-subtitle">Popular Products:</p>
          <div class="products">
            <div v-for="(product, pIdx) in job.products" :key="pIdx" class="product-item">
              <img :src="product.logo" alt="product logo" class="product-logo" />
              <div class="product-info">
                <p class="product-name">{{ product.name }}</p>
                <p class="product-stats">{{ product.stats }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="responsibilities">
          <p class="section-subtitle">Responsibilities:</p>
          <ul>
            <li v-for="(item, idx) in job.responsibilities" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const workExperiences = [
  {
    company: "WPManage Ninja LLC",
    duration: "2023–2025",
    location: "Delaware, Newark, USA",
    position: "Software Engineer",
    description:
      "WPManage Ninja is known for developing powerful WordPress plugins and solutions that empower website creators and businesses worldwide.",
    responsibilities: [
      "Developed WordPress plugin Fluent Cart, enhancing e-commerce capabilities for WordPress users.",
      "Collaborated with cross-functional teams to develop features to meet user needs and marketing goals.",
      "Ensured plugin compatibility with WordPress core updates and PHP versions.",
      "Optimized backend performance and adhered to WordPress coding standards.",
    ],
    products: [
      {
        name: "Fluent Forms",
        logo: "https://fluentforms.com/wp-content/uploads/2021/05/fluentform-icon1.png",
        stats: "500K+ active installs",
      },
      {
        name: "FluentCRM",
        logo: "https://wishlistmember.com/wp-content/uploads/2021/08/fluentCRM.png",
        stats: "20K+ active installs",
      },
      {
        name: "Fluent Support",
        logo: "https://fluentsupport.com/wp-content/uploads/2023/09/Group-1000015260-1-1.png",
        stats: "10K+ active installs",
      },
      {
        name: "Ninja Tables",
        logo: "https://ps.w.org/ninja-tables/assets/icon-256x256.png?rev=2797890",
        stats: "80K+ active installs",
      }
    ],
  },
  {
    company: "SJ Innovation LLC",
    duration: "2022–2023",
    location: "New York, USA",
    position: "Software Engineer (MERN)",
    description:
      "SJ Innovation is a global software development company specializing in delivering scalable web and mobile solutions across diverse industries.",
    responsibilities: [
      "Built and maintained full-stack web applications using the MERN stack.",
      "Worked collaboratively with frontend and backend teams to deliver high-quality software on tight deadlines.",
      "Integrated RESTful APIs and improved database performance using MongoDB optimization techniques.",
    ],
  },
];
</script>

<style scoped>
.work-section {
  background: #1e1e1e;
  padding: 100px 20px;
  color: #e2e8f0;
  font-family: "Inter", sans-serif;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.work-header {
  margin-bottom: 48px;
  text-align: left;
}

.section-heading {
  font-size: 1.25rem;
  color: #60a5fa;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.6;
  max-width: 800px;
}

.work-card {
background: #1e1e1e;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;
}

.work-card:hover {
  transform: translateY(-4px);
}

.card-top {
  margin-bottom: 20px;
}

.company-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 6px;
}

.duration {
  font-weight: 400;
  color: #9ca3af;
  font-size: 0.95rem;
}

.company-location {
  color: #a1a1aa;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.position {
  font-weight: 500;
  color: #93c5fd;
  margin-bottom: 8px;
}

.company-desc {
  font-size: 0.95rem;
  color: #cbd5e1;
  margin-bottom: 12px;
}

.section-subtitle {
  font-weight: 600;
  margin-bottom: 6px;
  color: #dbeafe;
  font-size: 1rem;
}

/* Product Section */
.product-showcase {
  margin-bottom: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.product-item {
  display: flex;
  align-items: center; /* Center logo + text vertically */
  gap: 10px;
  background: #1f2937;
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  min-width: 200px;
}

.product-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 4px;
  background: white;
  padding: 2px;
}

.product-info {
  flex-direction: column;
  justify-content: center;
  line-height: 1.3;
}

.product-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: #e0f2fe;
}

.product-stats {
  font-size: 0.8rem;
  color: #a5b4fc;
}

/* Responsibilities */
.responsibilities ul {
  list-style: disc;
  padding-left: 20px;
  margin-top: 6px;
}

.responsibilities li {
  margin-bottom: 6px;
  font-size: 0.95rem;
  color: #e2e8f0;
}

@media (max-width: 600px) {
  .products {
    flex-wrap: wrap;
    gap: 8px;
  }
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content horizontally */
    width: 48%;
    min-width: unset;
    box-sizing: border-box;
    margin: 0 0 8px 0;
    padding: 10px 6px;
  }
  .product-logo {
    margin: 0 auto 6px auto; /* Center logo horizontally and add bottom margin */
    width: 32px;
    height: 32px;
    display: block;
  }
  .product-info {
    align-items: center; /* Center text under logo */
    text-align: center;
    width: 100%;
  }
}
</style>
