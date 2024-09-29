import { ReactNode } from "react";
import { RoschTableCellStyled, RoschTableCellStyledProps } from "../../rosch-table-cell/rosch-table-cell.style";

/**
 * Represents a customizable cell in the RoschTable component.
 * The field provided via the `field` prop is mandatory. If the `field` is not found in the data,
 * the entire row data will be passed to the `renderElement` function, allowing for custom rendering (e.g., actions like delete).
 *
 * @interface RoschTableCellProps
 * @template T - Generic type representing the type of the value to be rendered in the cell.
 * @property {string} field - The field name representing the data column from the table's data.
 * @property {(element: T) => ReactNode | ReactNode[]} renderElement - A function that renders the content of the cell based on the field value or row data.
 * @property {T} [value] - The value associated with the field, passed to the `renderElement` function.
 */
export interface RoschCellProps<T> extends RoschTableCellStyledProps {
    /**
     *  The field name representing the data column from the table's data.
     */
    field: string
    /**
     * A function that renders the content of the cell based on the field value or row data..
     * @param element The value associated with the field.
     * @returns {ReactNode | ReactNode[]}
     */
    renderElement: (element: T) => (ReactNode | ReactNode[]);
    /**
     * @abstract The value associated with the field, passed to the `renderElement` function.
     */
    value?: T
}

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
const RoschCell = <T,>({ renderElement , value, ...styledProps} : RoschCellProps<T>) => {
    return(
        <RoschTableCellStyled {...styledProps}>
            {renderElement(value as T)}
        </RoschTableCellStyled>
    );
};

export { RoschCell };