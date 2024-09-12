import { render, screen } from "@testing-library/react";
import { RoschTableRow } from "./rosch-table-row";
import { useTableContext } from "../context/table.context";
import { RoschTableCell } from "../rosch-table-cell/rosch-table-cell";

jest.mock("../context/table.context", () => ({
  useTableContext: jest.fn(),
}));

jest.mock("../rosch-table-cell/rosch-table-cell", () => ({
  RoschTableCell: jest.fn(() => <td>Mocked TableCell</td>),
}));

describe("RoschTableRow", () => {
  const mockRowData = {
    name: "John Doe",
    age: 30,
    status: "Active",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders row with the correct number of columns based on context", () => {
    // Mock `useTableContext` to return specific column order
    (useTableContext as jest.Mock).mockReturnValue({
      columnsOrder: ["name", "age", "status"],
    });

    render(<RoschTableRow row={mockRowData} />);

    // Expect RoschTableCell to be rendered for each column in `columnsOrder`
    const cells = screen.getAllByText("Mocked TableCell");
    expect(cells).toHaveLength(3);
  });

  test("renders row with correct values passed to each RoschTableCell", () => {
    const columnsOrder = ["name", "age", "status"];

    (useTableContext as jest.Mock).mockReturnValue({
      columnsOrder,
    });

    render(<RoschTableRow row={mockRowData} />);

    // Ensure that RoschTableCell is called with correct `name` and `value` props
    columnsOrder.forEach((column, index) => {
      expect(RoschTableCell).toHaveBeenNthCalledWith(
        index + 1,
        {
          name: column,
          value: (mockRowData as any)[column],
        },
        {}
      );
    });
  });

  test("renders row with fallback value when column value is missing", () => {
    const columnsOrder = ["name", "age", "status", "nonexistentColumn"];

    (useTableContext as jest.Mock).mockReturnValue({
      columnsOrder,
    });

    render(<RoschTableRow row={mockRowData} />);

    // Ensure RoschTableCell is called with the row object for missing columns
    expect(RoschTableCell).toHaveBeenCalledWith(
      {
        name: "nonexistentColumn",
        value: mockRowData, // Pass the entire row as a fallback
      },
      {}
    );
  });
});
