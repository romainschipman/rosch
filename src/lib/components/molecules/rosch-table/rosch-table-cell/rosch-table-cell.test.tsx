import { render, screen } from "@testing-library/react";
import { RoschTableCell } from "./rosch-table-cell";
import { useTableContext } from "../context/table.context";
import { cloneElement } from "react";
import { RoschTable } from "../rosch-table";
import { ReactElement } from "react";
import { findChildrenElements } from "../helpers/find-children-elements/find-children-elements";

jest.mock("../context/table.context", () => ({
  useTableContext: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  cloneElement: jest.fn(),
}));

jest.mock("../helpers/find-children-elements/find-children-elements", () => ({
  findChildrenElements: jest.fn(),
}));

describe("RoschTableCell", () => {
  const mockCustomCell = (field: string): ReactElement => (
    <RoschTable.Cell renderElement={(value: string) => <div>{value}</div>} field={field} />
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders a custom cell when a matching custom cell is found", () => {
    const customCell = mockCustomCell("status");

    (useTableContext as jest.Mock).mockReturnValue({
      customCells: [customCell],
    });

    (findChildrenElements as jest.Mock).mockReturnValue([customCell]);

    render(<RoschTableCell name="status" value="Active" />);

    expect(cloneElement).toHaveBeenCalledWith(customCell, { value: "Active" });
  });

  test("renders the default cell when no matching custom cell is found", () => {
    (useTableContext as jest.Mock).mockReturnValue({
      customCells: [],
    });

    (findChildrenElements as jest.Mock).mockReturnValue([]);

    render(<RoschTableCell name="status" value="Active" />);

    const defaultCell = screen.getByText("Active");
    expect(defaultCell).toBeInTheDocument();
    expect(cloneElement).not.toHaveBeenCalled();
  });

  test("renders the default cell when custom cells exist but none match the field", () => {
    const customCell = mockCustomCell("otherField");

    (useTableContext as jest.Mock).mockReturnValue({
      customCells: [customCell],
    });

    (findChildrenElements as jest.Mock).mockReturnValue([]);

    render(<RoschTableCell name="status" value="Inactive" />);

    const defaultCell = screen.getByText("Inactive");
    expect(defaultCell).toBeInTheDocument();
    expect(cloneElement).not.toHaveBeenCalled();
  });
});
