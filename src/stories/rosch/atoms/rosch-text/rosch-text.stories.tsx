import { Meta, StoryObj } from "@storybook/react";
import { RoschText } from "../../../../lib/components/atoms/rosch-text/rosch-text";

export default {
  title: "Rosch/Atoms/Rosch-Text",
  component: RoschText,
} as Meta<typeof RoschText>;

type Story = StoryObj<typeof RoschText>;

export const DefaultText: Story = {
  args: {
    children: "You're text here ..."
  },
};

export const SmallTextBold: Story = {
  args: {
    fontSize: "xs",
    bold: true,
    children: "Small Text Bold"
  },
};

export const LargeTextUppercase: Story = {
  args: {
    fontSize: "xxl",
    uppercase: true,
    children: "Large Text Uppercase"
  },
};