<template>
  <div ref="pageRef" class="story-page">
    <div class="story-hero">
      <div class="story-hero-inner">
        <span class="chapter-label">The Full Story</span>
        <h1 class="story-title">12 Years.<br />One Journey.</h1>
        <p class="story-subtitle">From "Hello World" to building AI agents. From dropping out to graduating. This is the story of not giving up.</p>
      </div>
    </div>

    <div class="story-content">
      <div class="story-inner">
        <!-- Opening -->
        <div class="opening-section">
          <blockquote class="opening-quote">
            "It took me 12 years to finish what others did in 4. I don't regret a single day of it."
          </blockquote>
          <p class="opening-text">
            This isn't a typical success story. There was no straight path, no clean timeline, no moment where everything clicked into place. There was a kid who typed <code>printf("Hello World");</code> in 2012, got obsessed with competitive programming, dropped out of university, watched his batchmates graduate without him, and spent the next decade quietly proving that persistence beats talent when talent doesn't persist.
          </p>
        </div>

        <!-- Timeline -->
        <div class="timeline-section">
          <h2 class="section-heading">The Journey</h2>

          <div class="timeline">
            <div class="tl-item" v-for="(chapter, i) in chapters" :key="i">
              <div class="tl-marker">
                <span class="tl-dot"></span>
                <span class="tl-line" v-if="i < chapters.length - 1"></span>
              </div>
              <div class="tl-card">
                <span class="tl-year">{{ chapter.year }}</span>
                <h3 class="tl-title">{{ chapter.title }}</h3>
                <p class="tl-text">{{ chapter.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Gallery -->
        <div class="gallery-section">
          <h2 class="section-heading">Snapshots</h2>
          <div class="gallery-grid">
            <div class="gallery-item" v-for="(img, i) in gallery" :key="i">
              <img :src="img.src" :alt="img.alt" loading="lazy" />
              <span class="gallery-caption">{{ img.caption }}</span>
            </div>
          </div>
        </div>

        <!-- Philosophy -->
        <div class="philosophy-section">
          <div class="philosophy-card">
            <h2 class="section-heading">Lessons from the Long Road</h2>
            <ul class="belief-list">
              <li v-for="(belief, i) in beliefs" :key="i">
                <span class="belief-num">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="belief-text">{{ belief }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- CTA -->
        <div class="story-cta">
          <p class="cta-text">That's my story. What's yours?</p>
          <p class="cta-subtext">If you're building something and need someone who doesn't give up, let's talk.</p>
          <router-link to="/" class="cta-btn">Get in Touch</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";
import MeImg from "../assets/images/me.jpg";

const pageRef = ref(null);
useScrollReveal(pageRef);

const chapters = [
  {
    year: "2012",
    title: "Hello World",
    text: "It all began at Metropolitan University, Bangladesh, where I enrolled in a BSc in Computer Science & Engineering. The first program I ever wrote printed two words on a screen: \"Hello World.\" I didn't know it then, but those two words would define the next twelve years of my life."
  },
  {
    year: "2012 – 2014",
    title: "The Competitive Years",
    text: "I dove headfirst into competitive programming. Solved 200+ problems on UVA Online Judge. Competed in ACM ICPC regionals. Won silver in an online programming contest hosted by a Chinese university. Java became my weapon, object-oriented design my philosophy. I was good — or so I thought."
  },
  {
    year: "2014",
    title: "The Drop",
    text: "I dropped out. My batchmates moved on, graduated, got jobs. I was left behind, struggling with things I couldn't name. It was the lowest point — watching everyone cross a finish line I'd abandoned. But quitting the degree didn't mean quitting the dream. I kept coding."
  },
  {
    year: "2014 – 2020",
    title: "The Long Climb",
    text: "Six years of grinding in the dark. Freelancing, learning, failing, rebuilding. No degree, no safety net. Just stubborn persistence and a refusal to accept that the story was over."
  },
  {
    year: "2020",
    title: "MadStack",
    text: "I founded MadStack (madstackbd.com) — my first real venture into professional software development. This was the turning point. The moment I stopped calling myself a student and started calling myself a builder."
  },
  {
    year: "2022",
    title: "SJ Innovation — New York",
    text: "Joined an INC 5000 company as a full-stack engineer. Built enterprise applications in healthcare and retail. Learned what it means to build systems that serve real businesses at scale."
  },
  {
    year: "2023",
    title: "WPManageNinja — Delaware",
    text: "Became a core developer on Fluent Cart, a WordPress eCommerce plugin used by 1.4M+ users. Shipped features that served half a million active users. This was proof — the kid who dropped out was now building software used worldwide."
  },
  {
    year: "2024",
    title: "The Degree — 12 Years Later",
    text: "I finally graduated. Twelve years after I started. Every batchmate had long moved on, but I crossed that finish line on my own terms. It wasn't about the piece of paper — it was about proving to myself that I don't give up."
  },
  {
    year: "2025",
    title: "Marconi AI",
    text: "Stepped into AI. Built customer support agents for WhatsApp and Telegram. Started architecting intelligent systems. The journey from \"Hello World\" to building AI agents felt like the most natural thing in the world."
  },
  {
    year: "Now",
    title: "Still Building",
    text: "Still coding. Still learning. Still figuring it out. The next chapter is unwritten — and that's the best part."
  }
];

const gallery = [
  { src: MeImg, alt: "Goutom Dash", caption: "The face behind the code" }
];

const beliefs = [
  "It took me 12 years to finish what others did in 4. I don't regret a single day of it.",
  "Dropping out wasn't failure — it was a detour. The road back was longer, but it was mine.",
  "Code is read more than written — write for humans, not machines.",
  "The best products solve real problems, not imaginary ones.",
  "Stay curious. The moment you stop learning is the moment you stop growing."
];
</script>

<style scoped>
.story-page {
  min-height: 100vh;
  padding-top: 52px;
}

.story-hero {
  background: var(--bg);
  border-bottom: 4px solid var(--border);
  padding: 60px 16px 48px;
  text-align: center;
}

.story-hero-inner {
  max-width: 600px;
  margin: 0 auto;
}

.chapter-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 12px;
}

.story-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}

.story-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 480px;
  margin: 0 auto;
}

