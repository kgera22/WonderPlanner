/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    extends: 'dva',
    globals: { $: true },
    rules:   {
        // TODO: move to package config
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'arrow-parens':                                    [ 1, 'always' ],
        'key-spacing':                                     [ 1, { beforeColon: false, afterColon: true, align: 'value' }],
        'object-curly-newline':                            [
            1,
            {
                ObjectExpression:  { multiline: true },
                ObjectPattern:     { multiline: true },
                ImportDeclaration: { multiline: true },
                ExportDeclaration: { multiline: true },
            },
        ],
        'import/no-cycle':      0,
        'prefer-destructuring': 0,
        camelcase:              [ 1, { allow: [ '^unstable_', 'grant_type', 'access_token', 'refresh_token' ] }],
    },
};
