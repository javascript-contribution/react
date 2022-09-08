module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
  core: {
    builder: "webpack5",
  },
};
