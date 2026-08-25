import './App.css'
import profileImage from './assets/mina-profile.jpg'

type Publication = {
  title: string
  summary: string
  tags: string[]
  link?: string
}

type Project = {
  index: string
  title: string
  eyebrow: string
  description: string
  tags: string[]
  link?: string
}

const publications: Publication[] = [
  {
    title:
      'Auditing Internal Consistency in Webometrics University Rankings: A Bidirectional Historical and Peer-Calibrated Approach',
    summary:
      'A data-driven study of ranking consistency using historical trajectories and peer-calibrated comparisons to surface unusual ranking patterns.',
    tags: ['Webometrics', 'Ranking Analysis', 'Data Research'],
    link:
      'https://www.researchgate.net/publication/412783335_Auditing_Internal_Consistency_in_Webometrics_University_Rankings_A_Bidirectional_Historical_and_Peer-Calibrated_Approach',
  },
  {
    title:
      'Automatic Citation Style Classification Using Multilingual BERT and Transformer-Based Architecture',
    summary:
      'Transformer-based research on automated academic citation-style classification using multilingual language representations.',
    tags: ['BERT', 'Transformers', 'Academic NLP'],
  },
  {
    title:
      'Detecting Machine-Generated Arabic Text: AraBERT-LSTM for Trustworthy Low-Resource NLP',
    summary:
      'Research on machine-generated Arabic text detection using hybrid transformer and recurrent architectures.',
    tags: ['Arabic NLP', 'AraBERT', 'LSTM'],
  },
  {
    title:
      'KM-Chat: A Large-Scale Synthetic Question-Answer Dataset for Open-Domain Conversational AI',
    summary:
      'Large-scale synthetic question-answer data generation for open-domain conversational AI and transformer research.',
    tags: ['Synthetic Data', 'Conversational AI', 'LLMs'],
  },
  {
    title:
      'Large-Scale Hybrid Dialogue Data Processing for Transformer-Based Generative Chatbots Using Pretrained DeBERTa Embeddings',
    summary:
      'Research on large-scale dialogue processing and transformer-based generative conversational systems.',
    tags: ['DeBERTa', 'Dialogue Systems', 'NLP'],
  },
]

const projects: Project[] = [
  {
    index: '01',
    title: 'Agentic-Nexus',
    eyebrow: 'OPEN-SOURCE / AGENTIC AI',
    description:
      'A composable multi-agent architecture combining orchestration, Hybrid RAG, vector retrieval, knowledge graphs, tool use, coding workflows, and automated evaluation.',
    tags: ['Multi-Agent', 'Hybrid RAG', 'Knowledge Graphs', 'LLM Systems'],
    link: 'https://github.com/MinaIbrahim10/Agentic-Nexus',
  },
  {
    index: '02',
    title: 'Transformer LLM From Scratch',
    eyebrow: 'LANGUAGE MODEL ENGINEERING',
    description:
      'Designed the architecture, attention mechanism, tokenizer, training pipeline, evaluation workflow, and FastAPI inference layer for a custom transformer-based conversational model.',
    tags: ['Transformers', '100K+ Q&A', 'FastAPI', 'Training'],
  },
  {
    index: '03',
    title: 'AI-Powered Journal Management',
    eyebrow: 'ACADEMIC AI SYSTEM',
    description:
      'An intelligent journal platform for submission screening, classification, reviewer matching, citation analysis, plagiarism signals, summarization, and editorial workflows.',
    tags: ['NLP', 'FastAPI', 'Research Systems', 'Full Stack'],
  },
  {
    index: '04',
    title: 'Webometrics Ranking Audit',
    eyebrow: 'DATA RESEARCH',
    description:
      'Historical and peer-calibrated analysis of university rankings designed to detect internal inconsistencies, unusual trajectories, and ranking discrepancies.',
    tags: ['Data Analysis', 'Research', 'Ranking Systems', 'Statistics'],
  },
  {
    index: '05',
    title: 'Hotel 1000',
    eyebrow: 'PRODUCTION SOFTWARE',
    description:
      'A complete hotel-management platform covering reservations, guest profiles, operational analytics, APIs, database architecture, frontend integration, and deployment.',
    tags: ['FastAPI', 'Architecture', 'Database', 'Deployment'],
    link: 'https://hotel1000.me',
  },
  {
    index: '06',
    title: 'Multimodal Defect Detection',
    eyebrow: 'DEEP LEARNING',
    description:
      'AI-based defect-detection pipelines across image, text, and audio using TensorFlow, Transformers, OpenCV, and custom CNN architectures.',
    tags: ['TensorFlow', 'Computer Vision', 'CNN', 'OpenCV'],
  },
]

