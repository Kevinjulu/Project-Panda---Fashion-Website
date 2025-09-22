module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 'off',
    'prefer-const': 'error',
    'no-var': 'error',
  },
  overrides: [
    {
      files: ['server/**/*.js'],
      env: {
        node: true,
        browser: false,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['src/js/**/*.js'],
      env: {
        browser: true,
        node: false,
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};