export default {
  name: 'socialLink',
  title: 'Social Links',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform Name (e.g. GitHub, LinkedIn, Twitter, Email)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      title: 'Profile / Target URL',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'handle',
      title: 'Username / Handle text',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};
