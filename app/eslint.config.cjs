const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const parser = require("vue-eslint-parser");
const vue = require("eslint-plugin-vue");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: parser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".vue"],
        },
    },

    extends: compat.extends(
        "plugin:vue/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ),

    plugins: {
        vue,
        "@typescript-eslint": typescriptEslint,
    },

    rules: {
        "no-unused-vars": "off",

        "@typescript-eslint/no-unused-vars": ["warn", {
            argsIgnorePattern: "^_",
        }],

        "vue/multi-word-component-names": "off",
    },

    settings: {},
}, globalIgnores([
    "**/node_modules",
    "**/dist",
    "**/.vite",
    "**/public",
    "**/coverage",
    "**/*.min.js",
    "eslint.config.cjs",
])]);
