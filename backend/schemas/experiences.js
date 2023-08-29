export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .error('Year field is required.')
          .custom(
            (date) =>
              new Date(date).getFullYear() >= 2000 ||
              'Year must be an integer that is equal or greater than 2000.'
          ),
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{type: 'workExperience'}],
      validation: (Rule) => Rule.required().error('Works field is required.'),
    },
  ],
}
