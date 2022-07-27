module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["./akveo-styleguide/typescript.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
