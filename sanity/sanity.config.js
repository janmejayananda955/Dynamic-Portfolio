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

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: [project, skill, experience, education, about, socialLink],
  },
});
