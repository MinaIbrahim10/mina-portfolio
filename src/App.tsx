import { useEffect, useState } from 'react'
import './App.css'
import profileImage from './assets/mina-profile.jpg'

type Publication = {
  title: string
  summary: string
  tags: string[]
  link: string
  year?: string
  status?: string
  authors?: string
}

type Project = {
  index: string
  title: string
  eyebrow: string
  description: string
  tags: string[]
  link?: string
  status?: string
  scope?: string
  evidence?: string
}

const publications: Publication[] = [
  {
    title:
      'Auditing Internal Consistency in Webometrics University Rankings: A Bidirectional Historical and Peer-Calibrated Approach',
    summary:
      'A data-driven study of internal consistency in Webometrics university rankings using historical trajectories and peer-calibrated comparisons to identify ranking discrepancies and unusual patterns.',
    tags: ['Webometrics', 'Ranking Analysis', 'Data Research'],
    status: 'Research work',
    link:
      'https://www.researchgate.net/publication/412783335_Auditing_Internal_Consistency_in_Webometrics_University_Rankings_A_Bidirectional_Historical_and_Peer-Calibrated_Approach',
  },
  {
    title:
      'Automatic Citation Style Classification Using Multilingual BERT and Transformer-Based Architecture',
    summary:
      'Transformer-based research on automated academic citation-style classification using multilingual contextual representations.',
    tags: ['BERT', 'Transformers', 'Academic NLP'],
    year: '2025',
    status: 'Preprint',
    authors: 'Mina Ibrahim · Karam Al Ghazi',
    link:
      'https://www.researchgate.net/publication/396353830_Automatic_Citation_Style_Classification_Using_Multilingual_BERT_and_Transformer-Based_Architecture',
  },
  {
    title:
      'Detecting Machine-Generated Arabic Text: AraBERT-LSTM for Trustworthy Low-Resource NLP',
    summary:
      'A hybrid AraBERT-LSTM framework for detecting machine-generated Arabic text and improving trustworthiness in low-resource NLP.',
    tags: ['Arabic NLP', 'AraBERT', 'LSTM'],
    year: '2025',
    status: 'Preprint',
    authors: 'Tarek Barhoum · Mina Ibrahim · Mohamad AlBali',
    link:
      'https://www.researchgate.net/publication/395334508_Detecting_Machine-Generated_Arabic_Text_AraBERT-LSTM_for_Trustworthy_Low-Resource_NLP',
  },
  {
    title:
      'KM-Chat: A Large-Scale Synthetic Question-Answer Dataset for Open-Domain Conversational AI',
    summary:
      'A large-scale synthetic dataset containing 250,003 question-answer pairs generated for open-domain conversational AI research.',
    tags: ['Synthetic Data', 'Conversational AI', 'LLMs'],
    year: '2025',
    status: 'Preprint',
    authors: 'Tarek Barhoum · Mina Ibrahim · Karam Al Ghazi',
    link:
      'https://www.researchgate.net/publication/394373244_KM-Chat_A_Large-Scale_Synthetic_Question-Answer_Dataset_for_Open-Domain_Conversational_AI',
  },
  {
    title:
      'Large-Scale Hybrid Dialogue Data Processing for Transformer-Based Generative Chatbots Using Pretrained DeBERTa Embeddings',
    summary:
      'Large-scale dialogue processing and transformer-based generative chatbot research using pretrained DeBERTa representations.',
    tags: ['DeBERTa', 'Dialogue Systems', 'NLP'],
    year: '2025',
    status: 'Preprint',
    authors: 'Tarek Barhoum · Mina Ibrahim · Karam Al Ghazi',
    link:
      'https://www.researchgate.net/publication/395337384_Large-Scale_Hybrid_Dialogue_Data_Processing_for_Transformer-Based_Generative_Chatbots_Using_Pretrained_DeBERTa_Embeddings',
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
    status: 'PUBLIC · OPEN SOURCE',
    scope: 'ARCHITECTURE / RAG / AGENTS',
    evidence: 'GitHub repository',
    link: 'https://github.com/MinaIbrahim10/Agentic-Nexus',
  },
  {
    index: '02',
    title: 'Transformer LLM From Scratch',
    eyebrow: 'LANGUAGE MODEL ENGINEERING',
    description:
      'Designed the architecture, attention mechanism, tokenizer, training pipeline, evaluation workflow, and FastAPI inference layer for a custom transformer-based conversational model.',
    tags: ['Transformers', '100K+ Q&A', 'FastAPI', 'Training'],
    status: 'ENGINEERING PROJECT',
    scope: 'MODEL / TRAINING / INFERENCE',
    evidence: 'Architecture & implementation',
  },
  {
    index: '03',
    title: 'AI-Powered Journal Management',
    eyebrow: 'ACADEMIC AI SYSTEM',
    description:
      'An intelligent journal platform for submission screening, classification, reviewer matching, citation analysis, plagiarism signals, summarization, and editorial workflows.',
    tags: ['NLP', 'FastAPI', 'Research Systems', 'Full Stack'],
    status: 'FULL-STACK AI SYSTEM',
    scope: 'NLP / BACKEND / WORKFLOWS',
    evidence: 'End-to-end system',
  },
  {
    index: '04',
    title: 'Webometrics Ranking Audit',
    eyebrow: 'DATA RESEARCH',
    description:
      'Historical and peer-calibrated analysis of university rankings designed to detect internal inconsistencies, unusual trajectories, and ranking discrepancies.',
    tags: ['Data Analysis', 'Research', 'Ranking Systems', 'Statistics'],
    status: 'RESEARCH SYSTEM',
    scope: 'DATA / STATISTICS / AUDIT',
    evidence: 'Research methodology',
  },
  {
    index: '05',
    title: 'Hotel 1000',
    eyebrow: 'PRODUCTION SOFTWARE',
    description:
      'A complete hotel-management platform covering reservations, guest profiles, operational analytics, APIs, database architecture, frontend integration, and deployment.',
    tags: ['FastAPI', 'Architecture', 'Database', 'Deployment'],
    status: 'PRODUCTION SOFTWARE',
    scope: 'FULL STACK / DATABASE / DEPLOYMENT',
    evidence: 'Live project',
    link: 'https://hotel1000.me',
  },
  {
    index: '06',
    title: 'Multimodal Defect Detection',
    eyebrow: 'DEEP LEARNING',
    description:
      'AI-based defect-detection pipelines across image, text, and audio using TensorFlow, Transformers, OpenCV, and custom CNN architectures.',
    tags: ['TensorFlow', 'Computer Vision', 'CNN', 'OpenCV'],
    status: 'DEEP LEARNING SYSTEM',
    scope: 'VISION / TEXT / AUDIO',
    evidence: 'Model engineering',
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
  {
    pr: '#125569',
    title: 'DType free-threading declaration',
    href: 'https://github.com/tensorflow/tensorflow/pull/125569',
  },
  {
    pr: '#125566',
    title: 'Runtime flag extension safety',
    href: 'https://github.com/tensorflow/tensorflow/pull/125566',
  },
  {
    pr: '#125564',
    title: 'Small native extension safety',
    href: 'https://github.com/tensorflow/tensorflow/pull/125564',
  },
  {
    pr: '#125493',
    title: 'CPython 3.14t wheel ABI tagging',
    href: 'https://github.com/tensorflow/tensorflow/pull/125493',
  },
]

const expertise = [
  {
    number: '01',
    title: 'AI Systems',
    items: [
      'Large Language Models',
      'Generative AI',
      'Agentic AI',
      'Multi-Agent Systems',
      'RAG',
      'Hybrid RAG',
      'Knowledge Graphs',
      'Synthetic Data',
    ],
  },
  {
    number: '02',
    title: 'ML & Deep Learning',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Transformers',
      'CNN Architectures',
      'LSTM / Seq2Seq',
      'Attention Mechanisms',
      'Model Fine-Tuning',
      'Model Evaluation',
    ],
  },
  {
    number: '03',
    title: 'NLP & Research',
    items: [
      'Natural Language Processing',
      'Arabic NLP',
      'Conversational AI',
      'BERT',
      'DeBERTa',
      'AraBERT',
      'Dataset Curation',
      'Research Experimentation',
    ],
  },
  {
    number: '04',
    title: 'Runtime & Open Source',
    items: [
      'CPython Free-Threading',
      'Python / C++ Boundaries',
      'Python C API',
      'pybind11',
      'Concurrency',
      'Synchronization',
      'Object Lifetime',
      'TensorFlow Upstream',
    ],
  },
  {
    number: '05',
    title: 'Frameworks & Backend',
    items: [
      'TensorFlow',
      'PyTorch',
      'Hugging Face',
      'OpenCV',
      'FastAPI',
      'REST APIs',
      'JWT / Authentication',
      'Database Integration',
    ],
  },
  {
    number: '06',
    title: 'Systems & Tooling',
    items: [
      'Python',
      'C++',
      'Linux',
      'Bazel',
      'Git / GitHub',
      'CUDA',
      'GPU Computing',
      'Reverse Proxy / HTTPS',
    ],
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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    const elements = document.querySelectorAll<HTMLElement>(
      [
        '.statement-copy',
        '.statement-aside',
        '.project-row',
        '.release-feature',
        '.runtime-visual',
        '.contribution-panel',
        '.opensource-proof',
        '.research-profile',
        '.publication',
        '.expertise-card',
        '.experience-section article',
        '.education-section > div',
        '.contact-section > *',
      ].join(',')
    )

    elements.forEach((element) => {
      element.classList.add('reveal-target')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -6% 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Mina Ibrahim home"
          onClick={closeMenu}
        >
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
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </nav>

        <a
          className="header-contact"
          href="mailto:minaibrahim190@gmail.com"
        >
          Contact
          <ArrowIcon />
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div
          className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
          id="mobile-navigation"
          aria-hidden={!menuOpen}
        >
          <div className="mobile-menu-inner">
            <div className="mobile-menu-label">
              <span>NAVIGATION</span>
              <span>MINA IBRAHIM / PORTFOLIO</span>
            </div>

            <nav aria-label="Mobile navigation">
              <a href="#work" onClick={closeMenu}>
                <span>01</span>
                Work
              </a>

              <a href="#opensource" onClick={closeMenu}>
                <span>02</span>
                Open Source
              </a>

              <a href="#research" onClick={closeMenu}>
                <span>03</span>
                Research
              </a>

              <a href="#skills" onClick={closeMenu}>
                <span>04</span>
                Skills
              </a>

              <a href="#experience" onClick={closeMenu}>
                <span>05</span>
                Experience
              </a>
            </nav>

            <div className="mobile-menu-footer">
              <a
                href="mailto:minaibrahim190@gmail.com"
                onClick={closeMenu}
              >
                Contact
                <ArrowIcon />
              </a>

              <a
                href="/Mina_Ibrahim_CV_ATS_Final.pdf"
                download="Mina_Ibrahim_CV.pdf"
                onClick={closeMenu}
              >
                Download CV
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
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
                  <span>WORK MODE</span>
                  <strong>Remote</strong>
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
                    <div className="project-topline">
                      <p className="project-eyebrow">{project.eyebrow}</p>

                      {project.status && (
                        <span className="project-status">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-side">
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-evidence">
                      {project.scope && <span>{project.scope}</span>}
                      {project.evidence && <strong>{project.evidence}</strong>}
                    </div>
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

          <article className="release-feature">
            <div className="release-label">
              <span>FEATURED ENGINEERING RELEASE</span>
              <span>UNOFFICIAL · EXPERIMENTAL</span>
            </div>

            <div className="release-layout">
              <div className="release-main">
                <p className="eyebrow eyebrow-light">
                  TENSORFLOW · CPYTHON FREE-THREADING
                </p>

                <h3>
                  TensorFlow 2.22.0
                  <span>Experimental CPython 3.14t Build</span>
                </h3>

                <p>
                  A public experimental TensorFlow build for CPython 3.14.7
                  free-threaded on Linux x86_64, using the
                  <code> cp314t </code>
                  ABI and a companion free-threaded gRPC wheel.
                </p>

                <div className="release-actions">
                  <a
                    href="https://github.com/MinaIbrahim10/tensorflow/releases/tag/tensorflow-2.22.0-py314t-exp1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View experimental release
                    <ExternalIcon />
                  </a>

                  <a
                    href="https://github.com/MinaIbrahim10/tensorflow/releases/tag/py314t-natural-import-pass-20260819"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Working snapshot
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <div className="release-spec">
                <div>
                  <span>CPYTHON</span>
                  <strong>3.14.7 free-threaded</strong>
                </div>
                <div>
                  <span>ABI</span>
                  <strong>cp314-cp314t</strong>
                </div>
                <div>
                  <span>PLATFORM</span>
                  <strong>Linux x86_64</strong>
                </div>
                <div>
                  <span>TENSORFLOW</span>
                  <strong>2.22.0-dev0+selfbuilt</strong>
                </div>
              </div>
            </div>

            <div className="release-proof">
              <div>
                <strong>GIL OFF</strong>
                <span>before and after TensorFlow import</span>
              </div>

              <div>
                <strong>800</strong>
                <span>concurrent TensorFlow operation batches</span>
              </div>

              <div>
                <strong>800</strong>
                <span>synchronous gRPC RPCs</span>
              </div>

              <div>
                <strong>500</strong>
                <span>asynchronous gRPC RPCs</span>
              </div>
            </div>

            <p className="release-note">
              This is an independent experimental community build and is not
              an official TensorFlow release.
            </p>
          </article>

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
                <span>6 SELECTED / 12 MERGED UPSTREAM</span>
                <span>tensorflow/tensorflow</span>
              </div>

              <div className="contribution-list">
                {selectedContributions.slice(0, 6).map((contribution) => (
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

          <div className="opensource-proof">
            <div className="proof-heading">
              <span>OPEN-SOURCE RECORD / VERIFIED PUBLIC WORK</span>
              <p>
                Independent upstream engineering across TensorFlow's
                free-threaded Python ecosystem.
              </p>
            </div>

            <div className="opensource-metrics">
              <div>
                <strong>12</strong>
                <span>Merged TensorFlow PRs</span>
              </div>

              <div>
                <strong>54</strong>
                <span>TensorFlow native modules reached by natural 3.14t import</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Upstream codebases</span>
              </div>

              <div>
                <strong>cp314t</strong>
                <span>Free-threaded wheel ABI</span>
              </div>
            </div>

            <div className="ecosystem-work">
              <a
                href="https://github.com/tensorflow/tensorflow/pulls?q=is%3Apr+author%3AMinaIbrahim10"
                target="_blank"
                rel="noreferrer"
                className="ecosystem-entry"
              >
                <div className="ecosystem-index">01</div>

                <div>
                  <span>TENSORFLOW / UPSTREAM</span>
                  <h3>CPython free-threading compatibility</h3>
                  <p>
                    Native synchronization, Python object ownership,
                    pybind11 module safety, ABI handling, and runtime
                    compatibility across TensorFlow's Python/C++ boundary.
                  </p>
                </div>

                <div className="ecosystem-state merged">
                  12 MERGED
                </div>

                <ExternalIcon />
              </a>

              <a
                href="https://github.com/grpc/grpc/pull/43278"
                target="_blank"
                rel="noreferrer"
                className="ecosystem-entry"
              >
                <div className="ecosystem-index">02</div>

                <div>
                  <span>GRPC / UPSTREAM PR #43278</span>
                  <h3>Free-threaded support for cygrpc</h3>
                  <p>
                    Adds Cython free-threading compatibility and regression
                    coverage so importing cygrpc does not re-enable the GIL
                    on CPython 3.14t.
                  </p>
                </div>

                <div className="ecosystem-state open">
                  OPEN
                </div>

                <ExternalIcon />
              </a>

              <a
                href="https://github.com/google-ml-infra/rules_ml_toolchain/pull/302"
                target="_blank"
                rel="noreferrer"
                className="ecosystem-entry"
              >
                <div className="ecosystem-index">03</div>

                <div>
                  <span>RULES_ML_TOOLCHAIN / UPSTREAM PR #302</span>
                  <h3>Free-threaded Python toolchain normalization</h3>
                  <p>
                    Normalizes the hermetic Python version kind required for
                    rules_python to select CPython free-threaded toolchains
                    correctly.
                  </p>
                </div>

                <div className="ecosystem-state open">
                  OPEN
                </div>

                <ExternalIcon />
              </a>
            </div>

            <p className="opensource-disclaimer">
              Independent open-source contributions to public upstream
              projects. No employment or organizational affiliation is implied.
            </p>
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

          <div className="research-profile">
            <div className="research-profile-intro">
              <span>RESEARCH PROFILE / 2025—PRESENT</span>
              <h3>
                Applied AI research across
                <em>language, data, and trustworthy systems.</em>
              </h3>
            </div>

            <div className="research-profile-stats">
              <div>
                <strong>5</strong>
                <span>Selected research works</span>
              </div>
              <div>
                <strong>Q&A</strong>
                <span>Large-scale synthetic dialogue research</span>
              </div>
              <div>
                <strong>NLP</strong>
                <span>Primary research domain</span>
              </div>
            </div>

            <div className="research-identifiers">
              <a
                href="https://orcid.org/0009-0005-6133-8384"
                target="_blank"
                rel="noreferrer"
              >
                <span>ORCID</span>
                <strong>0009-0005-6133-8384</strong>
                <ExternalIcon />
              </a>

              <a
                href="https://www.researchgate.net/profile/Mina-Ibrahim-32"
                target="_blank"
                rel="noreferrer"
              >
                <span>RESEARCHGATE</span>
                <strong>Research profile · 9 publications</strong>
                <ExternalIcon />
              </a>

              <div>
                <span>RESEARCH AREAS</span>
                <strong>
                  Transformers · Arabic NLP · Synthetic Data · Conversational AI
                  · Ranking Analysis
                </strong>
              </div>
            </div>
          </div>

          <div className="publications">
            {publications.map((publication, index) => (
              <article
                className={`publication ${index === 0 ? 'publication-featured' : ''}`}
                key={publication.title}
              >
                <div className="publication-index">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="publication-content">
                  <div className="publication-meta">
                    {publication.year && <span>{publication.year}</span>}
                    {publication.status && <span>{publication.status}</span>}
                  </div>

                  <h3>{publication.title}</h3>

                  {publication.authors && (
                    <p className="publication-authors">
                      {publication.authors}
                    </p>
                  )}

                  <p>{publication.summary}</p>

                  <div className="publication-tags">
                    {publication.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="publication-action">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View publication: ${publication.title}`}
                  >
                    <span>View publication</span>
                    <ExternalIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise-section section" id="skills">
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

          <div className="professional-positioning">
            <div className="positioning-label">
              PROFESSIONAL POSITIONING
            </div>

            <div className="positioning-copy">
              <h3>
                AI Engineer & Researcher
                <span>TensorFlow Open-Source Contributor</span>
              </h3>

              <p>
                LLMs · Agentic AI · RAG · ML Systems
              </p>
            </div>

            <div className="positioning-note">
              <span>WORKING ACROSS</span>
              <p>
                AI research, production machine learning, native runtime
                engineering, open-source infrastructure, and backend systems.
              </p>
            </div>
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
                Deploying and operating university digital-library and
                institutional-repository infrastructure across Koha, DSpace,
                and FOLIO — from application and database layers through secure
                public web access.
              </p>

              <ul className="experience-responsibilities">
                <li>
                  Configure Linux services, databases, domains, reverse proxies,
                  HTTPS, permissions, backups, and ongoing system maintenance.
                </li>
                <li>
                  Troubleshoot deployment, integration, authentication,
                  networking, and server reliability issues.
                </li>
                <li>
                  Support universities in maintaining reliable and publicly
                  accessible research infrastructure.
                </li>
              </ul>
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
              className="button button-secondary"
              href="/Mina_Ibrahim_CV_ATS_Final.pdf"
              download="Mina_Ibrahim_CV.pdf"
            >
              Download CV
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

            <a
              className="text-link"
              href="https://www.researchgate.net/profile/Mina-Ibrahim-32"
              target="_blank"
              rel="noreferrer"
            >
              ResearchGate
              <ExternalIcon />
            </a>

            <a
              className="text-link"
              href="https://orcid.org/0009-0005-6133-8384"
              target="_blank"
              rel="noreferrer"
            >
              ORCID
              <ExternalIcon />
            </a>

            <a
              className="text-link"
              href="mailto:minaibrahim190@gmail.com"
            >
              Email
              <ArrowIcon />
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
