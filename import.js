module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'simple-import-sort',
    'import',
  ],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports
          ['^\\u0000'],
          // Packages. 'react' related packages come first.
          ['^(react)$', '^@?\\w'],
          // Relative imports. Put same-folder imports first and parent imports last.
          [
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
          ],
          // Style imports.
          ['^.+\\.css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
