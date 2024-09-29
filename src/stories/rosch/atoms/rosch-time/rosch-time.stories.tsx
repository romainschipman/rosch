import { Meta, StoryObj } from "@storybook/react";
import { RoschTime } from "../../../../lib";

export default {
    title: "Rosch/Atoms/Rosch-Time",
    component: RoschTime,
} as Meta<typeof RoschTime>;

type Story = StoryObj<typeof RoschTime>;

let time = new Date();
time.setHours(19, 30, 12);
export const DefaultTime: Story = {
    args: {
        time
    },
};
