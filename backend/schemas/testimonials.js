export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(30)
          .error('Name field must be between 10 and 30 characters long.'),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(20)
          .error('Company field must be between 5 and 20 characters long.'),
    },
    {
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true, // hotspot true ise crop ve h/w ratio editoru belirir
      },
      validation: (Rule) => Rule.required().error('ImgURL field is required.'),
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(200)
          .error('Feedback field must be between 10 and 200 characters long.'),
    },
  ],
}
