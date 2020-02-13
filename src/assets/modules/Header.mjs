export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, ...state } = props

  return header(
    { class: 'Header' },
    div([
      Link({ to: state.root, class: 'Logo' }, [
        Boot(),
        div({ class: 'branding' }, [span('@web'), 'boot docs']),
      ]),
      menu && Menu({ state, items: menu }),
    ]),
  )
}

export const style = vars => ({
  '.Boot': {
    backgroundColor: vars.text.dark,
    borderRadius: '100%',
    display: 'inline-block',
    float: 'left',
    height: '2.4em',
    padding: '.3em .3em 0 .5em',
    transition: `background-color ${vars.fadeDuration}`,

    '.light &&': {
      backgroundColor: vars.text.light,
    },
  },

  '.branding': {
    float: 'left',
    fontSize: '1.5em',
    lineHeight: '1',
    margin: '0.2em 0 0 0.2em',

    span: {
      color: vars.primary.neutral,
      fontSize: '1em',
      margin: '0',
    },
  },
})

export const propTypes = {
  Header: [{ key: 'menu', type: 'array' }],
}
