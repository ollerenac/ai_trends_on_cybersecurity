# Reporte: CrowdStrike 2026 Global Threat Report
**Título completo:** CrowdStrike 2026 Global Threat Report — Year of the Evasive Adversary  
**Fuente:** CrowdStrike Intelligence (datos de enero–diciembre 2025)  
**Páginas revisadas:** 1–20 (Foreword · Introduction · Threat Landscape Overview · Key Adversary Themes: AI)

---

## Datos cuantitativos clave (directamente citable)

### Velocidad del adversario — Breakout Time

| Métrica | Valor 2025 | Contexto |
|---|---|---|
| **Tiempo promedio de breakout (eCrime)** | **29 minutos** | ↓ 65% vs 2024 (48 min); reducción del 70% desde 2021 (98 min) |
| **Breakout más rápido registrado** | **27 segundos** | Caso individual — récord histórico |
| **Datos to exfiltración (CHATTY SPIDER)** | **4 minutos** | Desde initial access hasta intento de exfiltración |
| **Evolución breakout 2021–2025** | 98→84→62→48→**29** min | Figura 3 del reporte — tendencia multi-año consistente |

> **Impacto en presentación:** El dato de "62 minutos" que teníamos como referencia CrowdStrike 2024 está desactualizado. El nuevo dato es **29 minutos** (2025). El más rápido es **27 segundos**.

### AI y adversarios

| Métrica | Valor | Fuente en reporte |
|---|---|---|
| **Aumento de ataques por adversarios con AI** | **+89% YoY** | Foreword + p.15 — dato clave del año |
| Ataques con AI — recurso development (FAMOUS CHOLLIMA) | +109% | Figura 8 |
| Ataques con AI — ejecución (PUNK SPIDER) | +134% | Figura 8 |
| Ataques con AI — discovery (FANCY BEAR / LAMEHUG) | +88% | Figura 8 |
| Ataques con AI — colección (RENAISSANCE SPIDER) | +16% | Figura 8 |

### Detecciones malware-free (evolución 2020–2025)

| Año | % detecciones malware-free |
|---|---|
| 2020 | 51% |
| 2021 | 62% |
| 2022 | 71% |
| 2023 | 75% |
| 2024 | 79% |
| **2025** | **82%** |

> Los atacantes ya no necesitan malware — operan con credenciales legítimas, herramientas nativas y acceso autorizado. La detección basada en firmas es cada vez más irrelevante.

### Cloud y zero-days

| Métrica | Valor | Contexto |
|---|---|---|
| **Intrusiones cloud-conscious** | **+37%** en 2025 | Ídem state-nexus actors: +266% |
| **Abuso de cuentas válidas** | **35%** de incidentes cloud | Principal vector de intrusión en cloud |
| **Zero-days explotados antes de divulgación pública** | **+42% YoY** | Ventana de exposición se comprime |
| 67% de vulnerabilidades explotadas por China-nexus | acceso inmediato al sistema | 40% apuntaron a dispositivos de borde (VPN, firewalls, gateways) |

### China-nexus

| Sector | Variación 2025 |
|---|---|
| **Total actividad** | **+38%** en todos los sectores |
| Logística | **+85%** |
| Telecomunicaciones | +30% |
| Servicios financieros | +20% |

### Landscape de adversarios

| Métrica | Valor |
|---|---|
| Nuevos adversarios nombrados en 2025 | **24** |
| Total adversarios rastreados por CrowdStrike | **281** |
| Clusters activos de actividad maliciosa | **150** |

### eCrime y economía del crimen

| Métrica | Valor 2025 vs 2024 |
|---|---|
| Demanda promedio de rescate | **-80.6%** |
| Volumen de spam (SpamTrap) | **+141%** |
| Incidentes con fake CAPTCHA lures | **+563%** |
| Víctimas publicadas en leak sites (BGH) | +29.6% |
| Publicaciones en BSH leak sites | +35.2% |
| Acceso corporativo vendido (Adv. Corp Access) | +40.6% |

---

## Statements directamente citables

> "The average eCrime breakout time fell to **29 minutes** in 2025, a 65% increase in speed from the prior year. The fastest breakout took just **27 seconds**." — p.2

> "In 2025, AI-enabled adversaries increased attacks by **89%** year-over-year." — p.2

> "**82%** of detections were malware-free [in 2025]. Intrusions moved through authorized pathways and trusted systems, blending into normal activity." — p.2

> "Zero-day exploitation prior to public disclosure increased **42%**, compressing the time between vulnerability discovery and active exploitation." — p.3

> "Cloud-conscious intrusions rose **37%** in 2025, including a **266%** increase among state-nexus threat actors. Valid account abuse accounted for **35%** of cloud incidents." — p.3

> "Breakout time has been steadily decreasing over the past five years, roughly a **70% reduction** from 2021 to 2025." — p.11

