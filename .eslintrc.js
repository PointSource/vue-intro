module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,


    "space-before-function-paren": 0,
    "no-tabs": 0,
    "indent": 0,
    "key-spacing": 0,
    "camelcase": 2,
    "dot-notation": [
      2,
      {
        "allowKeywords": true
      }
    ],
    "new-cap": 2,
    "no-caller": 2,
    "no-cond-assign": [
      2,
      "except-parens"
    ],
    "no-debugger": 2,
    "no-empty": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-new": 2,
    "no-proto": 2,
    "no-script-url": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-undef": 2,
    "no-unused-vars": 2,
    "no-with": 2,
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      1,
      "always"
    ],
    "strict": 2,
    "valid-typeof": 2,
    "wrap-iife": [
      2,
      "any"
    ]

  }
}
