# Presentación AI en Ciberseguridad — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Construir una presentación web estilo TED de 45 minutos con Reveal.js + Chart.js, desplegada en GitHub Pages vía GitHub Actions, para la conferencia INICTEL Perú "Tendencias de AI en Ciberseguridad".

**Architecture:** Vite como build tool, Reveal.js para la presentación (slides con navegación horizontal/vertical), Chart.js para 4 visualizaciones interactivas embebidas en slides específicos. GitHub Actions hace `vite build` y despliega `dist/` a GitHub Pages en cada push a `main`.

**Tech Stack:** Node.js, Vite 5, Reveal.js 5, Chart.js 4, GitHub Pages, GitHub Actions

---

## Task 1: Scaffold del proyecto Vite

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `main.js`

**Step 1: Inicializar npm y instalar dependencias**

```bash
cd /home/researcher/Research/inictel/conferencias/ai_trends_on_cybersecurity
npm init -y
npm install reveal.js chart.js
npm install --save-dev vite
```

**Step 2: Crear `vite.config.js`**

```js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ai_trends_on_cybersecurity/',
})
```

**Step 3: Actualizar `package.json` con scripts**

Agregar en la sección `"scripts"`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**Step 4: Verificar que el dev server arranca**

```bash
npm run dev
```
Esperado: `Local: http://localhost:5173/ai_trends_on_cybersecurity/` sin errores.

**Step 5: Commit**

```bash
git init
git add package.json package-lock.json vite.config.js
git commit -m "feat: scaffold vite project"
```

---

## Task 2: GitHub Actions — Deploy a GitHub Pages

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: Crear el workflow**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

**Step 2: Crear el repo en GitHub y subir**

```bash
git remote add origin https://github.com/ollerenac/ai_trends_on_cybersecurity.git
git branch -M main
git push -u origin main
```

**Step 3: Habilitar GitHub Pages**

En GitHub → Settings → Pages → Source: seleccionar **"GitHub Actions"**.

**Step 4: Verificar deploy**

Ir a `https://github.com/ollerenac/ai_trends_on_cybersecurity/actions` y confirmar que el workflow completa sin errores.

---

## Task 3: Estructura HTML base con Reveal.js

**Files:**
- Modify: `index.html`
- Create: `main.js`

**Step 1: Crear `index.html` con estructura Reveal.js**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tendencias de AI en Ciberseguridad — INICTEL Perú 2026</title>
  <link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" />
  <link rel="stylesheet" href="/css/theme.css" />
</head>
<body>
  <!-- Logo institucional fijo en todas las slides -->
  <div id="logo-overlay">
    <img src="/images/inictel_peru_logo.jpeg" alt="INICTEL Perú" />
  </div>

  <!-- Partículas de fondo -->
  <canvas id="particles-canvas"></canvas>

  <div class="reveal">
    <div class="slides">
      <!-- ACT I -->
      <section data-act="1">
        <h1 class="act-title">ACT I</h1>
        <h2 class="act-subtitle">El Problema</h2>
        <aside class="notes">Introducción. Contextualiza el escenario actual de ciberseguridad.</aside>
      </section>

      <!-- Slides ACT I se agregan en Task 5 -->

      <!-- ACT II -->
      <section data-act="2">
        <h1 class="act-title">ACT II</h1>
        <h2 class="act-subtitle">La Solución — Inteligencia Artificial</h2>
        <aside class="notes">Pivote hacia las soluciones basadas en AI.</aside>
      </section>

      <!-- Slides ACT II se agregan en Task 6 y 7 -->

      <!-- ACT III -->
      <section data-act="3">
        <h1 class="act-title">ACT III</h1>
        <h2 class="act-subtitle">El Futuro y los Riesgos</h2>
        <aside class="notes">Tendencias emergentes, adversarial attacks, ética y cierre.</aside>
      </section>

      <!-- Slides ACT III se agregan en Task 8 -->
    </div>
  </div>

  <script type="module" src="/main.js"></script>
</body>
</html>
```

**Step 2: Crear `main.js`**

```js
import Reveal from 'reveal.js'
import './css/theme.css'
import { initParticles } from './js/particles.js'
import { initCharts } from './js/charts.js'

const deck = new Reveal({
  hash: true,
  transition: 'fade',
  transitionSpeed: 'slow',
  backgroundTransition: 'fade',
  controls: true,
  progress: true,
  center: true,
  slideNumber: 'c/t',
  width: 1280,
  height: 720,
  margin: 0.04,
})

