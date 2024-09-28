import { render, waitFor } from "@testing-library/react";
import { RoschClock } from "./rosch-clock";


describe("Unit test for RoschClock", () => {
    test("should display correctly the clock", () => {
        const { unmount } = render( <RoschClock id="rosch-clock-test" />);
    
        waitFor(() => {
            unmount();
        });
    });
});