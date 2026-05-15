# Sección 2 — Preliminaries
**Paper:** Ali et al. — Information Fusion 118 (2025) 102922  
**Páginas:** 5–6  
**Subsecciones:** Table 2 (Símbolos y notaciones)

---

## Terminología clave

| Término | Definición en contexto del paper |
|---|---|
| **Feature space** | Espacio multidimensional donde cada dimensión es una característica del dato; base de los modelos ML/DL |
| **Training set** | Conjunto de datos etiquetados o no etiquetados usados para ajustar los parámetros de un modelo |
| **Threat landscape** | Conjunto total de amenazas cibernéticas conocidas y potenciales en un momento dado |
| **Fusion model** | Modelo que combina múltiples fuentes de datos o múltiples técnicas de AI para una salida unificada |
| **Probability distribution** | Distribución que modela la incertidumbre en las predicciones — central en métodos bayesianos y anomaly detection |

---

## Tabla 2 — Símbolos y notaciones

Esta tabla es el glosario matemático del paper. Es señal de rigor: el autor no asume familiaridad del lector con la notación. Las variables más relevantes para la presentación son:

| Símbolo | Significado | Relevancia para la presentación |
|---|---|---|
| **X** | Feature matrix (conjunto de características de entrada) | Base de todo modelo de detección: los datos que observa el sistema |
| **y** | Label vector (vector de etiquetas de clase) | Aprendizaje supervisado: ataque = 1, normal = 0 |
| **θ** | Model parameters (parámetros del modelo) | Lo que el modelo "aprende" durante el entrenamiento |
| **L(θ)** | Loss function | Métrica de error que el entrenamiento minimiza |
| **P(y\|x)** | Posterior probability | Probabilidad de que un evento x sea un ataque |
| **f(x)** | Decision function | La función que el modelo aplica para clasificar una nueva observación |
| **Σ** | Covariance matrix | Usada en detección de anomalías multivariadas |
| **μ** | Mean vector | Baseline del comportamiento normal en behavioral analysis |
| **λ** | Regularization parameter | Control del overfitting — crítico en modelos de alta dimensionalidad |
| **K** | Number of clusters | Parámetro clave de K-Means y otros algoritmos de clustering |
| **d(x, y)** | Distance metric | Base de algoritmos de clustering (K-Means, DBSCAN) y anomaly detection |

---

## Ideas derivadas

**Sobre la función de esta sección:**

La Sección 2 es puramente técnica y funciona como un diccionario de referencia para las secciones 3–7. Su presencia tiene un efecto retórico: eleva el rigor formal del paper y lo posiciona como trabajo con fundamento matemático, no solo revisión cualitativa. Para la presentación, **no se traduce directamente** en un slide propio, pero fundamenta la credibilidad de todo el contenido técnico que viene.

**Sobre la notación bayesiana P(y|x):**

La presencia de probabilidad posterior sugiere que el paper trata los modelos de clasificación de amenazas como **problemas de inferencia probabilística**, no determinísticos. Esto es relevante para el slide de falsos positivos y limitaciones: la salida de un modelo no es "ataque/no-ataque" binario sino una probabilidad — con todo lo que implica en umbrales, precision/recall, y costo de error.

**Sobre μ y Σ en behavioral analysis:**

Los parámetros media (μ) y matriz de covarianza (Σ) son los parámetros del comportamiento "normal" que el sistema aprende. Cuando un usuario o sistema se desvía significativamente de μ, se dispara la alerta. Esto conecta directamente con el slide de behavioral analysis y zero-day detection en ACT II.

---

## Conexión con la presentación

Esta sección **no genera slides** directamente, pero:

- Fundamenta matemáticamente los slides de ML supervisado (Slide 8), clustering/anomaly detection (Slide 9), y behavioral analysis (Slide 13)
- La notación f(x) → {ataque, normal} es útil para explicar visualmente cómo funciona un clasificador de amenazas
- Para el auditorio técnico: mencionar brevemente que el paper usa notación formal (feature matrix, loss function, posterior probability) aumenta la credibilidad del contenido

---

## Notas de sesión

- Páginas leídas: 5–6
- Esta sección es corta — principalmente la tabla de notación
- Próxima sección anotada: **Sección 3 — Background**
