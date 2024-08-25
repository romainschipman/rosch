import type { Meta, StoryObj } from "@storybook/react";
import { RoschText } from "../../../../lib/components/atoms/rosch-text/rosch-text";

const meta = {
  title: "Rosch/Atoms/Rosch-Text",
  component: RoschText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
  args: {  },
} satisfies Meta<typeof RoschText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "text",
    children: "Hello World"
  },
};