deck.initialize().then(() => {
  initParticles()
  initCharts(deck)
})
```

**Step 3: Verificar en browser**

```bash
npm run dev
```
Esperado: página negra con el texto "ACT I / El Problema" visible, sin errores en consola.

**Step 4: Commit**

```bash
git add index.html main.js
git commit -m "feat: base reveal.js structure with act titles"
```

---

## Task 4: CSS Theme oscuro con identidad visual

**Files:**
- Create: `css/theme.css`

**Step 1: Crear `css/theme.css`**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap');

:root {
  --bg: #0a0a0f;
  --primary: #00d4ff;
  --accent: #ff3366;
  --positive: #00ff88;
  --text: #e8e8f0;
  --text-muted: #888899;
  --card-bg: rgba(255,255,255,0.04);
}

.reveal-viewport {
  background: var(--bg);
}

.reveal {
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: var(--text);
}

/* Títulos */
.reveal h1 {
  font-size: 2.4em;
  font-weight: 900;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.1;
}

.reveal h2 {
  font-size: 1.6em;
  font-weight: 700;
  color: var(--text);
}

.reveal h3 {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--primary);
}

/* Slide de acto — pantalla casi vacía, dramática */
.reveal section[data-act] {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.reveal .act-title {
  font-size: 1em;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
}

.reveal .act-subtitle {
  font-size: 2.2em;
  font-weight: 900;
  color: var(--primary);
  border-bottom: 3px solid var(--primary);
  padding-bottom: 0.2em;
}

/* Código / datos */
.reveal code,
.reveal pre {
  font-family: 'JetBrains Mono', monospace;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 4px;
  padding: 0.1em 0.3em;
  color: var(--primary);
}

/* Highlight de amenazas */
.reveal .danger { color: var(--accent); font-weight: 700; }
.reveal .positive { color: var(--positive); font-weight: 700; }
.reveal .muted { color: var(--text-muted); }

/* Cards */
.reveal .card {
  background: var(--card-bg);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 8px;
  padding: 0.6em 1em;
  margin: 0.3em 0;
}

/* Stat grande — números impactantes */
.reveal .big-stat {
  font-size: 3.5em;
  font-weight: 900;
  color: var(--accent);
  display: block;
  line-height: 1;
}

.reveal .big-stat-label {
  font-size: 0.7em;
  color: var(--text-muted);
  display: block;
  margin-top: 0.3em;
}

/* Logo overlay */
#logo-overlay {
  position: fixed;
  top: 18px;
  right: 24px;
  z-index: 1000;
  pointer-events: none;
}

#logo-overlay img {
  height: 48px;
  width: auto;
  opacity: 0.85;
  filter: drop-shadow(0 0 8px rgba(0,0,0,0.8));
}

/* Canvas de partículas */
#particles-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

/* Barras de progreso */
.reveal .progress {
  color: var(--primary);
  height: 3px;
}

/* Controles */
.reveal .controls {
  color: var(--primary);
}

/* Links */
.reveal a { color: var(--primary); }
```

**Step 2: Verificar en browser**

Recargar `http://localhost:5173/ai_trends_on_cybersecurity/` — fondo negro, título en cian, tipografía Inter.

**Step 3: Commit**

```bash
git add css/theme.css
git commit -m "feat: dark theme with INICTEL brand colors"
```

---

## Task 5: Partículas de fondo animadas

**Files:**
- Create: `js/particles.js`

**Step 1: Crear `js/particles.js`**

```js
export function initParticles() {
  const canvas = document.getElementById('particles-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  let particles = []
  const COUNT = 60
  const COLOR = '0, 212, 255'

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function Particle() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.radius = Math.random() * 1.5 + 0.5
    this.alpha = Math.random() * 0.5 + 0.1
  }

  function init() {
    particles = Array.from({ length: COUNT }, () => new Particle())
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${COLOR}, ${p.alpha})`
      ctx.fill()
    })

    // Líneas entre partículas cercanas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(${COLOR}, ${0.08 * (1 - dist / 120)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(draw)
  }

  resize()
  init()
  draw()
  window.addEventListener('resize', () => { resize(); init() })
}
```

**Step 2: Verificar en browser**

Recargar — deben verse puntos cian sutiles moviéndose en el fondo con líneas entre ellos.

**Step 3: Commit**

```bash
git add js/particles.js
git commit -m "feat: animated particle background"
```

---

## Task 6: Slides ACT I — El Problema

**Files:**
- Modify: `index.html` (reemplazar el comentario `<!-- Slides ACT I -->`)

**Step 1: Agregar las 6 slides de ACT I después del slide de título del acto**

Insertar después de `</section>` del ACT I title y antes del comentario ACT II:

```html
<!-- ACT I: Slide 1 — Hook -->
<section>
  <h2>El costo de un ataque ya no es abstracto</h2>
  <p>
    <span class="big-stat">$4.88M</span>
    <span class="big-stat-label">Costo promedio por brecha de datos — IBM 2024</span>
  </p>
  <p class="fragment muted">Cada 39 segundos ocurre un ciberataque en el mundo</p>
  <aside class="notes">
    Abre con el número. Deja que impacte. Pausa 3 segundos antes de continuar.
    Fuente: IBM Cost of a Data Breach Report 2024.
  </aside>
</section>

<!-- ACT I: Slide 2 — Superficie de ataque -->
<section>
  <h2>La superficie de ataque se expande</h2>
  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:1em; margin-top:0.8em;">
    <div class="card">
      <h3>IoT</h3>
      <p class="muted" style="font-size:0.7em;">+15B dispositivos conectados en 2024</p>
    </div>
    <div class="card">
      <h3>Cloud</h3>
      <p class="muted" style="font-size:0.7em;">94% de empresas usan servicios cloud</p>
    </div>
    <div class="card">
      <h3>Remoto</h3>
      <p class="muted" style="font-size:0.7em;">Trabajo híbrido = nuevos vectores</p>
    </div>
  </div>
  <p class="fragment" style="margin-top:0.8em;">Más dispositivos → <span class="danger">más puntos de entrada</span></p>
  <aside class="notes">
    El problema no es solo que hay más ataques, es que hay más superficie expuesta.
    IoT: cámaras, sensores industriales, wearables — la mayoría sin seguridad adecuada.
  </aside>