> "Even though AI has accelerated existing attack methodologies, its current impact primarily enhances established tactics, techniques, and procedures (TTPs) rather than creating novel attack vectors." — p.15

> "More sophisticated threat actors will highly likely successfully leverage AI for malware development, social engineering, and post-exploitation activities, accelerating their operational tempo and attack effectiveness at scales previously unattainable." — p.20

---

## Ideas derivadas

**Sobre el dato de breakout time — corrección urgente para la presentación:**

La tabla de verificación en `s01_introduccion.md` indicaba "62 minutos" basado en conocimiento del reporte CrowdStrike 2024. Este dato es ahora **incorrecto** para 2025. El nuevo valor es **29 minutos** (promedio) con un mínimo registrado de **27 segundos**. La ventana de respuesta se ha comprimido dramáticamente.

Implicación para slides: el argumento de "el movimiento lateral ocurre en minutos" queda reforzado — pero debe citarse correctamente como CrowdStrike Global Threat Report 2026 (datos 2025).

**Sobre el 82% malware-free — el argumento más poderoso del reporte:**

Este es el dato más contraintuitivo del reporte y el más impactante para un auditorio técnico. La mayoría del público asume que "ataque cibernético = malware". El 82% malware-free demuestra que los atacantes ya operan dentro de los sistemas usando las propias herramientas de la organización. Esto invalida directamente la detección basada en firmas y es el argumento perfecto para el Slide 5 (limitaciones de métodos tradicionales).

**Sobre el 89% de aumento en ataques AI-enabled:**

Este dato tiene dos lecturas para la presentación:
1. **Positiva (ACT II):** AI como herramienta defensiva indispensable — el adversario ya la usa, ¿los defensores también?
2. **Negativa (ACT III):** AI amplifica las capacidades del atacante — el mismo conjunto de herramientas defensivas genera amenazas ofensivas

El reporte es explícito: AI no crea nuevos vectores de ataque, **amplifica los existentes**. Esto matiza la narrativa del paper de Ali et al.

**Sobre los 27 segundos — dato de impacto narrativo alto:**

Para el slide de hook o el cierre del ACT I: si el adversario puede moverse de acceso inicial a objetivo en 27 segundos, y el equipo de seguridad promedio tarda horas en detectar una alerta, la brecha es estructuralmente insalvable sin AI. Este dato tiene alto valor retórico.

**Sobre adversarial attacks a AI (páginas 19-20):**

El reporte documenta amenazas **a** los sistemas AI (no solo AI como herramienta defensiva):
- Explotación de vulnerabilidades en plataformas AI (Langflow CVE-2025-3248)
- Servidores MCP maliciosos impersonando herramientas legítimas
- Prompt injection para evadir triage AI de emails
- Uso de Claude Code MCP por actores de amenaza para operaciones agénticas

Esto conecta directamente con el slide de adversarial attacks (Slide 20 en ACT III) y añade una dimensión 2025 muy concreta.

---

## Conexión con la presentación

### Correcciones urgentes en slides existentes:

| Slide | Dato actual | Dato correcto | Fuente |
|---|---|---|---|
| **Slide del movimiento lateral** | "62 minutos" (CrowdStrike 2024) | **"29 minutos"** promedio, **"27 segundos"** el más rápido | CrowdStrike GTR 2026, p.2 |

### Datos nuevos de alto valor para añadir:

| Dato | Slide sugerido | Impacto |
|---|---|---|
| **89% más ataques** por adversarios AI-enabled | Slide 7 (AI como fuerza transformadora) o ACT I hook | Refuerza urgencia bilateral |
| **82% de detecciones sin malware** | Slide 4-5 (métodos tradicionales fallan) | Argumento central contra detección por firmas |
| **29 min / 27 seg** de breakout time | Slide 3 (velocidad de amenazas) | Actualiza el dato desactualizado |
| **+42% zero-days** antes de divulgación | Slide 12 (APTs y zero-day) | Dato 2025 de primera fuente |
| **35% de incidentes cloud via credenciales válidas** | Slide 2 (superficie de ataque) | Matiza el vector cloud — no solo malware |
| **70% reducción de breakout time** en 5 años | Slide 3 o slide de contexto temporal | Narrativa de aceleración del adversario |

### Nuevo slide potencial — "La ventaja del adversario en números (2025)":

Con los datos del reporte se puede construir un slide de impacto puro para el ACT I:
- 29 min promedio de breakout time (↓70% en 5 años)
- 82% de ataques sin malware — invisibles para detección tradicional
- +89% de ataques AI-enabled
- +42% de zero-days explotados antes del parche

---

## Notas de sesión

- Páginas revisadas: 1–20 (Foreword, Introduction, Threat Landscape, Key Themes: AI)
- Pendiente: páginas 21–50 (Ransomware, China-nexus, Supply Chain, Zero-days, Cloud, Conclusión, Recomendaciones)
- Prioridad: Sección de Recomendaciones (p.48) para el call-to-action del ACT III
