export const SKILLS = [
  {
    label: "Backend Engineering",
    accent: "#3B82F6",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices", "C#", "ASP.NET", "Node.js", "Express.js"],
  },
  {
    label: "Data Engineering",
    accent: "#06B6D4",
    items: ["Apache Kafka", "PySpark", "Apache Airflow", "ETL Pipelines", "PostgreSQL", "SQL", "Streamlit"],
  },
  {
    label: "AI / ML",
    accent: "#A78BFA",
    items: ["Python", "LLMs / RAG", "Graph-RAG", "Neo4j", "TensorFlow", "Scikit-learn", "LightGBM", "SHAP / LIME", "NLP"],
  },
  {
    label: "Cloud / DevOps",
    accent: "#34D399",
    items: ["Docker", "Kubernetes", "Docker Compose", "Git / GitHub", "GitLab", "Agile / Scrum"],
  },
  {
    label: "Databases",
    accent: "#F59E0B",
    items: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "SQL Server", "Entity Framework"],
  },
  {
    label: "Mobile / Other",
    accent: "#94A3B8",
    items: ["Kotlin", "Swift / iOS", "Kotlin Multiplatform", "Unity", "Flutter", "React Native", "JavaScript", "React"],
  },
];

export const PROJECTS = [
  {
    id: "stock-analytics",
    icon: "📈",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.2)",
    badges: [
      { label: "Featured", color: "blue" },
      { label: "Data Engineering", color: "green" },
    ],
    title: "Real-Time Stock Analytics Platform",
    description:
      "A production-grade streaming data platform that ingests high-velocity trading data through Kafka, transforms it with PySpark, orchestrates workflows via Airflow, and surfaces insights through a natural language analytics interface.",
    points: [
      "Built streaming pipeline with Apache Kafka + PySpark (Structured Streaming) for real-time trading data ingestion and transformation",
      "Orchestrated distributed ETL workflows with Apache Airflow, deployed via Docker Compose for reproducible execution",
      "Designed PostgreSQL data warehouse schema optimized for time-series analytics queries",
      "Built a Streamlit NL-to-SQL interface — users query financial data in plain English",
    ],
    stack: ["Apache Kafka", "PySpark", "Apache Airflow", "PostgreSQL", "Docker Compose", "Streamlit", "Python"],
    metrics: [
      { label: "Architecture", value: "Streaming ETL" },
      { label: "Data Layer", value: "Kafka + Spark" },
      { label: "Orchestration", value: "Airflow DAGs" },
      { label: "Interface", value: "NL → SQL" },
      { label: "Deployment", value: "Containerized" },
    ],
    featured: true,
    github: "https://github.com/Tonyy131",
  },
  {
    id: "hotel-graph-rag",
    icon: "🧠",
    iconBg: "rgba(99,102,241,0.12)",
    iconBorder: "rgba(99,102,241,0.2)",
    badges: [
      { label: "Featured", color: "blue" },
      { label: "AI / Graph-RAG", color: "purple" },
    ],
    title: "Intelligent Hotel Analytics & Graph-RAG System",
    description:
      "End-to-end ML pipeline + Knowledge Graph system that combines explainable machine learning with Graph-RAG to ground LLM responses in structured hotel data.",
    points: [
      "Full ML pipeline: data cleaning, feature engineering, SMOTE class imbalance handling, reproducible inference artifacts",
      "Eliminated severe target leakage using permutation importance + SHAP/LIME global and local explainability",
      "Trained Logistic Regression, Random Forest, LightGBM, and FFNNs; tuned hyperparameters on macro-F1",
      "Neo4j Knowledge Graph with hybrid retrieval (Cypher + vector embeddings) for Graph-RAG — LLM answers grounded in structured data",
    ],
    stack: ["Python", "Neo4j", "LightGBM", "Scikit-learn", "SHAP / LIME", "Graph-RAG", "Vector Embeddings", "LLMs"],
    metrics: [
      { label: "Retrieval", value: "Graph-RAG" },
      { label: "Graph DB", value: "Neo4j" },
      { label: "Explainability", value: "SHAP + LIME" },
      { label: "Best Model", value: "LightGBM" },
      { label: "Query", value: "Cypher + Embed." },
    ],
    featured: true,
    github: "https://github.com/Tonyy131",
  },
  {
    id: "aas-thesis",
    icon: "🔬",
    iconBg: "rgba(6,182,212,0.12)",
    iconBorder: "rgba(6,182,212,0.2)",
    badges: [
      { label: "Published Research", color: "green" },
      { label: "Thesis — A Grade", color: "blue" },
    ],
    title: "AAS Digital Twin — Container Execution Engine",
    description:
      "Published graduation thesis: a semantic-driven runtime that conditionally executes Docker containers based on AAS metadata. Developed at Universität Stuttgart, published at EDTconf 2025.",
    points: [
      "Extended the BaSyx Java SDK (Spring Boot) to parse AAS XML metadata and trigger Docker containers based on semantic conditions",
      "Implemented full container lifecycle management (start, stop, monitor) driven by AAS metadata rules",
      'Published as "A Container-based Approach For Proactive Asset Administration Shell Digital Twins" at EDTconf 2025',
    ],
    stack: ["Java", "Spring Boot", "Docker", "MongoDB", "BaSyx SDK", "Industry 4.0"],
    featured: false,
    github: "https://github.com/Tonyy131",
  },
  {
    id: "food-delivery",
    icon: "🚀",
    iconBg: "rgba(52,211,153,0.12)",
    iconBorder: "rgba(52,211,153,0.2)",
    badges: [
      { label: "Backend", color: "blue" },
      { label: "Microservices", color: "purple" },
    ],
    title: "Food Delivery Microservices Platform",
    description:
      "Production-style microservice backend for a food delivery platform — architected for horizontal scale, Redis-backed performance, and clean domain boundaries.",
    points: [
      "Designed services with clear domain boundaries: orders, payments, inventory, delivery tracking",
      "Redis caching layer for session management and hot-path query acceleration",
      "PostgreSQL with optimized schemas per service; Docker-networked service mesh",
    ],
    stack: ["Spring Boot", "PostgreSQL", "Redis", "Docker", "REST APIs"],
    featured: false,
    github: "https://github.com/Tonyy131",
  },
  {
    id: "tourism-platform",
    icon: "🏆",
    iconBg: "rgba(251,191,36,0.12)",
    iconBorder: "rgba(251,191,36,0.2)",
    badges: [{ label: "Ranked #1 in Course", color: "green" }],
    title: "Comprehensive Tourism Management Platform",
    description:
      "Led a 10-person team as Scrum Master to build a full-stack travel platform, ranked #1 in course evaluation. Flights, hotels, activities, multi-role access, and an admin dashboard.",
    points: [
      "MERN stack with multi-role system: tourists, sellers, guides, admins, advertisers",
      "Admin dashboard with real-time content management and user access control",
      "Led Agile ceremonies, sprint planning, and retrospectives across a 10-person team",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Agile / Scrum"],
    featured: false,
    github: "https://github.com/Tonyy131",
  },
];

