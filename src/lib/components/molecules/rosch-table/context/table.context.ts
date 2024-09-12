import { ReactNode, createContext, useContext  } from "react";
import { errorMessages } from "../../../../constants/errors-messages/errors-messages";

/**
 * Interface defining the properties of the Table context.
 * 
 * @interface TableContextProps
 * @property {ReactNode | ReactNode[]} customCells - Custom cells that can be rendered in the table.
 * @property {string[]} columnsOrder - The order of columns to display in the table.
 * @property {boolean} [enableColumnOrder] - Indicates if the user can modify the column order.
*/
interface TableContextProps {
    /**
     * Custom cells that can be rendered in the table.
    */
    customCells: ReactNode | ReactNode[];
    /**
     * The order of columns to display in the table.
    */
    columnsOrder: string[];
    /**
     *  Indicates if the user can modify the column order.
     */
    enableColumnOrder?: boolean;
}


/**
 * Context for the Table component, allowing sharing of information 
 * between child components related to the table (like columns, order, etc.).
*/
const TableContext = createContext<TableContextProps | undefined>(undefined);

/**
 * Custom hook to access the Table context. If the hook is used outside 
 * of the `Table` component, an error is thrown.
 * 
 * @returns {TableContextProps} The table context.
 * @throws {Error} Throws an error if used outside the Table context.
*/
const useTableContext = () => {
  const context = useContext(TableContext);

  if(!context) {
    throw new Error(errorMessages.ROSCH_TABLE_CONTEXT_ERROR);
  }

  return context;
};

export { useTableContext, TableContext };