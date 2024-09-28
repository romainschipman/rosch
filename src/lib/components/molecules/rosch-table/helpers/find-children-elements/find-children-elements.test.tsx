import { findChildrenElements } from "./find-children-elements";
import { RoschTable } from "../../rosch-table";

describe("Unit test for findChildrenElements", () => {
    test("should return an empty array when no children are provided", () => {
        const result = findChildrenElements(undefined, "CELL");
        expect(result).toEqual([]);
    });

    test("should find and return RoschTable.Cell components", () => {
        const children = [
            <RoschTable.Cell key="cell1" field="test" renderElement={() => <div>test</div>} />,
            <div key="div1">Non-cell component</div>,
            <RoschTable.Cell key="cell2" field="test2" renderElement={() => <div>test2</div>}/>
        ];

        const result = findChildrenElements(children, "CELL");

        expect(result.length).toBe(2); // Two RoschTable.Cell components should be found
        expect((result[0] as any).type).toBe(RoschTable.Cell);
        expect((result[1] as any).type).toBe(RoschTable.Cell);
    });

    test("should find and return RoschTable.Header components", () => {
        const children = [
            <RoschTable.Header key="header1" columnNames={{}} />,
            <RoschTable.Cell key="cell1" field="test" renderElement={() => <div>test</div>} />,
            <RoschTable.Header key="header2" columnNames={{}} />,
        ];

        const result = findChildrenElements(children, "HEADER");

        expect(result.length).toBe(2);
        expect((result[0] as any).type).toBe(RoschTable.Header);
        expect((result[1] as any).type).toBe(RoschTable.Header);
    });

    test("should handle a single child element", () => {
        const child = <RoschTable.Cell key="cell1" field="test" renderElement={() => <div>test</div>} /> as any;

        const result = findChildrenElements(child);

        expect(result.length).toBe(1); // The single RoschTable.Cell should be found
        expect((result[0] as any).type).toBe(RoschTable.Cell);
    });

    test("should return an empty array if no matching components are found", () => {
        const children = <>
            <div key="div1">Non-cell component</div>,
            <span key="span1">Another non-cell component</span>,
        </> as any;

        const result = findChildrenElements(children, "CELL");

        expect(result).toEqual([]); // No matching components should be found
    });
});
