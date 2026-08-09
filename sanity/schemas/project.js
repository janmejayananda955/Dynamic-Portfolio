export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Java Full-Stack', value: 'Java Full-Stack & Spring Boot' },
          { title: 'Java Backend API', value: 'Java Backend & Spring REST' },
          { title: 'Full Stack Web App', value: 'Full Stack Web App' },
          { title: 'Mobile App', value: 'Mobile App' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'isBackend',
      title: 'Is Java Backend Project? (Architecture Visualizer)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'mainImage',
      title: 'Project Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'techStack',
      title: 'Tech Stack Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'featured',
      title: 'Featured Project (Display on Homepage)',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'liveUrl',
      title: 'Live Deployment / Demo Link',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'GitHub Repository Link',
      type: 'url',
    },
    {
      name: 'architectureHighlights',
      title: 'Architecture & System Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
