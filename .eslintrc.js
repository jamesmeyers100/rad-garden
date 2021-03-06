module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'consistent-return': 2,
    'no-else-return': 1,
    semi: [2, 'always'],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
