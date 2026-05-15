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

- Páginas revisadas: 1–55 (reporte completo)
- Estado: ✅ Completo

---

## Sección: Ransomware — Cross-Domain Tradecraft (pp. 21–25)

### Datos clave

| Métrica | Valor |
|---|---|
| **Adversario BGH más activo en 2025** | **PUNK SPIDER** — 198 intrusiones, **+134% YoY** |
| Técnica dominante | Remote file encryption vía SMB shares — evita ejecutar código en hosts monitoreados |
| Vector de acceso inicial preferido | Vishing + cloud SSO + SaaS (evita endpoints gestionados) |
| Infraestructura objetivo de ransomware | VMware ESXi (hipervisores) — cifrado masivo sin tocar endpoints |

### Ideas derivadas para la presentación

**Por qué esto importa para el slide de métodos tradicionales (Slide 4-5):**

El ransomware moderno ya no necesita malware en endpoints gestionados. PUNK SPIDER ejecuta *Akira* desde un host **no gestionado** cifrando shares SMB remotos. La víctima ve sus archivos cifrados sin que ningún endpoint trigger haya disparado. EDR y antivirus son irrelevantes. Solo behavioral analytics y detección de patrones de acceso anómalo (AI) pueden detectarlo.

**El caso del webcam sin parche (p.24):** PUNK SPIDER identificó una webcam corporativa sin parchear y ejecutó ransomware desde ese dispositivo — un IoT device como vector de ataque de alto impacto. Conecta directamente con el slide de superficie IoT.

---

## Sección: China-Nexus Threat Actors (pp. 26–30)

### Datos clave

| Métrica | Valor |
|---|---|
| **Velocidad de weaponización de exploits** | **2–6 días** desde divulgación pública hasta explotación activa |
| PHANTOM PANDA — CVE-2025-31324 | **3 días** tras divulgación pública |
| OPERATOR PANDA — CVE-2025-25257 | **6 días** tras divulgación pública |
| VAULT PANDA + GENESIS PANDA — React2Shell | **2 días** tras divulgación pública |
| **Acceso persistente mantenido** | WARP PANDA: **22 meses** continúos (oct 2023–mid 2025) |
| Dispositivos objetivo | VPN appliances, firewalls, gateways — **40% de los casos** |
| Actividad operativa | Durante horario laboral de China — indica recursos de estado |

### Statement directamente citable

> "China-nexus adversaries will almost certainly rapidly incorporate associated exploits, attempting both mass exploitation and selective intrusion operations... placing organizations at significant risk in the brief time between disclosure and patching." — p.30

### Idea derivada para la presentación

El dato de **2–6 días** es el argumento más poderoso contra la estrategia de "parchear cuando podamos". Si China-nexus puede weaponizar un CVE en 2 días, y el ciclo de patching corporativo promedio es de semanas o meses, la ventana de exposición es estructuralmente insalvable sin monitoreo proactivo. CrowdStrike recomienda parchear edge devices **dentro de 72 horas** de una divulgación crítica.

---

## Sección: Supply Chain Attacks (pp. 31–34)

### Datos clave

| Evento | Dato |
|---|---|
| **Bybit — mayor robo cripto de la historia** | **$1.46 billion USD** robados por PRESSURE CHOLLIMA (feb 2025) |
| Método | Comprometió Safe{Wallet} → inyectó JS malicioso → redirigió transacción Bybit |
| **ShaiHulud** (info stealer, npm) | Descargado **+2 millones de veces** antes de detectarse (sep 2025) |
| npm packages comprometidos (nov 2025) | **690 paquetes** para distribuir nueva versión de ShaiHulud |
| FAMOUS CHOLLIMA — npm malicioso | **+30 paquetes** maliciosos en npm, ene–may 2025 |
| Alcance colateral ShaiHulud | Incorporado como dependencia en otros proyectos → infecciones en cadena |

### Idea derivada para la presentación

