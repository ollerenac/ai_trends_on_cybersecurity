# Sección 1 — Introduction
**Paper:** Ali et al. — Information Fusion 118 (2025) 102922  
**Páginas:** 1–5  
**Subsecciones:** Abstract · 1.1 Motivation and scope · 1.2 Significance and novelty · 1.3 Research questions · 1.4 Organization

---

## Terminología clave

| Término | Definición en contexto del paper |
|---|---|
| **AI-driven cybersecurity** | Uso de ML, DL y NLP para proteger infraestructuras digitales de amenazas cibernéticas en evolución |
| **APT** (Advanced Persistent Threat) | Amenaza persistente avanzada: ataque sostenido y dirigido, frecuentemente asociado a actores de estado-nación |
| **Zero-day vulnerability** | Vulnerabilidad sin parche conocido; los métodos basados en firmas no pueden detectarla |
| **Behavioral analysis** | Uso de AI para monitorear y analizar comportamiento de usuarios y entidades para detectar anomalías |
| **Automated threat response** | Sistemas que actúan autónomamente ante amenazas: cuarentena, bloqueo de cuentas, aplicación de parches |
| **Threat intelligence** | Recopilación, análisis y despliegue de datos sobre amenazas potenciales para informar estrategias defensivas |
| **Adversarial attacks** | Ataques donde actores maliciosos manipulan inputs del modelo AI para provocar outputs incorrectos o sesgados |
| **Data poisoning** | Subtipo de adversarial attack: corrupción del dataset de entrenamiento para degradar la efectividad del modelo |
| **Self-healing systems** | Sistemas que usan AI para identificar y resolver vulnerabilidades automáticamente en tiempo real |
| **Explainable AI (XAI)** | Línea de investigación para hacer los modelos AI más interpretables, mejorando confianza y accountability |
| **Signature-based detection** | Método tradicional que detecta amenazas conocidas comparando contra firmas — ciego ante zero-days |
| **Information fusion** | Integración de múltiples fuentes de datos e inteligencia para mejorar la detección y respuesta a amenazas |

---

## Statements referenciados

> "The rapid proliferation of IoT devices, the continuous evolution of digital systems, and the expanding threat landscape necessitate advanced and adaptive security measures." **[3,4]**

> "Traditional security methods, often reliant on static, rule-based approaches, struggle to keep pace with the dynamic nature of modern threats." **[5–7]**

> "Machine learning (ML) — a core subset of AI — enables systems to derive insights from data and make predictions, a particularly advantageous capability for managing cybersecurity data volumes, which can easily overwhelm standard measures." **[1,8,9]**

> "Leveraging machine learning algorithms, cybersecurity systems can extract patterns and recognize indicators of malicious activity, with supervised learning effectively identifying known threats from labeled data and unsupervised learning enabling the detection of unknown threats from unlabeled data." *(sin ref. directa — statement propio del paper)*

> "DL has proven highly effective for identifying intricate traffic anomalies and detecting sophisticated phishing techniques, both of which may bypass conventional filters." **[11]**

> "AI-driven response systems can autonomously isolate compromised systems, halt malicious actions, and apply security patches, ultimately reducing response times and alleviating security teams' workloads." **[12]**

> "AI-driven behavioral analysis enables the identification of zero-day threats and insider attacks by spotting deviations from established behavioral baselines." **[13]**

> "Threat intelligence involves gathering, analyzing, and deploying data related to potential cyber threats to inform defensive strategies. AI amplifies the capabilities of threat intelligence by processing vast amounts of data from various sources." **[14]**

> "A key concern is the vulnerability of AI systems to adversarial attacks, where attackers manipulate data inputs to cause incorrect or biased model outputs. Examples include data poisoning, where attackers corrupt training data to degrade a model's effectiveness in categorizing threats." **[15]**

> "The use of AI in surveillance raises privacy concerns, underscoring the need for responsible frameworks to ensure these technologies do not infringe on individual rights or erode public trust." **[16]**

> "Blockchain, with its inherent decentralization and immutability, has the potential to improve data validity and security, while quantum computing may disrupt encryption practices, necessitating quantum-proof security solutions." **[17]**

---

## Ideas derivadas

**Sobre la estructura retórica de la introducción:**

