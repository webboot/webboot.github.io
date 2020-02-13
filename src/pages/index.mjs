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

    p([
      'the webboot browser extension ',
      ' has been uploaded to the respective app stores.',
    ]),
    p('to install them, just click the icons below.'),

    Browsers(),
  ]),

  div({ id: 'publisher' }, [
    h2('publishers / developers.'),

    p('publishers / developers of addressable content can use the command line interface for now.'),
    p('we are working on a graphical user interface to accompany the cli.'),
    p('in addition, we are working on integrations for various static page generators like magic, gatsby and vuepress.'),

    h3(['cli', i(' - release: 22. 2. 2020')]),

    p('first, install webboot.'),
    Pre('npm install -g webboot'),

    p('then, go to the directory with your public page and run'),
    Pre('webboot'),
    p('webboot will guide you through the process.'),

    h3('app widgets', i(' - release time: soon')),

    p('the webboot app widget allows you to embed the webboot gui into your page.'),
    p([
      'this allows you to show the webboot gui to every one of your users,',
      ' even those that did not yet install any of the browser extensions.'
    ]),

    p('see below for available integrations:'),

    ul([
      li([
        h4([Link({ to: 'https://magic.github.io', text: '@magic' }), i(' - release: 22. 2. 2020')]),
        p([
          '@magic is a static page generator that generates',
          ' about 10kb of uncompressed html + css + js boilerplate.',
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
