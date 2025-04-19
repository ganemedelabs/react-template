// See https://eslint.org/docs/latest/use/configure/configuration-files for more about configuration files.

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
// @ts-ignore
import _import from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import { Linter } from "eslint";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const config = [
    {
        ignores: ["node_modules", "dist", "vite.config.ts", "eslint.config.mts", "public/service-worker.js"],
    },
    ...fixupConfigRules(
        compat.extends(
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:import/errors",
            "plugin:jsx-a11y/recommended",
            "plugin:prettier/recommended"
        )
    ),
    {
        plugins: {
            react: fixupPluginRules(react),
            "jsx-a11y": fixupPluginRules(jsxA11Y),
            "@typescript-eslint": fixupPluginRules(typescriptEslint as unknown as Linter),
            import: fixupPluginRules(_import),
            prettier: fixupPluginRules(prettier),
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: "./tsconfig.json",
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            indent: ["warn", 4],
            quotes: ["warn", "double"],
            "react/prop-types": "off",
            "react/jsx-uses-vars": "warn",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
            "no-unused-vars": "warn",
            "no-console": "off",
            "react/jsx-filename-extension": "off",
            "react/jsx-no-bind": "off",
            "jsx-a11y/no-autofocus": "off",
            "import/no-extraneous-dependencies": "off",
            "prettier/prettier": ["error", { endOfLine: "auto" }],
        },
    },
] satisfies Linter.Config[];

export default config;
