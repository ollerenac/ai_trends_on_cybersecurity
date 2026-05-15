# Sección 4 — Possible AI-driven Cybersecurity: Techniques
**Paper:** Ali et al. — Information Fusion 118 (2025) 102922  
**Páginas:** 23–31  
**Subsecciones:** 4.1 Anomaly Detection · 4.2 Behavioral Biometrics · 4.3 Threat Intelligence Aggregation · 4.4 Vulnerability Management · 4.5 AI-Powered Forensics · 4.6 GANs · 4.7 Automated Threat Hunting · 4.8 Network Traffic Analysis · 4.9 Intelligent Security Automation · 4.10 Predictive Analytics

---

## Terminología clave

| Término | Definición en contexto de la Sección 4 |
|---|---|
| **Mahalanobis distance** | Distancia estadística que normaliza por la covarianza del dataset — detecta anomalías en espacios de alta dimensión más robustamente que la distancia euclidiana |
| **KDE (Kernel Density Estimation)** | Estimación no paramétrica de la densidad de probabilidad — identifica regiones de baja densidad (anomalías) sin asumir distribución específica |
| **One-Class SVM** | SVM entrenada solo sobre datos normales; cualquier punto que caiga fuera del hiperplano aprendido es anomalía |
| **VAE (Variational Autoencoder)** | Autoencoder que aprende una distribución latente; el error de reconstrucción alto indica dato anómalo |
| **HMM (Hidden Markov Model)** | Modelo de secuencias con estados latentes; captura la dinámica temporal de comportamientos (ej. keystroke dynamics) |
| **GMM (Gaussian Mixture Model)** | Mezcla de distribuciones gaussianas; modela distribuciones de comportamiento normal con múltiples modos |
| **GAN (Generative Adversarial Network)** | Par generador-discriminador; en ciberseguridad: generador simula ataques, discriminador detecta — ambos se mejoran mutuamente |
| **GNN / GCN (Graph Neural Network)** | Red neuronal sobre grafos; modela relaciones entre nodos de red (IPs, dispositivos, usuarios) para detectar patrones de ataque distribuidos |
| **CVSS** | Common Vulnerability Scoring System — score [0,10] basado en impacto sobre confidencialidad, integridad y disponibilidad |
| **Reinforcement Learning (RL)** | Agente que aprende política óptima maximizando recompensa acumulada — aplica a threat hunting proactivo y respuesta autónoma |
| **Granger causality** | Test estadístico para determinar si una serie temporal X causa (precede y predice) otra serie Y — reconstruye timelines de ataque |
| **Kalman filter** | Algoritmo de estimación recursiva que actualiza parámetros del modelo a medida que llegan nuevos datos — autenticación continua |
| **Bellman equation** | Ecuación de programación dinámica que actualiza el valor Q(s,a) iterativamente — base del Q-learning para threat hunting |
| **PageRank** | Algoritmo de ranking sobre grafos — aplicado a threat intelligence para priorizar nodos (IPs, dominios) con más conexiones maliciosas |

---

## Estructura general de la Sección 4

Esta sección provee la **base técnica matemática** de las aplicaciones descritas en la Sección 3. Si la Sección 3 responde "¿qué hace AI en ciberseguridad?", la Sección 4 responde "¿cómo lo hace matemáticamente?".

10 subsecciones con figuras de arquitectura de referencia (Figuras 7–11):

| Subsección | Técnica central | Figura |
|---|---|---|
| 4.1 Anomaly Detection | Mahalanobis, KDE, One-Class SVM, VAE | Fig. 7 |
| 4.2 Behavioral Biometrics | HMM, GMM, Kalman filter | Fig. 8 |
| 4.3 Threat Intelligence Aggregation | Bayesian fusion, CRF, LSTM, game theory | Fig. 9 |
| 4.4 Vulnerability Management | CVSS, CNN+RNN, RL, control theory | Fig. 10 |
| 4.5 AI-Powered Forensics | PCA, GMM, RNN, Granger causality | Fig. 11 |
| 4.6 GANs | GAN min-max, adversarial examples | — |
| 4.7 Automated Threat Hunting | RL / Bellman equation, mutual information | — |
| 4.8 Network Traffic Analysis | GCN, CNN, autoencoder, RL | — |
| 4.9 Intelligent Security Automation | Logistic regression, LSTM, GMM, Bayesian | — |
| 4.10 Predictive Analytics | Logistic reg., LSTM, GMM, Bayesian Networks | — |

