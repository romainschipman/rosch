import { render } from "@testing-library/react";
import { RoschTableHeader } from "./rosch-header";
import { useTableContext } from "../../context/table.context";

// Mocking RoschText and TableHeaderStyled
jest.mock("../../../../atoms/rosch-text/rosch-text", () => ({
  RoschText: jest.fn(({ children }) => <span>{children}</span>),
}));

jest.mock("./rosch-header.style", () => ({
  TableHeaderStyled: jest.fn(({ children }) => <thead>{children}</thead>),
}));

jest.mock("@hello-pangea/dnd", () => ({
  Draggable: jest.fn(({ children }) => children({
    draggableProps: {},
    dragHandleProps: {},
    innerRef: jest.fn(),
  })),
}));

// Mocking useTableContext
jest.mock("../../context/table.context", () => ({
  useTableContext: jest.fn(),
}));

describe("Unit test for TableHeader", () => {
  const columnNames = {
    id: "ID",
    name: "Name",
    author: "Author",
    isActive: "Status",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render table headers based on columnsOrder from context", () => {
    (useTableContext as jest.Mock).mockReturnValue({
      columnsOrder: ["id", "name", "author", "isActive", "actions"],
      enableColumnOrder: false,
    });

    const { getByText } = render(<RoschTableHeader columnNames={columnNames} />);

    expect(getByText("ID")).toBeInTheDocument();
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Author")).toBeInTheDocument();
    expect(getByText("Status")).toBeInTheDocument();
    expect(getByText("actions")).toBeInTheDocument();
  });

  test("should render table headers using column keys if columnsOrder is not provided", () => {
    (useTableContext as jest.Mock).mockReturnValue({
      columnsOrder: [],
      enableColumnOrder: false,
    });

    const { getByText } = render(<RoschTableHeader columnNames={columnNames} />);

    expect(getByText("ID")).toBeInTheDocument();
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Author")).toBeInTheDocument();
    expect(getByText("Status")).toBeInTheDocument();
  });


  test("should disable dragging when enableColumnOrder is false", () => {
    (useTableContext as jest.Mock).mockReturnValue({
      columnsOrder: ["id", "name", "author", "isActive"],
      enableColumnOrder: false,
    });

    const { container } = render(<RoschTableHeader columnNames={columnNames} />);

    const draggableItems = container.querySelectorAll("th");
    draggableItems.forEach((item : any) => {
      expect(item).not.toHaveAttribute("draggable");
    });
  });
});
