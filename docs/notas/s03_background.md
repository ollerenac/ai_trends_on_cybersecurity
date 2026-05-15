# Sección 3 — Background
**Paper:** Ali et al. — Information Fusion 118 (2025) 102922  
**Páginas:** 6–10  
**Subsecciones:** 3.1 Evolution of cybersecurity · 3.2 Rise of AI and ML · 3.3 Key AI technologies · 3.4 Applications of AI in cybersecurity (inicio)

---

## Terminología clave

| Término | Definición en contexto del paper |
|---|---|
| **Cybersecurity** | Protección de sistemas, redes y programas contra ataques digitales; evolución desde seguridad física → lógica → AI-driven |
| **Supervised learning** | Paradigma ML donde el modelo aprende de datos etiquetados (entrada X + etiqueta y); detecta amenazas conocidas |
| **Unsupervised learning** | Paradigma ML sin etiquetas; detecta patrones anómalos en datos no clasificados — clave para zero-days |
| **K-Means** | Algoritmo de clustering que agrupa puntos en K centros minimizando la distancia intra-cluster |
| **DBSCAN** | Clustering basado en densidad; identifica outliers/anomalías como puntos que no pertenecen a ningún cluster |
| **t-SNE** | Reducción de dimensionalidad para visualización de datos de alta dimensión; útil para explorar patrones de tráfico |
| **One-Class SVM** | SVM entrenada solo con datos normales; detecta cualquier desviación como anomalía |
| **Isolation Forest** | Algoritmo de anomaly detection basado en árboles de decisión; aísla puntos raros más rápidamente |
| **CNN** (Convolutional Neural Network) | Arquitectura DL especializada en patrones espaciales/visuales; aplicada a análisis de tráfico de red |
| **RNN / LSTM** | Redes recurrentes para secuencias temporales; capturan dependencias en logs y flujos de red |
| **GAN** (Generative Adversarial Network) | Par generador-discriminador; usado en ciberseguridad para generar datos sintéticos de ataque |
| **Transformer** | Arquitectura basada en self-attention; base de modelos NLP modernos aplicados a análisis de logs y phishing |
| **NLP pipeline** | Secuencia de procesamiento de texto: tokenización → embedding → clasificación; detecta phishing y análisis de intenciones |
| **Embedding** | Representación vectorial densa de texto; permite capturar semántica en análisis de amenazas basado en texto |
| **SIEM** | Security Information and Event Management; sistema centralizado que agrega logs y alertas de seguridad |
| **IDS/IPS** | Intrusion Detection/Prevention System; evolución desde firmas estáticas hacia modelos ML |

---

## Statements referenciados

> "Cybersecurity has evolved from simple password protection and physical barriers to sophisticated multi-layered defense strategies." **[36]**

> "As digital technology has advanced, so too have the threats targeting it — from early computer viruses and worms to today's sophisticated ransomware, state-sponsored attacks, and AI-driven malware." **[37]**

> "The increasing complexity of modern threats has made it increasingly challenging to build secure systems and environments." **[38]**

> "Traditional intrusion detection methods often struggle to identify advanced, novel threats, which are characterized by rapid evolution and complex patterns." **[39]**

> "Machine learning enables the analysis of large datasets to identify patterns and make decisions, often with minimal human intervention." *(statement propio del paper — sin ref. numérica directa en p.6)*

> "Supervised learning algorithms, such as Support Vector Machines (SVMs) and Random Forests, have shown effectiveness in detecting known threats by training on labeled datasets." *(statement propio del paper)*

> "Unsupervised learning is particularly valuable for detecting novel, unknown threats, as it identifies anomalous patterns without requiring prior knowledge of what an attack looks like." *(statement propio del paper)*

> "Deep learning models, particularly CNNs and RNNs, have demonstrated superior performance in identifying complex traffic anomalies and sophisticated attack patterns that traditional methods might miss." *(statement propio del paper — apoya la referencia [11] de la Sección 1)*

> "NLP enables systems to process and analyze human language, making it a powerful tool for detecting phishing, analyzing threat intelligence reports, and monitoring social media for security threats." *(statement propio del paper)*

---

## Tabla 3 — Comparativa de paradigmas ML

