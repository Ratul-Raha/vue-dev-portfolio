<template>
  <section ref="sectionRef" class="contact reveal">
    <div class="section-inner">
      <h2 class="section-title"><span class="title-hash">#</span> contact</h2>

      <div class="term-line"><span class="prompt">$</span> <span class="cmd">cat</span> contact.txt</div>
      <div class="contact-info">
        <div class="info-row">
          <span class="info-tag">email</span>
          <a href="mailto:goutomdash.ratul@gmail.com" class="info-val">goutomdash.ratul@gmail.com</a>
        </div>
        <div class="info-row">
          <span class="info-tag">github</span>
          <a href="https://github.com/Ratul-Raha" target="_blank" class="info-val">github.com/Ratul-Raha</a>
        </div>
        <div class="info-row">
          <span class="info-tag">linkedin</span>
          <a href="https://www.linkedin.com/in/goutom-kumer-dash-ratul-7b48471b9/" target="_blank" class="info-val">linkedin.com/in/goutom-kumer-dash-ratul</a>
        </div>
      </div>

      <div class="term-line" style="margin-top: 16px;"><span class="prompt">$</span> <span class="cmd">mail</span> <span class="str">-s "hello"</span> goutom</div>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-field">
          <span class="field-prompt">&gt; subject:</span>
          <input v-model="form.subject" type="text" class="field-input" placeholder="Let's work together" required />
        </div>
        <div class="form-field">
          <span class="field-prompt">&gt; message:</span>
          <textarea v-model="form.message" class="field-input field-area" placeholder="Tell me about your project..." rows="3" required></textarea>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-send">
            <span class="prompt2">&gt;</span> Send
          </button>
          <span v-if="sent" class="send-ok">[ message sent ]</span>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal"

const sectionRef = ref(null)
useScrollReveal(sectionRef)

const form = ref({ subject: '', message: '' })
const sent = ref(false)

function handleSubmit() {
  const mailto = `mailto:goutomdash.ratul@gmail.com?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(form.value.message)}`
  window.location.href = mailto
  sent.value = true
  setTimeout(() => { sent.value = false; form.value = { subject: '', message: '' } }, 3000)
}
</script>

<style scoped>
.contact { padding: 40px 20px; border-top: 1px solid var(--border-light); }

.section-inner { max-width: 700px; }

.term-line {
  font-size: 0.88rem;
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.prompt { color: var(--accent-green); font-weight: 600; }
.cmd { color: var(--accent-blue); }
.str { color: var(--accent-green); }
.prompt2 { color: var(--accent-green); font-weight: 600; }

.section-title { font-size: 1.1rem; margin-bottom: 12px; }
.title-hash { color: var(--accent-blue); }

.contact-info {
  border: 2px solid var(--border);
  padding: 10px;
}

.info-row {
  display: flex;
  gap: 12px;
  padding: 5px 0;
  border-bottom: 1px solid var(--border-light);
  font-size: 0.85rem;
}
.info-row:last-child { border-bottom: none; }

.info-tag {
  color: var(--accent-purple);
  width: 72px;
  flex-shrink: 0;
}

.info-val { color: var(--link); text-decoration: underline; word-break: break-all; }

.contact-form {
  border: 2px solid var(--border);
  padding: 12px;
  background: var(--bg-alt);
}

.form-field {
  margin-bottom: 10px;
}

.field-prompt {
  display: block;
  font-size: 0.82rem;
  color: var(--accent-green);
  margin-bottom: 4px;
}

.field-input {
  width: 100%;
  padding: 7px 10px;
  font-family: var(--font);
  font-size: 0.85rem;
  background: var(--bg);
  border: 2px solid var(--border-light);
  color: var(--text);
  outline: none;
}

.field-input:focus {
  border-color: var(--link);
}

.field-area { resize: vertical; }

.form-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-send {
  background: none;
  border: none;
  font-family: var(--font);
  font-size: 0.9rem;
  color: var(--text);
  cursor: pointer;
  padding: 4px 0;
  text-decoration: underline;
}
.btn-send:hover { color: var(--link-hover); }

.send-ok {
  font-size: 0.82rem;
  color: var(--accent-green);
}

@media (min-width: 768px) {
  .contact { padding: 48px 32px; }
}
</style>
