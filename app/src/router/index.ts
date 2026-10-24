import { createWebHashHistory, createRouter } from 'vue-router';
import About from '@components/content/about/About.vue';
import Background from '@components/content/background/Background.vue';
import Projects from '@components/content/projects/Projects.vue';
import Skills from '@components/content/skills/Skills.vue';

const routes = [
  { path: '/', component: { render: () => null } },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/background', component: Background },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
