import { render } from "@testing-library/react";
import { RoschDate } from "./rosch-date";

describe("Unit test for RoschDate Component", () => {
    test("should render correctly", () => {
        const res = render(<RoschDate id="rosch-date" />);

        expect(res).toBeTruthy();
    });
});