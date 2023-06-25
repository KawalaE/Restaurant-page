module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['bundle.js'],
  rules: {
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
  },
};
