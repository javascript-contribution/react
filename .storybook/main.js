module.exports = {
  stories: [
    '../src/**/*.stories.(ts|tsx|js|jsx)',
    '../src/**/*.stories.mdx',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/preset-create-react-app',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
};
