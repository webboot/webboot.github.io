export const state = {
  title: '@webboot',
}

export const View = state => [
  Hero(state),

  div({ id: 'about' }, [
    h2('early bird <3'),
    p([
      'hello, you are here a bit early.',
      ' the first time we will be publishing information about @webboot is the 22. 02. 2020.',
      ' feel free to poke around,',
      ' but as long as this notice is here,',
      ' most documentation on this page will not be accurate (yet).',
    ]),

    h1('webboot?'),

    p([
      '@webboot aims to make ',
      Link({ to: 'https://en.wikipedia.org/wiki/Trust_on_first_use' }, 'tofu - trust on first use'),
      ' a bit less scary.',
    ]),

    p([
      'we (and you?) run a network of validator nodes,',
      ' providing a source of integrity to homepages and webapps.',
    ]),
  ]),

  div({ id: 'user' }, [
    h2('users of addressable content'),
    p('do you use a browser?'),
    p('install one of our browser extensions to add additional security to their browser now.'),

    h3('browser extensions'),

    Browsers(),
  ]),

  div({ id: 'publisher' }, [
    h2('publishers / developers of addressable content'),

    GitList({
      org: 'webboot',
      header: 'tools',
      desc: ['below is a collection of the available @webboot developer tools.'],
      items: [
        {
          name: 'cli',
          description: 'the @webboot command line interface.',
        },
        {
          name: 'webboot-magic-embed - unreleased',
          description: 'the @webboot command line interface.',
        },
        {
          name: 'gui - unreleased',
          description: 'the @webboot gui, exposing the cli features.',
        },
      ],
    }),
  ]),

  div({ id: 'validator' }, [
    h2('validators'),

    p('validators are nodes in the webboot network.'),
    p([
      '@webboot is undergoing testing and once we are confident about the deployment story,',
      'we will decentralize the network, allowing anyone to run a node.',
    ]),
  ]),
]