---

## 4.1 — Anomaly Detection

**Referencias: [88–100]**

**Formulación del problema:**
Dado dataset X = {x₁, x₂, ..., xₘ}, xᵢ ∈ ℝⁿ (tráfico de red, logs, comportamiento), un punto xᵢ es anomalía si su densidad de probabilidad p(xᵢ) < τ (umbral fijo).

**Técnicas documentadas:**

1. **Gaussian / Mahalanobis**: 
   - p(x) = exp(-½(x-μ)ᵀ Σ⁻¹(x-μ)) / ((2π)^(n/2)|Σ|^(1/2)) — eq. 44
   - D_M(x) = √((x-μ)ᵀ Σ⁻¹(x-μ)) — eq. 45
   - La distancia Mahalanobis normaliza por la covarianza: detecta anomalías en correlaciones multi-variable, no solo en magnitudes

2. **KDE (no paramétrico)**:
   - p(x) = (1/mh) Σ K((x-xᵢ)/h) — eq. 46
   - Permite modelar distribuciones de tráfico sin asumir gaussiana

3. **One-Class SVM**:
   - min (1/2)||w||² + (1/νm)Σξᵢ - ρ — eq. 47
   - ν controla el trade-off precisión/recall
   
4. **VAE (Variational Autoencoder)**:
   - Minimiza D_KL(q_θ(z|x) || p(z)) — eq. 48
   - Error de reconstrucción ||x - x̂||² sirve como score de anomalía
   
5. **Graph-based** (GNNs):
   - G = (V, E): nodos = IPs/usuarios, aristas = comunicaciones
   - PageRank para identificar nodos con conectividad anómala
   - GCN detecta botnet y lateral movement en estructura del grafo

**Figura 7 — Anomaly Detection System:**
```
Data Ingestion                Detection                  Response
  ├── Historical Storage  →  Baseline Models        →  Alerting System
  └── New Data Stream     →  Anomaly Detection Sys. →  Investigation Dashboard
```
Esta arquitectura de 3 etapas es genérica y aplica a cualquier sistema de detección basado en AI.

**Para la presentación:**
- La Figura 7 es la arquitectura de referencia para **Slide 8 (ML/Anomaly Detection)**
- El concepto "datos históricos → baseline → comparar stream nuevo" es la explicación visual más clara del anomaly detection

---

## 4.2 — Behavioral Biometrics

**Referencias: [97–102]**

Identifica individuos por características de comportamiento (keystroke dynamics, velocidad de ratón, patrones de clic) en lugar de credenciales estáticas.

**Modelos matemáticos:**

- **HMM para keystroke dynamics**: estado latente = tipo de actividad (escribir, navegar, idle); transiciones P(sⱼ|sᵢ); emisiones P(xᵢ|sᵢ)
- **GMM para distribución de comportamiento**: p(X(t)) = Σ_k π_k N(X(t); μ_k, Σ_k) — modela múltiples modos de comportamiento normal
- **Kalman filter para autenticación continua**: estima parámetros θ actualiza con cada nueva observación Xₜ — autenticación no es un evento puntual sino un flujo continuo

**Clasificación: genuine vs imposter:**
- Ratio de verosimilitud: A(X) = p(X|C=genuine) / p(X|C=imposter)
- Si A(X) > τ → comportamiento genuino; si no → anomalía

**Figura 8 — Behavioral Biometric Architecture:**
```
User Device → Behavioral BiometricService → ML Training → User Profile DB
                                          ↘ Fraud Detection System → Alerting System
```

**Conexión con UEBA (Sección 3.4.2):** La biometría conductual es la capa de identidad dentro de UEBA. Mientras UEBA monitorea comportamiento a nivel organizacional, la biometría conductual autentica continuamente a nivel individual.

---

## 4.3 — Threat Intelligence Aggregation

**Referencias: [103–108]**

**Problema:** múltiples fuentes de inteligencia (feeds externos, logs internos, alertas) tienen incertidumbre y ruido. Hay que combinarlas en un modelo cohesivo.

**Framework matemático:**

1. **Fusión multi-fuente**: P(X₁(t), X₂(t), ..., Xₙ(t)) — distribución conjunta de n feeds de inteligencia (eq. 49)

