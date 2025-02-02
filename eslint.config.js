import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    plugins: {
        react: require("eslint-plugin-react"),
        "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
        "react-hooks": require("eslint-plugin-react-hooks"),
        "simple-import-sort": require("eslint-plugin-simple-import-sort"),
    },
    rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
        1,
        { extensions: [".ts", ".tsx", ".js", ".jsx"] },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports":[
            "warn",
            {
                groups:[
                    ["^react", "^@?\\w"],
                    ["^@routes", "^@?\\w"],
                    ["^@storybook", "^@?\\w"],
                    ["^@stories", "^@?\\w"],
                    ["^@mui", "^@?\\w"],
                    ["^@pages", "^@?\\w"],
                    ["^@components", "^@?\\w"],
                    ["^@utils", "^@?\\w"],
                    ["^@theme", "^@?\\w"],
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                ]
            }
        ],
    },
    settings:{
        "import/resolver":{
            node:{
                path: ["."],
                moduleDirectory: ["node_modules", "src"],
                alias:{
                    "@components/*": "src/components/*",
                    "@pages/*": "src/pages/*",
                    "@routes/*": "src/routes/*",
                    "@stories/*": "src/stories/*",
                    "@theme/*": "src/theme/*",
                    "@utils/*": "src/utils/*",
                }
            }
        }
    },
    ignores: ["node_modules"],
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
  },
)
