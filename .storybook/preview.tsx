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
      exclude: ["data-testid", "className"]
    },
  },

  decorators: [
    (Story) => (
      <RoschTheme theme={defaultTheme}>
        <Story />
      </RoschTheme>
    ),
  ],

  tags: ["autodocs"]
};



export default preview;