2. **Probabilidad marginal del evento de seguridad E**:
   - P(E) = ∫...∫ P(E|X₁,...,Xₙ) · P(X₁,...,Xₙ) dX₁...dXₙ — eq. 50

3. **Actualización Bayesiana** al recibir nueva inteligencia:
   - P(E|X₁,...,Xₙ) = P(X₁,...,Xₙ|E) · P(E) / P(X₁,...,Xₙ) — eq. 51
   - Cada feed Tᵢ tiene score de confiabilidad ρᵢ — el modelo pondera fuentes más confiables

4. **CRF (Conditional Random Fields)** para fusión multi-modal:
   - P(X₁,...,Xₙ) = (1/Z) ∏_{i,j} ψ_{i,j}(Xᵢ, Xⱼ) — eq. 52

5. **K-means** para agrupar IoCs similares: arg min_C Σᵢ Σ_{x∈Cᵢ} ||x - μᵢ||² — eq. 53

6. **LSTM** para dependencias temporales en amenazas: hₜ = f_θ(W_h h_{t-1} + W_x Xₜ + b_h) — eq. 54

7. **Game theory** para modelar adversarios: U(s,a) = R(s,a) + γ Σ P(s'|s,a)U(s',a') — eq. 56

**Figura 9 — Threat Intelligence Aggregation Architecture:**
```
Data Sources          Processing              Visualization
  ├── External Feed → Aggregation Service →  Threat Intelligence System
  ├── Network Logs  → ML Engine
  └── Security Alerts
```

**Para la presentación — Slide 15 (Threat Intel):**
La Figura 9 visualiza exactamente lo que ya está en el slide. Añadir que el **Bayesian update** permite al sistema ponderar fuentes según su historial de confiabilidad — eso es lo que hace la inteligencia "acumulable" en el tiempo.

---

## 4.4 — AI-Driven Vulnerability Management

**Referencias: [109–115]**

5 componentes del ciclo completo de gestión de vulnerabilidades con AI:

| Componente | Técnica AI | Matemática |
|---|---|---|
| **Optimización** | Minimizar riesgo total | R(S) = Σᵢ r(vᵢ, S) |
| **Detección** | CNN + RNN sobre tráfico y logs | L(θ) = (1/m) Σ ℓ(f_θ(Xₜ), Vₜ) |
| **Severity Assessment** | CVSS scoring con AI-adjusted weights | s(vᵢ) ∈ [0, 10] — CIA triad |
| **Priorización** | RL + binary integer programming | Minimizar riesgo con recursos R limitados |
| **Remediación** | Control theory + RL | J(u) = ∫₀ᵀ L(S(t), u(t)) dt — transición S₀ → Sᶠ |

**CVSS — dato clave para presentación:**
- Score [0,10] basado en confidencialidad, integridad, disponibilidad (CIA triad)
- AI puede ajustar dinámicamente los pesos de los factores según el contexto del sistema atacado
- Priorización automática: vulnerabilidades críticas (score > 9.0) se remedian primero

**Figura 10 — AI-Driven Vulnerability Management:**
```
Data Sources: Network Traffic | System Configurations | Historical Vulnerability Data
                 ↓                      ↓                          ↓
AI Engines: Predictive Analytic Engine | Automated Recommendation Engine
                                    ↓
                          Security Team Dashboard
```

**Conexión con CrowdStrike 2026:** +42% zero-days explotados antes de divulgación. El vulnerability management con AI es la respuesta: detectar y parchear antes de que el adversario weaponize.

---

## 4.5 — AI-Powered Forensics

**Referencias: [112–115]**

**Objetivo:** reconstruir la secuencia de eventos de un ataque, identificar causa raíz, y generar evidencia digital procesable.

**Pipeline técnico:**

1. **PCA para reducción de dimensionalidad**: ϕ : ℝᵈ → ℝᵏ, k ≪ d — extrae features relevantes de logs voluminosos
2. **GMM para anomaly detection forense**: identifica datos con baja probabilidad bajo el modelo de comportamiento normal
3. **RNN/LSTM para reconstrucción de timeline**: predice secuencia probable de eventos dado historial parcial
4. **Granger causality** para inferencia causal: ¿la actividad en el nodo A precedió y causó la actividad en B?
   - Yₜ = α + Σ βᵢ Yₜ₋ᵢ + Σ γᵢ Xₜ₋ᵢ + εₜ — eq. 64
   - Si los γᵢ son estadísticamente significativos → X Granger-causa Y

5. **Resistencia a adversarial attacks forenses**: attackers pueden alterar logs para evadir forensics
   - min_δ ||δ||_p sujeto a f_θ(X + δ) ≠ f_θ(X) — eq. 65
   - Defensa: adversarial training del modelo forense

**Figura 11 — AI-Powered Forensics Architecture:**
```
AI Forensic Engine
  ├── Network Traffic Analyzer    ┐
  ├── File Storage                ├── Core Relation Analysis → Pattern Recognition
  └── Historical Vulnerability Data┘
                    ↓
  AWS CloudWatch | AWS S3 | AWS Lambda
```

**Para la presentación:** AI-Powered Forensics es el **nuevo slide potencial para ACT III**. La pregunta "¿qué pasa DESPUÉS de una brecha?" tiene una respuesta AI concreta: el sistema reconstruye el timeline automáticamente, identifica el punto de entrada, y genera el informe de incidente. Conecta con la obligación regulatoria de notificar brechas dentro de 72 horas (GDPR).

---

## 4.6 — GANs para Ciberseguridad

**Referencias: [116–125]**

**El insight más importante de la Sección 4 para la presentación.**

**Formulación GAN:**
- min_G max_D V(D,G) = E_{x~p_data}[log D(x)] + E_{z~p_z}[log(1-D(G(z)))] — eq. 66
- Generador G: produce tráfico/malware/phishing sintético realista
- Discriminador D: clasifica real vs generado
- Nash equilibrium: D(x) = 1/2 para todo x — el generador es indistinguible del real

**Dualidad ofensiva-defensiva — las GANs son el "doble filo" de AI en ciberseguridad:**

| Uso defensivo | Uso ofensivo |
|---|---|
| Generar datos sintéticos de ataques para entrenar detectores | Generar malware que evoluciona para evadir detectores |
| Simular campañas de phishing para probar filtros NLP | Generar emails de phishing que engañan modelos NLP |
| Detectar ejemplos adversariales entrenando discriminador sobre ellos | Crear adversarial examples que ciegan modelos de defensa |
| Augmentar datasets de detección de intrusiones (CICIDS, NSL-KDD) | Simular ataques DDoS distribuidos con patrones cambiantes |

**Aplicaciones documentadas en el paper:**
- **Intrusion detection**: G genera tráfico de red sintético (normal + malicioso) → D aprende a discriminar → D generaliza mejor ante ataques reales [119,120]
- **Malware detection**: G genera variantes mutantes de malware → D aprende a reconocer familias de malware por comportamiento [124,125]
- **Phishing detection**: G produce emails/sitios sintéticos → D fine-tuned para detectar intentos legítimos vs phishing [124]

**Para la presentación — nuevo slide en ACT III:**
Las GANs son la demostración más clara de que "AI es el arma y el escudo simultáneamente". Este slide conecta directamente con:
- Slide 20 (adversarial attacks): GANs como el motor detrás de la generación de adversarial examples
- La narrativa de la "carrera armamentista" AI vs AI del ACT III

---

## 4.7 — Automated Threat Hunting

**Referencias: [126–132]**

**Definición:** búsqueda proactiva de amenazas antes de que causen daño, sin esperar alertas pasivas.

**Framework RL (Reinforcement Learning):**
- Estado sₜ ∈ S: estado actual del sistema (métricas de red, actividades de usuario)
- Acción aₜ ∈ A: marcar proceso sospechoso, aislar segmento, bloquear usuario
- Recompensa rₜ: positiva para detecciones correctas, negativa para falsos positivos
- Bellman equation: Q(sₜ, aₜ) ← Q(sₜ, aₜ) + α[rₜ + γ max Q(sₜ₊₁, a') - Q(sₜ, aₜ)] — eq. 77

**Feature engineering para threat hunting:**
- Mutual information: I(xᵢ; y) = ∫∫ p(xᵢ, y) log(p(xᵢ,y) / p(xᵢ)p(y)) dxᵢdy — eq. 74
- Selecciona features (packet sizes, IPs, system calls) que más correlacionan con actividad maliciosa

**Graph theory para APTs:**
- G = (V, E): V = máquinas/usuarios, E = conexiones de red
- GCN actualiza: H^(l+1) = σ(D̃^(-1/2) Ã D̃^(-1/2) W^(l) H^(l)) — eq. 78
- APTs se manifiestan como subgrafos anómalos (botnets, lateral movement coordinado)

**NLP para threat hunting en texto:**
- Word2Vec / BERT embeddings de logs y reportes de inteligencia
- RNN actualiza: hₜ = σ(W_h hₜ₋₁ + W_x wₜ + b) — eq. 79
- Detecta secuencias anómalas de comandos o patrones de texto en logs

**Dato clave:** el RL agent "mejora con el tiempo" — cuanto más tiempo está desplegado, más refinada se vuelve su política de detección. Esto conecta con el concepto de self-healing/adaptive defense del ACT III.

---

## 4.8 — AI-Enhanced Network Traffic Analysis

**Referencias: [134–142]**

Técnicas para analizar tráfico de red masivo en tiempo real:

**Supervised (clasificación):**
- Dataset D = {(xᵢ, yᵢ)}: xᵢ = features del paquete (IP src/dst, tamaño, protocolo, timestamp); yᵢ ∈ {0,1}
- Cross-entropy loss: L(θ) = -Σ[yᵢ log f_θ(xᵢ) + (1-yᵢ) log(1-f_θ(xᵢ))]

**CNN para análisis espacial del tráfico:**
- Tráfico representado como imagen 2D (filas = paquetes, columnas = features)
- Convolución: z_{i,j,k} = σ(Σ W_{m,n,k} · x_{i+m,j+n} + b_k)
- Detecta patrones locales: bursts de paquetes SYN, HTTP floods, DDoS lento

**RNN para análisis temporal:**
- Captura dependencias secuenciales: ataques DDoS lentos, slow HTTP
- hₜ = σ(W_h Xₜ + U_k hₜ₋₁ + b_h)

**GCN para análisis de topología de red:**
- Nodos V = IPs, aristas E = conexiones
- GCN: H^(l+1) = σ(D̃^(-1/2) Ã D̃^(-1/2) W^(l) H^(l)) — eq. 78
- Detecta botnets como subgrafos con patrones de comunicación inusuales

**Autoencoder para detección no supervisada:**
- Encoder: g_θ : ℝᵈ → ℝᵏ; Decoder: h_ϕ : ℝᵏ → ℝᵈ
- Reconstrucción error ||xᵢ - h_ϕ(g_θ(xᵢ))||²: alto = tráfico anómalo

---

## 4.9 — Intelligent Security Automation

**Referencias: [143–146]**

Automatización end-to-end del ciclo de seguridad:
1. Detección → 2. Análisis → 3. Decisión → 4. Respuesta → 5. Aprendizaje

**SOC efficiency formula:**
E = (T_a / T_total) · 100%

donde T_a = tiempo ahorrado por automatización, T_total = tiempo de operación total.

**False Alarm Rate:**
FAR = FP / (FP + TN) — la automatización debe minimizar FAR para no sobrecargar al equipo SOC con falsos positivos

**Security posture:**
S = f(A₁, A₂, ..., Aₙ) — el estado de seguridad como función de todos los data sources Aᵢ

**Para la presentación:** la fórmula de eficiencia es concisa y visual — el slot de "VIZ 4 (MTTR chart)" puede complementarse con el concepto de E% de eficiencia ganada por automatización.

---

## 4.10 — Predictive Analytics for Threat Detection

**Referencias: [147–149]**

**Objetivo:** anticipar ataques basándose en datos históricos y señales en tiempo real.

**Modelos:**
- **Logistic regression**: P(y=1|x; θ) = 1/(1+exp(-θᵀx)) — baseline para clasificación binaria amenaza/normal
- **LSTM** con gates completas (forget/input/output) para amenazas secuenciales complejas
- **GMM + Bayesian Networks** para modelar dependencias condicionales entre eventos de red

**Bayesian Network para amenaza condicional:**
P(y|x) = P(x|y)P(y) / P(x)

donde P(y) es prior sobre la probabilidad de ataque, P(x|y) es la verosimilitud de los datos dado el ataque.

---

## Figura 7 — Anomaly Detection System (replicar concepto en slide)

```
                    ANOMALY DETECTION SYSTEM
    ┌──────────────┐    ┌─────────────────────┐    ┌─────────────────┐
    │ DATA INGESTION│ → │      DETECTION       │ → │    RESPONSE      │
    │              │    │                     │    │                 │
    │ Historical   │    │ Baseline Models     │    │ Alerting System │
    │ Data Storage │    │                     │    │                 │
    │              │    │ Anomaly Detection   │    │ Investigation   │
    │ New Data     │    │ System              │    │ Dashboard       │
    │ Stream       │    │                     │    │                 │
    └──────────────┘    └─────────────────────┘    └─────────────────┘
```

---

## Tabla 5 del paper — Comparativa de investigación AI+ciberseguridad

(p. 33 — 17 papers referenciados)

| Ref. | Focus | Técnica | Ataques cubiertos |
|---|---|---|---|
| **[22]** | Threat detection & response | ML, deep learning | Phishing, malware |
| **[23]** | AI-driven cyber attacks | AI-based attack strategies | Automated attacks, social engineering |
| **[24]** | AI as tool AND vector | Predictive analysis, anomaly detection | Ransomware, data breaches |
| **[103]** | AI-driven cybersecurity | Threat intelligence, pattern recognition | DDoS, insider threats |
| **[25,26]** | Cyber automation + XAI | Intelligent decision-making | APTs, zero-day exploits |
| **[27]** | State-of-the-art AI+ML survey | ML, RL | Social engineering, malware |
| **[152]** | AI arms race offensive vs defensive | AI-driven defenses, attack simulations | Automated attacks, malware |
| **[153]** | AI-driven SOC efficiency | SOC automation, AI-driven monitoring | Insider threats, phishing |

Esta tabla es evidencia académica directa de que el campo está en "carrera armamentista" AI vs AI — justificación para el slide 20 (adversarial attacks) del ACT III.

---

## Tabla 6 del paper — Comparativa de tendencias actuales

(p. 33 — tres columnas: DL threat detection / AI behavioral analysis / Automated incident response)

| Dimensión | DL Threat Detection | AI Behavioral Analysis | Automated Incident Response |
|---|---|---|---|
| Descripción | DL identifica y mitiga amenazas analizando patrones | Analiza comportamiento usuario/sistema vs baseline | AI automatiza respuestas reduciendo tiempo de incidente |
| Aplicaciones | Zero-day, malware identification | Insider threat, fraud detection | Mitigar ataques, reducir intervención humana |
| Ventajas | Alta precisión, escala a datasets masivos | Detecta amenazas sofisticadas por comportamiento | Reduce tiempo de respuesta, reduce intervención manual |
| Desafíos | Requiere grandes datasets, computacionalmente intensivo | Puede generar falsos positivos, baseline difícil | Complejo de implementar, requiere integración con sistemas |
| Future trends | Integración con analítica AI más sofisticada | Modelos de behavioral analysis más profundos | Expansión hacia operaciones de ciberseguridad completamente autónomas |

**Esta tabla es material directo para slide de cierre de ACT II o transición al ACT III.**

---

## Ideas derivadas

**Sobre la dualidad de GANs:**

Las GANs son la prueba más elegante de por qué la narrativa "AI defiende" es necesariamente incompleta. El mismo framework que entrena un mejor detector de intrusiones (discriminador mejora) también entrena un mejor generador de ataques (generador mejora). No se puede tener uno sin el otro. Esto es la "carrera armamentista" formalizada matemáticamente — y es el puente perfecto del ACT II al ACT III.

**Sobre el RL en threat hunting:**

El agente RL que "aprende a cazar amenazas" es el concepto más avanzado de la sección. A diferencia de un modelo supervisado que detecta patrones conocidos, el agente RL mejora su política de caza con cada incidente — real o simulado. La ecuación de Bellman captura esto: el valor de una acción hoy incorpora el valor esperado de las acciones futuras que esa acción hace posibles. Un sistema de ciberseguridad que "aprende de los ataques que sufre" es el self-healing system del futuro.

**Sobre el GCN para análisis de red:**

Los Graph Convolutional Networks son la técnica más "de frontera" de esta sección (2023-2025). La idea de modelar la infraestructura de red como grafo y detectar subgrafos anómalos (botnets, lateral movement coordinado) es fundamentalmente diferente a analizar paquetes individuales. Un botnet de 1000 nodos puede pasar desapercibido packet by packet — pero es inmediatamente visible como cluster en el grafo. Para la presentación: "AI que ve la red como un organismo completo, no como flujos individuales."

**Sobre la forensics AI y el timeline de 72 horas:**

La Sección 4.5 (AI-Powered Forensics) tiene un caso de uso regulatorio directo: GDPR obliga a notificar brechas dentro de 72 horas. Sin AI, reconstruir el timeline de un ataque puede tomar semanas. Con AI (Granger causality + RNN), el informe de incidente se genera automáticamente. Esto es un argumento de negocio directo, no solo técnico.

---

## Nuevos slides potenciales

Basándome en el contenido de la Sección 4, los siguientes temas son lo suficientemente ricos para justificar slides adicionales:

| Candidato | Contenido | Dónde insertarlo |
|---|---|---|
| **GANs: el arma y el escudo** | La dualidad ofensiva-defensiva, min-max framework, tabla dual | ACT III — después de Slide 20 (adversarial attacks) |
| **AI-Powered Forensics** | Timeline reconstruido automáticamente, caso GDPR 72h, Figure 11 | ACT III — después de Slide 24 |
| **Vulnerability Management** | CVSS scoring, ciclo 5 pasos, Figure 10, +42% zero-days | ACT II — puede enriquecer Slide 12 (APTs/Zero-day) |

---

## Mapa Sección 4 → slides actuales

| Subsección | Slide impactado | Mejora concreta |
|---|---|---|
| 4.1 Anomaly Detection | Slide 8 (ML) | Figura 7 como arquitectura; VAE score de anomalía como concepto visual |
| 4.2 Behavioral Biometrics | Slide 13 (UEBA) | HMM para keystroke; autenticación continua vs puntual |
| 4.3 Threat Intel Aggregation | Slide 15 (Threat Intel) | Bayesian fusion de fuentes; score de confiabilidad de feeds |
| 4.4 Vulnerability Management | Slide 12 (APTs/Zero-day) | CVSS scoring; ciclo de 5 pasos; +42% zero-days CrowdStrike |
| 4.5 AI-Powered Forensics | Slide 24 (Self-healing/XAI) | Reconstrucción de timeline; argumento GDPR 72h |
| 4.6 GANs | Slide 20 (Adversarial) | GANs como motor de adversarial attacks Y de defensa |
| 4.7 Automated Threat Hunting | Slide 14 (Respuesta automatizada) | RL agent mejora con el tiempo; policy π(a|s) |
| 4.8 Network Traffic Analysis | Slide 9 (DL) | GCN para análisis topológico; botnet detection como subgrafo |
| 4.9 Intelligent Security Automation | Slide 14 (Respuesta) | SOC efficiency formula; FAR como métrica de calidad |
| 4.10 Predictive Analytics | Slide 15 (Threat Intel) | Bayesian Networks para anticipar ataques |

---

## Referencias prioritarias para investigación profunda

| Ref. | Sección | Por qué explorar |
|---|---|---|
| **[88,89]** | 4.1 Anomaly Detection | Benchmarks de Mahalanobis vs One-Class SVM en datasets de IDS reales |
| **[94]** | 4.1 One-Class SVM | Métricas de producción: precisión/recall/F1 en NSL-KDD, CICIDS-2017 |
| **[116,117]** | 4.6 GANs | Primeros papers de GANs para ciberseguridad — contexto histórico de la dualidad |
| **[119,120]** | 4.6 GANs intrusion detection | Resultados cuantitativos de mejora con data augmentation GAN |
| **[126,127]** | 4.7 Threat Hunting | Definiciones formales de threat hunting como disciplina vs threat detection |
| **[132]** | 4.7 RL para threat hunting | RL en producción para threat hunting: casos reales y métricas |
| **[152]** | Table 5 | "Ongoing arms race between AI-driven attacks and defenses" — paper de la carrera armamentista |

---

## Notas de sesión

- Páginas leídas: 23–36 (Sección 4 completa + comienzo Sección 5)
- Sección 5 comienza en p. 32 — "Current trends and future directions"
- **Tabla 5** (p.33): 17 papers comparados — evidencia académica de la carrera armamentista AI
- **Tabla 6** (p.33): comparativa DL / behavioral / automated response — material listo para slide
- Próxima sección: **Sección 5 — Current trends and future directions** (quantum, blockchain, XAI, ética)
- Pendiente: crear slide GANs dual-use para ACT III
