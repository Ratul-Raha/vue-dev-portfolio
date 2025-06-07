<template>
  <div class="portfolio-item">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">View Project</a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.portfolio-item {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  transition: box-shadow 0.3s;
}

.portfolio-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  margin: 0 0 8px;
}

p {
  margin: 0 0 16px;
}
</style>