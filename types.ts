
export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}
