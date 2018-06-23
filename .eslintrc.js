// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    "$": true,
    "jQuery": true
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/no-async-in-computed-properties": 2,	//disallow asynchronous actions in computed properties
    "vue/no-dupe-keys": 2,	//disallow duplication of field names
    "vue/no-duplicate-attributes": 2,	//disallow duplication of attributes
    "vue/no-parsing-error": 2,	//disallow parsing errors in <template>
    "vue/no-reserved-keys": 2,	//disallow overwriting reserved keys
    "vue/no-shared-component-data": 2,	//enforce component's data property to be a function
    "vue/no-side-effects-in-computed-properties": 2,	//disallow side effects in computed properties
    "vue/no-template-key": 2,	//disallow key attribute on <template>
    "vue/no-textarea-mustache": 2,	//disallow mustaches in <textarea>
    "vue/no-unused-vars": 2,	//disallow unused variable definitions of v-for directives or scope attributes
    "vue/require-component-is": 2,	//require v-bind:is of <component> elements
    "vue/require-render-return": 2,	//enforce render function to always return value
    "vue/require-v-for-key": 0,	//require v-bind:key with v-for directives
    "vue/require-valid-default-prop": 2,	//enforce props default values to be valid
    "vue/return-in-computed-property": 2,	//enforce that a return statement is present in computed property
    "vue/valid-template-root": 2,	//enforce valid template root
    "vue/valid-v-bind": 0,	//enforce valid v-bind directives
    "vue/valid-v-cloak": 2,	//enforce valid v-cloak directives
    "vue/valid-v-else-if": 2,	//enforce valid v-else-if directives
    "vue/valid-v-else": 2,	//enforce valid v-else directives
    "vue/valid-v-for": 2,	//enforce valid v-for directives
    "vue/valid-v-html": 2,	//enforce valid v-html directives
    "vue/valid-v-if": 2,	//enforce valid v-if directives
    "vue/valid-v-model": 2,	//enforce valid v-model directives
    "vue/valid-v-on": 2,	//enforce valid v-on directives
    "vue/valid-v-once": 2,	//enforce valid v-once directives
    "vue/valid-v-pre": 2,	//enforce valid v-pre directives
    "vue/valid-v-show": 2,	//enforce valid v-show directives
    "vue/valid-v-text": 2,	//enforce valid v-text directives
    "indent": [
        "error",
        2
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": 2,
    "no-unused-vars": ["error"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true }],
    "no-undef": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": 2,
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "rest-spread-spacing": 2,
    "semi-spacing": 2,
    "no-unneeded-ternary": 2,
    "eqeqeq": 2,
    "dot-location": 2,
    "no-extra-bind": 2,
    "keyword-spacing": 2,
    "key-spacing": 2,
    "func-call-spacing": 2,
    "array-bracket-spacing": 2,
    "block-spacing": 2,
    "brace-style": 2,
    "arrow-body-style": 2,
    "arrow-parens": 2,
    "arrow-spacing": 2,
    "jsx-quotes": ["error", "prefer-single"],
    "object-curly-spacing": 2,
    "no-console": 2,
    "no-duplicate-case": 2
  }
}
