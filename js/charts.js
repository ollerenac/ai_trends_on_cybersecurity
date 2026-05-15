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