.story-content {
  background: var(--bg);
}

.story-inner {
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.section-heading {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border);
}

/* Opening */
.opening-section {
  padding-bottom: 32px;
  border-bottom: 4px solid var(--border);
}

.opening-quote {
  font-size: 1.3rem;
  font-style: italic;
  color: var(--text);
  line-height: 1.6;
  margin: 0 0 20px 0;
  padding: 0 0 0 20px;
  border-left: 4px solid var(--border);
}

.opening-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.opening-text code {
  background: var(--bg-alt);
  padding: 2px 6px;
  border: 1px solid var(--border-light);
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
}

.tl-item {
  display: flex;
  gap: 16px;
}

.tl-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12px;
  flex-shrink: 0;
  padding-top: 4px;
}

.tl-dot {
  width: 10px;
  height: 10px;
  background: var(--text);
  border-radius: 50%;
  flex-shrink: 0;
  z-index: 1;
}

.tl-line {
  width: 2px;
  flex: 1;
  background: var(--border-light);
  margin: 4px 0;
}

.tl-card {
  flex: 1;
  padding-bottom: 28px;
}

.tl-year {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 4px;
}

.tl-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.tl-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Gallery */
.gallery-section {
  border-top: 4px solid var(--border);
  padding-top: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.gallery-item {
  border: 2px solid var(--border);
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.gallery-item:hover img {
  filter: grayscale(0%);
}

.gallery-caption {
  display: block;
  padding: 8px 12px;
  font-size: 0.8rem;
  color: var(--text-muted);
  background: var(--bg-card);
  border-top: 1px solid var(--border-light);
}

/* Philosophy */
.philosophy-section {
  border-top: 4px solid var(--border);
  padding-top: 40px;
}

.philosophy-card {
  border: 2px solid var(--border);
  background: var(--bg-card);
  padding: 24px;
}

.belief-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.belief-list li {
  display: flex;
  gap: 12px;
  align-items: baseline;
}

.belief-num {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  flex-shrink: 0;
}

.belief-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* CTA */
.story-cta {
  text-align: center;
  padding: 32px 0;
  border-top: 4px solid var(--border);
}

.cta-text {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.cta-subtext {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.cta-btn {
  display: inline-block;
  padding: 12px 28px;
  background: var(--text);
  color: var(--bg);
  font-family: var(--font);
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid var(--border);
  transition: all 0.2s;
}

.cta-btn:hover {
  background: var(--bg);
  color: var(--text);
  text-decoration: none;
}

@media (min-width: 600px) {
  .story-hero {
    padding: 80px 16px 60px;
  }

  .story-title {
    font-size: 3.5rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .story-hero {
    padding: 40px 16px 32px;
  }

  .story-title {
    font-size: 2rem;
  }

  .story-subtitle {
    font-size: 0.9rem;
  }

  .story-inner {
    padding: 24px 16px;
    gap: 32px;
  }

  .section-heading {
    font-size: 1.1rem;
  }

  .tl-card {
    padding-bottom: 20px;
  }

  .tl-title {
    font-size: 1rem;
  }

  .opening-quote {
    font-size: 1.1rem;
  }

  .opening-text {
    font-size: 0.9rem;
  }

  .tl-text {
    font-size: 0.85rem;
  }

  .philosophy-card {
    padding: 16px;
  }
}
</style>
