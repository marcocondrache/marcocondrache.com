export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 500],
  },
  ignores: [
    (commit) => commit.includes('[skip ci]')
  ]
}; 