import { RoschDate } from "../../../../lib";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Rosch/Atoms/Rosch-Date",
    component: RoschDate,
} as Meta<typeof RoschDate>;

type Story = StoryObj<typeof RoschDate>;

export const DefaultDate: Story = {
    args: {
    },
};