export const EXPERIENCE = [
  {
    role: "App Developer",
    company: "Mentalee",
    location: "Stuttgart, Germany",
    period: "May 2025 – Jul 2025",
    type: "Contract",
    current: true,
    points: [
      "Extended a Kotlin Multiplatform app with full iOS integration — Xcode setup, Swift bridges, Unity embedding in native iOS",
      "Integrated TensorFlow on-device AI models for real-time mental wellness inference in the iOS app",
      "Managed source control on GitLab and documented architecture decisions for cross-functional handoff",
      "Collaborated in an agile feature team at an AI-based mental wellness startup (Stuttgart, Germany)",
    ],
  },
  {
    role: "FullStack Developer Intern",
    company: "National Bank of Egypt",
    location: "Cairo, Egypt",
    period: "Jul 2024 – Aug 2024",
    type: "Internship",
    current: false,
    points: [
      "Built and maintained a production banking system using SSMS, ASP.NET, Entity Framework, and Xamarin.Forms — reduced system downtime by 20%",
      "Partnered with cross-functional teams; delivered scalable solutions with 95% client satisfaction rate",
      "Optimized queries and application paths, improving overall performance by 30%",
    ],
  },
  {
    role: "Software Developer",
    company: "Freelance",
    location: "Cairo, Egypt",
    period: "Jan 2024 – Apr 2024",
    type: "Freelance",
    current: false,
    points: [
      "Built Python teaching center management software tracking attendance, grades, and payments for 200+ students",
      "MongoDB backend with automated WhatsApp notifications to parents with grades and attendance updates",
    ],
  },
];
