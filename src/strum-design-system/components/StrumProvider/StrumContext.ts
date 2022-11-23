import { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/theme-slice';
import { vars } from '../../themes/contract.css';
import { StrumProviderProps } from './StrumProvider';

interface StrumContext {
  colorScheme: StrumProviderProps['colorScheme'];
  theme: string | null;
}

export const StrumContext = createContext<StrumContext>(null);

export const useStrumTheme = () => {
  const { theme } = useContext(StrumContext);

  const themeState = useSelector((state: RootState) => state.theme);

  if (theme === null) {
    throw new Error('No Strum theme available on context');
  }

  console.log('StrumContext colorScheme', themeState.colorScheme);

  return { colorScheme: themeState.colorScheme, themeClass: theme, vars };
};
