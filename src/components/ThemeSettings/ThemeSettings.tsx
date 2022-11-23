import {
  faLightbulb,
  faSun,
  faMoon,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutsideClick } from '../../helpers/useOutsideAlerter';
import { RootState, themeAction } from '../../store/theme-slice';
import Box from '../../strum-design-system/components/Box/Box';
import { atoms } from '../../strum-design-system/sprinkles.css';
import colors from '../../strum-design-system/themes/timbre/colors';
import {
  themeSettingsLinkStyle,
  themeSettingsToggleLinkStyle,
  themeSettingsContainerStyle,
} from './ThemeSettings.css';

interface ThemeSettingsProps {}

const ThemeSettings: React.FC<ThemeSettingsProps> = (props) => {
  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const setLightMode = () => {
    dispatch(themeAction.setLightMode());
  };
  const setDarkMode = () => {
    dispatch(themeAction.setDarkMode());
  };
  const setSystemMode = () => {
    dispatch(themeAction.setSystemMode());
  };

  const themeState = useSelector((state: RootState) => state.theme);

  return (
    <div ref={ref}>
      {isMenuOpen && (
        <Box className={themeSettingsContainerStyle}>
          <a
            className={themeSettingsLinkStyle}
            rel="noopener noreferrer"
            onClick={() => setLightMode()}
            target="_blank"
          >
            <Box
              className={atoms({
                color: { darkMode: 'dark', lightMode: 'white' },
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              })}
            >
              Light
              <FontAwesomeIcon
                className={atoms({
                  color: {
                    darkMode:
                      themeState.colorScheme == 'light' ? 'primary' : 'dark',
                    lightMode:
                      themeState.colorScheme == 'light' ? 'primary' : 'white',
                  },
                  textAlign: 'right',
                })}
                icon={faSun}
              />
            </Box>
          </a>
          <a
            className={themeSettingsLinkStyle}
            rel="noopener noreferrer"
            onClick={() => setDarkMode()}
            target="_blank"
          >
            <Box
              className={atoms({
                color: { darkMode: 'dark', lightMode: 'white' },
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              })}
            >
              Dark
              <FontAwesomeIcon
                className={atoms({
                  color: {
                    darkMode:
                      themeState.colorScheme == 'dark' ? 'primary' : 'dark',
                    lightMode:
                      themeState.colorScheme == 'dark' ? 'primary' : 'white',
                  },
                  textAlign: 'right',
                })}
                icon={faMoon}
              />
            </Box>
          </a>
          <a
            className={themeSettingsLinkStyle}
            rel="noopener noreferrer"
            onClick={() => setSystemMode()}
            target="_blank"
          >
            <Box>
              <span
                className={atoms({
                  color: { darkMode: 'dark', lightMode: 'white' },
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                })}
              >
                System
                <FontAwesomeIcon
                  className={atoms({
                    color: {
                      darkMode:
                        themeState.colorScheme == 'system' ? 'primary' : 'dark',
                      lightMode:
                        themeState.colorScheme == 'system'
                          ? 'primary'
                          : 'white',
                    },
                    textAlign: 'right',
                  })}
                  icon={faUserGear}
                />
              </span>
            </Box>
          </a>
        </Box>
      )}
      <a
        className={themeSettingsToggleLinkStyle}
        rel="noopener noreferrer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        target="_blank"
      >
        <span className="fa-layers fa-fw fa-1x">
          <FontAwesomeIcon
            color={isMenuOpen ? colors.yellow : colors.primary}
            icon={faLightbulb}
          />
        </span>
      </a>
    </div>
  );
};

export default ThemeSettings;
