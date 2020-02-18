export const state = {
  title: '@webboot - getting started',
}

export const View = state =>
  div([
    h2('getting started'),

    p([
      'we are still working on the tools described below,',
      ' our semi-public alpha will start soon.',
    ]),

    h3(['cli', i(' - coming soon')]),

    p('first, install webboot.'),
    Pre('npm install -g webboot'),

    p('then, go to the directory with your public page and run'),
    Pre('webboot'),
    p('webboot will guide you through the process.'),

    h3(['browser extensions', i(' - coming soon')]),

    p([
      'the webboot browser extension for both firefox and chrome',
      ' has been uploaded to the respective app stores.',
    ]),
    p('to install them, just click the icons below.'),
    p('TODO: add links once they exist.'),

    h3('app widget / embeds'),
    p('the webboot app widget allows you to embed the webboot gui into your page.'),
    p('this allows you to show the webboot gui to every one of your users.'),
    p('see below for available integrations:'),
    ul([
      li([
        h4([Link({ to: 'https://magic.github.io', text: '@magic' }), i(' - coming soon')]),
        p([
          '@magic is a static page generator that generates about 15kb of html + css + js boilerplate.',
        ]),
        p(['made by the people that made @webboot.']),
      ]),
      li([
        h4([Link({ to: 'https://www.gatsbyjs.org/', text: 'gatsby' }), i(' - coming soon')]),
        p([
          'gatsby is a free and open source framework based on react',
          ' and helps developers build blazing fast websites and apps.',
        ]),
      ]),
    ]),

    h3(['db', i(' - coming soon')]),
    p('the webboot validator servers will provide a publicly queryable database of hashes.'),
    p('those hashes will be published and mirrored to three locations:'),
    p(Link({ to: 'https://github.com/webboot/db', text: 'github backup' })),
    p(Link({ to: 'https://gitlab.com/webboot/db', text: 'gitlab backup' })),
    p(Link({ to: 'https://api.webboot.org/', text: 'api.webboot.org' })),

    p([
      'all apps will query two of those three sources for hashes everytime they check,',
      ' making it very hard for any attacker to take over the system.',
    ]),

    h3(['smart contracts', i(' - release: summer 2020')]),
    p([
      'we are exploring smart contract based solution to decentralize both',
      ' the hash verification as well as the storage of the database.',
      ' this will add an additional layer providing',
      ' data persistance, integrity guarantees and network stability.',
    ]),
    p([
      'once the smart contracts are in place, the ',
      Link({ to: 'https://en.wikipedia.org/wiki/Bus_factor', text: 'hit by a bus problem' }),
      ' will not be part of the equation anymore,',
      ' making our team irrelevant to the wellbeing of the network.',
    ]),

    h3(['gui', i(' - mid/late 2020.')]),

    p('first, install the cli:'),
    Pre('npm install -g webboot'),

    p('then, run the gui:'),
    Pre('webboot ui'),
    p('go to the url the cli tells you (probably http://localhost:5235) and start adding pages.'),

    h3({ id: 'packages' }, 'packages'),
    ul([
      li([
        h4(Link({ to: 'https://github.com/webboot/core' }, '@webboot/core')),
        p('the core library functionality of @webboot. used both in clients and on the server.'),
        p(Link({ to: 'https://webboot.github.io/core' }, 'docs')),
      ]),

      li([
        h4(Link({ to: 'https://github.com/webboot/cli' }, '@webboot/cli')),
        p('command line interface exposing the @webboot functionality to bash'),
        p(Link({ to: 'https://webboot.github.io/cli' }, 'docs')),
      ]),

      li([
        h4(Link({ to: 'https://github.com/webboot/crypto' }, '@webboot/crypto')),
        p([
          'all cryptographic functionality of @webboot,',
          ' split into a separate repository to make testing and auditing easier.',
        ]),
        p(Link({ to: 'https://webboot.github.io/crypto' }, 'docs')),
      ]),

      li([
        h4(Link({ to: 'https://github.com/webboot/keys' }, '@webboot/keys')),
        p('the @webboot pgp public key and fingerprint.'),
        p(Link({ to: 'https://webboot.github.io/keys' }, 'keys')),
      ]),
    ]),
  ])
