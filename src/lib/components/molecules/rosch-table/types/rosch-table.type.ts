import { FunctionComponent, ReactNode } from "react";
import { RoschTableProps } from "../rosch-table";
import { RoschCellProps } from "../customs/rosch-cell/rosch-cell";
import { RoschTableHeaderProps } from "../customs/rosch-header/rosch-header";

/**
 * The `RoschTableType` interface defines the structure of the `RoschTable` component,
 * which includes static members `Cell` and `Header`.
 * 
 * @interface RoschTableType
 * @extends {FunctionComponent<RoschTableProps>}
 * @template T - The generic type for the table cell data.
*/
export type RoschTableType = FunctionComponent<RoschTableProps> & {
    /**
     * The Cell component represents a single cell within the RoschTable.
     * If the `field` is not found in the data, the entire row data will be passed to `renderElement`.
     * 
     * @template T - Generic type representing the type of the value to be rendered in the cell.
     * @param {TableCellProps<T>} props - The properties for the TableCell component.
     * @returns {JSX.Element} A styled table cell with the content rendered via the renderElement function.
     * 
     * 
     * @example
     *    <RoschTable.Cell <boolean> field="isActive" renderElement={(isActive) => (
     *      isActive ? <span>✔ Active</span> : <span>✘ Inactive</span>
     *    )} />
     * 
     * @example
     * <RoschTable.Cell <Item> field="actions" renderElement={(item) => (
     *    <button onClick={() => handleDelete(item.id)}>Delete {item.id}</button>
     *  )} /> <!-- Custom cell for actions, not linked to a specific field -->
     */
    Cell: <T>(props: RoschCellProps<T>) => ReactNode;
    /**
     * The Header component represents the header row of a table.
     * It renders the column names in the order specified by the `columnsOrder` from the context.
     * If `enableColumnOrder` is true, columns can be rearranged by dragging.
     * If no `columnsOrder` is specified, it defaults to the keys of `columnNames`.
     * 
     * @param {TableHeaderProps} props - The props for the Table.Header component.
     * @returns {JSX.Element} A styled table header with draggable column names.
     * 
     * @example
     * const columnNames = {
     *   id: "ID",
     *   name: "Name",
     *   author: "Author",
     *   isActive: "Status"
     * };
     * 
     * <RoschTable.Header columnNames={columnNames} />
     */
    Header: (props: RoschTableHeaderProps) => ReactNode;
};