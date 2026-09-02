// Configuración de datos del Portafolio / Landing Page Profesional
// Modifica este archivo para cambiar la información que se muestra en la página web.

const portfolioData = {
  // Información personal y de contacto
  personalInfo: {
    nombre: "Ing. Jose H. Lopez",
    titulo_profesional: "Data Architect & Engineer",
    correo: "contacto@tuempresa.com",
    calendario_url: "https://wa.link/6m83en",
    whatsApp: "wa.link/h5y7xk",
    linkedin_url:
      "https://www.linkedin.com/in/jose-hernando-l%C3%B3pez-trejos-599b49335/",
    github_url: "https://github.com/kotaErn650",
  },

  // Sección de Héroe (Encabezado principal)
  hero: {
    titulo:
      "De Datos Dispersos y Decisiones Lentas a Decisiones Confiables y Flujos Automatizados.",
    pregunta:
      "¿Sientes que tu equipo toma decisiones a ciegas porque los datos están desorganizados, los reportes tardan días en generarse y la factura de la nube no para de crecer?",
    descripcion:
      "Transformo tu caos de datos en una ventaja competitiva real y automatizada. No te vendo 'Ingeniería de Datos' ni 'horas de código'; te vendo la transformación de tu infraestructura para que dejes de gastar en almacenamiento ineficiente y empieces a liderar tu sector con analítica confiable en tiempo real.",
  },

  // Métricas de Autoridad y Resultados
  metricas: [
    {
      valor: "+3 Años",
      descripcion: "Analisis, Datawarwhouse. DataLake DataSpark.",
    },
    {
      valor: "40%",
      descripcion:
        "Automatizacion y reduccion de tiempos y procesos(Snowflake).",
    },
    {
      valor: "70%",
      descripcion:
        "De reducción en el tiempo de procesamiento y generación de reportes corporativos.",
    },
    {
      valor: "Medallion",
      descripcion: "Arquitectura en Databricks.",
    },
  ],

  // Servicios Productizados
  servicios: [
    {
      id: "diagnostico",
      numero: "01",
      nombre: "Diagnóstico de Datos y Roadmap Estratégico",
      tipo: "Servicio de Entrada",
      descripcion:
        "Identifica exactamente dónde se fuga el dinero y el tiempo en tu infraestructura actual, con un plan accionable y sin compromisos a largo plazo.",
      duracion: "2 semanas",
      que_hacemos:
        "Auditamos a fondo tus fuentes de datos, procesos actuales y costos de nube para diseñar la arquitectura óptima que tu negocio necesita para escalar.",
      proceso: [
        "Auditoría Técnica",
        "Entrevistas con Stakeholders",
        "Roadmap de Implementación",
      ],
      entregables: [
        "Informe de diagnóstico técnico con cuellos de botella detectados.",
        "Propuesta detallada de arquitectura moderna adaptada a tu presupuesto.",
        "Plan de ruta (Roadmap) paso a paso priorizado por retorno de inversión (ROI).",
      ],
      precio: "Fijo (pago único, sin sorpresas)",
      icono: "CpuChip", // Nombre conceptual de icono para renderizado futurista
    },
    {
      id: "ingenieria",
      numero: "02",
      nombre: "Ingeniería de Datos y Pipelines ",
      tipo: "Servicio Core",
      descripcion:
        "Construimos tuberías de datos (pipelines) robustas, rápidas y escalables para centralizar y unificar toda tu información en un único punto de verdad.",
      duracion: "Medida del proyecto",
      que_hacemos:
        "Diseñamos e implementamos flujos estables que extraen datos de tus fuentes actuales, los limpian, los transforman y los cargan en tu repositorio centralizado de forma automatizada y optimizada.",
      proceso: [
        "Ingesta de Datos",
        "Transformación y Modelado",
        "Entrega a Capa Analítica",
      ],
      stack: ["Python", "AWS (S3, Lambda, Glue)", "Snowflake", "dbt"],
      entregables: [
        "Data Warehouse centralizado y óptimamente indexado.",
        "Pipelines de datos automatizados (ETL/ELT) con alertas de fallos en tiempo real.",
        "Tableros de control iniciales listos para la toma de decisiones estratégicas.",
      ],
      precio: "Por entregable (según el alcance acordado)",
      icono: "Server",
    },
    {
      id: "automatizacion",
      numero: "03",
      nombre: "Automatización Extrema e Inteligencia de Datos",
      tipo: "Servicio de Innovación",
      descripcion:
        "Lleva tu negocio al siguiente nivel integrando modelos predictivos, inteligencia artificial y automatizaciones que sustituyen el trabajo manual repetitivo.",
      duracion: "Medida del proyecto",
      que_hacemos:
        "Desarrollamos soluciones avanzadas de Machine Learning y procesamiento de lenguaje natural (LLM) integradas con tus flujos de datos operativos para automatizar decisiones de negocio críticas.",
      proceso: [
        "Análisis de Casos de Uso",
        "Desarrollo e Integración de Modelos/APIs",
        "Automatización y Monitoreo Continuo",
      ],
      stack: [
        "Python",
        "SQL-server",
        "APIs de OpenAI/Anthropic",
        "Airflow",
        "dbt",
      ],
      entregables: [
        "Modelo predictivo o agente de IA integrado operando de forma autónoma.",
        "Monitoreo y dashboards de rendimiento de los modelos en producción.",
        "Documentación técnica de operación y escalado de los sistemas inteligentes.",
      ],
      precio: "Por entregable",
      icono: "CommandLine",
    },
  ],

  // Caso de Éxito
  casoExito: {
    imagen3: "img/img3.png",
    imagen2: "img/img2.png",
    imagen1: "img/img1.png", // Nombre de la imagen para el caso de éxito
    titulo: "Migración y Optimización de Datos para E-commerce Multinacional",
    reto: "El Reto Una empresa de Zona Franca gestionaba información operativa proveniente de diferentes fuentes y procesos, lo que obligaba al equipo a realizar manualmente la extracción, consolidación, validación y generación de reportes. Este proceso podía tomar hasta 12 días de trabajo (aprox. 96 horas-hombre), generando reprocesos, riesgo de errores y retrasos en la disponibilidad de información para la toma de decisiones.",
    solucion:
      "Implementacion de  una solución de automatización y analítica de datos utilizando SQL, Python, Power Query y Power BI. Se automatizó la extracción, transformación, validación y consolidación de la información, estableciendo procesos de ETL y conexión directa entre las fuentes de datos y Power BI para generar dashboards e indicadores. La solución redujo el tiempo de generación de los reportes de 12 días (96 horas-hombre) a aproximadamente 2 días (16,3 horas-hombre), disminuyendo el trabajo manual, los errores y los tiempos de respuesta para la toma de decisiones.",
    resultados: [
      {
        valor: "40% de Ahorro",
        descripcion:
          "directo en costos mensuales de infraestructura cloud y bases de datos.",
      },
      {
        valor: "Cada hora",
        descripcion:
          "reportes automatizados y listos (reducción del desfase de 3 días a menos de 60 minutos).",
      },
      {
        valor: "70% menos tiempo",
        descripcion:
          "dedicado por el equipo directivo y analistas a la creación manual de hojas de cálculo.",
      },
    ],
  },

  // Llamado a la Acción / Contacto
  cta: {
    titulo: "¿Hablamos de tu infraestructura de datos?",
    descripcion:
      "No dejes que los datos lentos o desorganizados frenen el crecimiento de tu empresa ni sigan drenando tu presupuesto.",
    subdescripcion:
      "Agenda una Sesión Estratégica gratuita de 15 minutos para analizar tu arquitectura actual y descubrir dónde se encuentran tus mayores oportunidades de ahorro y optimización.",
    texto_boton: "📲 Escribeme con todo gusto!",
  },
};
