import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(targetRef, stagger = 0) {
  let observer = null

  onMounted(() => {
    const el = targetRef.value
    if (!el) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              el.classList.add('revealed')
              const children = el.querySelectorAll('.reveal-stagger > *')
              children.forEach((child, i) => {
                child.style.setProperty('--reveal-delay', `${i * stagger}ms`)
                child.classList.add('revealed')
              })
            } else {
              entry.target.classList.add('revealed')
              const reveals = entry.target.querySelectorAll('.reveal, .reveal-stagger > *')
              reveals.forEach(t => t && t.classList.add('revealed'))
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
