import { Meta, StoryObj } from "@storybook/react";
import { RoschTableHeader } from "../../../../../lib";

export default {
    title: "Rosch/Molecules/Table/Rosch-Table.Header",
    component: RoschTableHeader,
} as Meta<typeof RoschTableHeader>;

type Story = StoryObj<typeof RoschTableHeader>;

export const DefaultCell: Story = {
    args: {

    },
};