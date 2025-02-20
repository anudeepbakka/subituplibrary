/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  refs: {
       "design-system": {
         title: 'My design system',
         //👇 The url provided by Chromatic when it was deployed
         url: 'https://679a25924a11ac6d7a41df41-mjidehhbtn.chromatic.com/',
       },
     },
  staticDirs: ["..\\public"],
};
export default config;
