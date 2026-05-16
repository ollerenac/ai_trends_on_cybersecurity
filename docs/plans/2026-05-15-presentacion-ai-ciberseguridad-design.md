# Design: Presentación Web "Tendencias de AI en Ciberseguridad"

## Contexto
- **Evento:** Conferencia INICTEL Perú
- **Título:** Tendencias de AI en Ciberseguridad
- **Duración:** 45 minutos
- **Formato:** Presentación en vivo desde computadora, online
- **Público:** Predominantemente técnico (investigadores, ingenieros), con momentos para gestión
- **Deadline:** Domingo en la noche (~48-60 horas desde 2026-05-15)
- **Fuente base:** Paper "AI-driven fusion with cybersecurity" — Information Fusion 118 (2025) 102922

## Stack Técnico
- **Framework:** Reveal.js (npm)
- **Build tool:** Vite
- **Visualizaciones:** Chart.js (4 charts interactivos)
- **Hosting:** GitHub Pages — `ollerenac.github.io/ai_trends_on_cybersecurity`
- **CI/CD:** GitHub Actions — deploy automático en push a `main`

## Estructura de Directorios

```
ai_trends_on_cybersecurity/
├── index.html
├── slides/
│   ├── act1.html
│   ├── act2.html
│   └── act3.html
├── css/
│   └── theme.css
├── js/
│   ├── charts.js
│   └── particles.js
├── images/
│   └── inictel_peru_logo.jpeg
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml
```

## Identidad Visual

| Elemento | Valor |
|---|---|
| Fondo | `#0a0a0f` (negro profundo) |
| Color primario | `#00d4ff` (cian eléctrico) |
| Color de acento | `#ff3366` (rojo alerta — amenazas) |
| Color positivo | `#00ff88` (verde — soluciones AI) |
| Tipografía títulos | Inter |
| Tipografía código/datos | JetBrains Mono |
| Transiciones | Fade entre actos, slide vertical dentro de acto |
| Fondo animado | Partículas CSS (efecto matrix minimalista) |
| Logo institucional | `images/inictel_peru_logo.jpeg` — esquina superior derecha, todas las slides |

## Estructura Narrativa — 3 Actos

### ACT I: El Problema (~10 min, 6-7 slides)
1. Hook — estadística impactante de brechas recientes
2. El mundo digital bajo ataque (IoT, cloud, superficie creciente)
3. Volumen de amenazas: crecimiento exponencial
4. Por qué los métodos tradicionales fallan
5. La limitación del enfoque basado en firmas
6. Transición: "Necesitamos algo que aprenda"

### ACT II: La Solución — AI (~25 min, 16-18 slides)
7. AI como fuerza transformadora en ciberseguridad
8. ML: aprendizaje supervisado y no supervisado
9. Deep Learning: detección de anomalías en tráfico
10. NLP: detección de phishing y análisis de logs
11. **[VIZ 2]** Comparativa de técnicas AI — Radar chart
12. Detección de APTs y zero-day vulnerabilities
13. Análisis de comportamiento (behavioral analysis)
14. Sistemas de respuesta automatizada
15. Threat intelligence y situational awareness
16. **[VIZ 3]** AI vs Seguridad Tradicional — tabla animada
17. **[VIZ 4]** Incident Response Time — MTTR con/sin AI
18. Casos de uso concretos

### ACT III: El Futuro y los Riesgos (~10 min, 6-7 slides)
19. **[VIZ 1]** Crecimiento del threat landscape 2018-2024
20. Adversarial attacks — el lado oscuro de AI
21. Blockchain + AI en ciberseguridad
22. Computación cuántica y criptografía post-cuántica
23. Implicaciones éticas, privacidad y política
24. Self-healing systems y XAI
25. Cierre — call to action para el auditorio técnico

## Visualizaciones Interactivas

### VIZ 1 — Crecimiento del Threat Landscape
- **Tipo:** Line chart animado
- **Datos:** Volumen de ciberataques 2018-2024 (IBM Cost of Data Breach + paper)
- **Momento narrativo:** Apertura del Act III — "el problema se acelera"

### VIZ 2 — Comparativa de Técnicas AI
- **Tipo:** Radar chart
- **Dimensiones:** Precisión, Velocidad, Adaptabilidad, Costo, Madurez
- **Series:** ML vs DL vs NLP
- **Interacción:** Hover muestra detalle por dimensión

### VIZ 3 — AI vs Seguridad Tradicional
- **Tipo:** Tabla animada (basada en Table 1 del paper)
- **Animación:** Filas aparecen progresivamente con fragmentos de Reveal.js

### VIZ 4 — Incident Response Time
- **Tipo:** Bar chart horizontal
- **Comparación:** MTTR con AI vs sin AI
- **Animación:** Barras crecen al entrar al slide

## Navegación en Vivo
- Flechas del teclado para navegar
- `S` — modo presentador (speaker notes + timer)
- `F` — fullscreen
- `O` — overview de todas las slides

## GitHub Actions
- Trigger: push a `main`
- Build: `vite build`
- Deploy: GitHub Pages desde carpeta `dist/`
