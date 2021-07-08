module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
};
