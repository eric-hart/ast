const presets = [
  ['@babel/preset-flow'],
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
];

const plugins = [
  ['babel-plugin-root-import'],
];

module.exports = { presets, plugins  };

