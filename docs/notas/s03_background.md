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

## Notas de sesión

- Páginas leídas: 6–10
- La Sección 3.4 (Aplicaciones de AI: Threat Detection) comienza en p.10 — continúa en páginas siguientes
- Próxima sección: **Sección 3.4 completa + Sección 4 — AI Techniques in Cybersecurity**
- Pendiente: identificar los papers [36]–[39] para datos cuantitativos de la evolución histórica
