export type Social = { icon: "github" | "twitter" | "google" | "linkedin"; url: string };
export type Skill = { name: string; exp: string; icon: string };
export type EduItem = { title: string; images:Record<string, string>, body?: string; place?: string; years: string, };
export type ExpItem = { title: string; years: string;  description?: string;  };
export type ProjectItem = {
  title: string; url: string; thumb?: string;
  tags: string[]; category: string;
};

export type SiteData = {
  brand: { logoText: string };
  hero: { intro: string; roles: string[]; titlePrefix: string; titleSuffix: string; ctaText: string; cvUrl: string; photo: string };
  about: { heading: string; bio: string; dob: string; languages: string; nationality: string; interests: string; social: Social[] };
  skills: Skill[];
  education: { title: string; education: EduItem[]; experience: ExpItem[] };
  projects: { title: string; categories: string[]; items: ProjectItem[] };
  contact: { phone: string; hours: string; email: string; days: string };
  footer: { about: string; links1: string[]; links2: string[]; links3: string[] };
};
