import { CMSEducationalExperience } from '../../cms-integration/markdown/educational';
import { CMSHobbies } from '../../cms-integration/markdown/hobbies';
import { CMSLink } from '../../cms-integration/markdown/links';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { CMSProfessionalExperience } from '../../cms-integration/markdown/professional';
import {
  CMSProject,
  ProjectMarkdownAttributes,
} from '../../cms-integration/markdown/project';
import { CMSSkillCategory } from '../../cms-integration/markdown/skills';

export const educationalExperiences: CMSEducationalExperience[] = [
  {
    attributes: {
      achievement: 'Degree',
      achievementDescription: 'desc',
      startYear: '2000',
      completionYear: '2010',
      institution: 'Test School',
    },
    html: '<div>Test</div>',
    slug: 'test',
  },
];

export const projects: CMSProject[] = [
  {
    attributes: {
      link: 'https://github.com/erailea',
      name: 'github',
    },
    html: '<p></p>',
    slug: 'asd',
  },
];

export const links: CMSLink[] = [
  {
    href: 'https://github.com/erailea',
    iconName: 'github',
    title: 'GitHub',
  },
];

export const personalInformation: CMSPersonalInformation = {
  attributes: {
    emailAddress: 'email',
    familyName: 'Torun',
    givenName: 'Ali',
    title: 'Cool Person',
    location: 'Somewhere Only We Know',
  },
  html: '<div>Test</div>',
};

export const professionalExperiences: CMSProfessionalExperience[] = [
  {
    attributes: {
      endDate: null,
      organization: 'The Zebra',
      title: 'My Title',
      startDate: '2018-02-15',
    },
    html: '<div>Test</div>',
    slug: 'test',
  },
];

export const skills: CMSSkillCategory[] = [
  {
    attributes: {
      title: 'Proficient',
      stars: 3,
    },
    html: '<div>Test</div>',
    slug: 'test',
  },
];

export const hobbies: CMSHobbies = { html: '<div>Test</div>' };
