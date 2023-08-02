module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['src'], // Add your root directory here
      },
    ],
  ],
}
