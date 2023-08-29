export default {
  name: 'worksTop',
  title: 'Works Top',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(30)
          .error('Title field must be between 5 and 30 characters long.'),
    },

    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'workCategory'}],
      validation: (Rule) => Rule.required().error('Category field is required.'),
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(140)
          .error('Description field must be between 10 and 140 characters long.'),
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
      validation: (Rule) => Rule.required().error('Project Link field is required.'),
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'url',
      validation: (Rule) => Rule.required().error('Code Link field is required.'),
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('ImageUrl field is required.'),
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required().error('Tags field is required.'),
    },
  ],
}
