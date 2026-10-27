export interface ProjectItem {
  id: number;
  title: string;
  subtitleKey: string;
  introKey: string;
  image: string;
  links?: ProjectLink[];
  descriptionKey: string;
  techLanguage: string;
  techTools: string;
  repos: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  url: string;
}
