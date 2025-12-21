import type { SkillItem } from 'src/models/skill';

export const skillItems: SkillItem[] = [
  {
    id: 1,
    icon: 'fas fa-laptop',
    title: 'Frontend & UX/UI Design',
    description:
      'Experienced in front-end development with vanilla JavaScript and Vue.js, focusing on intuitive user interfaces. Good understanding of UX/UI principles to enhance user experience.',
    technologies: ['JavaScript', 'TypeScript', 'Vue.js', 'Figma'],
  },
  {
    id: 2,
    icon: 'fas fa-code',
    title: 'Backend',
    description:
      'Solid foundation in C/C++, covering core systems programming concepts. In parallel, developing web backends with Node.js/TypeScript and PHP/Symfony, with a focus on API design and data persistence.',
    technologies: ['Node.js', 'C/C++', 'PHP', 'Symfony', 'RESTful APIs', 'SQL'],
  },
  {
    id: 3,
    icon: 'fa-solid fa-infinity',
    title: 'DevOps',
    description:
      'Familiar with Docker for building small-scale infrastructure and automating development environments, with a focus on streamlining workflows and improving code quality.',
    technologies: ['Docker', 'Docker Compose', 'CI/CD', 'GitHub Actions'],
  },
];
