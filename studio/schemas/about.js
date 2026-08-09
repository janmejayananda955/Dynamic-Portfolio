export default {
  name: 'about',
  title: 'About Me & Hero Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Headline / Subtitle',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Professional Bio',
      type: 'text',
      rows: 5,
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'cgpa',
      title: 'MCA CGPA',
      type: 'string',
    },
    {
      name: 'degree',
      title: 'Current Degree',
      type: 'string',
    },
    {
      name: 'availableForWork',
      title: 'Available for Freelance / Jobs',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'resumeUrl',
      title: 'Resume PDF Link',
      type: 'string',
    },
  ],
};