</section>

<!-- ACT I: Slide 3 — Velocidad de las amenazas -->
<section>
  <h2>Las amenazas evolucionan más rápido que los defensores</h2>
  <ul>
    <li class="fragment">Tiempo promedio para detectar una brecha: <span class="danger">194 días</span></li>
    <li class="fragment">Tiempo para contenerla: <span class="danger">64 días adicionales</span></li>
    <li class="fragment">Un atacante puede moverse lateralmente en <span class="danger">minutos</span></li>
  </ul>
  <aside class="notes">
    IBM 2024. Esto es el gap que los atacantes explotan.
    Cuando el equipo de seguridad detecta algo, ya lleva 6 meses dentro.
  </aside>
</section>

<!-- ACT I: Slide 4 — Falla de métodos tradicionales -->
<section>
  <h2>¿Por qué fallan los métodos tradicionales?</h2>
  <div class="card fragment">
    <h3>Basados en firmas</h3>
    <p class="muted" style="font-size:0.7em;">Solo detectan amenazas <em>conocidas</em>. Un zero-day los ciega por completo.</p>
  </div>
  <div class="card fragment">
    <h3>Reglas estáticas</h3>
    <p class="muted" style="font-size:0.7em;">No se adaptan. Los atacantes aprenden las reglas y las evaden.</p>
  </div>
  <div class="card fragment">
    <h3>Volumen de datos</h3>
    <p class="muted" style="font-size:0.7em;">Un SIEM genera millones de alertas/día. Los analistas se ahogan.</p>
  </div>
  <aside class="notes">
    Estos son los tres problemas fundamentales. Preparar el terreno para la solución AI.
  </aside>
</section>

<!-- ACT I: Slide 5 — El límite humano -->
<section>
  <h2>El problema escala más rápido que los equipos humanos</h2>
  <p>
    <span class="big-stat danger">3.5M</span>
    <span class="big-stat-label">Posiciones de ciberseguridad sin cubrir en el mundo — 2025</span>
  </p>
  <p class="fragment muted" style="font-size:0.75em;">No es solo un problema de herramientas. Es un problema de escala.</p>
  <aside class="notes">
    Cybersecurity Ventures 2025. No podemos contratar suficientes personas.
    Necesitamos sistemas que aprendan, se adapten y escalen solos.
  </aside>
</section>

<!-- ACT I: Slide 6 — Transición -->
<section>
  <h2 style="color: var(--text-muted); font-weight:300;">Necesitamos algo que</h2>
  <h1 style="font-size:2.8em;">aprenda.</h1>
  <p class="fragment" style="margin-top:0.8em; font-size:0.8em; color: var(--primary);">
    La respuesta es Inteligencia Artificial aplicada a ciberseguridad.
  </p>
  <aside class="notes">
    Pausa dramática. Dejar que la palabra "aprenda" resuene.
    Este es el pivote de la charla.
  </aside>
</section>
```

**Step 2: Verificar en browser**

Navegar con flechas por las 6 slides. Verificar fragmentos con barra espaciadora, stats en rojo, cards con fondo semitransparente.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: act I slides - the problem"
```

---

## Task 7: Slides ACT II — La Solución AI (parte 1, slides 7-14)

**Files:**
- Modify: `index.html` (agregar después del título ACT II)

**Step 1: Insertar slides 7-14 después del slide de título ACT II**

