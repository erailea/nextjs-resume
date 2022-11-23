import { style } from '@vanilla-extract/css';
import { isAbsolute } from 'path';
import { atoms } from '../../strum-design-system/sprinkles.css';
import { vars } from '../../strum-design-system/themes/contract.css';

export const themeSettingsContainerStyle = atoms({
  borderRadius: 'rounded',
  position: 'fixed',
  width: '157px',
  backgroundColor: { darkMode: 'white', lightMode: 'dark' },
  marginBottom: 6,
  padding: 2,
  textAlign: 'center',
  right: 4,
  bottom: 4,
});

export const themeSettingsButtonStyle = atoms({
  width: '157px',
  backgroundColor: 'dark',
  borderColor: 'black',
  textAlign: 'center',
});

export const themeSettingsLinkStyle = style({
  width: '100%',
  cursor: 'pointer',
  color: vars.colors.white,
  fontSize: 25,
});

export const themeSettingsToggleLinkStyle = style({
  opacity: 0.7,
  right: 9,
  bottom: 9,
  cursor: 'pointer',
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'center',
  color: vars.lightenedColors.white,
  fontSize: 25,
});
