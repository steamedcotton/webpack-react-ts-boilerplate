const webpackConfig = require('./webpack.config.js');

module.exports = {
    root: true,
    plugins: ['@typescript-eslint', 'react', 'jest-dom', 'testing-library', 'jest', 'jsx-a11y', 'import', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        jest: true,
        es6: true,
        node: true
    },

    rules: {
        'react/sort-comp': [
            1,
            {
                order: ['static-methods', 'lifecycle', 'everything-else', 'render']
            }
        ],
        'comma-dangle': 'off',
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'no-unused-vars': 0,
        'no-confusing-arrow': 0,
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0, // Disabled to prefer use of Typescript<Props>
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'prettier/prettier': ['error', { singleQuote: true }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off'
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect'
        },
        'import/resolver': {
            webpack: {
                config: webpackConfig
            }
        }
    }
};