```html
<!-- ACT II: Slide 7 — AI como fuerza transformadora -->
<section>
  <h2>AI: de herramienta a aliado estratégico</h2>
  <p style="font-size:0.8em; color: var(--text-muted);">
    Tres capacidades que cambian las reglas del juego:
  </p>
  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:0.8em; margin-top:0.6em;">
    <div class="card fragment">
      <h3>Aprender</h3>
      <p class="muted" style="font-size:0.65em;">Detecta patrones en millones de eventos en segundos</p>
    </div>
    <div class="card fragment">
      <h3>Adaptarse</h3>
      <p class="muted" style="font-size:0.65em;">Se actualiza ante nuevas amenazas sin reglas manuales</p>
    </div>
    <div class="card fragment">
      <h3>Escalar</h3>
      <p class="muted" style="font-size:0.65em;">Monitorea toda la infraestructura simultáneamente</p>
    </div>
  </div>
  <aside class="notes">Ali et al. 2025 — sección 1. Estas tres capacidades son el núcleo del valor de AI.</aside>
</section>

<!-- ACT II: Slide 8 — Machine Learning -->
<section>
  <h2>Machine Learning en ciberseguridad</h2>
  <ul>
    <li class="fragment"><strong>Supervisado:</strong> clasifica tráfico malicioso vs. legítimo con datos etiquetados</li>
    <li class="fragment"><strong>No supervisado:</strong> detecta anomalías sin ejemplos previos (ideal para zero-day)</li>
    <li class="fragment">Fórmula de anomalía: <code>D = |X − μ| > σ</code></li>
    <li class="fragment positive">Efectividad: hasta 99.7% accuracy en detección de intrusiones (datasets benchmark)</li>
  </ul>
  <aside class="notes">
    Ali et al. 2025 — tabla 1. El no supervisado es el más relevante para nuevas amenazas.
    La fórmula D es del paper original.
  </aside>
</section>

<!-- ACT II: Slide 9 — Deep Learning -->
<section>
  <h2>Deep Learning: redes neuronales profundas</h2>
  <ul>
    <li class="fragment">Reconoce patrones complejos en tráfico de red</li>
    <li class="fragment">CNNs para análisis de malware como imagen de bytes</li>
    <li class="fragment">LSTMs para detección de anomalías en series de tiempo</li>
    <li class="fragment positive">Detecta phishing sofisticado que evade filtros convencionales</li>
  </ul>
  <p class="fragment muted" style="font-size:0.7em; margin-top:0.6em;">
    "DL has proven highly effective for identifying intricate traffic anomalies" — Ali et al. 2025
  </p>
  <aside class="notes">Ali et al. 2025 — sección introductoria. Mencionar que también maneja datos no estructurados.</aside>
</section>

<!-- ACT II: Slide 10 — NLP -->
<section>
  <h2>NLP: entendiendo el lenguaje de las amenazas</h2>
  <div class="card fragment">
    <h3>Detección de phishing</h3>
    <p class="muted" style="font-size:0.65em;">Analiza el texto de emails y URLs para identificar ingeniería social</p>
  </div>
  <div class="card fragment">
    <h3>Análisis de logs</h3>
    <p class="muted" style="font-size:0.65em;">Extrae indicadores de compromiso de millones de líneas de logs</p>
  </div>
  <div class="card fragment">
    <h3>Threat Intelligence</h3>
    <p class="muted" style="font-size:0.65em;">Procesa reportes de seguridad y feeds externos automáticamente</p>
  </div>
  <aside class="notes">Ali et al. 2025. NLP es el puente entre datos no estructurados y detección automatizada.</aside>
</section>

<!-- ACT II: Slide 11 — VIZ 2: Radar Chart -->
<section data-chart="radar-techniques">
  <h2>Comparativa: ML vs Deep Learning vs NLP</h2>
  <div style="width:560px; height:420px; margin:0 auto;">
    <canvas id="chart-radar-techniques"></canvas>
  </div>
  <aside class="notes">
    Hover sobre el chart para ver detalles.
    ML destaca en madurez y costo. DL en precisión y adaptabilidad. NLP es el más balanceado.
  </aside>
</section>

<!-- ACT II: Slide 12 — APTs y Zero-Day -->
<section>
  <h2>Detectando lo invisible: APTs y Zero-Day</h2>
  <ul>
    <li class="fragment"><strong>APT</strong> (Advanced Persistent Threat): atacante que vive dentro de la red por meses</li>
    <li class="fragment">AI detecta <span class="danger">micro-comportamientos</span> que individualmente parecen normales</li>
    <li class="fragment"><strong>Zero-day:</strong> vulnerabilidad sin parche conocido</li>
    <li class="fragment positive">AI identifica comportamiento anómalo sin necesitar firma del exploit</li>
  </ul>
  <aside class="notes">Ali et al. 2025 — sección de threat detection. Este es el caso de uso más impactante para el auditorio técnico.</aside>
</section>

<!-- ACT II: Slide 13 — Behavioral Analysis -->
<section>
  <h2>Análisis de comportamiento (UEBA)</h2>
  <p class="muted" style="font-size:0.75em;">User and Entity Behavior Analytics</p>
  <ul>
    <li class="fragment">Construye un baseline del comportamiento normal de cada usuario y sistema</li>
    <li class="fragment">Detecta desviaciones: acceso inusual a las 3am, descarga masiva de datos</li>
    <li class="fragment positive">Detecta amenazas internas — el vector más difícil de los métodos tradicionales</li>
  </ul>
  <p class="fragment" style="margin-top:0.6em;">
    Ejemplo: login normal en horario labitual <span class="danger">≠</span> login a las 3am + descarga de 50GB
  </p>
  <aside class="notes">Ali et al. 2025 — behavioral analysis section. Los insiders son responsables del 34% de los incidentes (Verizon DBIR).</aside>
</section>

<!-- ACT II: Slide 14 — Respuesta automatizada -->
<section>
  <h2>De la detección a la acción en <span class="positive">segundos</span></h2>
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.8em; margin-top:0.6em;">
    <div>
      <h3 class="danger">Antes (manual)</h3>
      <ol class="muted" style="font-size:0.65em;">
        <li>Alerta en SIEM</li>
        <li>Analista la revisa (horas)</li>
        <li>Investiga manualmente</li>
        <li>Escala al equipo</li>
        <li>Acción correctiva (días)</li>
      </ol>
    </div>
    <div class="fragment">
      <h3 class="positive">Con AI</h3>
      <ol class="muted" style="font-size:0.65em;">
        <li>Detección en tiempo real</li>
        <li>Clasificación automática</li>
        <li>Cuarentena del endpoint</li>
        <li>Bloqueo de IP</li>
        <li>Ticket generado (segundos)</li>
      </ol>
    </div>
  </div>
  <aside class="notes">Ali et al. 2025 — automated response section. El contraste manual vs automatizado es muy visual y resonará con el auditorio técnico.</aside>
</section>
```

