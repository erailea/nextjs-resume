import React from 'react';
import { Provider } from 'react-redux';
import themeSlice from '../../store/theme-slice';
import {
  educationalExperiences,
  hobbies,
  links,
  personalInformation,
  professionalExperiences,
  projects,
  skills,
} from '../../test/fixtures/markdown';
import { render } from '../../test/testUtils';
import ResumeLayout from './ResumeLayout';

jest.mock('next/router', () => require('next-router-mock'));

describe('<ResumeLayout />', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('Matches the snapshot', () => {
    const { container } = render(
      <Provider store={themeSlice}>
        <ResumeLayout
          educations={educationalExperiences}
          projects={projects}
          hobbies={hobbies}
          links={links}
          personalInformation={personalInformation}
          professional={professionalExperiences}
          skills={skills}
        />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
