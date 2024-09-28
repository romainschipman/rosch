import { FunctionComponent } from "react";
import { RoschTableRowStyled, RoschTableRowStyledProps } from "./rosch-table-row.style";
import { RoschTableCell } from "../rosch-table-cell/rosch-table-cell";
import { useTableContext } from "../context/table.context";

/**
 * @interface RoschTableRowProps
 * 
 * Props for the `RoschTableRow` component, which renders a row of data in the RoschTable.
 */
export interface RoschTableRowProps extends RoschTableRowStyledProps {
  /**
   * Data for a single row in the table. Each key represents a column, and the corresponding value is displayed in that column.
   */
  row: RowData;
}

/**
 * @interface RowData
 * 
 * Represents the data structure for a row in the RoschTable. Each key corresponds to a column name, and the value is the data to display.
 */
export interface RowData {
  [key: string]: unknown;
}

/**
 * @internal
 * @component
 * 
 * The `RoschTableRow` component renders a table row based on the `row` data provided, mapping the data to the corresponding columns.
 * 
 * @param {RowData} row - The data for the current row to be displayed, where each key is the name of a column.
 * 
 * @returns {ReactElement} A table row populated with cells for each column.
 * 
 * @example
* <RoschTableRow row={{ id: 1, name: "John Doe", status: "Active" }} />
*/

const RoschTableRow : FunctionComponent<RoschTableRowProps> = ({ row }) => {

    const { columnsOrder } = useTableContext();

    const renderColumnsElements = () => {
        return (
            columnsOrder.map((column, index) =>  <RoschTableCell key={`col-${column}-${index}`} name={column} value={row[column] ?? row}  />)
        );
    };

    return (
        <RoschTableRowStyled>
            {renderColumnsElements()}
        </RoschTableRowStyled>
    );
};

export { RoschTableRow };