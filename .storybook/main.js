module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/preset-typescript', '@storybook/preset-create-react-app', '@storybook/addon-storysource'],
    core: { builder: 'webpack5' },
}