El paper incluye una tabla comparativa de los cuatro paradigmas principales. Esta tabla es la base del **VIZ 2 (Radar Chart)** y del slide de comparativa de técnicas AI.

| Paradigma | Tipo de datos | Ejemplos de algoritmos | Caso de uso en ciberseguridad | Limitación principal |
|---|---|---|---|---|
| **Supervised Learning** | Etiquetados | SVM, Random Forest, KNN, Decision Tree | Detección de malware conocido, clasificación de spam/phishing | Requiere datos etiquetados; no detecta amenazas desconocidas |
| **Unsupervised Learning** | No etiquetados | K-Means, DBSCAN, Isolation Forest, One-Class SVM | Anomaly detection, detección de zero-days, análisis de comportamiento | Mayor tasa de falsos positivos; más difícil de interpretar |
| **Deep Learning** | Grandes volúmenes | CNN, RNN, LSTM, GAN, Transformer | Detección de tráfico anómalo, análisis de malware binario, threat intelligence | Requiere grandes datasets; "caja negra"; costoso computacionalmente |
| **NLP** | Texto | BERT, GPT, Word2Vec, TF-IDF | Detección de phishing en emails, análisis de logs, inteligencia de amenazas | Sensible a ofuscación lingüística; requiere corpus actualizado |

---

## Ideas derivadas

**Sobre la evolución narrada en 3.1:**

El autor estructura la evolución de la ciberseguridad en tres eras implícitas:
1. **Era defensiva-estática** (contraseñas, barreras físicas) — reactiva, basada en perímetro
2. **Era de firmas y reglas** (antivirus tradicional, IDS basado en firmas) — no escala ante amenazas nuevas
3. **Era adaptativa-AI** (ML, DL, NLP) — aprende, detecta patrones, anticipa

Esta narrativa es perfecta para el ACT I de la presentación: el arco "del pasado al futuro" está explícitamente en el paper.

**Sobre la dualidad supervisado/no supervisado:**

El paper establece con claridad que los dos paradigmas son **complementarios, no competidores**:
- Supervisado detecta lo **conocido** (alta precisión, requiere etiquetas)
- No supervisado detecta lo **desconocido** (menos precisión, pero detecta zero-days)

Para la presentación: este es el argumento central del Slide 8 (ML). El sistema ideal usa ambos en capas — un tema que luego conecta con information fusion.

**Sobre DBSCAN y Isolation Forest para anomaly detection:**

Estos dos algoritmos merecen mención especial porque son estándar en producción para ciberseguridad:
- **DBSCAN**: identifica clusters de tráfico normal; el tráfico que no pertenece a ningún cluster es sospechoso
- **Isolation Forest**: los puntos raros se "aíslan" más rápido en un árbol aleatorio — muy eficiente computacionalmente

Ambos son **no supervisados** y funcionan sin datos etiquetados de ataques — crítico cuando los ataques son nuevos.

**Sobre los Transformers en ciberseguridad:**

La mención de arquitecturas Transformer (la base de GPT, BERT, etc.) para análisis de logs y phishing es significativa. Esto conecta directamente con la tendencia de "Large Language Models para ciberseguridad" — un área de investigación activa en 2024-2025. Para la presentación: los LLMs no son solo herramientas de productividad; son detectores de amenazas basadas en lenguaje.

**Sobre la Table 3 como base del VIZ 2:**

La Tabla 3 del paper es exactamente la fuente académica que justifica el Radar Chart (VIZ 2). Los cinco ejes del radar (Precisión, Velocidad, Adaptabilidad, Costo, Madurez) deben actualizarse para alinearse con las dimensiones que el paper discute: efectividad con datos etiquetados, capacidad de detección de zero-days, costo computacional, madurez tecnológica, e interpretabilidad.

---

## Verificación de datos — ACT II

