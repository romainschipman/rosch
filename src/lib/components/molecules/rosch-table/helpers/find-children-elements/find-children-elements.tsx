import { ReactNode, isValidElement } from "react";
import { RoschTable } from "../../rosch-table";

/**
 * Utility function to find specific child elements in a ReactNode or array of ReactNodes.
 * It filters children based on the type provided, either `"CELL"` or `"HEADER"`.
 * 
 * - By default, it searches for `RoschTable.Cell` components.
 * - If `type` is `"HEADER"`, it searches for `RoschTable.Header` components.
 * 
 * @function findChildrenElements
 * @param {ReactNode | ReactNode[]} [children] - The children elements to search within.
 * @param {"CELL" | "HEADER"} [type="CELL"] - The type of component to search for, either `"CELL"` or `"HEADER"`.
 * @returns {ReactNode[]} - An array of found elements matching the provided type.
 * 
 * @example
 * const children = [
 *   <RoschTable.Cell key="cell1" />,
 *   <RoschTable.Header key="header1" />,
 *   <div key="div1" />
 * ];
 * 
 * // Find all Cell components
 * const cells = findChildrenElements(children, "CELL"); // returns [<RoschTable.Cell key="cell1" />]
 * 
 * // Find all Header components
 * const headers = findChildrenElements(children, "HEADER"); // returns [<RoschTable.Header key="header1" />]
 */
const findChildrenElements = (children?: ReactNode | ReactNode[], type: "CELL" | "HEADER" = "CELL") => {
  if(!!children) {
    let childrenComponents = children as ReactNode[];
    let typeComponent : any = RoschTable.Cell;
        
    if(!Array.isArray(childrenComponents)) {
      childrenComponents = [children];
    }

    if(type === "HEADER") {
      typeComponent = RoschTable.Header;
    }
    
    const callbackMatchingCell = (cell : ReactNode) => {
      if(isValidElement(cell) && cell.type === typeComponent) {
        return true;
      }
    };
      
    return childrenComponents.filter(callbackMatchingCell);
  }
  return [];

};


export { findChildrenElements };