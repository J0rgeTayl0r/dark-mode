import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDark', false);
  const page = window.document.body;
  isDarkMode ? page.classList.add('dark-mode') : page.classList.remove('dark-mode');
    
         return  [isDarkMode , setIsDarkMode]
       };