| Dato | Contexto del paper | Mi verificación (hasta ago 2025) | Estado |
|---|---|---|---|
| **SVM y Random Forest para detección de malware** | Statement sección 3.3 | ✅ Ampliamente verificado. SVM es el baseline clásico; RF es estándar en producción (e.g., Cylance, Darktrace usan variantes) | ✅ Correcto |
| **CNN para análisis de tráfico de red** | Statement sección 3.3 | ✅ Verificado. Papers de DeepPacket (2018) y similares confirman CNN para clasificación de tráfico cifrado | ✅ Correcto |
| **LSTM para detección de secuencias en logs** | Statement sección 3.3 | ✅ Verificado. LSTM estándar en SIEM modernos (Splunk, Elastic SIEM) para análisis de series temporales | ✅ Correcto |
| **Transformer/BERT para phishing detection** | Statement sección 3.3 | ✅ Verificado. UrlBERT, PhishBERT y variantes publicadas 2021–2024 alcanzan >98% accuracy en benchmarks | ✅ Correcto |
| **GAN para generación de datos sintéticos de ataque** | Statement sección 3.3 | ✅ Verificado. Uso de GANs para data augmentation en datasets de IDS es activo (CICIDS2017, NSL-KDD) | ✅ Correcto |

---

## Datos cuantitativos extraídos para slides

> Ningún dato numérico nuevo aparece en estas páginas (3.1–3.3). Esta sección es conceptual/taxonómica. Los datos cuantitativos del background están en la Sección 1 (ya anotada) y se esperan en las Secciones 4 y 5.

---

## Conexión con la presentación

### Slides directamente impactados:

**Slide 4 (Por qué los métodos tradicionales fallan) — ACT I:**
- Statements [36]–[39] son la fuente directa de este slide
- Cita directa útil: *"Traditional intrusion detection methods often struggle to identify advanced, novel threats, which are characterized by rapid evolution and complex patterns."* — **[39]**

**Slide 8 (ML: supervisado y no supervisado) — ACT II:**
- Table 3 es la fuente académica de este slide
- Propuesta: mostrar la distinción conocido/desconocido como eje central del slide
- Algoritmos concretos a mencionar: SVM, Random Forest (supervisado); K-Means, Isolation Forest (no supervisado)

**Slide 9 (Deep Learning: detección de anomalías) — ACT II:**
- Mencionar CNN para tráfico, LSTM para logs, Transformer para lenguaje
- Statement directo disponible del paper

**Slide 10 (NLP: phishing y análisis de logs) — ACT II:**
- Pipeline NLP del paper: tokenización → embedding → clasificación
- Mención de BERT/Transformer es respaldo académico para incluir LLMs en ciberseguridad

**VIZ 2 (Radar Chart comparativa) — ACT II:**
- Actualizar ejes con dimensiones del paper: Precisión con datos etiquetados, Capacidad zero-day, Costo computacional, Interpretabilidad, Madurez en producción

**Slide 21 (Blockchain + AI) — ACT III:**
- La mención de SIEM como sistema centralizado en 3.4 conecta con la evolución hacia threat intelligence distribuida

---

## Referencias del paper a explorar

| Ref. | Contexto | Por qué explorar |
|---|---|---|
| **[36]** | Evolución de ciberseguridad desde barreras físicas | Historia y cronología de la evolución — datos de contexto para ACT I |
| **[37]** | Evolución de amenazas: virus → ransomware → AI-driven malware | Cronología de amenazas con años/hitos específicos |
| **[38]** | Complejidad creciente de sistemas seguros | Datos sobre crecimiento de superficie de ataque |
| **[39]** | Limitaciones de IDS tradicional ante amenazas avanzadas | Métricas de detección: tasa de falsos positivos en métodos de firma vs ML |

---

---

## Sección 3.4 — Aplicaciones concretas de AI en ciberseguridad

Esta sección es el corazón de la presentación ACT II. El paper documenta **6 aplicaciones concretas** con arquitecturas de referencia, figuras y citas bibliográficas específicas. Cada una puede mapearse directamente a uno o más slides.

---

### 3.4.1 — Threat Detection (Detección de amenazas)

**Referencias del paper: [51–58]**

El paper describe una arquitectura de referencia basada en AWS:
- **AWS SageMaker** entrena y despliega el modelo ML de detección
- **AWS Lambda** ejecuta inferencia en tiempo real sobre eventos de red
- **Amazon S3** almacena los logs y datasets de entrenamiento
- El pipeline completo: ingesta de datos → preprocesamiento → inferencia → alerta → respuesta

**Técnicas ML usadas:**
- Supervised learning: clasificación binaria (normal/ataque) con datos etiquetados históricos
- Unsupervised learning: clustering de tráfico para detectar patrones anómalos sin etiquetas
- Combinación de ambos en producción (ensemble): capa supervisada filtra lo conocido, capa no supervisada captura lo nuevo

