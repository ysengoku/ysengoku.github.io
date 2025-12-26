import type { SkillItem } from 'src/models/skill';

export const skillItems: SkillItem[] = [
  {
    id: 1,
    icon: 'fas fa-laptop',
    titleKey: 'skills.frontend.title',
    descriptionKey: 'skills.frontend.description',
    technologies: ['JavaScript', 'TypeScript', 'Vue.js', 'Figma'],
  },
  {
    id: 2,
    icon: 'fas fa-code',
    titleKey: 'skills.backend.title',
    descriptionKey: 'skills.backend.description',
    technologies: ['Node.js', 'C/C++', 'PHP', 'Symfony', 'RESTful APIs', 'SQL'],
  },
  {
    id: 3,
    icon: 'fa-solid fa-infinity',
    titleKey: 'skills.devops.title',
    descriptionKey: 'skills.devops.description',
    technologies: ['Docker', 'Docker Compose', 'CI/CD', 'GitHub Actions'],
  },
];
