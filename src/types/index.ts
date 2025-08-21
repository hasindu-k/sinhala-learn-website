// types/index.ts
export interface TeamMember {
  name: string;
  role: string;
  isLeader?: boolean;
}

export interface Supervisor {
  name: string;
  role: string;
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
  weight: number;
}

export interface Document {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  link: string;
  fileType: string;
  lastUpdated?: Date;
  size?: string | null;
}
