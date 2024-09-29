import { FunctionComponent, ReactElement, ReactNode, cloneElement, isValidElement } from "react";
import { useTableContext } from "../context/table.context";
import { RoschCellProps } from "../customs/rosch-cell/rosch-cell";
import { RoschTableCellStyled } from "./rosch-table-cell.style";
import { RoschText } from "../../../atoms/rosch-text/rosch-text";
import { findChildrenElements } from "../helpers/find-children-elements/find-children-elements";


/**
 * @interface RoschTableCellProps
 * 
 * Props for the `RoschTableCell` component.
 * 
 * @version 0.4.0
 * @since 0.4.0
 */
export interface RoschTableCellProps {
  /**
   * The name of the table cell, used to match custom cells in the context.
   */
  name: string;
  /**
   * The value to be displayed in the table cell.
   */
  value: unknown;
}

/**
 * @internal
 * @component
 * 
 * The `RoschTableCell` component renders a table cell within the RoschTable context. It either
 * displays a custom cell based on the context or a default cell with the provided value.
 *
 * @param {string} name - The name of the table cell, used to match custom cells in the context.
 * @param {unknown} value - The value to display in the table cell.
 *
 * @returns {ReactElement} Returns a custom table cell or a default cell if no match is found.
 *
 * @styles
 * - This component uses `RoschTableCellStyled` for default styling.
 * - The text within the cell can be styled using the `RoschText` component, where the font size is configurable (e.g., `fontSize="sm"`).
 * 
 * @example
* <RoschTableCell name="status" value="Active" />
*/
const RoschTableCell : FunctionComponent<RoschTableCellProps> = ({ name, value }) => {
    const { customCells } = useTableContext();

    const customCellsArray = findChildrenElements(customCells, "CELL");
  
    const callbackMatchingCell = (cell : ReactNode) => {
        if(isValidElement(cell) && cell.props.field === name) {
            return true;
        }
    };
  
    const matchingCell = customCellsArray.find(callbackMatchingCell);
  
    if(matchingCell) {
        return cloneElement(matchingCell as ReactElement<RoschCellProps<unknown>>, { value });
    }
  
    return <RoschTableCellStyled>
        <RoschText id={`${name}-row`} fontSize="sm">{value as string}</RoschText>
    </RoschTableCellStyled>;
};

export { RoschTableCell };

