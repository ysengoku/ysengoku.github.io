export interface ProjectItem {
  id: string; // URL slug, used in ?p=
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
