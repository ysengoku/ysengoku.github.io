import { skillsEn } from './skills';
import { timelineEn } from './timeline';
import { projectsEn } from './projects';

export const en = {
  jobTitle: 'Software Engineer',
  about: {
    label: 'About',
    summary: 'Who I am, where I come from, and what guides me in my work.',
    content: [
      'Somewhere in Japan, a little girl spent hours spinning a globe and poring over maps.',
      'Her name was Yuko.',
      'Later, I set off to see the world for real, and travel became the heart of my work. After fifteen years of sending travelers to every corner of the globe, it was my turn to pack my bags, bound for France.',
      "Along the way, I came across tech, a destination I hadn't planned on, and one where I chose to stay. Since then, I never settle for a solution that just works. I look for the one that truly convinces, both me and the people who use it.",
    ],
  },
  skills: {
    label: 'Skills',
    summary: 'Discover my technical skills in full-stack development',
    items: skillsEn,
  },
  projects: {
    label: 'Latest works',
    summary: 'Explore my most recent projects and achievements.',
    items: projectsEn,
  },
  background: {
    label: 'Background',
    summary: 'My Experience and Education Overview',
    items: timelineEn,
  },
  languages: 'Languages',
  technologies: 'Technologies',
  seeGitHub: 'See on GitHub',
  seeWebsite: 'See Website',
  explore: 'Explore',
  seeDetail: 'See detail',
};
