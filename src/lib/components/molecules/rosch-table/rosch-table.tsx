import { ReactElement, ReactNode, cloneElement, useState } from "react";
import { RoschTableStyled, RoschTableStyledProps } from "./rosch-table.style";
import { TableContext } from "./context/table.context";
import { RoschTableRow, RowData } from "./rosch-table-row/rosch-table-row";
import { RoschCell } from "./customs/rosch-cell/rosch-cell";
import { RoschTableHeader, RoschTableHeaderProps } from "./customs/rosch-header/rosch-header";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import { findChildrenElements } from "./helpers/find-children-elements/find-children-elements";
import { warningMessages } from "../../../constants/warnings-messages/warnings-messages";
import { errorMessages } from "../../../constants/errors-messages/errors-messages";
import { RoschTableType } from "./types/rosch-table.type";
import { updateColumnsOnDrag } from "./helpers/update-columns-on-drag/update-columns-on-drag";

/**
 * @interface RoschTableProps
 * 
 * Props for the `RoschTable` component.
 */
export interface RoschTableProps extends RoschTableStyledProps {
  /**
   * The data to be displayed in the table. Each item in the array represents a row.
   */
  data: RowData[];
  /**
   * Optional children elements, typically including the table header and possibly other components.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the initial order of the columns. If not provided, a default order is used.
   */
  columnsOrder?: string[];
  /**
   * Enables or disables the column reordering feature. Defaults to `false`.
   */
  enableColumnOrder?: boolean;
}

/**
 * RoschTable Component
 * 
 * The `RoschTable` component is a customizable table that supports rendering dynamic data and custom cells.
 * 
 * @param {RoschTableType} props - Table Component props.
 * @returns {JSX.Element} The rendered table component.
 * 
 * @example
* ```tsx
* <RoschTable
*    data={[
*      { id: 1, name: "John Doe", isActive: true },
*      { id: 2, name: "Jane Doe", isActive: false }
*    ]}
*    columnsOrder={['id', 'name', 'isActive']}
*    enableColumnOrder={true}
* >
*    <RoschTable.Header columnNames={['ID', 'Name', 'Status']} />
*    <RoschTable.Cell field="isActive" renderElement={(isActive) => (
*      <StatusIndicator isActive={isActive} />
*    )} />
* </RoschTable>
* ```
*/
const RoschTable: RoschTableType = ({ data, children, columnsOrder = [], enableColumnOrder = false }) => {
    const [columns, setColumns] = useState<string[]>(columnsOrder);

    const handleDragEnd = (result: DropResult) => {
        if(!enableColumnOrder) return;

        const updatedColumns = updateColumnsOnDrag(result, columns);

        setColumns(updatedColumns);
    };

    const renderHeaderElement = () => {
        const childrenComponents = findChildrenElements(children, "HEADER");
        if (childrenComponents.length !== 1) {
            if (childrenComponents.length === 0) {
                console.warn(warningMessages.ROSCH_TABLE_MISSING_HEADER_WARNING);
            }
            if (childrenComponents.length > 1) {
                throw new Error(errorMessages.ROSCH_TABLE_MULTIPLE_HEADERS_ERROR);
            }
        } else {
            const headerElement = childrenComponents[0];
            return cloneElement(headerElement as ReactElement<RoschTableHeaderProps>);
        }
    };

    const renderRowElements = () => {
        return data.map((row, index) => <RoschTableRow key={`row-${index}`} row={row} />);
    };

    return (
        <TableContext.Provider value={{ customCells: children, columnsOrder: columns, enableColumnOrder }}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="columns" direction="horizontal">
                    {(provided) => (
                        <RoschTableStyled ref={provided.innerRef} {...provided.droppableProps}>
                            {renderHeaderElement()}
                            <tbody>
                                {renderRowElements()}
                            </tbody>
                            {provided.placeholder}
                        </RoschTableStyled>
                    )}
                </Droppable>
            </DragDropContext>
        </TableContext.Provider>
    );
};

RoschTable.Cell = RoschCell;

RoschTable.Header = RoschTableHeader;

export { RoschTable };