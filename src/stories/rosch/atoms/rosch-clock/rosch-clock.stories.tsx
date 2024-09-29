import { RoschClock } from "../../../../lib";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Rosch/Atoms/Rosch-Clock",
    component: RoschClock,
} as Meta<typeof RoschClock>;

type Story = StoryObj<typeof RoschClock>;

export const DefaultClock: Story = {
    args: {
    },
};
