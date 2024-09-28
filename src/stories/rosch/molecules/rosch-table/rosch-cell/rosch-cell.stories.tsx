import { Meta, StoryObj } from "@storybook/react";
import { RoschCell } from "../../../../../lib";

export default {
    title: "Rosch/Molecules/Table/Rosch-Table.Cell",
    component: RoschCell,
} as Meta<typeof RoschCell>;

type Story = StoryObj<typeof RoschCell>;

export const DefaultCell: Story = {
    args: {
        renderElement: () => <div>hello</div>,
        field: ""
    },
};