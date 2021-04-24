module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-unsafe-optional-chaining': 'warn',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-mixed-spaces-and-tabs': 'off',
    semi: ['error', 'never'],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-indent': ['error', 'tab'],
    'react/jsx-indent-props': ['error', 'tab'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/button-has-type': 'off',
    'react/jsx-boolean-value': [0, { always: ['full'] }],
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  ignorePatterns: [
    '.next/', 'jest/', 'tests/', 'assets/', 'node_modules/', '*.config.js', '*.setup.js',
    '*.test.js',
  ],
}
