module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/preset-typescript', '@storybook/preset-create-react-app'],
    core: { builder: 'webpack5' },
}