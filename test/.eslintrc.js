module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
  },
};
