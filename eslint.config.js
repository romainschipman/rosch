const parser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const reactRefresh = require("eslint-plugin-react-refresh");
const deprecation = require("eslint-plugin-deprecation");

module.exports = [
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: parser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react-refresh": reactRefresh,
      "deprecation": deprecation,
    },
    rules: {
      "deprecation/deprecation": "error", // Utilisation du plugin pour détecter les éléments dépréciés
      "react-refresh/only-export-components": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "object-curly-spacing": ["error", "always"],
      "indent": ["error", 2],
      "eqeqeq": "error",
      "no-cond-assign": ["error", "always"],
      "no-prototype-builtins": "off",
      "no-unused-vars": "off", // Let typescript rule do the job
      "sort-imports": [
        "error",
        {
          "ignoreCase": false,
          "ignoreDeclarationSort": true,
          "ignoreMemberSort": false,
          "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
          "allowSeparatedGroups": false
        }
      ],
      "@typescript-eslint/init-declarations": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "variable",
          "format": ["PascalCase", "camelCase", "UPPER_CASE"],
          "leadingUnderscore": "allowSingleOrDouble",
          "trailingUnderscore": "forbid"
        },
        {
          "selector": "function",
          "format": ["PascalCase", "camelCase"],
          "leadingUnderscore": "forbid",
          "trailingUnderscore": "forbid"
        },
        {
          "selector": "typeLike",
          "format": ["PascalCase"],
          "leadingUnderscore": "forbid",
          "trailingUnderscore": "forbid"
        },
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "custom": {
            "regex": "^I[A-Z]",
            "match": false
          }
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "error", {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/prefer-for-of": "error"
    }
  }
];
