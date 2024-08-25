import React from 'react';
import type { Preview } from "@storybook/react";
import { RoschTheme } from "../src/lib/components/rosch-theme/rosch-theme";
import { defaultTheme } from "../src/lib/theme/default/default-theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RoschTheme theme={defaultTheme}>
        <Story />
      </RoschTheme>
    ),
  ],
};



export default preview;
