import type {
  TeamMember,
  ProjectComponent,
  Milestone,
  Document,
  Supervisor,
} from "../types";

export const teamMembers: TeamMember[] = [
  {
    name: "Lokuhewage M.M",
    role: "Evaluation of Answers",
    isLeader: true,
    image: "images/team/lokuhewage3.webp",
    email: "miyurilokuhewage15@gmail.com",
    linkedin: "https://www.linkedin.com/in/miyurilokuhewage/",
  },
  {
    name: "Ranaweera P.H.K",
    role: "Sinhala Document Processing & Embedding",
    image: "images/team/ranaweera2.webp",
    email: "koshithahasindu@gmail.com",
    linkedin: "https://www.linkedin.com/in/hasindu-k/",
  },
  {
    name: "Jayananda L.V.O.R",
    role: "Resource‑Based Q&A (Text)",
    image: "images/team/jayananda.webp",
    email: "oshadi.jayananda@gmail.com",
    linkedin: "https://www.linkedin.com/in/oshadi-jayananda/",
  },
  {
    name: "Sathsara T.T.D",
    role: "Resource‑Based Q&A (Voice)",
    image: "images/team/sathsara.webp",
    email: "sdenuwansathsara0412@gmail.com",
    linkedin: "https://www.linkedin.com/in/denuwan-sathsara-0b05712a7/",
  },
];

export const supervisors: Supervisor[] = [
  {
    name: "Prof. Dilshan De Silva",
    role: "Supervisor",
    image: "images/team/supervisor.webp",
    email: "dilshan.i@sliit.lk",
    linkedin: "https://www.linkedin.com/in/prof-dilshan-de-silva-96384573/",
  },
  {
    name: "Ms. Chamali Pabasara",
    role: "Co-Supervisor",
    image: "images/team/co-supervisor.webp",
    email: "chamali.p@sliit.lk",
    linkedin: "https://www.linkedin.com/in/chamali-pabasara-b54130182/",
  },
];

export const projectComponents: ProjectComponent[] = [
  {
    title: "Sinhala Document Processing & Embedding",
    description:
      "OCR for printed & handwritten Sinhala, preprocessing, embeddings, offline index.",
    lead: "Ranaweera P.H.K",
  },
  {
    title: "Resource‑Based Q&A (Voice)",
    description:
      "Whisper‑based STT tuned for SL accents; hybrid TTS; citations in voice answers.",
    lead: "Sathsara T.T.D",
  },
  {
    title: "Resource‑Based Q&A (Text)",
    description:
      "Sinhala‑aware RAG with strict source binding and contextual summarization.",
    lead: "Jayananda L.V.O.R",
  },
  {
    title: "Evaluation of Answers",
    description:
      "Semantic grading (XLM‑R), rule‑based concept checks, explainable feedback.",
    lead: "Lokuhewage M.M",
  },
];

export const milestones: Milestone[] = [
  {
    status: "completed",
    title: "Topic Assessment (TAF)",
    description:
      "Research topic finalized with defined objectives, scope, and system direction.",
    weight: 10,
  },
  {
    status: "completed",
    title: "Research Proposal Presentation",
    description:
      "Problem statement, literature review, and proposed methodology presented and approved.",
    weight: 15,
  },
  {
    status: "completed",
    title: "Progress Evaluation (Phase 2)",
    description:
      "System architecture and core components validated through intermediate evaluation.",
    weight: 20,
  },
  {
    status: "completed",
    title: "Core System Development",
    description:
      "Implementation of OCR, RAG-based Q&A, voice processing, and answer evaluation modules.",
    weight: 20,
  },
  {
    status: "in-progress",
    title: "Research Paper Publication",
    description:
      "Paper accepted for publication; currently awaiting payment and final submission process.",
    weight: 10,
  },
  {
    status: "in-progress",
    title: "System Refinement & Testing",
    description:
      "Performance evaluation, accuracy improvements, and usability testing across modules.",
    weight: 10,
  },
  {
    status: "upcoming",
    title: "Final Presentation & Demonstration",
    description:
      "Comprehensive system demonstration and evaluation before academic panel.",
    weight: 10,
  },
  {
    status: "upcoming",
    title: "Final Report Submission",
    description:
      "Submission of complete research documentation, results, and system analysis.",
    weight: 5,
  },
];

export const documents: Document[] = [
  {
    title: "Topic Assessment Form (TAF)",
    description:
      "Approved research topic including objectives, scope, novelty, and team responsibilities.",
    status: "completed",
    link: "docs/TAF Form_25_26J_448_V3.pdf",
    fileType: "PDF",
    lastUpdated: new Date("2025-08-01"),
    size: "2.4 MB",
  },

  {
    title: "Research Proposal Report",
    description:
      "Detailed proposal including problem statement, literature review, and methodology.",
    status: "completed",
    link: "#", // update when available
    fileType: "PDF",
    lastUpdated: new Date("2025-08-31"),
  },

  {
    title: "Research Paper (Conference Submission)",
    description:
      "SinhalaLearn research paper submitted and accepted; currently awaiting publication payment process.",
    status: "in-progress",
    link: "#",
    fileType: "Draft",
    lastUpdated: new Date("2026-04-03"),
  },

  {
    title: "System Design & Architecture",
    description:
      "Detailed architecture including RAG pipeline, OCR processing, and evaluation module design.",
    status: "in-progress",
    link: "#",
    fileType: "Draft",
  },

  {
    title: "Final Report",
    description:
      "Comprehensive documentation including methodology, implementation, results, and analysis.",
    status: "planned",
    link: "#",
    fileType: "Planned",
  },

  {
    title: "Final Presentation Slides",
    description: "Slides for final system demonstration and evaluation.",
    status: "planned",
    link: "#",
    fileType: "Planned",
  },
];
