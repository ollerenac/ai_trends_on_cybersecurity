import { marked } from 'marked'

const SECTION_LABELS = {
  's01_introduccion': 'Sección 1 — Introducción',
  's02_preliminares': 'Sección 2 — Preliminares',
  's03_background': 'Sección 3 — Background',
  's04_tecnicas_ai': 'Sección 4 — Técnicas AI',
  's05_tendencias_futuro': 'Sección 5 — Tendencias y Futuro',
  's06_politicas': 'Sección 6 — Políticas y Ética',
  's07_conclusion': 'Sección 7 — Conclusión',
}

const files = import.meta.glob('/docs/notas/*.md', { query: '?raw', import: 'default', eager: true })

const nav = document.getElementById('nav-list')
const body = document.getElementById('content-body')

const entries = Object.entries(files).map(([path, content]) => {
  const key = path.replace('/docs/notas/', '').replace('.md', '')
  const label = SECTION_LABELS[key] || key
  return { key, label, content }
})

entries.sort((a, b) => a.key.localeCompare(b.key))

entries.forEach(({ key, label, content }) => {
  const btn = document.createElement('button')
  btn.className = 'nav-item'
  btn.dataset.key = key
  btn.textContent = label
  btn.addEventListener('click', () => renderNote(key, label, content))
  nav.appendChild(btn)
})

function renderNote(key, label, content) {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'))
  document.querySelector(`.nav-item[data-key="${key}"]`)?.classList.add('active')

  const html = marked.parse(content, { gfm: true, breaks: false })
  body.innerHTML = `<article class="note-content">${html}</article>`

  window.scrollTo({ top: 0, behavior: 'smooth' })
  document.getElementById('content').scrollTo({ top: 0, behavior: 'smooth' })
}

if (entries.length > 0) {
  const first = entries[0]
  renderNote(first.key, first.label, first.content)
}
