import { skillsJa } from './skills';
import { timelineJa } from './timeline';
import { projectsJa } from './projects';

export const ja = {
  jobTitle: 'ソフトウェアエンジニア',
  pagerHint: '矢印で移動',
  a11y: {
    pager: 'セクションの切り替え',
    prev: '前のセクション',
    next: '次のセクション',
    close: '閉じる',
  },
  about: {
    label: 'About',
    summary: '私について、私のルーツ、そして仕事で大切にしていること。',
    content: [
      '日本のとある場所。ひとりの女の子が、何時間も地球儀を回したり、地図を眺めたりして、ひとりの時間を楽しんでいました。',
      'その子の名前は、ゆうこ。',
      '大人になり、本当に世界へ飛び出し、やがて旅に関わる仕事に就きました。15年間、世界各地へ旅立つ人たちを支えてきた私が、今度は自らスーツケースを抱えてフランスへ。',
      'そこで出会ったのが、思いもよらなかったテックの世界。好奇心の赴くままに学び始め、気づけばその世界を探求するようになっていました。',
      'ただ動くだけでは満足しない。よりよい解決策を考え、使う人にとって本当に価値のあるものを作る。それが、今の私のものづくりの姿勢です。',
    ],
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
