/** @type { import('@storybook/react').Preview } */
import '../src/assets/styles/styles.scss'
import '../src/index.scss'
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
