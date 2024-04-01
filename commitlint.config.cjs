module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [2, 'always'],
        'header-max-length': [2, 'always', 50],
        'body-max-length': [2, 'always', 100],
        'scope-enum': [2, 'always', [
            'shared-utils',
            'shared-ui',
            'medium',
            'medium-e2e',
            'theme',
            'readme',
            'spartan'
        ]]
    }
}