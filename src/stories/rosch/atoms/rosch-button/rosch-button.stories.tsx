import { Meta, StoryObj } from "@storybook/react";
import { RoschButton } from "../../../../lib/components/atoms/rosch-button/rosch-button";
import { RoschText } from "../../../../lib/components/atoms/rosch-text/rosch-text";

export default {
    title: "Rosch/Atoms/Rosch-Button",
    component: RoschButton,
} as Meta<typeof RoschButton>;

type Story = StoryObj<typeof RoschButton>;

export const DefaultButton: Story = {
    args: {
        onClick: () => alert("Click !")
    },
};

export const OutlinedButton: Story = {
    args: {
        label: "Outlined Button",
        outline: true,
    },
};

export const DisabledButton: Story = {
    args: {
        label: "Disabled Button",
        disabled: true,
    },
};

export const CustomChildren: Story = {
    args: {
        children: <RoschText id="text-button" isBold={true}>Custom children</RoschText>,
        colorVariant: "warning"
    },
};