El caso Bybit ($1.46B) es el ejemplo definitivo de por qué "supply chain = nuevo perímetro". El atacante nunca tocó a Bybit directamente: comprometió a su proveedor de software, inyectó código en la interfaz web, y redirigió una transacción legítima. Detección basada en firmas: inútil (el código malicioso se restauró a su versión original inmediatamente tras el robo). Solo detección comportamental de anomalías en transacciones podría haberlo detectado.

---

## Sección: Zero-Day Exploits (pp. 35–38)

### Datos clave

| Métrica | Valor |
|---|---|
| **Aumento YoY de zero-days antes de divulgación** | **+42%** (confirmación del dato del Foreword) |
| GRACEFUL SPIDER — patrón multi-año | Desde 2020: Accellion FTA → GoAnywhere MFT → MOVEit → SysAid → Cleo → Oracle EBS → CVE-2025-61882 |
| Dispositivos más vulnerables | Edge devices — frecuentemente sin cobertura EDR, logging reducido, patching tardío |
| Zero-days para LPE (privilege escalation) | VICE SPIDER usó CVE-2025-32706 (Windows CLFS driver) |
| Tiempo entre divulgación y parche efectivo | Amplio — zero-days en RCE pueden permanecer efectivos por meses |

### Idea derivada para la presentación

GRACEFUL SPIDER lleva 5 años explotando zero-days en productos de transferencia de archivos empresariales. No cambia de táctica porque **funciona**: cada nueva vulnerabilidad les da acceso a miles de organizaciones simultáneamente. Este patrón demuestra que el riesgo zero-day no es aleatorio — es sistemático y orientado a categorías de productos predecibles. AI-driven threat intelligence puede anticipar qué categorías de productos serán objetivo.

---

## Sección: Cloud y Confianza (pp. 39–45)

### Datos clave

| Técnica | Actor | Impacto |
|---|---|---|
| **AiTM phishing** (adversary-in-the-middle) | eCrime + state-nexus | Bypassa MFA — captura sesión en tiempo real |
| Hybrid identity abuse (Entra ID, AD FS) | SCATTERED SPIDER, BLOCKADE SPIDER | Acceso enterprise-wide, admin privilege escalation |
| Partner/tenant trust abuse | MURKY PANDA | Radio de impacto exponencial — múltiples downstream orgs |
| OAuth token theft (SaaS) | ShinyHunters, IMPERIAL KITTEN | Acceso a CRM, Microsoft 365, SharePoint |
| AiTM kit en uso | *EvilGinx2* — IMPERIAL KITTEN contra Microsoft 365 Israel | Credenciales + sesión activa capturadas |

### Layers de confianza explotadas (Figura 18 del reporte)

| Nivel | Actores | Mecanismo | Radio |
|---|---|---|---|
| **Organization-level trust** | MURKY PANDA | Partner tenant connections, SaaS provider secrets | Exponencial — múltiples orgs downstream |
| **Tenant identity-level trust** | SCATTERED SPIDER, BLOCKADE SPIDER | Entra Connect Sync, AD FS, password hash sync | Alto — acceso enterprise-wide |
| **User-level trust** | COZY BEAR, IMPERIAL KITTEN | OAuth 2.0 flows, device code auth, SSL certs | Individual → initial access vector |

### Idea derivada para la presentación

El **82% malware-free** del Foreword se explica aquí: los atacantes no necesitan malware porque abusan de la infraestructura de confianza legítima (OAuth, MFA flows, SSO, AD FS). COZY BEAR dirigió a sus víctimas a páginas legítimas de Microsoft — la única señal anómala era el comportamiento post-autenticación. Esto es exactamente el caso de uso de behavioral analysis con AI: detectar lo que no parece malicioso pero se comporta de forma anómala.

---

## Sección: Conclusion (pp. 46–47)

### Statements directamente citables

> "As organizations embed AI into core business processes, the attack surface will expand to include AI models, training data, agents, and supply chains. Limited visibility into AI operations will amplify risk and create exploitable gaps." — p.46