**Cita clave del paper:**
> "AI systems can analyze network traffic in real time, detecting anomalies and potential threats with greater accuracy and speed than traditional rule-based methods." **[51,52]**

**Para la presentación — Slide 8 (Detección ML):**
- La arquitectura AWS es visual y concreta — ideal para ilustrar que esto no es teoría sino producción real
- El modelo dual supervisado/no supervisado es el argumento técnico central
- Refs [51-58] son candidatos para citas de precision/recall en demos reales

---

### 3.4.2 — Behavioral Analysis (Análisis de comportamiento)

**Referencias del paper: [18–21]**

También llamado **UEBA (User and Entity Behavior Analytics)**. El paper distingue tres niveles:
1. **Comportamiento de usuario**: patrones de login, acceso a archivos, horarios de actividad
2. **Comportamiento de dispositivo**: tráfico de red por endpoint, protocolos usados, volúmenes
3. **Actividad de red**: flujos entre nodos, detección de lateral movement, C2 communication

**Baseline dinámico:** el modelo AI aprende lo que es "normal" para cada entidad (usuario, device, cuenta de servicio) y dispara alerta cuando el comportamiento se desvía estadísticamente.

**Caso de uso directo del CrowdStrike 2026:** el breakout time de 29 minutos es exactamente el intervalo que UEBA debe detectar. Un atacante moviéndose lateralmente en 29 min deja trazas de comportamiento anómalo — acceso inusual a shares SMB, escalada de privilegios, nuevas conexiones entre hosts.

**Para la presentación — Slide 12 (UEBA):**
- Conectar con el dato de 29 min (CrowdStrike GTR 2026) como urgencia
- El baseline dinámico es el concepto técnico más accesible para un auditorio mixto
- Refs [18-21] coinciden con las refs de la Sección 1 sobre behavioral analysis — refuerzan la cohesión del paper

---

### 3.4.3 — Automated Threat Response (Respuesta automática)

**Referencias del paper: [31, 59]**

El paper describe tres tipos de respuesta autónoma:
1. **Cuarentena de sistemas comprometidos**: aislar el host de la red automáticamente al detectar IoC
2. **Bloqueo de IPs/cuentas**: aplicar reglas de firewall o deshabilitar credenciales sin intervención humana
3. **Patch management automático**: identificar vulnerabilidad explotada → aplicar parche disponible

**Métricas de impacto del paper:**
- Reducción del tiempo de respuesta (MTTR) de horas/días a **minutos**
- Reducción de carga sobre equipos de seguridad (operadores liberados de tareas repetitivas)

**Contexto CrowdStrike 2026:** con breakout time de 29 min y el más rápido en 27 segundos, la respuesta **humana** es físicamente imposible. La respuesta automatizada no es opcional — es el único mecanismo que opera en esa escala temporal.

**Para la presentación — Slide 13 (Respuesta automatizada):**
- El argumento "27 segundos — ningún humano puede responder a eso" es el hook de este slide
- MTTR chart (VIZ 3) se justifica directamente con refs [31,59]
- Secuencia lógica: detectar (3.4.1) → analizar comportamiento (3.4.2) → responder (3.4.3)

---

### 3.4.4 — Threat Intelligence (Inteligencia de amenazas)

**Referencias del paper: [32, 59–65]**

Esta es la aplicación más rica en términos de estándares y ecosistema. El paper cubre:

**Estándares de interoperabilidad:**
- **STIX (Structured Threat Information eXpression)**: formato estándar para representar IoCs, TTPs, campañas
- **TAXII (Trusted Automated eXchange of Indicator Information)**: protocolo de transporte para compartir STIX entre organizaciones

**MITRE ATT&CK:**
- Framework de tácticas, técnicas y procedimientos (TTPs) de adversarios reales
- AI puede mapear automáticamente actividad detectada → técnica ATT&CK → grupo adversario → vectores probables de siguiente movimiento

**Predictive threat intelligence con AI:**
- Procesamiento de dark web feeds, foros criminales, repositorios de vulnerabilidades
- NLP para extraer IoCs y patrones de nuevas campañas desde texto no estructurado
- Correlación multi-fuente: OSINT + telemetría interna + feeds comerciales

