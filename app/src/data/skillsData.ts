import type { SkillItem } from '@models/skill';

export const skillItems: SkillItem[] = [
  {
    id: 1,
    icon: 'fas fa-laptop',
    titleKey: 'skills.items.frontend.title',
    descriptionKey: 'skills.items.frontend.description',
    technologies: ['JavaScript', 'TypeScript', 'Vue.js', 'Figma'],
  },
  {
    id: 2,
    icon: 'fas fa-code',
    titleKey: 'skills.items.backend.title',
    descriptionKey: 'skills.items.backend.description',
    technologies: ['Node.js', 'C/C++', 'PHP', 'Symfony', 'RESTful APIs', 'SQL'],
  },
  {
    id: 3,
    icon: 'fa-solid fa-infinity',
    titleKey: 'skills.items.devops.title',
    descriptionKey: 'skills.items.devops.description',
    technologies: ['Docker', 'Docker Compose', 'CI/CD', 'GitHub Actions'],
  },
];
