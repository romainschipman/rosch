import { render, screen } from "@testing-library/react";
import { RoschTable } from "./rosch-table";
import { updateColumnsOnDrag } from "./helpers/update-columns-on-drag/update-columns-on-drag";
import { RowData } from "./rosch-table-row/rosch-table-row";
import { errorMessages } from "../../../constants/errors-messages/errors-messages";
import { warningMessages } from "../../../constants/warnings-messages/warnings-messages";

const dragResult = {
  destination: { index: 1 },
  source: { index: 2 },
  draggableId: "draggable-1",
  type: "DEFAULT"
};

// Mock the `@hello-pangea/dnd` module
jest.mock("@hello-pangea/dnd", () => ({
  DragDropContext: ({ children, onDragEnd }: { children: React.ReactNode, onDragEnd: any }) => (
    <>
      <div>{children}</div>
      <div data-testid="simulate-drag-n-drop" onClick={() => onDragEnd(dragResult)}></div>
    </>
  ),
  Droppable: ({ children }: any) => <div>{children({ innerRef: jest.fn(), droppableProps: {} })}</div>,
  Draggable: ({ children, draggableId }: any) => <div data-testid={draggableId}>{children({ draggableProps: {}, innerRef: jest.fn(), dragHandleProps: {} })}</div>,
}));

// Mock data with IDs
const mockData: RowData[] = [
  { id: 1, name: "John Doe", isActive: true },
  { id: 2, name: "Jane Doe", isActive: false }
];

const mockColumnsOrder = ["id", "name", "isActive"];

// Spy on updateColumnsOnDrag
jest.mock("./helpers/update-columns-on-drag/update-columns-on-drag");

describe("RoschTable component", () => {
  afterEach(() => {
    jest.clearAllMocks();  // Clear mocks after each test
  });

  test("should render the table without error if columns empty", () => {
    const tree = render(
      <RoschTable id="1" data={mockData}>
        <RoschTable.Header columnNames={{ id: "ID", name: "Name", isActive: "Status" }} />
        <RoschTable.Cell <string> field="name" renderElement={(name) => <span>{name}</span>} />
      </RoschTable>
    );

    expect(tree).toBeTruthy();
  });

  test("should render the table with data", () => {
    render(
      <RoschTable id="1" data={mockData} columnsOrder={mockColumnsOrder}>
        <RoschTable.Header columnNames={{ id: "ID", name: "Name", isActive: "Status" }} />
        <RoschTable.Cell <string> field="name" renderElement={(name) => <span>{name}</span>} />
      </RoschTable>
    );

    // Verify that table data is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  test("should display a warning when no header is provided", () => {
    const consoleWarnMock = jest.spyOn(console, "warn").mockImplementation();

    render(<RoschTable id="1" data={mockData} columnsOrder={mockColumnsOrder} />);

    expect(consoleWarnMock).toHaveBeenCalledWith(warningMessages.ROSCH_TABLE_MISSING_HEADER_WARNING);
    
    consoleWarnMock.mockRestore();
  });

  test("should throw an error when multiple headers are provided", () => {

    expect(() => {
      render(
        <RoschTable id="1" data={mockData} columnsOrder={mockColumnsOrder}>
          <RoschTable.Header columnNames={{ id: "ID" }} />
          <RoschTable.Header columnNames={{ name: "Name" }} />
        </RoschTable>
      );
    }).toThrow(errorMessages.ROSCH_TABLE_MULTIPLE_HEADERS_ERROR);

  });

  test("should handle drag and drop correctly", () => {
    const mockUpdateColumnsOnDrag = jest.fn().mockReturnValue(["id", "isActive", "name"]);
    (updateColumnsOnDrag as jest.Mock).mockImplementation(mockUpdateColumnsOnDrag);
  
    const { getByTestId } = render(
      <RoschTable id="1" data={mockData} columnsOrder={mockColumnsOrder} enableColumnOrder={true}>
        <RoschTable.Header columnNames={{ id: "ID", name: "Name", isActive: "Status" }} />
        <RoschTable.Cell <string> field="name" renderElement={(name) => <span>{name}</span>} />
      </RoschTable>
    );
  
    const dragEndButton = getByTestId("simulate-drag-n-drop");

    dragEndButton.click();
  
    expect(mockUpdateColumnsOnDrag).toHaveBeenCalledWith(dragResult, mockColumnsOrder);
  });

  test("should not reorder columns if enableColumnOrder is false", () => {
    const mockUpdateColumnsOnDrag = jest.fn();
    (updateColumnsOnDrag as jest.Mock).mockImplementation(mockUpdateColumnsOnDrag);

    const { getByTestId } = render(
      <RoschTable id="1" data={mockData} columnsOrder={mockColumnsOrder} enableColumnOrder={false}>
        <RoschTable.Header columnNames={{ id: "ID", name: "Name", isActive: "Status" }} />
        <RoschTable.Cell <string> field="name" renderElement={(name) => <span>{name}</span>} />
      </RoschTable>
    );

    const dragEndButton = getByTestId("simulate-drag-n-drop");

    dragEndButton.click();
  
    expect(mockUpdateColumnsOnDrag).not.toHaveBeenCalled();
  });
});