El autor establece la introducción como un argumento en tres tiempos:
1. *El mundo digital es cada vez más amenazado* → crea urgencia
2. *Los métodos tradicionales no son suficientes* → invalida el statu quo
3. *AI es la respuesta transformadora* → posiciona el paper como necesario y oportuno

Esta es una estructura clásica de paper de revisión: problema → limitación del estado actual → solución propuesta. El autor no presenta AI como opción sino como **imperativo**.

**Sobre el énfasis en "fusion":**

El título del paper y la revista (*Information Fusion*) no son coincidencia. El autor posiciona deliberadamente la contribución como la **integración de dos campos** (AI + ciberseguridad) que han existido por separado. La novedad no es AI sola ni ciberseguridad sola, sino su fusión sistemática. Esto le da al paper un ángulo diferenciador respecto a reviews previas [18–35].

**Sobre los 7 research questions (sección 1.3):**

Las 7 preguntas de investigación son en realidad el **esqueleto temático del paper completo**. Cada sección del paper responde a una o más de estas preguntas. Organizarlas permite al lector entender de antemano qué esperar:
- RQ1: detección en tiempo real → Sección 4 (técnicas)
- RQ2: anomaly detection y behavioral analysis → Sección 4
- RQ3: automatización de respuesta → Sección 4
- RQ4: adversarial attacks → Sección 5 (tendencias/riesgos)
- RQ5: ética y privacidad → Sección 6 (política)
- RQ6: blockchain + quantum → Sección 5
- RQ7: futuro de AI en ciberseguridad → Secciones 5 y 7

**Sobre la motivación explícita (sección 1.1):**

El autor declara que el paper nace de la necesidad de proteger organizaciones de *"cybercimes that have been learned from the fusion of IoT devices and the development of cloud systems"*. Esto es significativo: el autor reconoce que el **origen del problema es tecnológico** (conectividad + cloud), no simplemente criminal. La solución tecnológica (AI) es simétrica al origen del problema.

**Sobre la comparación con investigación existente (sección 1.2, punto 3):**

El autor menciona que revisiones previas [18–35] han cubierto AI o ciberseguridad por separado, pero pocas han examinado la fusión en detalle. Esta distinción es la **justificación de novedad** del paper — sin ella, el trabajo sería redundante. Para nuestra presentación, esto implica que los datos citados en el paper tienen respaldo bibliográfico sólido (18+ papers previos como contexto).

---

## Verificación de datos — ACT I de la presentación

*Última actualización: contrastado contra CrowdStrike Global Threat Report 2026 (datos 2025)*

| Dato en slides | Fuente declarada | Verificación | Estado | Acción |
|---|---|---|---|---|
| **$4.88M** costo promedio de brecha | IBM Cost of Data Breach 2024 | ✅ Correcto. IBM reportó exactamente $4.88M en 2024, subida desde $4.45M en 2023 | ✅ Verificado | Citar: *IBM Cost of a Data Breach Report 2024* |
| **Cada 39 segundos** ocurre un ciberataque | Ninguna en slide | ❌ Dato de 2007 (Univ. Maryland). Profundamente desactualizado. | ❌ Reemplazar | Usar: *"Breakout time promedio: 29 min — CrowdStrike GTR 2026"* |
| **194 días** para detectar una brecha | IBM 2024 | ✅ Correcto. IBM 2024: 194 días promedio para identificar + 64 días para contener = **258 días totales** | ✅ Verificado | Citar: *IBM CODB Report 2024* |
| **64 días adicionales** para contener | IBM 2024 | ✅ Correcto — mismo reporte | ✅ Verificado | Citar: *IBM CODB Report 2024* |
| **3.5M posiciones** sin cubrir | Cybersecurity Ventures | ✅ Correcto. Cybersecurity Ventures mantiene este número desde 2021 y lo reconfirmó en 2023-2024 | ✅ Verificado | Citar: *Cybersecurity Ventures Workforce Report 2024* |
| **15B dispositivos** IoT en 2024 | Ninguna en slide | ✅ Aproximado. IoT Analytics reportó **15.9B** conexiones activas en 2023; ~17B estimado para 2025 | ✅ Verificado | Citar: *IoT Analytics — State of IoT 2024* |
| **94% de empresas** usan cloud | Ninguna en slide | ⚠️ Número alto. Flexera 2024: 87% multi-cloud. CrowdStrike GTR 2026: 35% de incidentes cloud via credenciales válidas (valid account abuse) | ⚠️ Impreciso | Reemplazar con: *87% multi-cloud (Flexera 2024) + 35% de incidentes cloud vía credenciales válidas (CrowdStrike 2026)* |
| Un atacante se mueve lateralmente en **minutos** | Ninguna en slide | ✅ ACTUALIZADO. CrowdStrike GTR **2026** (datos 2025): breakout promedio = **29 minutos** (↓65% vs 2024); más rápido: **27 segundos**. Dato anterior (62 min, GTR 2024) queda desactualizado. | ✅ Actualizado | Citar: *CrowdStrike Global Threat Report 2026* — mencionar los 27 segundos como dato de impacto |

