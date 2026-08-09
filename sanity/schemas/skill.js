export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Backend', value: 'Backend' },
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Databases', value: 'Databases' },
          { title: 'Tools & DevOps', value: 'Tools' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'level',
      title: 'Proficiency Percentage (e.g. 85%)',
      type: 'string',
      initialValue: '80%',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};
