import { render } from "@testing-library/react";
import { RoschCell, RoschCellProps } from "./rosch-cell";

// Mocking the styled component
jest.mock("../../rosch-table-cell/rosch-table-cell.style", () => ({
  RoschTableCellStyled: jest.fn(({ children }) => <td>{children}</td>),
}));

describe("Unit test for TableCell Component", () => {
  test("should render content for a specific field (author)", () => {
    const mockRenderElement = jest.fn((author: { firstName: string; lastName: string }) => (
      <span>{`${author.firstName} ${author.lastName}`}</span>
    ));
    const props: RoschCellProps<{ firstName: string; lastName: string }> = {
      field: "author",
      renderElement: mockRenderElement,
      value: { firstName: "John", lastName: "Doe" },
    };

    const { getByText } = render(<RoschCell {...props} />);

    expect(getByText("John Doe")).toBeInTheDocument();
    expect(mockRenderElement).toHaveBeenCalledWith({ firstName: "John", lastName: "Doe" });
  });

  test("should render content for the whole row when the field is not present", () => {
    const mockRenderElement = jest.fn((rowData: { id: number; name: string }) => (
      <button>{`Delete ${rowData.id}`}</button>
    ));
    const props: RoschCellProps<{ id: number; name: string }> = {
      field: "actions", // Field not present in row data
      renderElement: mockRenderElement,
      value: { id: 1, name: "The Great Gatsby" },
    };

    const { getByText } = render(<RoschCell {...props} />);

    expect(getByText("Delete 1")).toBeInTheDocument();
    expect(mockRenderElement).toHaveBeenCalledWith({ id: 1, name: "The Great Gatsby" });
  });
});
