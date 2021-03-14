/* eslint-disable */
module.exports = {
  "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "react-native/react-native": true,
        
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "react-native",
        'prettier',

    ],
    "rules": {
        "strict":             [ 2, "safe" ],
        "no-debugger":        2,
        "brace-style": [
            2,
            "1tbs",
            { "allowSingleLine": true }
        ],        
        "no-trailing-spaces": 2,
        "keyword-spacing":    2,
        "space-before-function-paren": [
            2,
            "never"
        ],
        "spaced-comment":     [2, "always" ],
        "vars-on-top":        2,
        "no-undef":           2,
        "no-undefined":       2,
        "comma-dangle":       [ 2, "never" ],
        "quotes":             [ 2, "single" ],
        "semi":               [ 2, "always" ],        
        "guard-for-in":       2,
        "no-eval":            2,
        "no-with":            2,
        "valid-typeof":       2,
        "no-unused-vars":     2,
        "no-continue":        1,
        "no-extra-semi":      1,
        "no-unreachable":     1,
        "no-unused-expressions": 1,
        "no-magic-numbers":   1,
        "max-len":[1, 80, 4],
        "react/prefer-es6-class": 1,
    }
};
