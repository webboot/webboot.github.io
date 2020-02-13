export const View = state =>
  div({ id: 'hero', class: 'Hero' }, [
    Booting(),
    p('automagically verify the integrity of homepages,'),
    p('before you load them.'),

    Menu({
      items: [
        { to: '/#publisher', text: 'publisher' },
        { to: '/#publisher', text: 'developer' },
        { to: '/#user', text: 'user' },
      ],
      state,
    }),
  ])

export const style = vars => ({
  backgroundColor: vars.text.dark,
  margin: '5vh auto',
  position: 'relative',
  maxWidth: 'inherit',
  width: '100%',

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    margin: '3em 0 0',

    a: {
      color: vars.primary.neutral,

      '&:hover': {
        color: vars.primary.dark,
      },
    },
  },

  p: {
    color: vars.neutral,
    fontSize: '1.1em',
    textAlign: 'center',
  },
})
