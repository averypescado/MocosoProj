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
          list: [
            { title: 'Reel', value: 'Reel' },
            { title: 'Short films / Cortometrajes', value: 'Short films / Cortometrajes' },
            { title: 'Music Videos / Videoclips', value: 'Music Videos / Videoclips' },
            { title: 'Ads / Comerciales', value: 'Ads / Comerciales' },      ]
      }},
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