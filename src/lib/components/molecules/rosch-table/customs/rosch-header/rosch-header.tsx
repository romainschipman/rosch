import { FunctionComponent } from "react";
import { TableHeaderStyled } from "./rosch-header.style";
import { useTableContext } from "../../context/table.context";
import { Draggable } from "@hello-pangea/dnd";
import { RoschText } from "../../../../atoms/rosch-text/rosch-text";

/**
 * Interface defining the props for the TableHeader component.
 * 
 * @interface TableHeaderProps
 * @property {Record<string, string>} columnNames - An object mapping column keys to their display names.
*/
export interface RoschTableHeaderProps {
    /**
     * An object mapping column keys to their display names.
     */
    columnNames: Record<string, string>
}

/**
 * Table.Header component represents the header row of a table.
 * It renders the column names in the order specified by the `columnsOrder` from the context.
 * If `enableColumnOrder` is true, columns can be rearranged by dragging.
 * If no `columnsOrder` is specified, it defaults to the keys of `columnNames`.
 * 
 * @param {RoschTableHeaderProps} props - The props for the Table.Header component.
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
 * <TableHeader columnNames={columnNames} />
 */
const RoschTableHeader : FunctionComponent<RoschTableHeaderProps> = ({ columnNames }) => {
    let { columnsOrder, enableColumnOrder } = useTableContext();

    const renderColumnsElements = () => {
        if(!columnsOrder || columnsOrder.length === 0) {
            columnsOrder = Object.keys(columnNames);
        }

        const generateColumnName = (column: string) => {
            if(columnNames[column]) {
                return columnNames[column];
            }
            return column;
        };

        return columnsOrder.map((column, idx) => (
            <Draggable isDragDisabled={!enableColumnOrder} key={`draggable-${column}`} draggableId={column} index={idx}>
                {(provided) => (
                    <th 
                        key={`column-${column}-${idx}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <RoschText id={`column-${column}-${idx}`}>{generateColumnName(column)}</RoschText>
                    </th>
                )}
            </Draggable>
        ));
    };

    return(
        <TableHeaderStyled>
            <tr
            >
                {renderColumnsElements()}
            </tr>
        </TableHeaderStyled>
    );
};

export { RoschTableHeader };