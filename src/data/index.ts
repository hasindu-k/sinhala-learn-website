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
    email: "denuwansathsara0412@gmail.com",
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
    title: "Project Proposal",
    description:
      "Initial proposal submitted with project scope, domain focus, and planned methodology.",
    date: "September 11, 2025",
    marks: "Pending",
    weight: 20,
  },
  {
    status: "completed",
    title: "Progress Presentation 1",
    description:
      "First progress review completed with module architecture and early implementation outcomes.",
    date: "January 7, 2026",
    marks: "Pending",
    weight: 20,
  },
  {
    status: "completed",
    title: "Progress Presentation 2",
    description:
      "Second progress review in preparation with integration updates and evaluation metrics.",
    date: "March 11, 2026",
    marks: "Pending",
    weight: 20,
  },
  {
    status: "upcoming",
    title: "Final Assessment & Viva",
    description:
      "Final system demonstration and oral defense including panel Q&A and individual contribution validation.",
    date: "May 6, 2026",
    marks: "Pending",
    weight: 40,
  },
];

export const documents: Document[] = [
  {
    title: "Project Charter",
    description:
      "Placeholder (required): Add charter link. Status: Pending/Uploaded. Version: Placeholder.",
    status: "planned",
    link: "#",
    fileType: "Planned",
  },

  {
    title: "Proposal Document",
    description:
      "Placeholder (required): Add proposal document link. Status: Pending/Uploaded. Version: Placeholder.",
    status: "planned",
    link: "#",
    fileType: "Planned",
  },

  {
    title: "Final Documents and Checklists",
    description:
      "Placeholder (required): Add final document/checklist links. Status: Pending/Uploaded. Version: Placeholder.",
    status: "planned",
    link: "#",
    fileType: "Planned",
  },
];