> "The ransomware ecosystem was remarkably resilient despite law enforcement disruptions and internal criminal strife, confirming ransomware remains an attractive business model." — p.46

> "Targeted intrusion adversaries remained persistent and adaptive in 2025, incorporating stealth tactics, cloud-conscious techniques, and AI-enhanced capabilities to achieve their geopolitical and strategic objectives while evading defensive measures." — p.47

### Outlook por actor-tipo (p.47)

- **Russia-nexus:** continuará operaciones de intelligence contra Ucrania y NATO
- **China-nexus:** mantendrá alto tempo operativo, edge devices + telecom + finanzas + logística
- **DPRK-nexus:** cryptocurrency theft y revenue generation como prioridad

---

## Sección: Recommendations (pp. 48–49) — Call-to-Action para ACT III

Las 7 recomendaciones de CrowdStrike son el esqueleto perfecto para el slide de cierre (Slide 25 — call to action). Cada una tiene un corolario de AI:

| # | Recomendación | Vínculo con AI defensivo |
|---|---|---|
| **1** | **Secure AI to reduce emerging business and operational risk** | Gobernanza de AI: monitorear uso de tools, prompt injection, AI supply chain |
| **2** | **Treat identity and SaaS as primary attack surfaces** | AI-driven identity anomaly detection, MFA resistente a phishing |
| **3** | **Eliminate cross-domain blind spots** | XDR + SIEM con correlación cross-domain — AI une señales aisladas |
| **4** | **Secure the software supply chain** | Análisis comportamental de paquetes, validación de dependencias con AI |
| **5** | **Prioritize edge device patching** | Patch dentro de 72h de CVE crítico; monitoreo AI de edge devices sin EDR |
| **6** | **Prioritize proactive threat intelligence and hunting** | "When attacks unfold in minutes or seconds, reactive defense is no longer enough" |
| **7** | **Strengthen human resilience** | Tabletop exercises, red/blue team, awareness de adversary TTPs reales |

### Statement citable de la Recomendación 6

> "When attacks unfold in minutes or seconds, reactive defense is no longer enough. An intelligence-driven approach enables organizations to stop boiling the ocean and understand which adversaries are targeting them, how they operate, and where they are likely to strike next... organizations must augment analysts with specialized AI agents that accelerate intelligence analysis, hunting, triage, and response, turning insight into decisive action earlier in the attack life cycle." — p.49

---

## Tabla de datos consolidada — todo el reporte

| Dato | Valor | Slide sugerido |
|---|---|---|
| Breakout time promedio (eCrime) | **29 min** (↓65% vs 2024) | ACT I — slide velocidad de amenazas |
| Breakout más rápido registrado | **27 segundos** | ACT I — hook / impacto |
| Reducción breakout 2021–2025 | **70%** | ACT I — narrativa de aceleración |
| AI-enabled adversaries YoY | **+89%** | ACT I/II — AI como doble filo |
| Detecciones malware-free | **82%** (vs 51% en 2020) | ACT I — métodos tradicionales fallan |
| Zero-days antes de divulgación | **+42% YoY** | ACT II — APTs y zero-days |
| Cloud intrusions | **+37% YoY** / **+266%** state-nexus | ACT II — superficie cloud |
| Valid account abuse (cloud) | **35%** de incidentes | ACT II — vector identidad |
| China-nexus weaponización | **2–6 días** tras divulgación | ACT II/III — velocidad adversario |
| WARP PANDA acceso persistente | **22 meses** sin detección | ACT II — behavioral analysis |
| Bybit crypto theft | **$1.46 billion USD** | ACT III — supply chain attacks |
| ShaiHulud npm downloads | **+2 millones** antes de detectarse | ACT III — supply chain attacks |
| PUNK SPIDER intrusions 2025 | **198** intrusiones (+134% YoY) | ACT III — ransomware evolución |
| Adversarios totales rastreados | **281** (24 nuevos en 2025) | contexto — escala del problema |
| Fake CAPTCHA incidents | **+563% YoY** | ACT III — evolución de TTPs |
