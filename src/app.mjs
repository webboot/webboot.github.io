export const state = config => ({
  title: '@webboot documentation',
  description: 'solving the tofu problem, one boot at a time.',

  branding: ['@web', 'boot docs'],

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

  hero: {
    title: ['@web', 'boot'],
    description: 'trust on every step',
    content: ['automagically verify the integrity of homepages,', 'before you load them.'],

    menu: [
      { to: '/#publisher', text: 'publisher' },
      { to: '/#publisher', text: 'developer' },
      { to: '/#user', text: 'user' },
    ],
  },
  footer: {
    one: {
      title: '@webboot',
      before: ['trust on every step.', 'created by the @webboot dao.'],
      menu: [{ to: 'https://webboot.org/privacy/', text: 'privacy notice' }],
    },
    two: {
      title: 'sitemap',
      menu: [{ to: '/', text: 'index' }],
    },

    three: {
      title: 'social links',
      menu: [
        { to: 'https://www.npmjs.com/org/webboot', text: 'npm' },
        { to: 'https://twitter.com/webbootorg', text: 'twitter' },
        { to: 'https://keybase.io/webboot', text: 'keybase' },
        { to: 'https://github.com/webboot', text: 'github' },
        { to: 'https://gitlab.com/webboot', text: 'gitlab' },
      ],
    },
  },
})
