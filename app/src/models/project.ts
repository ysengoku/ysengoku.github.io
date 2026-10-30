export interface ProjectItem {
  id: string; // URL slug, used in ?p=
  title: string;
  subtitleKey: string;
  introKey: string;
  image: string;
  links?: ProjectLink[];
  descriptionKey: string;
  languages: string[];
  tools: string[];
  repos: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  url: string;
}
