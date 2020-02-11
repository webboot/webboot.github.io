export const View = state => [
  footer({ class: 'Footer' }, [
    div({ class: 'Container' }, [
      div({ class: 'Menus' }, [
        div({ class: 'Child Info' }, [
          h2('@webboot'),
          p('trust on every step.'),
          p('created by the @webboot dao.'),
          Link({ to: '/privacy/', text: 'privacy notice' }),
        ]),
        div({ class: 'Child' }, [
          h2('sitemap'),
          ul([
            li(Link({ to: '/' }, 'index')),
            li(Link({ to: '/tofu/' }, 'tofu')),
            li(Link({ to: '/tosu/' }, 'tosu')),
            li(Link({ to: '/getting-started/' }, 'getting-started')),
            li(Link({ to: '/privacy/' }, 'privacy')),
            li(Link({ to: '/canary/' }, 'warrant canary')),
            li(Link({ to: '/support/' }, 'support')),
          ]),
        ]),
        div({ class: 'Child' }, [
          h2('social links'),
          ul([
            li(Link({ to: 'https://www.npmjs.com/org/webboot' }, 'npm')),
            li(Link({ to: 'https://twitter.com/webbootorg' }, 'twitter')),
            li(Link({ to: 'https://keybase.io/webboot' }, 'keybase')),
            li(Link({ to: 'https://github.com/webboot' }, 'github')),
            li(Link({ to: 'https://gitlab.com/webboot' }, 'gitlab')),
          ]),
        ]),
      ]),

      div({ class: 'Credits' }, [
        'made with a few bits of ',
        Link({ to: 'https://github.com/magic/core', target: '_blank', rel: 'noopener' }, 'magic'),
      ]),
    ]),
  ]),
]

export const style = vars => ({
  backgroundColor: vars.red,
  color: vars.darkText,
  display: 'inline-block',
  margin: '5% 0 0',
  padding: 0,
  width: '100%',

  h2: {
    margin: 0,
    color: vars.backgroundDark,
  },

  '.Menus, .Credits': {
    a: {
      color: vars.darkText,
      textDecoration: 'underline',

      '&:hover': {
        color: vars.grey,
      },
    },
  },

  '.Container': {
    margin: '0 auto',
    maxWidth: vars.maxWidth,
    textAlign: 'left',
    padding: '0 5%',
  },

  '.Menus': {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
  },

  '.Child': {
    textAlign: 'left',

    ul: {
      li: {
        float: 'none',
      },
    },
  },

  '.Credits': {
    margin: '2em 0 1em',
  },

  [`@media screen and (min-width: ${vars.widths.tablet}px)`]: {
    '.Child': {
      float: 'left',
      width: '30%',
      margin: '0 3% 0 0',
    },
  },
})
