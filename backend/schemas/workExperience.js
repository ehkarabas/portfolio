export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(30)
          .error('Name field must be between 5 and 30 characters long.'),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) =>
        // Rule.required()
        Rule.min(2).max(20).error('Company field must be between 2 and 20 characters long.'),
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(140)
          .error('Desc field must be between 10 and 140 characters long.'),
    },
  ],
}