const selectedContributions = [
  {
    pr: '#125938',
    title: 'Debug events writer safety',
    href: 'https://github.com/tensorflow/tensorflow/pull/125938',
  },
  {
    pr: '#125648',
    title: 'Profiler & tracing free-threading',
    href: 'https://github.com/tensorflow/tensorflow/pull/125648',
  },
  {
    pr: '#125646',
    title: 'TFLite conversion bindings',
    href: 'https://github.com/tensorflow/tensorflow/pull/125646',
  },
  {
    pr: '#125643',
    title: 'Distributed layout bindings',
    href: 'https://github.com/tensorflow/tensorflow/pull/125643',
  },
  {
    pr: '#125642',
    title: 'Python API helper bindings',
    href: 'https://github.com/tensorflow/tensorflow/pull/125642',
  },
  {
    pr: '#125640',
    title: 'Op-def binding safety',
    href: 'https://github.com/tensorflow/tensorflow/pull/125640',
  },
  {
    pr: '#125636',
    title: 'Checkpoint reader safety',
    href: 'https://github.com/tensorflow/tensorflow/pull/125636',
  },
  {
    pr: '#125581',
    title: 'DTensor collective-key synchronization',
    href: 'https://github.com/tensorflow/tensorflow/pull/125581',
  },
]

