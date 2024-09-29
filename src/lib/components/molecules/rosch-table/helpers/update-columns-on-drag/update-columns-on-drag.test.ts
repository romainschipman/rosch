import { DropResult } from "@hello-pangea/dnd";
import { updateColumnsOnDrag } from "./update-columns-on-drag";


const columns = ["1", "2", "3", "4"];
describe("Unit test for updateColumnsOnDrag", () => {
    test("should return the same columns when the result is empty", () => {
        const updatedColumn = updateColumnsOnDrag({ } as DropResult, columns);
        expect(updatedColumn).toEqual(columns);
    });

    test("should return the same columns when the source and destination indexes are the same", () => {
        const result = {
            destination: { index : 1 },
            source: { index : 1 }
        };
        const updatedColumn = updateColumnsOnDrag(result as DropResult, columns);
        expect(updatedColumn).toEqual(columns);
    });
    test("should reorder columns when the source and destination indexes are different", () => {
        const result = {
            destination: { index : 1 },
            source: { index : 3 }
        };
        const expectedResult = ["1", "4", "2", "3"];

        const updatedColumn = updateColumnsOnDrag(result as DropResult, columns);
        expect(updatedColumn).toEqual(expectedResult);
    });
});