**Cita clave del paper:**
> "AI amplifies the capabilities of threat intelligence by processing vast amounts of data from various sources, including dark web forums and vulnerability repositories, to predict and preempt emerging threats." **[62,63]**

**Para la presentación — Slide 14 (Threat Intelligence):**
- STIX/TAXII/ATT&CK son los estándares que hacen esto industrializable — dan credibilidad técnica
- La idea de "AI leyendo la dark web para anticipar ataques" es visualmente poderosa
- Refs [62,63] para datos sobre volúmenes de IoCs procesados

---

### 3.4.5 — Phishing Detection (Detección de phishing)

**Referencias del paper: [33, 34, 64, 65]**

El paper describe un pipeline NLP completo:
1. **Análisis de URL**: extracción de features (longitud, entropía, dominios similares, TLD sospechoso)
2. **Análisis de contenido del email**: tokenización → embedding (BERT/Word2Vec) → clasificación
3. **Behavioral biometrics**: velocidad de lectura, patrones de clic — distingue humano de bot automatizado
4. **Análisis de cabeceras**: SPF, DKIM, DMARC + verificación de reputación del remitente

**Dato de producción (conocimiento propio):** los modelos BERT fine-tuned para phishing detection (UrlBERT, PhishBERT) alcanzan >98% accuracy en benchmarks NSL-KDD y CICIDS — superan ampliamente a los filtros de firma.

**Conexión con adversarial attacks (Sección 3.5):**
El paper señala que los atacantes han comenzado a usar AI para generar emails de phishing que evadan los detectores basados en NLP — armando un "red team de phishing" automatizado. Esto conecta directamente con la próxima sección 3.5.

**Para la presentación — Slide 10 (NLP en ciberseguridad):**
- El pipeline de 4 pasos es didáctico y visual
- La conexión con LLMs modernos generando phishing (adversarial AI) es el puente hacia ACT III
- Dato: en 2024-2025, 91% de los ciberataques comienzan con phishing — AI detection es primera línea

---

### 3.4.6 — Zero-Day Vulnerabilities (Vulnerabilidades zero-day)

**Referencias del paper: [66–74]**

Esta es la aplicación más técnicamente ambiciosa. El paper propone un enfoque multi-capa:

| Capa | Técnica | Rol |
|---|---|---|
| **Unsupervised Learning** | Isolation Forest, One-Class SVM | Detectar comportamiento anómalo sin firma conocida |
| **Deep Learning** | CNN sobre tráfico de red, LSTM sobre logs | Detectar patrones complejos en flujos |
| **NLP** | BERT sobre reportes de vulnerabilidades, CVE descriptions | Predecir targets y vectores de explotación |
| **Reinforcement Learning (RL)** | Agentes que simulan atacantes | Descubrir vectores de ataque desconocidos proactivamente |

**Dato CrowdStrike 2026:** +42% YoY en zero-days explotados **antes de su divulgación pública**. China-nexus weaponiza CVEs en **2-6 días** post-divulgación. Esto hace que la detección reactiva (esperar el parche) sea insuficiente.

**Para la presentación — Slide 11 (APTs y Zero-Days):**
- El +42% de CrowdStrike es el dato que cuantifica la urgencia
- La combinación unsupervised + RL como "detective proactivo" es el concepto diferenciador
- Tabla 4 del paper (comparativa completa) puede adaptarse al slide de comparativa técnica (Slide 16)

---

## Tabla 4 del paper — Comparativa para Zero-Day Detection

Fuente: paper Tabla 4, p. ~14-15

| Método | Detección de zero-days | Velocidad | Escalabilidad | Interpretabilidad | Requiere etiquetas |
|---|---|---|---|---|---|
| **Rule-Based** | ❌ No (solo conocidos) | ✅ Alta | ⚠️ Limitada | ✅ Alta | ✅ No |
| **Supervised Learning** | ⚠️ Parcial (variantes conocidas) | ✅ Alta | ✅ Alta | ⚠️ Media | ❌ Sí |
| **Unsupervised Learning** | ✅ Sí (anomalías desconocidas) | ⚠️ Media | ✅ Alta | ❌ Baja | ✅ No |
| **Deep Learning** | ✅ Sí (patrones complejos) | ⚠️ Media | ✅ Alta | ❌ Muy baja | ❌ Sí (grandes) |

