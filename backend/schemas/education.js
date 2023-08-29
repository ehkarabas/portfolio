export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(30)
          .error('School field must be between 10 and 30 characters long.'),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) =>
        Rule.required()
          .error('startDate field is required.')
          .custom(
            (date) =>
              new Date(date).getFullYear() >= 1995 ||
              'Start date must be an integer that is equal or greater than 1995.'
          ),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (Rule) =>
        Rule.custom(
          (date) =>
            new Date(date).getFullYear() >= 1995 ||
            'End date must be an integer that is equal or greater than 1995.'
        ),
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
    },
    {
      name: 'grade',
      title: 'Grade',
      type: 'number',
      validation: (Rule) =>
        Rule.optional()
          .min(0)
          .max(100)
          .precision(2)
          .error('Grade must be a number between 0 and 100 with up to 2 decimal places.'),
    },
  ],
}
