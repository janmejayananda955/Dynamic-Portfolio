export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'degree',
      title: 'Degree / Certificate Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'institution',
      title: 'College / University / School',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'period',
      title: 'Years / Duration (e.g. 2024 – 2026)',
      type: 'string',
    },
    {
      name: 'score',
      title: 'Score / CGPA / Percentage',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Specialization / Highlights',
      type: 'text',
      rows: 2,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};
