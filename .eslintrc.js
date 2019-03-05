module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jquery: true,
  },
  globals: {
    $: true,
    jquery: true,
    emojione: true,
    hljs: true,
    window: true,
  },
  plugins: ['react', 'prettier'],
  rules: {
    // "brace-style": [
    //   "error",
    //   "stroustrup", { "allowSingleLine": true }
    // ],
    // "comma-spacing": [
    //   "error",
    //   { "before": false, "after": true }
    // ],
    // "func-call-spacing": [
    //   "error",
    //   "never"
    // ],
    // "indent": [
    //   "error",
    //   2,
    //   {
    //     "SwitchCase": 1,
    //     "ignoredNodes": ['JSXElement *', 'JSXElement', "JSXAttribute", "JSXSpreadAttribute"],
    //     "FunctionDeclaration": {"body": 1, "parameters": 2},
    //     "FunctionExpression": {"body": 1, "parameters": 2},
    //     "MemberExpression": "off"
    //   }
    // ],
    // "key-spacing": [
    //   "error", {
    //     "beforeColon": false,
    //     "afterColon": true,
    //     "mode": "minimum"
    //   }
    // ],
    // "keyword-spacing": [
    //   "error", {}
    // ],
    // "linebreak-style": [
    //   "error",
    //   "unix"
    // ],
    // "no-unused-vars": [
    //   "error",
    //   { "args": "none" }
    // ],
    // "no-var": [ "error" ],
    // "quotes": [
    //   "error",
    //   "single"
    // ],
    // "react/jsx-uses-vars": 1,
    // "react/no-string-refs": "off",
    // "semi": [
    //   "error",
    //   "always",
    //   { "omitLastInOneLineBlock": true }
    // ],
    // "space-before-blocks": [
    //   "error",
    //   "always"
    // ],
    // "space-before-function-paren": [
    //   "error",
    //   "never"
    // ]
  },
};
