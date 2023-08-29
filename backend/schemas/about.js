export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(20)
          .error('Title field must be between 5 and 20 characters long.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(100)
          .error('Description field must be between 5 and 100 characters long.'),
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('ImgUrl field is required.'),
    },
  ],
}
