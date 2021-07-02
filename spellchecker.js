module.exports = {
  plugins: ["spellcheck"],
  rules: {
    "spellcheck/spell-checker": [
      "warn",
      {
        comments: false,
        ignoreRequire: true,
        skipWords: [
          'bg',
          'cx',
          'formatter',
          'idx',
          'num',
          'postfix',
          'svg',
        ],
      },
    ],
  },
};
