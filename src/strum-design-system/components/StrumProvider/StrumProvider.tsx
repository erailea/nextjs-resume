import React, { PropsWithChildren, useEffect } from 'react';
import usePrefersDarkMode from '../../../helpers/useDarkMode';
import { timbre } from '../../themes';
import { darkScheme, lightScheme } from '../../themes/colorScheme.css';
import { StrumContext } from './StrumContext';

export interface StrumProviderProps {
  colorScheme?: 'dark' | 'light';
  theme?: string | null;
}

const StrumProvider: React.FC<PropsWithChildren<StrumProviderProps>> = (
  props,
) => {
  const darkMode = usePrefersDarkMode();

  const { children, theme = timbre } = props;
  let { colorScheme = darkMode ? 'dark' : 'light' } = props;

  useEffect(() => {
    let colorSchemeStyle;
    switch (darkMode ? 'dark' : 'light') {
      case 'dark':
        colorSchemeStyle = darkScheme;
        break;
      case 'light':
        colorSchemeStyle = lightScheme;
        break;
    }
    document.documentElement.className = colorSchemeStyle;
  }, [darkMode]);

  return (
    <>
      <StrumContext.Provider value={{ colorScheme, theme }}>
        <div className={theme}>{children}</div>
      </StrumContext.Provider>
    </>
  );
};

export default StrumProvider;