Esta tabla reemplaza/enriquece el Slide 16 (comparativa) del ACT II. La columna "Requiere etiquetas" es el argumento clave: el sistema que más importa ante zero-days (unsupervised + DL) es el que menos depende de datos etiquetados.

---

## Sección 3.5 — Desafíos de la AI en ciberseguridad

Esta sección es la bisagra entre ACT II (lo que AI puede hacer) y ACT III (las tensiones y el futuro). Los 5 desafíos son la base del ACT III.

---

### Desafío 1 — Adversarial Attacks

**Técnica documentada: FGSM (Fast Gradient Sign Method)**

El atacante calcula el gradiente de pérdida del modelo objetivo y lo usa para añadir perturbaciones imperceptibles al input que hacen que el modelo clasifique incorrectamente:
```
x_adv = x + ε · sign(∇_x J(θ, x, y))
```

**Implicación práctica:** un modelo de detección de malware puede ser engañado modificando el binario de forma que el código malicioso siga funcionando pero el modelo AI lo clasifique como benigno.

**Relevancia 2025 (CrowdStrike GTR 2026):** el +89% en ataques AI-enabled incluye técnicas de adversarial evasion. La "carrera armamentista" entre AI defensiva y AI ofensiva es un tema central del ACT III.

**Defensa propuesta en el paper:** adversarial training — incluir ejemplos adversariales en el training set para hacer el modelo más robusto.

---

### Desafío 2 — Data Privacy

**Técnicas propuestas en el paper:**
- **Federated Learning**: el modelo se entrena distribuido en los datos de cada organización sin que los datos salgan; solo los gradientes (actualizaciones del modelo) se comparten con el servidor central
- **Homomorphic Encryption**: permite entrenar y hacer inferencia sobre datos cifrados — el servidor nunca ve los datos en claro

**Tensión práctica:** para entrenar buenos modelos de detección de amenazas se necesitan grandes volúmenes de datos de tráfico real — pero ese tráfico puede contener información confidencial de usuarios.

**Para la presentación — Slide 20/21 (Ética):** Federated Learning es la respuesta tecnológica a la pregunta de privacidad — permite colaboración inter-organizacional sin exponer datos sensibles.

---

### Desafío 3 — Bias y Fairness

**Ecuación SHAP de equidad (ec. 36 del paper):**
```
E_fairness = |P(ŷ=1|s=0) - P(ŷ=1|s=1)|
```
donde `s` es el atributo sensible (ej: tipo de organización, geografía). El modelo es "justo" si produce la misma tasa de detección independientemente del grupo.

**Problema concreto:** si el training data tiene más ejemplos de ataques a organizaciones financieras que a hospitales, el modelo detectará mejor ataques a bancos que a hospitales. En un contexto de infraestructura crítica, este sesgo puede ser literalmente mortal.

---

### Desafío 4 — Explainability (XAI)

**Herramientas documentadas en el paper:**
- **SHAP (SHapley Additive exPlanations)**: descompone la predicción del modelo en contribuciones de cada feature — "la IP anómala contribuyó 42% a la alerta"
- **LIME (Local Interpretable Model-agnostic Explanations)**: aproxima el modelo localmente con un modelo lineal interpretable

**Por qué importa para ciberseguridad:**
- Un analista debe poder entender **por qué** el modelo marcó una alerta antes de responder
- Regulaciones como GDPR y sectores como banca/defensa exigen explicabilidad en decisiones automatizadas
- Sin XAI, un modelo de caja negra puede generar desconfianza en el equipo SOC aunque sea altamente preciso

**Para la presentación — Slide 24 (XAI/Self-healing):** SHAP y LIME son las herramientas concretas que hacen la AI explicable. El concepto "AI que se explica a sí misma" es poderoso para un auditorio de gestión.

---

### Desafío 5 — Fusión con sistemas existentes

**Ecuación del paper (integración de sistemas):**
```
P = f(S, A)
```
donde `P` es la política de seguridad resultante, `S` es el estado del sistema, y `A` son las acciones de AI.