const expertise = [
  {
    number: '01',
    title: 'AI Systems',
    items: ['LLMs', 'Agentic AI', 'RAG', 'Multi-Agent Systems', 'Synthetic Data'],
  },
  {
    number: '02',
    title: 'Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'NLP', 'Arabic NLP', 'Computer Vision'],
  },
  {
    number: '03',
    title: 'Runtime Engineering',
    items: ['CPython', 'C++', 'pybind11', 'Free-Threading', 'Concurrency'],
  },
  {
    number: '04',
    title: 'Infrastructure',
    items: ['FastAPI', 'Linux', 'Bazel', 'CUDA', 'REST APIs'],
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M7 5h8v8M15 5 6 14M13 15H5V7" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mina Ibrahim home">
          <span className="brand-mark">MI</span>
          <span className="brand-text">
            <strong>Mina Ibrahim</strong>
            <small>AI Systems · Research · Open Source</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#opensource">Open Source</a>
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
        </nav>

        <a
          className="header-contact"
          href="mailto:minaibrahim190@gmail.com"
        >
          Contact
          <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                AI ENGINEER · TENSORFLOW OPEN-SOURCE CONTRIBUTOR
              </p>

              <h1>
                Engineering AI
                <span>from research</span>
                <em>to runtime.</em>
              </h1>

              <p className="hero-lede">
                I design intelligent systems across language models, agentic AI,
                machine learning infrastructure, and production software —
                with current open-source work focused on TensorFlow and CPython
                free-threading.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore selected work
                  <ArrowIcon />
                </a>

                <a
                  className="button button-secondary"
                  href="https://github.com/MinaIbrahim10"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <ExternalIcon />
                </a>
              </div>

              <div className="hero-meta">
                <div>
                  <span>FOCUS</span>
                  <strong>AI Systems & Runtime Engineering</strong>
                </div>
                <div>
                  <span>BASED</span>
                  <strong>Damascus · Remote</strong>
                </div>
              </div>
            </div>

            <aside className="hero-profile">
              <div className="portrait-frame">
                <img src={profileImage} alt="Mina Ibrahim" />
                <span className="portrait-index">01 / PROFILE</span>
              </div>

              <div className="profile-note">
                <span className="status-dot" />
                <div>
                  <small>CURRENT RESEARCH / ENGINEERING</small>
                  <p>
                    CPython 3.14 free-threaded compatibility across TensorFlow
                    native runtime boundaries.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="hero-strip">
            <span>LLM SYSTEMS</span>
            <span>AGENTIC AI</span>
            <span>TENSORFLOW</span>
            <span>CPYTHON 3.14T</span>
            <span>NLP</span>
            <span>COMPUTER VISION</span>
          </div>
        </section>

        <section className="statement-section">
          <div className="section-index">01</div>

          <div className="statement-copy">
            <p className="eyebrow">ENGINEERING PHILOSOPHY</p>
            <h2>
              AI is not only a model.
              <span>
                It is the architecture, runtime, data, evaluation, deployment,
                and reliability around it.
              </span>
            </h2>
          </div>

          <p className="statement-aside">
            My work moves across abstraction layers — from transformer
            architectures and retrieval systems to Python/C++ boundaries,
            concurrency, APIs, and infrastructure.
          </p>
        </section>

        <section className="work-section section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED SYSTEMS</p>
              <h2>Engineering work</h2>
            </div>
            <p>
              A selection of AI, research, infrastructure, and production
              systems built across the full engineering lifecycle.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => {
              const content = (
                <>
                  <div className="project-number">{project.index}</div>

                  <div className="project-main">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-arrow">
                    {project.link ? <ExternalIcon /> : <ArrowIcon />}
                  </div>
                </>
              )

              return project.link ? (
                <a
                  className="project-row"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={project.title}
                >
                  {content}
                </a>
              ) : (
                <article className="project-row" key={project.title}>
                  {content}
                </article>
              )
            })}
          </div>
        </section>

        <section className="opensource-section section" id="opensource">
          <div className="opensource-intro">
            <div className="section-index light-index">02</div>

            <div>
              <p className="eyebrow eyebrow-light">OPEN SOURCE / TENSORFLOW</p>
              <h2>
                Removing hidden
                <span>GIL assumptions.</span>
              </h2>
            </div>

            <p>
              Contributing upstream to TensorFlow with a focus on CPython
              free-threaded execution, native synchronization, object lifetime,
              pybind11 module safety, and ML build infrastructure.
            </p>
          </div>

          <div className="opensource-grid">
            <div className="runtime-visual">
              <div className="runtime-topline">
                <span>CPYTHON 3.14T</span>
                <span>RUNTIME AUDIT</span>
              </div>

              <div className="runtime-core">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />

                <div className="runtime-node">
                  <small>PYTHON / C++</small>
                  <strong>TensorFlow</strong>
                  <span>FREE-THREADED RUNTIME</span>
                </div>

                <span className="satellite satellite-a">OWNERSHIP</span>
                <span className="satellite satellite-b">LOCKING</span>
                <span className="satellite satellite-c">PYBIND11</span>
                <span className="satellite satellite-d">ABI</span>
              </div>

              <div className="runtime-footer">
                <span>GIL → EXPLICIT SYNCHRONIZATION</span>
                <span>PY314T</span>
              </div>
            </div>

            <div className="contribution-panel">
              <div className="panel-heading">
                <span>SELECTED MERGED UPSTREAM WORK</span>
                <span>tensorflow/tensorflow</span>
              </div>

              <div className="contribution-list">
                {selectedContributions.map((contribution) => (
                  <a
                    href={contribution.href}
                    target="_blank"
                    rel="noreferrer"
                    key={contribution.pr}
                  >
                    <span>{contribution.pr}</span>
                    <strong>{contribution.title}</strong>
                    <ExternalIcon />
                  </a>
                ))}
              </div>

              <a
                className="opensource-link"
                href="https://github.com/tensorflow/tensorflow/pulls?q=is%3Apr+author%3AMinaIbrahim10"
                target="_blank"
                rel="noreferrer"
              >
                View all TensorFlow contributions
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="research-section section" id="research">
          <div className="section-heading research-heading">
            <div>
              <p className="eyebrow">RESEARCH / PUBLICATIONS</p>
              <h2>Research record</h2>
            </div>

            <p>
              Work spanning transformer-based NLP, Arabic language systems,
              synthetic conversational data, academic AI, and ranking analysis.
            </p>
          </div>

          <div className="publications">
            {publications.map((publication, index) => (
              <article className="publication" key={publication.title}>
                <div className="publication-index">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="publication-content">
                  <h3>{publication.title}</h3>
                  <p>{publication.summary}</p>

                  <div className="publication-tags">
                    {publication.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="publication-action">
                  {publication.link ? (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${publication.title}`}
                    >
                      <ExternalIcon />
                    </a>
                  ) : (
                    <span className="publication-mark">R</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise-section section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TECHNICAL PRACTICE</p>
              <h2>Areas of expertise</h2>
            </div>

            <p>
              A cross-disciplinary stack connecting AI research with systems
              engineering and production delivery.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((group) => (
              <article className="expertise-card" key={group.title}>
                <span>{group.number}</span>
                <h3>{group.title}</h3>

                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>
              <h2>Infrastructure in practice</h2>
            </div>

            <p>
              Production systems work alongside AI engineering and research.
            </p>
          </div>

          <article className="experience-card">
            <div className="experience-period">
              <span>2025</span>
              <span>—</span>
              <span>NOW</span>
            </div>

            <div className="experience-main">
              <p className="project-eyebrow">
                GERMAN - SYRIAN RESEARCH FOUNDATION e.V.
              </p>
              <h3>Library Systems & Infrastructure Engineer</h3>
              <p>
                Deploying and managing digital library and institutional
                repository infrastructure for universities using Koha, DSpace,
                and FOLIO.
              </p>
            </div>

            <div className="experience-details">
              <span>Hesse, Germany</span>
              <span>Remote · Contract</span>
              <span>Koha · DSpace · FOLIO</span>
              <span>Linux · HTTPS · Reverse Proxy</span>
            </div>
          </article>
        </section>

        <section className="education-section">
          <div>
            <p className="eyebrow eyebrow-light">EDUCATION</p>
            <h2>
              Bachelor of Science
              <span>Information Technology & Artificial Intelligence</span>
            </h2>
          </div>

          <div className="education-meta">
            <strong>Arab International University</strong>
            <span>2019 — 2024</span>
            <span>Damascus, Syria</span>
          </div>
        </section>

        <section className="contact-section">
          <p className="eyebrow">COLLABORATION / RESEARCH / ENGINEERING</p>

          <h2>
            Building something
            <span>technically ambitious?</span>
          </h2>

          <p className="contact-copy">
            I am interested in AI systems, ML infrastructure, TensorFlow,
            runtime engineering, Agentic AI, NLP, and applied research.
          </p>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:minaibrahim190@gmail.com"
            >
              Start a conversation
              <ArrowIcon />
            </a>

            <a
              className="text-link"
              href="https://www.linkedin.com/in/mina-ibrahim-59a014247/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ExternalIcon />
            </a>

            <a
              className="text-link"
              href="https://github.com/MinaIbrahim10"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ExternalIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>Mina Ibrahim</strong>
          <span>AI Engineer & Researcher</span>
        </div>

        <p>
          AI Systems · TensorFlow · Runtime Engineering · Research
        </p>

        <a href="#top">
          Back to top
          <span>↑</span>
        </a>
      </footer>
    </div>
  )
}

export default App
