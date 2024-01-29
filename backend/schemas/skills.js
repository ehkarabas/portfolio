export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(2).max(6).error('Name field must be between 2 and 6 characters long.'),
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
      // validation: (Rule) => Rule.required().error('BgColor field is required.'),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Icon field is required.'),
    },
  ],
}
