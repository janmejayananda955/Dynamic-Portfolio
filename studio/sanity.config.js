import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import project from './schemas/project';
import skill from './schemas/skill';
import experience from './schemas/experience';
import education from './schemas/education';
import about from './schemas/about';
import socialLink from './schemas/socialLink';

export default defineConfig({
  name: 'dynamic-portfolio-studio',
  title: 'Janmejaya Portfolio Content Studio',

  projectId: '0yf5d90w',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: [project, skill, experience, education, about, socialLink],
  },
});
