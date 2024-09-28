import { Meta, StoryObj } from "@storybook/react";
import { RoschInput } from "../../../../lib/components/atoms/rosch-input/rosch-input";

export default {
    title: "Rosch/Atoms/Rosch-Input",
    component: RoschInput,
} as Meta<typeof RoschInput>;

type Story = StoryObj<typeof RoschInput>;

export const DefaultInput: Story = {
    args: {
        label: "username",
        placeholder: "John Doe",
        maxWidth: "20rem"
    },
};

export const InputPassword: Story = {
    args: {
        label: "password",
        type: "password",
        maxWidth: "20rem"
    },
};
