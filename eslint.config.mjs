import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    ignores: ["**/node_modules/", "/dist"],
    rules: {
      "no-unused-vars": "error",
      "no-undef":"error",
      "no-console":"warn",
      "prefer-const":"error"
  },
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];