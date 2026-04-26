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
    title: "Topic Assessment Form",
    description:
      "Topic assessment form for project evaluation and feedback. Status: Uploaded. Version: 3.0.",
    status: "completed",
    link: "https://drive.google.com/file/d/1rwJRzc4vgu0eXtJ_lbHY3GVviWEqyt-M/view?usp=drive_link",
    fileType: "PDF",
    lastUpdated: new Date("2025-06-23"),
  },

  {
    title: "Individual Project Proposals",
    description:
      "Comprehensive research proposals submitted by each team member covering their respective functional areas.",
    status: "completed",
    fileType: "PDF",
    lastUpdated: new Date("2025-09-19"),
    subDocuments: [
      {
        title: "Proposal: Evaluation of Answers (Lokuhewage M.M)",
        link: "https://drive.google.com/file/d/1Ro0YBu4iTzlEwlIGEETJdXBQnMR0uRDy/view?usp=drive_link",
        status: "completed",
      },
      {
        title: "Proposal: Sinhala Document Processing (Ranaweera P.H.K)",
        link: "https://drive.google.com/file/d/12lOz06qVKUM5VRsJAYojlRxBuqWjF_bI/view?usp=drive_link",
        status: "completed",
      },
      {
        title: "Proposal: Resource‑Based Q&A - Text (Jayananda L.V.O.R)",
        link: "https://drive.google.com/file/d/18cIblzscCTYRWEnpFyFEdo5gzR1WctpA/view?usp=drive_link",
        status: "completed",
      },
      {
        title: "Proposal: Resource‑Based Q&A - Voice (Sathsara T.T.D)",
        link: "https://drive.google.com/file/d/1hMqGEa24OGd42w3lv7TkcfJr2SRNA84B/view?usp=drive_link",
        status: "completed",
      },
    ],
  },

  {
    title: "Checklist 1 (25-26J-448)",
    description: "Official project checklist for Phase 1. Status: Uploaded.",
    status: "completed",
    link: "https://drive.google.com/file/d/1Ezh1WPIqQGvVAom1PwB4o6R1yJBuu8bS/view?usp=drive_link",
    fileType: "PDF",
    lastUpdated: new Date("2026-01-11"),
  },

  {
    title: "Camera Ready Research Paper",
    description:
      "Final camera-ready research paper submitted for the SinhalaLearn research project.",
    status: "completed",
    link: "https://drive.google.com/file/d/1o_fy6-K0ieq46jjym8CFrwSUNMd9_Pce/view?usp=drive_link",
    fileType: "PDF",
    lastUpdated: new Date("2026-04-11"),
  },

  {
    title: "Final Reports",
    description:
      "Comprehensive final documentation including the group report and individual research contributions.",
    status: "in-progress",
    fileType: "Draft",
    lastUpdated: new Date("2026-04-20"),
    subDocuments: [
      {
        title: "Group Final Report",
        link: "#",
        status: "in-progress",
      },
      {
        title: "Individual Report: Evaluation of Answers (Lokuhewage M.M)",
        link: "#",
        status: "in-progress",
      },
      {
        title:
          "Individual Report: Sinhala Document Processing (Ranaweera P.H.K)",
        link: "#",
        status: "in-progress",
      },
      {
        title:
          "Individual Report: Resource‑Based Q&A - Text (Jayananda L.V.O.R)",
        link: "#",
        status: "in-progress",
      },
      {
        title: "Individual Report: Resource‑Based Q&A - Voice (Sathsara T.T.D)",
        link: "#",
        status: "in-progress",
      },
    ],
  },
];