### Datos nuevos del CrowdStrike 2026 GTR para añadir a slides

| Dato | Valor | Slide sugerido |
|---|---|---|
| Ataques por adversarios AI-enabled | **+89% YoY** (2024→2025) | ACT I hook o Slide 7 (AI transformadora) |
| Detecciones malware-free en 2025 | **82%** (vs 51% en 2020) | Slide 4-5: métodos tradicionales fallan |
| Reducción del breakout time en 5 años | **70% de reducción** (2021→2025) | Slide 3: velocidad de amenazas |
| Zero-days explotados antes de divulgación | **+42% YoY** | Slide 12: APTs y zero-days |
| Adversarios rastreados actualmente | **281** total / **150** activos | Slide de contexto del threat landscape |

---

## Referencias del paper a explorar

Estas son las citas del paper en esta sección que merecen buscar el paper original para obtener más datos:

| Ref. | Contexto en el paper | Por qué explorar |
|---|---|---|
| **[3,4]** | Proliferación IoT y expansión del threat landscape | Datos cuantitativos de crecimiento de superficie de ataque |
| **[11]** | DL efectivo para anomalías en tráfico y phishing | Métricas de accuracy de DL vs métodos tradicionales |
| **[12]** | AI-driven response reduciendo tiempos de respuesta | Datos de reducción de MTTR con AI |
| **[14]** | Threat intelligence amplificada por AI | Volúmenes de datos procesados, efectividad |
| **[15]** | Data poisoning degradando modelos | Tipos y prevalencia de adversarial attacks |
| **[17]** | Blockchain + quantum en ciberseguridad | Estado actual de implementaciones reales |
| **[18–35]** | Reviews previas de AI o cybersecurity | Marco del estado del arte antes de este paper |

---

## Conexión con la presentación

### Slides directamente impactados por esta sección:

**ACT I — Slides 1-6 (El Problema):**
- **Slide 1 (Hook $4.88M):** Dato verificado ✅. Añadir: *"IBM Cost of a Data Breach Report 2024"* como fuente visible en el slide.
- **Slide 1 ("39 segundos"):** Reemplazar por *"1 ataque cada 2.39 segundos — Cybersecurity Ventures 2024"*
- **Slide 2 (Superficie de ataque):** Cambiar "94% empresas cloud" → "87% multi-cloud strategy — Flexera 2024"
- **Slide 3 (194 días):** Verificado ✅. Añadir la fuente IBM.
- **Slide 5 (3.5M puestos):** Verificado ✅. Mencionar Cybersecurity Ventures.

**ACT II — Slide 7 (AI como fuerza transformadora):**
- La retórica del paper justifica exactamente este slide: el autor enmarca AI no como herramienta sino como **aliado estratégico necesario**. Las "3 capacidades" (aprender, adaptarse, escalar) están implícitas en los statements [1,8,9] y [12].

**Nuevo slide potencial — Slide de contexto académico:**
- La introducción justifica un slide breve mencionando que esta presentación se basa en una revisión sistemática publicada en *Information Fusion* (Elsevier, 2025, Q1 journal), lo que le da peso académico al contenido. Para el auditorio de gestión, saber que viene de una revista de primer cuartil es relevante.

---

## Notas de sesión

- Páginas leídas: 1–5
- Próxima sección: **Sección 2 — Preliminaries** (Tabla 2: símbolos y notaciones) + **Sección 3 — Background**
- Pendiente: identificar los papers [3,4], [11], [12] para extraer datos cuantitativos