**Step 2: Verificar en browser**

Navegar por las 8 slides nuevas. Verificar que los fragmentos aparecen en orden y el slide 11 muestra el canvas del chart (puede estar vacío por ahora — se llena en Task 9).

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: act II slides part 1 - AI techniques"
```

---

## Task 8: Slides ACT II — La Solución AI (parte 2, slides 15-18)

**Files:**
- Modify: `index.html`

**Step 1: Insertar slides 15-18 continuando el ACT II**

```html
<!-- ACT II: Slide 15 — Threat Intelligence -->
<section>
  <h2>Threat Intelligence potenciada por AI</h2>
  <ul>
    <li class="fragment">Ingiere millones de IoCs (Indicators of Compromise) de fuentes externas</li>
    <li class="fragment">Correlaciona alertas internas con inteligencia global</li>
    <li class="fragment">NLP procesa reportes de amenazas en tiempo real (CVEs, dark web, feeds)</li>
    <li class="fragment positive">Contexto + velocidad = respuesta proactiva, no reactiva</li>
  </ul>
  <aside class="notes">Ali et al. 2025 — threat intelligence section. Muy relevante para los gestores: convierte datos en inteligencia accionable.</aside>
</section>

<!-- ACT II: Slide 16 — VIZ 3: Tabla AI vs Tradicional -->
<section>
  <h2>AI vs Seguridad Tradicional</h2>
  <table id="comparison-table" style="font-size:0.55em; width:100%; border-collapse:collapse;">
    <thead>
      <tr style="color: var(--primary); border-bottom: 2px solid var(--primary);">
        <th style="text-align:left; padding:0.4em;">Parámetro</th>
        <th style="text-align:left; padding:0.4em;">Seguridad Tradicional</th>
        <th style="text-align:left; padding:0.4em; color: var(--positive);">AI-driven</th>
      </tr>
    </thead>
    <tbody>
      <tr class="fragment" style="border-bottom:1px solid rgba(255,255,255,0.08);">
        <td style="padding:0.4em; color:var(--text-muted);">Detección de amenazas</td>
        <td style="padding:0.4em;">Basada en firmas conocidas</td>
        <td style="padding:0.4em; color:var(--positive);">Anomaly detection adaptativa</td>
      </tr>
      <tr class="fragment" style="border-bottom:1px solid rgba(255,255,255,0.08);">
        <td style="padding:0.4em; color:var(--text-muted);">Adaptabilidad</td>
        <td style="padding:0.4em; color:var(--accent);">Requiere actualización manual</td>
        <td style="padding:0.4em; color:var(--positive);">Aprende continuamente</td>
      </tr>
      <tr class="fragment" style="border-bottom:1px solid rgba(255,255,255,0.08);">
        <td style="padding:0.4em; color:var(--text-muted);">Respuesta</td>
        <td style="padding:0.4em; color:var(--accent);">Manual (horas/días)</td>
        <td style="padding:0.4em; color:var(--positive);">Automatizada (segundos)</td>
      </tr>
      <tr class="fragment" style="border-bottom:1px solid rgba(255,255,255,0.08);">
        <td style="padding:0.4em; color:var(--text-muted);">Zero-day</td>
        <td style="padding:0.4em; color:var(--accent);">Ciego sin firma</td>
        <td style="padding:0.4em; color:var(--positive);">Detecta por comportamiento</td>
      </tr>
      <tr class="fragment">
        <td style="padding:0.4em; color:var(--text-muted);">Escala</td>
        <td style="padding:0.4em; color:var(--accent);">Limitada por analistas</td>
        <td style="padding:0.4em; color:var(--positive);">Escala con la infraestructura</td>
      </tr>
    </tbody>
  </table>
  <aside class="notes">Table 1 del paper — Ali et al. 2025. Habla fila por fila. El auditorio de gestión valora esta comparativa directa.</aside>
</section>

<!-- ACT II: Slide 17 — VIZ 4: MTTR Bar Chart -->
<section data-chart="mttr">
  <h2>Tiempo de respuesta a incidentes</h2>
  <p class="muted" style="font-size:0.7em;">MTTR — Mean Time to Respond (horas)</p>
  <div style="width:700px; height:380px; margin:0 auto;">
    <canvas id="chart-mttr"></canvas>
  </div>
  <aside class="notes">
    Las barras hablan solas. AI reduce el MTTR en todas las fases del ciclo de respuesta.
    Enfatizar: la detección pasa de 24h a 4h. La contención de 12h a 2h.
  </aside>
</section>

<!-- ACT II: Slide 18 — Casos de uso concretos -->
<section>
  <h2>AI en producción: casos reales</h2>
  <div class="card fragment">
    <h3>Darktrace</h3>
    <p class="muted" style="font-size:0.65em;">AI detectó ransomware en una red industrial 1 hora antes de que se ejecutara</p>
  </div>
  <div class="card fragment">
    <h3>Google BeyondCorp</h3>
    <p class="muted" style="font-size:0.65em;">ML reemplazó el modelo de VPN tradicional con análisis continuo de confianza</p>
  </div>
  <div class="card fragment">
    <h3>CrowdStrike Falcon</h3>
    <p class="muted" style="font-size:0.65em;">DL analiza 6 billones de eventos/día para detectar amenazas en tiempo real</p>
  </div>
  <aside class="notes">Ejemplos concretos que el auditorio técnico puede investigar después. Son sistemas de producción real, no demos.</aside>
