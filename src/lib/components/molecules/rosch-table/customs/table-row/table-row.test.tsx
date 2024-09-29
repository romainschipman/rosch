import { render } from "@testing-library/react";
import { TableRow } from "./table-row";

describe("Unit test for TableRow Component", () => {
    test("should render without error", () => {
        const tree = render(<TableRow />);
        expect(tree).toBeTruthy();
    });
});