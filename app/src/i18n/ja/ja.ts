import { skillsJa } from './skills';
import { timelineJa } from './timeline';
import { projectsJa } from './projects';

export const ja = {
  jobTitle: 'ソフトウェアエンジニア',
  about: {
    label: 'About',
    summary: '[Summary of About section]',
  },
  skills: {
    label: 'Skills',
    summary: 'フルスタック開発における技術スキルの概要',
    items: skillsJa,
  },
  projects: {
    label: 'Latest works',
    summary: '最近のプロジェクトの紹介',
    items: projectsJa,
  },
  background: {
    label: 'Background',
    summary: '職務経験および学習経歴',
    items: timelineJa,
  },
  languages: '使用言語&スタック ',
  technologies: 'テクノロジー ',
  seeGitHub: 'GitHubで見る',
  seeWebsite: 'ウェブサイトを見る',
  explore: 'もっと見る',
  seeDetail: '詳細を見る',
};
