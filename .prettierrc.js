module.exports = {
    printWidth: 160,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    semi: true,
    arrowParens: 'always',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2
            }
        },
        {
            files: '*.yml',
            options: {
                tabWidth: 2
            }
        }
    ]
};
