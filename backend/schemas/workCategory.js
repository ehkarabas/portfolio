export default {
  name: 'workCategory',
  title: 'Work Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(15)
          .error('Name field must be between 2 and 15 characters long.'),
    },
  ],
}
