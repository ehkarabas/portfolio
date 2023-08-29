export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(30)
          .error('Name field must be between 2 and 30 characters long.'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (Rule) => Rule.required().error('Email field is required.'),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(200)
          .error('Message field must be between 10 and 200 characters long.'),
    },
  ],
}
