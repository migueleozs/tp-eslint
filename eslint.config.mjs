import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
{
 files: ["**/*.{js,mjs,cjs}"],
 plugins: { js },
 languageOptions: {
 globals: {
 ...globals.browser,
 ...globals.node
 }
 },
 rules: {
 "eqeqeq": ["error", "always"],
 "curly": ["error", "all"],
 "space-before-function-paren": ["error", "never"],
 "comma-dangle": ["error", "never"],
 "object-curly-spacing": ["error", "always"],
 "array-bracket-spacing": ["error", "never"]
 }
}
,
js.configs.recommended
]);