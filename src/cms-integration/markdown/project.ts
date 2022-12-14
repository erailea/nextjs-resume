import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface ProjectMarkdownAttributes {
  name: string;
  link: string;
}

export interface CMSProject {
  attributes: ProjectMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const educationPath = path.join(basePath, 'edit-me', 'cms', 'projects');

export const getProjects = async (): Promise<CMSProject[]> => {
  const dir = (await fs.readdir(educationPath)).reverse();
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(educationPath, filename));
      const { attributes, body } = parseFrontMatter<ProjectMarkdownAttributes>(
        file.toString(),
      );

      invariant(attributes?.name, `${filename} missing "name" attribute.`);

      const html = marked(body);

      return {
        attributes,
        html,
        slug: filename.replace(/\.md$/, ''),
      };
    }),
  );
};
