import { nextTick } from 'vue';
import { router } from '@router';

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function navigateWithTransition(path: string): void {
  if (!document.startViewTransition || prefersReducedMotion()) {
    router.push(path);
    return;
  }
  document.startViewTransition(async () => {
    await router.push(path);
    await nextTick();
  });
}
