export const state = config => ({
  title: '@webboot documentation',
  description: 'solving the tofu problem, one boot at a time.',
  seo: {
    name: '@webboot',
    url: `https://${config.URL}`,
    about: 'solving the tofu problem, one boot at a time.',
    image: `https://${config.URL}${config.WEB_ROOT}webboot-preview.png`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },
  menu: [
    { to: '/#user', text: 'user' },
    { to: '/#publisher', text: 'developer' },
    { to: '/#publisher', text: 'publisher' },
  ],
})
