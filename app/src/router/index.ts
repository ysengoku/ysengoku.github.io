import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: { render: () => null } },
  { path: '/about', component: () => import('@components/content/about/About.vue') },
  { path: '/skills', component: () => import('@components/content/skills/Skills.vue') },
  { path: '/projects', component: () => import('@components/content/projects/Projects.vue') },
  {
    path: '/background',
    component: () => import('@components/content/background/Background.vue'),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
