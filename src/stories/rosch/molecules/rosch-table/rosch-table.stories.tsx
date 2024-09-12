import { Meta, StoryObj } from "@storybook/react";
import { RoschTable } from "../../../../lib/components/molecules/rosch-table/rosch-table";
import { RoschText } from "../../../../lib";

export default {
  title: "Rosch/Molecules/Table/Rosch-Table",
  component: RoschTable,
} as Meta<typeof RoschTable>;

type Story = StoryObj<typeof RoschTable>;

export const DefaultTable: Story = {
  args: {
    data: [{ id: 1, name: "John Doe", isActive: true }, { id: 2, name: "Jane Doe", isActive: false }],
    columnsOrder: ["id", "name", "isActive"],
    enableColumnOrder: true,
    children: [
      <RoschTable.Header columnNames={{ id : "Id", name: "Name", isActive: "Status" }} />,
      <RoschTable.Cell <boolean> field="isActive" renderElement={(isActive) => (
        <RoschText id="text-active" fontSize="sm">{isActive ? "Actif" : "Inactif"}</RoschText>
      )} />
    ]
  },
};