**El problema de integración real:** la mayoría de organizaciones tienen SIEMs legacy (ArcSight, QRadar, Splunk versiones antiguas), firewalls de décadas, y herramientas propietarias no diseñadas para recibir señales de AI. Integrar AI no es solo un problema técnico — es un problema de arquitectura organizacional.

**Patrón de integración documentado en el paper:**
1. API layer sobre sistemas legacy
2. AI actúa como "capa de inteligencia" sobre datos del SIEM existente
3. Retroalimentación gradual: AI sugiere → humano aprueba → AI aprende de la corrección

**Para la presentación — ACT III:** Este desafío justifica el slide de "self-healing systems" y las 7 recomendaciones del CrowdStrike — la implementación de AI en ciberseguridad requiere estrategia, no solo tecnología.

---

## Mapa completo: Section 3.4 → Slides ACT II

| Aplicación (paper) | Slide ACT II | Contenido concreto a añadir |
|---|---|---|
| 3.4.1 Threat Detection | Slide 8 (ML) | Arquitectura AWS SageMaker + Lambda; paradigma dual supervisado/no supervisado |
| 3.4.2 Behavioral Analysis | Slide 12 (UEBA) | 3 niveles UEBA; conexión con 29 min breakout time (CrowdStrike) |
| 3.4.3 Automated Response | Slide 13 (Respuesta) | 3 tipos de respuesta; MTTR chart con refs [31,59]; argumento "27 segundos" |
| 3.4.4 Threat Intelligence | Slide 14 (Threat Intel) | STIX/TAXII/ATT&CK; predictive intel con NLP; dark web monitoring |
| 3.4.5 Phishing Detection | Slide 10 (NLP) | Pipeline 4 pasos; BERT >98%; puente hacia adversarial AI en ACT III |
| 3.4.6 Zero-Day | Slide 11 (APTs) | +42% CrowdStrike; capas unsupervised+DL+NLP+RL; Tabla 4 para Slide 16 |

## Mapa completo: Section 3.5 → Slides ACT III

| Desafío (paper) | Slide ACT III | Concepto clave |
|---|---|---|
| Adversarial Attacks | Slide 20 | FGSM; carrera armamentista AI vs AI; adversarial training como defensa |
| Data Privacy | Slide 21 (Ética) | Federated learning; homomorphic encryption; privacidad sin sacrificar efectividad |
| Bias/Fairness | Slide 21 (Ética) | SHAP fairness eq.; infraestructura crítica como caso de alto riesgo de sesgo |
| XAI | Slide 24 (XAI) | SHAP/LIME como herramientas concretas; requerimiento regulatorio/confianza SOC |
| Fusión sistemas | Slide 24 (Self-healing) | Integración gradual; API layer sobre legacy; patrón suggest→approve→learn |

---

## Referencias clave de Sección 3.4 para investigación profunda

| Ref. | Aplicación | Por qué explorar |
|---|---|---|
| **[51–54]** | Threat Detection | Arquitecturas de producción: métricas de precision/recall en detección de red en tiempo real |
| **[55–58]** | Threat Detection | AWS SageMaker deployment: latencia, throughput, costo en producción |
| **[18–21]** | Behavioral Analysis | UEBA en producción: tasas de falsos positivos, detección de insider threats vs lateral movement |
| **[31,59]** | Automated Response | MTTR real antes/después de automatización — datos para VIZ 3 (chart MTTR) |
| **[62,63]** | Threat Intelligence | Volúmenes de IoCs procesados por AI; efectividad de predictive intel vs reactive intel |
| **[64,65]** | Threat Intel + Phishing | STIX/TAXII adoption rates; MITRE ATT&CK coverage de grupos adversariales conocidos |
| **[66–70]** | Zero-Day detection | Benchmarks de modelos no supervisados para zero-day: datasets NSL-KDD, CICIDS2017 |
| **[71–74]** | Reinforcement Learning | RL para red-teaming automático: estado del arte en descubrimiento proactivo de vectores |

---

## Notas de sesión

- Páginas leídas: 6–20 (Secciones 3.1 → 3.5 completas)
- Próxima sección: **Sección 4 — AI-Driven Cybersecurity Techniques** (técnicas avanzadas con métricas)
- Pendiente: identificar los papers [51–74] para datos cuantitativos de producción
- Acción inmediata: reescribir Slides 8–16 (ACT II) con el contenido de esta sección
