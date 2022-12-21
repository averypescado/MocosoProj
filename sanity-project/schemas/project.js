export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'link',
        type: 'string',
        title: 'Link'
      },
      {
        name: 'year',
        type: 'string',
        title: 'Year'
      },
      {
        name: 'anchor',
        type: 'string',
        title: 'Anchor'
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: ['Short films / Cortometrajes', 'Music Videos / Videoclips']
        }
      },
      {
        name: 'bgcolor',
        type: 'string',
        title: 'Bgcolor'
      },
      {
        name: 'order',
        type: 'number',
        title: 'Order'
      },
    ]
  }