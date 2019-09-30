module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential'
  ],
  // add your custom rules here
  plugins : [
    'vue'
  ],
  rules: {
  }
}
