import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/theme-slice';

const usePrefersDarkMode = (): boolean => {
  const [value, setValue] = useState(false);

  const themeState = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setValue(mediaQuery.matches);

    const handler = () =>
      setValue(
        (themeState.colorScheme == 'system' && mediaQuery.matches) ||
          themeState.colorScheme == 'dark',
      );

    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [themeState]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setValue(
      (themeState.colorScheme == 'system' && mediaQuery.matches) ||
        themeState.colorScheme == 'dark',
    );
  }, [themeState.colorScheme]);

  useEffect(() => {
    console.log('is dark: ', value);
  }, [value]);

  return value;
};

export default usePrefersDarkMode;
