// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';
 
import '/src/global.scss';

const preview: Preview = {
  parameters: {},
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

/*const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};*/

export default preview;
