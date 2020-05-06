import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const [isDark, setDark] = useLocalStorage('isDark', false);
  const page = window.document.page;
  isDark ? page.classList.add('dark-mode') : page.classList.remove('dark-mode');
    
         return  [isDark , setDark]
       };
