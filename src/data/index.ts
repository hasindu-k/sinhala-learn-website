import type {
  TeamMember,
  ProjectComponent,
  Milestone,
  Document,
} from "../types";

export const teamMembers: TeamMember[] = [
  {
    name: "Ranaweera P.H.K",
    role: "Sinhala Document Processing & Embedding",
  },
  {
    name: "Jayananda L.V.O.R",
    role: "Resource‑Based Q&A (Text)",
  },
  {
    name: "Lokuhewage M.M",
    role: "Evaluation of Answers",
  },
  {
    name: "Sathsara T.T.D",
    role: "Resource‑Based Q&A (Voice)",
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
    title: "TAF – Topic Assessment",
    description: "Topic approved; scope, objectives, and roles finalized.",
  },
  {
    status: "in-progress",
    title: "Research Proposal",
    description: "Background, literature, methodology, requirements, budget.",
  },
  {
    status: "upcoming",
    title: "Prototype v1",
    description: "OCR + Embeddings + Text RAG (offline searchable index).",
  },
  {
    status: "upcoming",
    title: "Voice Q&A Beta",
    description: "Accent‑aware STT and TTS with source citations.",
  },
  {
    status: "upcoming",
    title: "Evaluation Module",
    description: "Semantic grading and teacher feedback console.",
  },
  {
    status: "upcoming",
    title: "Final Report & Demo",
    description: "Live demo + documentation + dataset cards.",
  },
];

export const documents: Document[] = [
  {
    title: "Topic Assessment Form (TAF)",
    description: "Approved topic, objectives, roles & novelty.",
    status: "completed",
    link: "docs/TAF Form_25_26J_448_V3.pdf",
    fileType: "PDF",
  },
  {
    title: "Proposal (Draft)",
    description: "Background, literature, methodology, requirements, budget.",
    status: "in-progress",
    link: "#",
    fileType: "In Progress",
  },
  {
    title: "Ethics & Dataset Notes",
    description: "Consent, privacy, dataset cards for Sinhala resources.",
    status: "planned",
    link: "#",
    fileType: "Planned",
  },
];
