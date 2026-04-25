"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  BrainCircuit,
  Server,
  BookOpen,
  GitBranch,
} from "lucide-react";

const NAV_ITEMS = [
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

const TRUST_POINTS = [
  "Published paper at EDTconf 2025",
  "Bachelor thesis completed with professors at Universität Stuttgart",
  "Arabic and English fluent",
  "German basic",
];

const STATS = [
  { value: "1", label: "Published paper", detail: "EDTconf 2025" },
  { value: "5+", label: "Major projects", detail: "Portfolio-ready work" },
  { value: "3", label: "Core tracks", detail: "Data, AI, Backend" },
  { value: "2", label: "Fluent languages", detail: "Arabic, English" },
];

const SKILL_GROUPS = [
  {
    title: "Backend Engineering",
    icon: Server,
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "ASP.NET",
      "Node.js",
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    items: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Kafka",
      "Airflow",
      "PySpark",
      "ETL",
    ],
  },
  {
    title: "AI / GenAI",
    icon: BrainCircuit,
    items: [
      "LLMs",
      "RAG",
      "Graph-RAG",
      "Neo4j",
      "Prompt Engineering",
      "Scikit-learn",
    ],
  },
  {
    title: "Cloud / DevOps",
    icon: ShieldCheck,
    items: [
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "Docker Compose",
      "Kubernetes",
    ],
  },
  {
    title: "Mobile / Other",
    icon: Code2,
    items: [
      "Kotlin",
      "Swift",
      "Kotlin Multiplatform",
      "Unity",
      "React",
      "JavaScript",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "App Developer",
    company: "Mentalee",
    location: "Stuttgart, Germany",
    period: "May 2025 – Jul 2025",
    type: "Contract",
    current: true,
    points: [
      "Extended a Kotlin Multiplatform app with iOS integration, including Xcode setup, Swift bridging, and Unity embedding inside a native iOS flow.",
      "Integrated TensorFlow on-device inference for real-time mental wellness features.",
      "Worked in an agile feature team and documented technical decisions for handoff and maintenance.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "National Bank of Egypt",
    location: "Cairo, Egypt",
    period: "Jul 2024 – Aug 2024",
    type: "Internship",
    current: false,
    points: [
      "Built and maintained a banking system using ASP.NET, Entity Framework, Xamarin.Forms, and SQL Server tooling.",
      "Optimized query paths and application flows to improve performance and stability.",
      "Collaborated with cross-functional stakeholders on production-oriented delivery.",
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
      "Built Python-based management software for a teaching center to track attendance, grades, and payments.",
      "Created MongoDB-backed workflows and automated notifications for parents.",
    ],
  },
];

type ProjectPanel =
  | { type: "image"; src: string; alt: string }
  | {
      type: "publication";
      doi: string;
      venue: string;
      title: string;
      year: string;
    }
  | { type: "stats"; items: { label: string; value: string }[] };

const PROJECTS: {
  title: string;
  category: string;
  featured: boolean;
  summary: string;
  impact: string[];
  stack: string[];
  link: string;
  accent: string;
  panel: ProjectPanel;
}[] = [
  {
    title: "Real-Time Stock Analytics Platform",
    category: "Data Engineering",
    featured: true,
    summary:
      "A streaming analytics platform that ingests market data, transforms it in near real time, orchestrates workflows, and exposes analytics through a clean interface.",
    impact: [
      "Kafka-based ingestion pipeline for high-velocity trading records",
      "PySpark transformations for streaming and batch processing",
      "Airflow orchestration for reproducible ETL workflows",
      "PostgreSQL warehouse design for analytical querying",
    ],
    stack: [
      "Python",
      "Kafka",
      "PySpark",
      "Airflow",
      "PostgreSQL",
      "Docker Compose",
      "Streamlit",
    ],
    link: "https://github.com/sp4rkii/Real-Time-Stock-Portfolio-Analytics-Platform.git",
    accent: "from-cyan-500/20 to-blue-500/20",
    panel: {
      type: "image",
      src: "/projects/stock-arch.png",
      alt: "Real-Time Stock Analytics Platform architecture",
    },
  },
  {
    title: "Intelligent Hotel Analytics & Graph-RAG System",
    category: "AI / GenAI",
    featured: true,
    summary:
      "An explainable machine learning pipeline combined with a graph-grounded retrieval layer to support trustworthy AI answers over structured hotel data.",
    impact: [
      "Feature engineering, cleaning, and reproducible inference artifacts",
      "Model comparison and explainability with SHAP and LIME",
      "Neo4j knowledge graph for hybrid retrieval",
      "Graph-RAG architecture to ground LLM responses in data",
    ],
    stack: [
      "Python",
      "Neo4j",
      "LightGBM",
      "Scikit-learn",
      "SHAP",
      "LIME",
      "LLMs",
    ],
    link: "https://github.com/Tonyy131/International_Hotel_Booking_Customer_Assistant--Team_49.git",
    accent: "from-violet-500/20 to-fuchsia-500/20",
    panel: {
      type: "image",
      src: "/projects/hotel-arch.png",
      alt: "Hotel Analytics Graph-RAG architecture",
    },
  },
  {
    title: "AAS Digital Twin — Container Execution Engine",
    category: "Research",
    featured: true,
    summary:
      "A research thesis that extends AAS-based systems with metadata-driven Docker execution, lifecycle control, and conditional orchestration.",
    impact: [
      "Implemented XML-driven execution rules inside the AAS workflow",
      "Integrated BaSyx-based model handling with container lifecycle management",
      "Published at EDTconf 2025 as a peer-reviewed paper",
      "Completed as bachelor thesis with professors at Universität Stuttgart",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Docker",
      "MongoDB",
      "BaSyx SDK",
      "Industry 4.0",
    ],
    link: "https://doi.org/10.48550/arXiv.2512.15452",
    accent: "from-emerald-500/20 to-cyan-500/20",
    panel: {
      type: "publication",
      doi: "10.48550/arXiv.2512.15452",
      venue: "EDTconf 2025",
      title:
        "A Container-based Approach For Proactive Asset Administration Shell Digital Twins",
      year: "2025",
    },
  },
  {
    title: "Food Delivery Microservices Platform",
    category: "Backend",
    featured: false,
    summary:
      "A production-style microservices backend for a food delivery domain, built and led by a team of 14 engineers under Agile practices, with multi-database architecture and full container orchestration.",
    impact: [
      "Served as Scrum Master leading a team of 14 software engineers across sprints and delivery cycles",
      "Designed service boundaries for orders, payments, inventory, delivery tracking, and notifications",
      "Multi-database architecture: PostgreSQL, MongoDB, Redis, Elasticsearch, Neo4j, and Cassandra — each chosen per service requirements",
      "Kubernetes orchestration for service deployment, scaling, and health management",
      "Redis caching for hot-path performance, Elasticsearch for search, Neo4j for graph-based recommendations",
    ],
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Neo4j",
      "Cassandra",
      "Docker",
      "Kubernetes",
      "REST APIs",
    ],
    link: "https://github.com/Tonyy131/17_Dockestra_FoodDelivery.git",
    accent: "from-blue-500/20 to-indigo-500/20",
    panel: {
      type: "stats",
      items: [
        { label: "Team size", value: "14 engineers" },
        { label: "Role", value: "Scrum Master" },
        { label: "Databases", value: "6 systems" },
        { label: "Orchestration", value: "Kubernetes" },
      ],
    },
  },
  {
    title: "Comprehensive Tourism Management Platform",
    category: "Backend / Web",
    featured: false,
    summary:
      "A large-team full-stack project covering multi-role access, dashboards, bookings, and project leadership responsibilities.",
    impact: [
      "Served tourists, sellers, guides, admins, and advertisers",
      "Led team coordination across 10 engineers in an Agile workflow",
      "Ranked #1 in course evaluation",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Agile / Scrum"],
    link: "https://github.com/Advanced-computer-lab-2024/Wander-Mate.git",
    accent: "from-amber-500/20 to-orange-500/20",
    panel: {
      type: "stats",
      items: [
        { label: "Team size", value: "10 engineers" },
        { label: "Course rank", value: "#1" },
        { label: "User roles", value: "5 types" },
        { label: "Stack", value: "MERN" },
      ],
    },
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--accent)]">
      <span className="h-px w-8 bg-[var(--accent)]" />
      <span>{children}</span>
    </div>
  );
}

function CardShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--bg2)]/90 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function ProjectRightPanel({
  panel,
  accent,
}: {
  panel: ProjectPanel;
  accent: string;
}) {
  if (panel.type === "image") {
    return (
      <div
        className={`relative min-h-[340px] overflow-hidden border-t border-[var(--border)] bg-gradient-to-br ${accent} lg:border-l lg:border-t-0`}
      >
        <Image
          src={panel.src}
          alt={panel.alt}
          fill
          className="object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        {/* Subtle fade at the edges to blend with the card border */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(8,12,20,0.6)]" />
        {/* Caption pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
          <div className="rounded-xl border border-[var(--border)] bg-[rgba(8,12,20,0.82)] p-3 backdrop-blur-md">
            <div className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--text3)]">
              Architecture diagram
            </div>
            <div className="mt-0.5 text-xs text-[var(--text2)]">
              {panel.alt}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (panel.type === "publication") {
    return (
      <div
        className={`flex flex-col justify-center border-t border-[var(--border)] bg-gradient-to-br ${accent} p-6 md:p-8 lg:border-l lg:border-t-0`}
      >
        <div className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl border border-[var(--border)] bg-[rgba(8,12,20,0.72)] p-6 backdrop-blur-md">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.08)] px-3 py-1.5 text-xs font-medium text-emerald-400">
              <BookOpen size={12} />
              Peer-reviewed · {panel.venue}
            </div>
            <p className="text-sm font-medium leading-7 text-[var(--text)]">
              {panel.title}
            </p>
            <p className="mt-2 text-xs text-[var(--text3)]">
              Published {panel.year}
            </p>
          </div>
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg3)] p-4">
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--text3)]">
                DOI
              </div>
              <div className="mt-1 break-all font-mono text-xs text-[var(--accent)]">
                {panel.doi}
              </div>
            </div>
            <a
              href={`https://doi.org/${panel.doi}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-[rgba(52,211,153,0.2)] bg-[rgba(52,211,153,0.07)] px-4 py-3 text-xs font-medium text-emerald-400 transition-all hover:bg-[rgba(52,211,153,0.13)]"
            >
              Read full paper <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // stats panel
  return (
    <div
      className={`flex flex-col justify-center border-t border-[var(--border)] bg-gradient-to-br ${accent} p-6 md:p-8 lg:border-l lg:border-t-0`}
    >
      <div className="flex h-full min-h-[220px] flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(8,12,20,0.72)] p-5 backdrop-blur-md">
        <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--text3)]">
          Project at a glance
        </div>
        <div className="mt-1 grid grid-cols-2 gap-3">
          {panel.items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg3)] p-4"
            >
              <div className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text3)]">
                {item.label}
              </div>
              <div className="mt-1.5 font-[var(--font-syne)] text-base font-bold text-[var(--text)]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-xl border border-[var(--border)] bg-[var(--bg3)] p-4">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text3)]">
            <GitBranch size={11} /> Source available
          </div>
          <div className="mt-1 text-xs text-[var(--text2)]">
            Full code on GitHub — architecture, services, and deployment configs
            included.
          </div>
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* NAV */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(8,12,20,0.82)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#home"
            className="font-[var(--font-syne)] text-lg font-extrabold tracking-[-0.03em] text-[var(--text)]"
          >
            Antony Meckhael <span className="text-[var(--accent)]">.</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm text-[var(--text2)] transition-colors duration-200 hover:text-[var(--text)]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Tonyy131"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[var(--border2)] px-4 py-2 text-sm text-[var(--text)] transition-all duration-200 hover:border-white/30 hover:bg-white/5 md:inline-flex"
            >
              GitHub
            </a>
            <a
              href="mailto:tonyayman131@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(59,130,246,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-5 pb-20 pt-28 md:px-8"
      >
        <div className="hero-grid-bg absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-[-180px] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.16)_0%,transparent_70%)] blur-2xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(59,130,246,0.18)] bg-[rgba(59,130,246,0.08)] px-4 py-2 text-xs font-medium text-[var(--accent)]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
              Open to Data Engineering, AI Engineering, and Backend roles
            </motion.div>

            {/* Heading: fixed size — no more giant wrapping text */}
            <motion.h1
              variants={fadeUp}
              className="font-[var(--font-syne)] text-4xl font-extrabold tracking-[-0.04em] text-[var(--text)] md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              I build scalable backend systems, data platforms, and applied AI
              products.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-[var(--text2)]"
            >
              I am{" "}
              <strong className="font-semibold text-[var(--text)]">
                Antony Meckhael
              </strong>
              , a Computer Engineering graduate based in Cairo with hands-on
              experience across microservices, streaming data, and GenAI —
              including a{" "}
              <strong className="font-semibold text-[var(--text)]">
                published paper at EDTconf 2025
              </strong>
              .
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {[
                "Backend Engineering",
                "Data Engineering",
                "AI / GenAI",
                "Cloud / DevOps",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border2)] bg-[var(--bg3)] px-4 py-1.5 text-xs font-medium tracking-[0.06em] text-[var(--text2)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_34px_rgba(59,130,246,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border2)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-all duration-200 hover:border-white/30 hover:bg-white/5"
              >
                Contact Me <MessageSquare size={16} />
              </a>
              <a
                href="https://github.com/Tonyy131"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border2)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-all duration-200 hover:border-white/30 hover:bg-white/5"
              >
                GitHub <Github size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <CardShell className="p-6 md:p-7">
              <div className="mb-6 flex items-center gap-3 border-b border-[var(--border)] pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(59,130,246,0.18)] bg-[rgba(59,130,246,0.08)] text-[var(--accent)]">
                  <Sparkles size={22} />
                </div>
                <div>
                  <div className="font-[var(--font-syne)] text-lg font-bold tracking-[-0.03em] text-[var(--text)]">
                    Antony Meckhael
                  </div>
                  <div className="text-sm text-[var(--text2)]">
                    Data Engineer · AI Engineer · Backend Builder
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-4"
                  >
                    <div className="font-[var(--font-syne)] text-3xl font-extrabold tracking-[-0.04em] text-[var(--text)]">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm font-medium text-[var(--text2)]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-xs text-[var(--text3)]">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-4">
                <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                  <Languages size={14} /> Languages
                </div>
                <div className="space-y-3 text-sm text-[var(--text2)]">
                  {[
                    ["Arabic", "Fluent"],
                    ["English", "Fluent"],
                    ["German", "Basic"],
                  ].map(([lang, level]) => (
                    <div
                      key={lang}
                      className="flex items-center justify-between gap-4"
                    >
                      <span>{lang}</span>
                      <span className="text-[var(--text)]">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardShell>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-5 md:px-8">
        <div className="mx-auto max-w-6xl border-y border-[var(--border)] py-6">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {TRUST_POINTS.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-sm text-[var(--text2)]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="max-w-2xl font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] md:text-5xl">
              A focused engineer with strength in systems, data, and AI.
            </h2>
            <div className="mt-6 space-y-5 text-[1.05rem] leading-8 text-[var(--text2)]">
              <p>
                I build software that has to work in the real world: backend
                services, data pipelines, distributed workflows, and AI features
                that are useful instead of decorative.
              </p>
              <p>
                My most relevant work includes a real-time stock analytics
                platform, an AI system based on Graph-RAG, a research thesis on
                AAS-driven Docker execution, and several full-stack and mobile
                integrations.
              </p>
              <p>
                I prefer practical engineering, clear architecture, and code
                that is maintainable, testable, and easy to explain to a team.
              </p>
            </div>
          </div>
          <CardShell className="p-6 md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-5">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  <GraduationCap size={14} /> Education
                </div>
                <div className="font-[var(--font-syne)] text-lg font-bold text-[var(--text)]">
                  Computer Engineering
                </div>
                <div className="mt-1 text-sm text-[var(--text2)]">
                  German University in Cairo
                </div>
                <div className="mt-3 text-sm leading-6 text-[var(--text3)]">
                  Bachelor thesis completed with professors at Universität
                  Stuttgart.
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-5">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  <BriefcaseBusiness size={14} /> Focus
                </div>
                <div className="space-y-2 text-sm text-[var(--text2)]">
                  <div>Data Engineering</div>
                  <div>AI / GenAI Applications</div>
                  <div>Backend & Microservices</div>
                  <div>Cloud / Container Workflows</div>
                </div>
              </div>
              <div className="sm:col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-5">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  <MapPin size={14} /> Location
                </div>
                <div className="text-sm leading-7 text-[var(--text2)]">
                  Cairo, Egypt · open to remote work, relocation, and roles that
                  value backend depth, data thinking, and applied AI.
                </div>
              </div>
            </div>
          </CardShell>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-[var(--bg2)] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] md:text-5xl">
            Professional work and applied delivery.
          </h2>
          <div className="relative mt-12 pl-1">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--border)]" />
            <div className="space-y-8">
              {EXPERIENCE.map((item) => (
                <CardShell
                  key={`${item.company}-${item.role}`}
                  className="relative p-6 md:p-7"
                >
                  <div className="absolute left-4 top-8 h-3 w-3 rounded-full border border-[var(--border2)] bg-[var(--bg)]" />
                  <div className="pl-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-[var(--font-syne)] text-xl font-bold text-[var(--text)]">
                          {item.role}
                        </h3>
                        <div className="mt-1 text-sm text-[var(--accent)]">
                          {item.company} · {item.location}
                        </div>
                      </div>
                      <div className="rounded-full border border-[var(--border2)] bg-[var(--bg3)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text3)]">
                        {item.period}
                      </div>
                    </div>
                    <ul className="mt-5 space-y-3 text-[0.96rem] leading-7 text-[var(--text2)]">
                      {item.points.map((point) => (
                        <li key={point} className="relative pl-5">
                          <span className="absolute left-0 top-[0.9rem] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardShell>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="max-w-3xl font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] md:text-5xl">
            Featured work with clear technical depth.
          </h2>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-8 text-[var(--text2)]">
            Ordered by relevance to data engineering, applied AI, and backend
            systems.
          </p>
          <div className="mt-12 grid gap-5">
            {PROJECTS.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg2)] shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              >
                <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[var(--border2)] bg-[var(--bg3)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text3)]">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="rounded-full border border-[rgba(59,130,246,0.22)] bg-[rgba(59,130,246,0.1)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-[var(--font-syne)] text-2xl font-bold tracking-[-0.03em] text-[var(--text)] md:text-[2rem]">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-[0.98rem] leading-8 text-[var(--text2)]">
                      {project.summary}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {project.impact.map((point) => (
                        <div
                          key={point}
                          className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg3)] p-4 text-sm leading-7 text-[var(--text2)]"
                        >
                          <span className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--border2)] bg-[var(--bg3)] px-3 py-1 text-xs text-[var(--text2)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-colors hover:text-white"
                    >
                      {project.panel.type === "publication"
                        ? "Read paper"
                        : "View repository"}
                      <ExternalLink size={15} />
                    </a>
                  </div>
                  <ProjectRightPanel
                    panel={project.panel}
                    accent={project.accent}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[var(--bg2)] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] md:text-5xl">
            The stack I use most often.
          </h2>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-8 text-[var(--text2)]">
            Enough breadth to show range, enough depth to show focus.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <CardShell key={group.title} className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border2)] bg-[var(--bg3)] text-[var(--accent)]">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-[var(--font-syne)] text-lg font-bold text-[var(--text)]">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border2)] bg-[var(--bg3)] px-3 py-1 text-xs text-[var(--text2)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardShell>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] md:text-5xl">
              Let's build something useful.
            </h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-[var(--text2)]">
              I am currently open to roles in Data Engineering, Backend
              Engineering, and Applied AI. I am especially interested in teams
              that value ownership, clarity, and strong technical execution.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Email",
                  value: "tonyayman131@gmail.com",
                  href: "mailto:tonyayman131@gmail.com",
                },
                {
                  label: "GitHub",
                  value: "github.com/Tonyy131",
                  href: "https://github.com/Tonyy131",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/tonyayman131",
                  href: "https://linkedin.com/in/tonyayman131",
                },
                { label: "Location", value: "Cairo, Egypt", href: "#home" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 transition-all duration-200 hover:border-[var(--border2)] hover:bg-[var(--bg3)]"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--text3)]">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)]">
                    {item.value}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <CardShell className="p-6 md:p-7">
            <div className="flex items-center gap-3 border-b border-[var(--border)] pb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(59,130,246,0.18)] bg-[rgba(59,130,246,0.08)] text-[var(--accent)]">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-[var(--font-syne)] text-lg font-bold text-[var(--text)]">
                  Contact details
                </div>
                <div className="text-sm text-[var(--text2)]">
                  Open to full-time, internships, and research collaboration
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--text2)]">
              <p>
                I am actively looking for roles where I can own meaningful
                infrastructure — data pipelines, backend services, or AI systems
                that solve real problems.
              </p>
              <p>
                Cairo-based, open to remote or relocation. Response time under
                24 hours.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:tonyayman131@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Email Me <Mail size={16} />
              </a>
              <a
                href="https://github.com/Tonyy131"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border2)] px-5 py-3 text-sm font-medium text-[var(--text)] transition-all duration-200 hover:border-white/30 hover:bg-white/5"
              >
                GitHub <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/tonyayman131"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border2)] px-5 py-3 text-sm font-medium text-[var(--text)] transition-all duration-200 hover:border-white/30 hover:bg-white/5"
              >
                LinkedIn <ExternalLink size={16} />
              </a>
            </div>
          </CardShell>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--text3)] md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Antony Meckhael. Built for Data
            Engineering, AI Engineering, and Backend opportunities.
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:tonyayman131@gmail.com"
              className="transition-colors hover:text-[var(--text)]"
            >
              tonyayman131@gmail.com
            </a>
            <a
              href="https://github.com/Tonyy131"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--text)]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tonyayman131"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--text)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