</section>
```

**Step 2: Verificar en browser**

Navegar por las 4 slides. Verificar fragmentos en la tabla y que los canvas de charts están presentes.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: act II slides part 2 - threat intel and viz placeholders"
```

---

## Task 9: Slides ACT III — El Futuro y los Riesgos

**Files:**
- Modify: `index.html`

**Step 1: Insertar slides 19-25 después del título ACT III**

```html
<!-- ACT III: Slide 19 — VIZ 1: Line Chart Threat Landscape -->
<section data-chart="threat-growth">
  <h2>El problema no para de crecer</h2>
  <p class="muted" style="font-size:0.7em;">Costo promedio de una brecha de datos 2018–2024 (USD millones)</p>
  <div style="width:750px; height:380px; margin:0 auto;">
    <canvas id="chart-threat-growth"></canvas>
  </div>
  <p class="fragment muted" style="font-size:0.65em;">Fuente: IBM Cost of a Data Breach Report 2024</p>
  <aside class="notes">IBM 2024. De $3.86M en 2018 a $4.88M en 2024 — +26%. Y la tendencia no se frena.</aside>
</section>

<!-- ACT III: Slide 20 — Adversarial Attacks -->
<section>
  <h2>El lado oscuro: Adversarial Attacks</h2>
  <p class="fragment muted" style="font-size:0.75em;">Si AI puede defender, también puede ser atacada.</p>
  <ul>
    <li class="fragment"><strong>Data poisoning:</strong> contaminar el dataset de entrenamiento</li>
    <li class="fragment"><strong>Evasion attacks:</strong> inputs diseñados para engañar al modelo</li>
    <li class="fragment">Fórmula: <code>X' = X + ε</code> (perturbación mínima, máximo daño)</li>
    <li class="fragment danger">Un modelo de detección de malware puede ser "cegado" con modificaciones de 1 byte</li>
  </ul>
  <aside class="notes">Ali et al. 2025 — adversarial attacks section. Esto es lo que el auditorio técnico generalmente no considera. La fórmula es del paper.</aside>
</section>

<!-- ACT III: Slide 21 — Blockchain + AI -->
<section>
  <h2>Blockchain + AI: integridad de datos</h2>
  <ul>
    <li class="fragment">Blockchain garantiza <span class="positive">inmutabilidad</span> de los logs de seguridad</li>
    <li class="fragment">AI sobre blockchain: detección de anomalías con trazabilidad auditada</li>
    <li class="fragment">Ideal para entornos regulados: banca, salud, gobierno</li>
    <li class="fragment positive">Resuelve el problema de "¿puede confiar en sus propios logs?"</li>
  </ul>
  <aside class="notes">Ali et al. 2025. No es hype — tiene casos de uso concretos donde la cadena de custodia de datos es crítica.</aside>
</section>

<!-- ACT III: Slide 22 — Quantum Computing -->
<section>
  <h2>Computación cuántica: amenaza y oportunidad</h2>
  <div class="card fragment">
    <h3 class="danger">La amenaza</h3>
    <p class="muted" style="font-size:0.65em;">Algoritmo de Shor puede romper RSA-2048 en horas. Toda nuestra infraestructura PKI es vulnerable.</p>
  </div>
  <div class="card fragment">
    <h3 class="positive">La oportunidad</h3>
    <p class="muted" style="font-size:0.65em;">NIST ya estandarizó algoritmos post-cuánticos (CRYSTALS-Kyber, CRYSTALS-Dilithium).</p>
  </div>
  <p class="fragment muted" style="font-size:0.7em; margin-top:0.6em;">El timeline de riesgo: 5-10 años. El tiempo de preparación: ahora.</p>
  <aside class="notes">Ali et al. 2025. NIST finalizó los estándares PQC en 2024. Hablar con el auditorio técnico sobre migración de PKI.</aside>
</section>

<!-- ACT III: Slide 23 — Ética y Política -->
<section>
  <h2>El triángulo de tensión</h2>
  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:0.8em; margin-top:0.8em;">
    <div class="card fragment">
      <h3>Seguridad</h3>
      <p class="muted" style="font-size:0.65em;">AI necesita acceso a datos para ser efectiva</p>
    </div>
    <div class="card fragment">
      <h3>Privacidad</h3>
      <p class="muted" style="font-size:0.65em;">Monitoreo masivo levanta banderas éticas y legales (GDPR)</p>
    </div>
    <div class="card fragment">
      <h3>Sesgo</h3>
      <p class="muted" style="font-size:0.65em;">Modelos entrenados con datos históricos heredan sus sesgos</p>
    </div>
  </div>
  <p class="fragment positive" style="margin-top:0.8em; font-size:0.75em;">XAI (Explainable AI) como respuesta: modelos que justifican sus decisiones.</p>
  <aside class="notes">Ali et al. 2025. Para el auditorio de gestión este slide conecta directamente con compliance y riesgo organizacional.</aside>
</section>

<!-- ACT III: Slide 24 — Self-healing y XAI -->
<section>
  <h2>El futuro: sistemas que se curan solos</h2>
  <ul>
    <li class="fragment"><strong>Self-healing systems:</strong> AI que detecta, aísla y repara automáticamente</li>
    <li class="fragment"><strong>XAI:</strong> "explica por qué bloqueaste esa conexión" — accountability auditada</li>
    <li class="fragment positive">Convergencia: detección → respuesta → remediación → aprendizaje → prevención</li>
  </ul>
  <p class="fragment muted" style="font-size:0.7em; margin-top:0.6em;">
    No es ciencia ficción. Productos como SentinelOne ya implementan remediación autónoma.
  </p>
  <aside class="notes">Ali et al. 2025. El loop completo sin intervención humana para incidentes de bajo-medio riesgo libera a los analistas para trabajo estratégico.</aside>
</section>

<!-- ACT III: Slide 25 — Cierre -->
<section>
  <h2 style="font-size:1.2em; color: var(--text-muted); font-weight:300;">La pregunta no es</h2>
  <h1 style="font-size:2.2em;">¿deberíamos usar AI en ciberseguridad?</h1>
  <h2 class="fragment" style="color: var(--primary); margin-top:0.6em;">La pregunta es:</h2>
  <h1 class="fragment" style="font-size:2em; color: var(--positive);">¿Podemos darnos el lujo de no hacerlo?</h1>
  <p class="fragment muted" style="font-size:0.65em; margin-top:1em;">
    Ali et al. — Information Fusion 118 (2025) · IBM Cost of Breach 2024 · NIST PQC 2024
  </p>
  <aside class="notes">
    Cierre poderoso. Pausa larga después de "¿Podemos darnos el lujo de no hacerlo?".
    Luego agradecer y abrir preguntas.
  </aside>
</section>
```

