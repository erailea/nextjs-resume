import { getEducationalExperiences } from './markdown/educational';
import { getHobbies } from './markdown/hobbies';
import { getLinks } from './markdown/links';
import { getPersonalInformation } from './markdown/personal';
import { getProfessionalExperiences } from './markdown/professional';
import { getProjects } from './markdown/project';
import { getSkillCategories } from './markdown/skills';

type CMS = 'markdown';

const getCMSIntegration = async (cms: CMS) => {
  if (cms === 'markdown') {
    return {
      educations: await getEducationalExperiences(),
      hobbies: await getHobbies(),
      links: await getLinks(),
      projects: await getProjects(),
      personalInformation: await getPersonalInformation(),
      professional: await getProfessionalExperiences(),
      skills: await getSkillCategories(),
    };
  }
  return null;
};

export default getCMSIntegration;
