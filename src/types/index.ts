// types/index.ts
export interface TeamMember {
  name: string;
  role: string;
  component: string;
}

export interface ProjectComponent {
  title: string;
  description: string;
  lead: string;
}

export interface Milestone {
  status: "completed" | "in-progress" | "upcoming";
  title: string;
  description: string;
}

export interface Document {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  link: string;
  fileType: string;
}
