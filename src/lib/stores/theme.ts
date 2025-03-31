import { persistentAtom } from '@nanostores/persistent';
import { onMount } from 'nanostores';

export const themes = {
  light: 'light',
  dark: 'dark',
  system: undefined,
} as const;

export type ThemeKey = keyof typeof themes;
export type ThemeValue = (typeof themes)[ThemeKey];

export const STORAGE_THEME_KEY = 'theme' as const;

export const themeStore = persistentAtom<ThemeValue>(
  STORAGE_THEME_KEY,
  themes.system,
);

function applyTheme(theme: ThemeValue) {
    if (theme === themes.dark) {
        document.documentElement.classList.add('dark');
    } else if (theme === themes.light) {
        document.documentElement.classList.remove('dark');
    } else {
        const query = window.matchMedia('(prefers-color-scheme: dark)');

        query.addEventListener('change', (e) => {
            applyTheme(e.matches ? themes.dark : themes.light);
        });

        applyTheme(query.matches ? themes.dark : themes.light);
    }
}

if (typeof window !== 'undefined') {
    onMount(themeStore, () => themeStore.subscribe(applyTheme));
  }