**Step 2: Verificar en browser**

Navegar por las 7 slides finales. Verificar fragmentos y el canvas del chart en slide 19.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: act III slides - future, risks and closing"
```

---

## Task 10: VIZ 1 — Line Chart: Crecimiento del Threat Landscape

**Files:**
- Create: `js/charts.js`

**Step 1: Crear `js/charts.js` con la función principal y VIZ 1**

```js
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const COLORS = {
  primary: '#00d4ff',
  accent: '#ff3366',
  positive: '#00ff88',
  muted: 'rgba(232,232,240,0.3)',
  gridLine: 'rgba(255,255,255,0.06)',
}

const initialized = new Set()

export function initCharts(deck) {
  deck.on('slidechanged', ({ currentSlide }) => {
    const chartId = currentSlide.dataset.chart
    if (chartId && !initialized.has(chartId)) {
      initialized.add(chartId)
      switch (chartId) {
        case 'threat-growth': renderThreatGrowth(); break
        case 'radar-techniques': renderRadarTechniques(); break
        case 'mttr': renderMTTR(); break
      }
    }
  })
}

function renderThreatGrowth() {
  const ctx = document.getElementById('chart-threat-growth')
  if (!ctx) return
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Costo promedio de brecha (USD millones)',
        data: [3.86, 3.92, 3.86, 4.24, 4.35, 4.45, 4.88],
        borderColor: COLORS.accent,
        backgroundColor: 'rgba(255,51,102,0.12)',
        borderWidth: 3,
        pointBackgroundColor: COLORS.accent,
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
        tension: 0.3,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeInOutQuart' },
      plugins: {
        legend: { labels: { color: '#e8e8f0', font: { family: 'Inter', size: 13 } } },
        tooltip: {
          backgroundColor: '#1a1a2e',
          titleColor: COLORS.primary,
          bodyColor: '#e8e8f0',
          callbacks: {
            label: ctx => ` $${ctx.parsed.y}M USD`,
          },
        },
      },
      scales: {
        x: { ticks: { color: COLORS.muted }, grid: { color: COLORS.gridLine } },
        y: {
          ticks: { color: COLORS.muted, callback: v => `$${v}M` },
          grid: { color: COLORS.gridLine },
          min: 3.5,
        },
      },
    },
  })
}
```

**Step 2: Verificar**

Navegar hasta la slide 19 (VIZ 1) en el browser. La línea roja debe animarse al entrar al slide.

**Step 3: Commit**

```bash
git add js/charts.js
git commit -m "feat: viz1 threat landscape line chart"
```

---

## Task 11: VIZ 2 — Radar Chart: Comparativa de Técnicas AI

**Files:**
- Modify: `js/charts.js` (agregar función `renderRadarTechniques`)

**Step 1: Agregar la función al final de `charts.js`**

```js
function renderRadarTechniques() {
  const ctx = document.getElementById('chart-radar-techniques')
  if (!ctx) return
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Precisión', 'Velocidad', 'Adaptabilidad', 'Costo-eficiencia', 'Madurez'],
      datasets: [
        {
          label: 'Machine Learning',
          data: [7, 8, 6, 7, 9],
          borderColor: COLORS.primary,
          backgroundColor: 'rgba(0,212,255,0.12)',
          borderWidth: 2,
          pointBackgroundColor: COLORS.primary,
        },
        {
          label: 'Deep Learning',
          data: [9, 6, 8, 5, 7],
          borderColor: COLORS.positive,
          backgroundColor: 'rgba(0,255,136,0.10)',
          borderWidth: 2,
          pointBackgroundColor: COLORS.positive,
        },
        {
          label: 'NLP',
          data: [8, 7, 7, 6, 7],
          borderColor: COLORS.accent,
          backgroundColor: 'rgba(255,51,102,0.10)',
          borderWidth: 2,
          pointBackgroundColor: COLORS.accent,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000 },
      plugins: {
        legend: {
          labels: { color: '#e8e8f0', font: { family: 'Inter', size: 12 } },
        },
        tooltip: {
          backgroundColor: '#1a1a2e',
          titleColor: COLORS.primary,
          bodyColor: '#e8e8f0',
        },
      },
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: { color: COLORS.muted, stepSize: 2, backdropColor: 'transparent' },
          grid: { color: COLORS.gridLine },
          angleLines: { color: COLORS.gridLine },
          pointLabels: { color: '#e8e8f0', font: { family: 'Inter', size: 12 } },
        },
      },
    },
  })
}
```

**Step 2: Verificar**

Navegar hasta slide 11 (VIZ 2). El radar chart debe animarse mostrando las tres series.

**Step 3: Commit**

```bash
git add js/charts.js
git commit -m "feat: viz2 radar chart AI techniques comparison"
```

---

## Task 12: VIZ 4 — Bar Chart: MTTR con y sin AI

**Files:**
- Modify: `js/charts.js` (agregar función `renderMTTR`)

**Step 1: Agregar la función al final de `charts.js`**

```js
function renderMTTR() {
  const ctx = document.getElementById('chart-mttr')
  if (!ctx) return
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Detección', 'Análisis', 'Contención', 'Erradicación', 'Recuperación'],
      datasets: [
        {
          label: 'Sin AI (horas)',
          data: [24, 18, 12, 8, 16],
          backgroundColor: 'rgba(255,51,102,0.7)',
          borderColor: COLORS.accent,
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Con AI (horas)',
          data: [4, 3, 2, 2, 4],
          backgroundColor: 'rgba(0,255,136,0.7)',
          borderColor: COLORS.positive,
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: { color: '#e8e8f0', font: { family: 'Inter', size: 12 } },
        },
        tooltip: {
          backgroundColor: '#1a1a2e',
          titleColor: COLORS.primary,
          bodyColor: '#e8e8f0',
          callbacks: { label: ctx => ` ${ctx.parsed.x}h` },
        },
      },
      scales: {
        x: {
          ticks: { color: COLORS.muted, callback: v => `${v}h` },
          grid: { color: COLORS.gridLine },
        },
        y: {
          ticks: { color: '#e8e8f0', font: { family: 'Inter', size: 12 } },
          grid: { color: COLORS.gridLine },
        },
      },
    },
  })
}
```

**Step 2: Verificar**

Navegar hasta slide 17 (VIZ 4). Barras horizontales rojo vs verde animándose al entrar.

**Step 3: Commit**

```bash
git add js/charts.js
git commit -m "feat: viz4 MTTR bar chart with/without AI"
```

---

## Task 13: Push final y verificación del deploy en GitHub Pages

**Files:**
- No new files

**Step 1: Verificar build local**

```bash
npm run build
```
Esperado: carpeta `dist/` generada sin errores. Verificar que `dist/` contiene `index.html` y los assets.

**Step 2: Verificar preview local**

```bash
npm run preview
```
Navegar a `http://localhost:4173/ai_trends_on_cybersecurity/` y verificar:
- [ ] Logo INICTEL visible en esquina superior derecha en todas las slides
- [ ] Partículas animadas en el fondo
- [ ] ACT I: 6 slides + slide de título = 7 total
- [ ] ACT II: 12 slides + slide de título = 13 total
- [ ] ACT III: 7 slides + slide de título = 8 total
- [ ] VIZ 1 (slide 19) anima al entrar
- [ ] VIZ 2 (slide 11) anima al entrar con hover funcional
- [ ] VIZ 3 (slide 16) filas aparecen con fragmentos
- [ ] VIZ 4 (slide 17) barras animan al entrar
- [ ] `S` abre speaker notes con timer
- [ ] `F` activa fullscreen
- [ ] `O` muestra overview

**Step 3: Push a GitHub**

```bash
git push origin main
```

**Step 4: Verificar GitHub Actions**

Ir a `https://github.com/ollerenac/ai_trends_on_cybersecurity/actions` — esperar que el workflow complete (aprox. 2 min).

**Step 5: Verificar URL pública**

Abrir `https://ollerenac.github.io/ai_trends_on_cybersecurity/` y repetir el checklist del Step 2.

---

## Checklist final antes de la conferencia

- [ ] Probar en fullscreen (F) desde la computadora de presentación
- [ ] Abrir modo presentador (S) y verificar que el timer funciona
- [ ] Navegar toda la presentación completa una vez para medir timing (~45 min)
- [ ] Verificar que los charts animan correctamente en cada slide
- [ ] Tener URL de backup: `https://ollerenac.github.io/ai_trends_on_cybersecurity/`
