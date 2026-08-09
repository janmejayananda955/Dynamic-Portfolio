export default {
  name: 'experience',
  title: 'Work Experience & Positions',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Job Role / Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'organization',
      title: 'Company / Organization',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'period',
      title: 'Time Period (e.g. 2024 - Present)',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'achievements',
      title: 'Key Responsibilities / Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};
